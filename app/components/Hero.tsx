"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 min-h-screen overflow-hidden bg-[#0a0a0a]">

      {/* Bubble Grid — PNG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: -30 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-8 w-[70vw] max-w-[1000px]"
      >
        <Image
          src="/grid.png"
          alt="Yap Agents"
          width={1200}
          height={600}
          priority
          className="w-full h-auto"
        />
      </motion.div>

      {/* Headline + Subline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 text-center max-w-[600px] mb-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-[-1.5px] mb-4 text-white">
          The motivation app<br />that won&apos;t shut up.
        </h1>

        <p className="text-base md:text-lg text-[#777] max-w-[440px] mx-auto whitespace-nowrap">
          Pick an agent. Set a mission. Get nagged until it&apos;s done.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.a
        href="#download"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="relative z-10 inline-block text-sm font-semibold px-8 py-3.5 rounded-full bg-white text-[#0a0a0a] mb-16"
      >
        Download for iOS
      </motion.a>
    </section>
  );
}
