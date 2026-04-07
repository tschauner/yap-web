"use client";

import { useState, useRef, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { toPng } from "html-to-image";

// ─── Size presets ───────────────────────────────────────────────────────────────

const SIZE_PRESETS = [
  {
    name: "Twitter", w: 1200, h: 675,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    ),
  },
  {
    name: "LinkedIn", w: 1200, h: 627,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
  },
  {
    name: "Instagram", w: 1080, h: 1080,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
  },
  {
    name: "Reddit", w: 1200, h: 628,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
    ),
  },
];

const SIZE_MAP: Record<string, number> = {
  twitter: 0, linkedin: 1, instagram: 2, reddit: 3,
};

// ─── Auto-gradient from a single color ──────────────────────────────────────────

function hexToHSL(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function autoGradient(hex: string): string {
  const [h, s, l] = hexToHSL(hex);
  const h2 = (h + 30) % 360;
  const h3 = (h + 60) % 360;
  return `linear-gradient(135deg, hsl(${h},${s}%,${l}%) 0%, hsl(${h2},${Math.min(s + 10, 100)}%,${Math.max(l - 5, 10)}%) 50%, hsl(${h3},${s}%,${Math.max(l - 10, 10)}%) 100%)`;
}

// ─── Background presets (base colors → auto gradient) ───────────────────────────

const COLOR_PRESETS = [
  "#8B5CF6", "#3B82F6", "#EC4899", "#0D9488",
  "#F97316", "#EF4444", "#10B981", "#6366F1",
  "#0a0a0a", "#FBBF24",
];

// ─── Editable (contentEditable inline) ──────────────────────────────────────────

function Editable({
  value,
  onChange,
  className,
  tag = "span",
  style,
}: {
  value: string;
  onChange: (v: string) => void;
  className?: string;
  tag?: "span" | "p";
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const Tag = tag;

  const handleBlur = () => {
    if (ref.current) {
      const text = ref.current.innerText;
      if (text !== value) onChange(text);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      ref.current?.blur();
    }
  };

  return (
    <Tag
      ref={ref as any}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      style={style}
      className={`outline-none cursor-text rounded-sm px-0.5 -mx-0.5 transition-shadow hover:ring-1 hover:ring-white/20 focus:ring-1 focus:ring-white/40 ${className ?? ""}`}
    >
      {value}
    </Tag>
  );
}

// ─── Static text (for API mode — no contentEditable) ────────────────────────────

function StaticText({
  value,
  className,
  tag = "span",
  style,
}: {
  value: string;
  className?: string;
  tag?: "span" | "p";
  style?: React.CSSProperties;
}) {
  const Tag = tag;
  return (
    <Tag style={style} className={className ?? ""}>
      {value}
    </Tag>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────────

export default function PushPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
      <PushGenerator />
    </Suspense>
  );
}

function PushGenerator() {
  const searchParams = useSearchParams();

  // API mode: render only the image, no toolbar, no padding
  const isApiMode = searchParams.get("mode") === "api";

  // Read query params with defaults
  const qTitle = searchParams.get("title");
  const qBody = searchParams.get("body");
  const qTime = searchParams.get("time");
  const qColor = searchParams.get("color");
  const qSize = searchParams.get("size");
  const qType = searchParams.get("type");
  const qStack = searchParams.get("stack");
  const qAvatar = searchParams.get("avatar");
  const qIcon = searchParams.get("icon");

  const [title, setTitle] = useState(qTitle ?? "Mom");
  const [body, setBody] = useState(
    qBody ?? "36 HOURS of labor... no epidural... and you can't even pick up a sponge... xo Mom"
  );
  const [timeAgo, setTimeAgo] = useState(qTime ?? "now");

  const initialColor = qColor ? (qColor.startsWith("#") ? qColor : `#${qColor}`) : COLOR_PRESETS[0];
  const initialSizeIdx = qSize ? (SIZE_MAP[qSize.toLowerCase()] ?? 0) : 0;
  const initialType = qType === "local" ? "local" as const : "remote" as const;
  const initialStack = qStack === "true" || qStack === "1";

  const [avatarUrl, setAvatarUrl] = useState<string | null>(qAvatar ?? "/agents/mom.png");
  const [appIconUrl, setAppIconUrl] = useState<string | null>(qIcon ?? "/appIcon.png");
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const appIconInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatarUrl(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleAppIconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAppIconUrl(reader.result as string);
    reader.readAsDataURL(file);
  };

  const [bg, setBg] = useState(autoGradient(initialColor));
  const [activeColor, setActiveColor] = useState(initialColor);
  const [sizeIdx, setSizeIdx] = useState(initialSizeIdx);
  const [pushStyle, setPushStyle] = useState<"remote" | "local">(initialType);
  const [stacked, setStacked] = useState(initialStack);

  // Floating bar popover states
  const [openPanel, setOpenPanel] = useState<"color" | "size" | null>(null);

  const pickColor = (hex: string) => {
    setActiveColor(hex);
    setBg(autoGradient(hex));
  };

  const captureRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const size = SIZE_PRESETS[sizeIdx];

  // In API mode, render at full resolution (1:1). In interactive mode, scale down to 680px max.
  const displayScale = isApiMode ? 1 : Math.min(680 / size.w, 1);

  // Signal to Puppeteer that we're ready
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  const handleDownload = useCallback(async () => {
    if (!captureRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await toPng(captureRef.current, {
        pixelRatio: size.w / (size.w * displayScale),
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `push-${size.name.toLowerCase()}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setIsExporting(false);
    }
  }, [size, displayScale]);

  const handleCopy = useCallback(async () => {
    if (!captureRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await toPng(captureRef.current, {
        pixelRatio: size.w / (size.w * displayScale),
        cacheBust: true,
      });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
    } catch (err) {
      console.error("Copy failed:", err);
    } finally {
      setIsExporting(false);
    }
  }, [size, displayScale]);

  const isRemote = pushStyle === "remote";

  // Choose text component based on mode
  const Text = isApiMode ? StaticText : Editable;

  return (
    <div
      className={isApiMode ? "" : "min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 py-10 selection:bg-white/20"}
      data-ready={ready}
    >
      {/* ─── The Image ─────────────────────────────────────── */}
      <div
        ref={captureRef}
        id="capture"
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          background: bg,
          width: size.w * displayScale,
          height: size.h * displayScale,
          borderRadius: isApiMode ? 0 : 16,
          fontFamily: '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, system-ui, "Helvetica Neue", sans-serif',
        }}
      >
        {/* Hidden file inputs */}
        {!isApiMode && (
          <>
            <input ref={avatarInputRef} type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
            <input ref={appIconInputRef} type="file" accept="image/*" onChange={handleAppIconUpload} className="hidden" />
          </>
        )}

        {/* Stack wrapper — holds ghost layers + main notification */}
        <div className="relative w-[85%] max-w-[560px]" style={{ marginBottom: stacked ? 16 : 0 }}>
          {/* Ghost layers (behind, only when stacked) */}
          {stacked && (
            <>
              {/* Ghost 1 — closer behind */}
              <div
                className="absolute inset-x-0 bottom-0 rounded-[28px] h-full"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(60px)",
                  WebkitBackdropFilter: "blur(60px)",
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  transform: "scale(0.95) translateY(14px)",
                  transformOrigin: "top center",
                  opacity: 0.6,
                }}
              />
              {/* Ghost 2 — furthest back */}
              <div
                className="absolute inset-x-0 bottom-0 rounded-[28px] h-full"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(60px)",
                  WebkitBackdropFilter: "blur(60px)",
                  border: "0.5px solid rgba(255,255,255,0.06)",
                  transform: "scale(0.90) translateY(28px)",
                  transformOrigin: "top center",
                  opacity: 0.4,
                }}
              />
            </>
          )}

          {/* Main notification bubble */}
          {isRemote ? (
            /* ── Remote Push: large round avatar + small app icon badge bottom-right ── */
            <div
              className="relative rounded-[28px] px-4 py-3.5 flex gap-3.5 items-center"
              style={{
                background: "rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(60px)",
                WebkitBackdropFilter: "blur(60px)",
                boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.12)",
                border: "0.5px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Avatar with app icon badge */}
              <div className="relative flex-shrink-0">
                {/* Large round avatar (sender) */}
                {isApiMode ? (
                  <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center overflow-hidden bg-white/10">
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => avatarInputRef.current?.click()}
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80 transition bg-white/10"
                  >
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                    )}
                  </button>
                )}
                {/* Small app icon badge — bottom right */}
                {isApiMode ? (
                  <div
                    className="absolute -bottom-1 -right-1 w-[22px] h-[22px] rounded-[7px] flex items-center justify-center overflow-hidden bg-white/15"
                    style={{ boxShadow: "inset 1px 1px 1px rgba(255,255,255,0.35), inset -0.5px -0.5px 1px rgba(0,0,0,0.15)" }}
                  >
                    {appIconUrl ? (
                      <img src={appIconUrl} alt="app" className="w-full h-full object-cover" />
                    ) : (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => appIconInputRef.current?.click()}
                    className="absolute -bottom-1 -right-1 w-[22px] h-[22px] rounded-[7px] flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80 transition bg-white/15"
                    style={{ boxShadow: "inset 1px 1px 1px rgba(255,255,255,0.35), inset -0.5px -0.5px 1px rgba(0,0,0,0.15)" }}
                  >
                    {appIconUrl ? (
                      <img src={appIconUrl} alt="app" className="w-full h-full object-cover" />
                    ) : (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                    )}
                  </button>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3">
                  <Text
                    value={title}
                    onChange={setTitle}
                    className="text-[17px] text-white leading-snug"
                    style={{ fontWeight: 600 }}
                  />
                  <Text
                    value={timeAgo}
                    onChange={setTimeAgo}
                    className="text-[17px] flex-shrink-0"
                    style={{ color: "rgba(255,255,255,0.48)", mixBlendMode: "plus-lighter" } as React.CSSProperties}
                  />
                </div>
                <Text
                  value={body}
                  onChange={setBody}
                  tag="p"
                  className="text-[17px] text-white/85 leading-snug block"
                  style={{ fontWeight: 400 }}
                />
              </div>
            </div>
          ) : (
            /* ── Local Push: only the app icon ── */
            <div
              className="relative rounded-[28px] px-4 py-3.5 flex gap-3.5 items-center"
              style={{
                background: "rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(60px)",
                WebkitBackdropFilter: "blur(60px)",
                boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.12)",
                border: "0.5px solid rgba(255,255,255,0.12)",
              }}
            >
              {isApiMode ? (
                <div
                  className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center flex-shrink-0 overflow-hidden bg-white/10"
                  style={{ boxShadow: "inset 1.5px 1.5px 2px rgba(255,255,255,0.35), inset -1px -1px 2px rgba(0,0,0,0.15)" }}
                >
                  {appIconUrl ? (
                    <img src={appIconUrl} alt="app" className="w-full h-full object-cover" />
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => appIconInputRef.current?.click()}
                  className="w-[50px] h-[50px] rounded-[15px] flex items-center justify-center flex-shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition bg-white/10"
                  style={{ boxShadow: "inset 1.5px 1.5px 2px rgba(255,255,255,0.35), inset -1px -1px 2px rgba(0,0,0,0.15)" }}
                >
                  {appIconUrl ? (
                    <img src={appIconUrl} alt="app" className="w-full h-full object-cover" />
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                  )}
                </button>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3">
                  <Text
                    value={title}
                    onChange={setTitle}
                    className="text-[17px] text-white leading-snug"
                    style={{ fontWeight: 600 }}
                  />
                  <Text
                    value={timeAgo}
                    onChange={setTimeAgo}
                    className="text-[17px] flex-shrink-0"
                    style={{ color: "rgba(255,255,255,0.48)", mixBlendMode: "plus-lighter" } as React.CSSProperties}
                  />
                </div>
                <Text
                  value={body}
                  onChange={setBody}
                  tag="p"
                  className="text-[17px] text-white/85 leading-snug block"
                  style={{ fontWeight: 400 }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─── Floating Toolbar (hidden in API mode) ─────────── */}
      {!isApiMode && (
        <div className="mt-6 relative flex items-center gap-1 px-2 py-2 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

          {/* Copy */}
          <button
            onClick={handleCopy}
            disabled={isExporting}
            title="Copy"
            className="p-2.5 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-all disabled:opacity-40"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            disabled={isExporting}
            title="Download"
            className="p-2.5 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-all disabled:opacity-40"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 mx-1" />

          {/* Color picker */}
          <div className="relative">
            <button
              onClick={() => setOpenPanel(openPanel === "color" ? null : "color")}
              title="Color"
              className={`p-2.5 rounded-xl transition-all flex items-center gap-2 ${openPanel === "color" ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/10"}`}
            >
              <div className="w-[18px] h-[18px] rounded-full border border-white/20" style={{ background: activeColor }} />
            </button>
            {openPanel === "color" && (
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-[0_12px_40px_rgba(0,0,0,0.5)] min-w-[200px]">
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {COLOR_PRESETS.map((c) => (
                    <button
                      key={c}
                      onClick={() => pickColor(c)}
                      className={`w-8 h-8 rounded-full transition-all ${activeColor === c ? "ring-2 ring-white ring-offset-2 ring-offset-[#1a1a1a] scale-110" : "hover:scale-110"}`}
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <label className="relative flex-1 h-8 rounded-lg overflow-hidden cursor-pointer bg-white/5 border border-white/10 flex items-center justify-center text-[11px] text-white/40 hover:bg-white/10 transition">
                    Custom
                    <input
                      type="color"
                      value={activeColor}
                      onChange={(e) => pickColor(e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 mx-1" />

          {/* Type toggle */}
          <button
            onClick={() => setPushStyle(pushStyle === "remote" ? "local" : "remote")}
            title={pushStyle === "remote" ? "Remote Push" : "Local Push"}
            className="p-2.5 rounded-xl text-white/50 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
          >
            {pushStyle === "remote" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
            )}
            <span className="text-[11px] font-medium uppercase tracking-wider">{pushStyle === "remote" ? "Remote" : "Local"}</span>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 mx-1" />

          {/* Stack toggle */}
          <button
            onClick={() => setStacked(!stacked)}
            title={stacked ? "Single" : "Stacked"}
            className={`p-2.5 rounded-xl transition-all flex items-center gap-1.5 ${stacked ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/10"}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <span className="text-[11px] font-medium">Stack</span>
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 mx-1" />

          {/* Size selector */}
          <div className="relative">
            <button
              onClick={() => setOpenPanel(openPanel === "size" ? null : "size")}
              title="Size"
              className={`p-2.5 rounded-xl transition-all flex items-center gap-1.5 ${openPanel === "size" ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/10"}`}
            >
              {SIZE_PRESETS[sizeIdx].icon}
              <span className="text-[11px] font-medium">{SIZE_PRESETS[sizeIdx].name}</span>
            </button>
            {openPanel === "size" && (
              <div className="absolute bottom-full mb-3 right-0 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-[0_12px_40px_rgba(0,0,0,0.5)] min-w-[160px]">
                {SIZE_PRESETS.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => { setSizeIdx(i); setOpenPanel(null); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${
                      sizeIdx === i ? "bg-white/10 text-white" : "text-white/50 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className={sizeIdx === i ? "text-white" : "text-white/40"}>{s.icon}</span>
                    <div>
                      <div className="text-[12px] font-medium">{s.name}</div>
                      <div className="text-[10px] text-white/30">{s.w}×{s.h}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

      {/* Click-away to close panels */}
      {!isApiMode && openPanel && (
        <div className="fixed inset-0 z-[-1]" onClick={() => setOpenPanel(null)} />
      )}
    </div>
  );
}
