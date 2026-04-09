import { NextRequest, NextResponse } from "next/server";
import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";
import { existsSync } from "fs";

// Vercel serverless: max 60s, 1024MB
export const maxDuration = 30;

// Remote chromium pack for Vercel (matches @sparticuz/chromium-min@143)
const CHROMIUM_PACK =
  "https://github.com/Sparticuz/chromium/releases/download/v143.0.4/chromium-v143.0.4-pack.x64.tar";

// Local Chrome paths by OS
const LOCAL_CHROME_PATHS = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
];

async function getExecPath(): Promise<string> {
  // Local dev: use installed Chrome
  for (const p of LOCAL_CHROME_PATHS) {
    if (existsSync(p)) return p;
  }
  // Production (Vercel): download chromium from CDN
  return await chromium.executablePath(CHROMIUM_PACK);
}

function isVercel(): boolean {
  return !!process.env.VERCEL;
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  // Build the /push URL with mode=api + all forwarded params
  const params = new URLSearchParams();
  params.set("mode", "api");

  for (const key of ["title", "body", "time", "color", "size", "type", "stack", "avatar", "icon"]) {
    const val = searchParams.get(key);
    if (val) params.set(key, val);
  }

  // Determine output size and viewport
  const sizeMap: Record<string, { w: number; h: number }> = {
    twitter: { w: 1200, h: 675 },
    linkedin: { w: 1200, h: 627 },
    instagram: { w: 1080, h: 1080 },
    reddit: { w: 1200, h: 628 },
  };
  const sizeKey = (searchParams.get("size") ?? "twitter").toLowerCase();
  const size = sizeMap[sizeKey] ?? sizeMap.twitter;

  // Render at 680px-wide viewport (matches interactive preview layout)
  // and use deviceScaleFactor to produce the full-resolution output
  const PREVIEW_MAX_W = 680;
  const viewScale = Math.min(PREVIEW_MAX_W / size.w, 1);
  const viewW = Math.round(size.w * viewScale);
  const viewH = Math.round(size.h * viewScale);
  const dpr = size.w / viewW;  // e.g. 1200/680 ≈ 1.76

  // Resolve base URL — MUST use the production domain, not VERCEL_URL
  // (deployment-specific URLs are behind Vercel Deployment Protection → 401)
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ??
    req.nextUrl.origin;

  const pageUrl = `${baseUrl}/push?${params.toString()}`;

  let browser;
  try {
    const execPath = await getExecPath();

    browser = await puppeteer.launch({
      args: isVercel() ? chromium.args : ["--no-sandbox", "--disable-setuid-sandbox"],
      defaultViewport: { width: viewW, height: viewH, deviceScaleFactor: dpr },
      executablePath: execPath,
      headless: true,
    });

    const page = await browser.newPage();

    // Capture browser console + errors for debugging
    const logs: string[] = [];
    page.on("console", (msg) => logs.push(`[${msg.type()}] ${msg.text()}`));
    page.on("pageerror", (err) => logs.push(`[PAGE_ERROR] ${String(err)}`));

    console.log("[push-api] Navigating to:", pageUrl);
    await page.goto(pageUrl, { waitUntil: "networkidle0", timeout: 15000 });

    // Wait for React to hydrate and set data-ready="true"
    let hydrated = false;
    try {
      await page.waitForSelector('[data-ready="true"]', { timeout: 8000 });
      hydrated = true;
    } catch (_e) {
      console.warn("[push-api] data-ready timeout — proceeding anyway");
      try {
        const html = await page.evaluate(() => document.documentElement.outerHTML.slice(0, 2000));
        console.warn("[push-api] Page HTML:", html);
        logs.push(`[DEBUG_HTML] ${html}`);
      } catch (_e2) {
        logs.push("[DEBUG] Could not evaluate page HTML");
      }
    }

    // Even if hydration signal missed, check if #capture exists
    const el = await page.$("#capture");
    if (!el) {
      // If no #capture, the page didn't render — return debug info
      let html = "";
      try {
        html = await page.evaluate(() => document.documentElement.outerHTML.slice(0, 3000));
      } catch (_e3) {
        html = "(could not read page HTML)";
      }
      return NextResponse.json(
        {
          error: "Capture element not found (React may not have hydrated)",
          hydrated,
          pageUrl,
          logs,
          html,
        },
        { status: 500 }
      );
    }

    // Extra delay for fonts/images to settle
    await new Promise((r) => setTimeout(r, hydrated ? 500 : 2000));

    const png = await el.screenshot({ type: "png" });

    return new NextResponse(Buffer.from(png), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (err) {
    console.error("Screenshot failed:", err);
    return NextResponse.json(
      { error: "Screenshot failed", detail: String(err) },
      { status: 500 }
    );
  } finally {
    if (browser) await browser.close();
  }
}
