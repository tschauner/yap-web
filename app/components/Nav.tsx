"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/[0.06]"
    >
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/appIcon.png"
            alt="Yap"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-sm font-semibold text-white">Yap</span>
        </Link>

        {isHome && (
          <div className="hidden md:flex items-center gap-8">
            <a href="#team" onClick={(e) => { e.preventDefault(); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-semibold text-white hover:text-white/70 transition-colors">The Team</a>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-semibold text-white hover:text-white/70 transition-colors">How it Works</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-semibold text-white hover:text-white/70 transition-colors">FAQ</a>
          </div>
        )}

        <a
          href="#waitlist"
          onClick={(e) => { e.preventDefault(); document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="text-sm font-semibold px-5 py-2 rounded-full bg-white text-[#0a0a0a] hover:opacity-85 transition-opacity"
        >
          Get Notified
        </a>
      </div>
    </motion.nav>
  );
}
