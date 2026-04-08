import { NextRequest, NextResponse } from "next/server";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { existsSync } from "fs";

// Vercel serverless: max 60s, 1024MB
export const maxDuration = 30;

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
  // Production (Vercel): use sparticuz chromium
  const p = await chromium.executablePath();
  if (p) return p;
  throw new Error("No Chrome/Chromium found");
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

  // Resolve base URL
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

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
    await page.goto(pageUrl, { waitUntil: "networkidle0", timeout: 15000 });

    // Wait for React to hydrate
    await page.waitForSelector('[data-ready="true"]', { timeout: 10000 });
    // Small extra delay for fonts/images to settle
    await new Promise((r) => setTimeout(r, 500));

    // Screenshot just the capture element
    const el = await page.$("#capture");
    if (!el) {
      return NextResponse.json({ error: "Capture element not found" }, { status: 500 });
    }

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
