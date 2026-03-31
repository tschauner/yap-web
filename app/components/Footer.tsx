import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/appIcon.png"
                alt="Yap"
                width={36}
                height={36}
                className="w-9 h-9 rounded-xl"
              />
            </Link>
            <p className="text-sm text-[#888] leading-relaxed max-w-[220px]">
              AI agents that nag you into getting things done.
            </p>
          </div>

          {/* The App */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white mb-1">
              The App
            </span>
            <a
              href="https://apps.apple.com/app/id6761190023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              Download
            </a>
            <a
              href="https://discord.gg/eK6hUZKs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              Feedback
            </a>
            <a
              href="mailto:support@yap.fail"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              Support
            </a>
          </div>

          {/* The Boring */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white mb-1">
              The Boring
            </span>
            <Link
              href="/terms"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              Legal
            </Link>
          </div>

          {/* The Cool */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white mb-1">
              The Cool
            </span>
            <a
              href="https://x.com/yapAgency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              X / Twitter
            </a>
            <Link
              href="/presskit"
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              Press Kit
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#555]">
            © {new Date().getFullYear()} Yap. All rights reserved.
          </span>
          <span className="text-xs text-[#555]">
            Made with love in Berlin
          </span>
        </div>
      </div>
    </footer>
  );
}
