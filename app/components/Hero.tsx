"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start pt-20 md:pt-0 md:justify-center px-6 min-h-screen overflow-hidden bg-[#0a0a0a]">

      {/* Bubble Grid — PNG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: -30 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-8 w-screen md:w-[70vw] max-w-[1000px] -mx-6 md:mx-0"
      >
        <Image
          src="/grid.png"
          alt="Yap Agents"
          width={1200}
          height={600}
          priority
          className="hidden md:block w-full h-auto"
        />
        <Image
          src="/grid_small.png"
          alt="Yap Agents"
          width={600}
          height={400}
          priority
          className="md:hidden w-full h-auto"
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
          12 AI agents.<br />1 mission. 0 mercy.
        </h1>

        <p className="text-base md:text-lg text-[#777] max-w-[500px] mx-auto">
          Your mom, your ex, and 10 more vs. your to-do list.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.a
        href="https://apps.apple.com/app/id6761190023"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="relative z-10 mb-16"
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
          className="h-[54px] w-auto"
        />
      </motion.a>
    </section>
  );
}
