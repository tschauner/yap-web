"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WaitlistForm from "./WaitlistForm";

export default function DownloadCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="waitlist" className="bg-[#0a0a0a] py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-[600px] mx-auto flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-1px] text-white mb-3">
            Coming soon.
          </h2>
          <p className="text-[#777] text-base">
            Drop your email and we&apos;ll let you know when Yap is ready.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full flex justify-center"
        >
          <WaitlistForm buttonLabel="Notify Me" dark={true} className="max-w-[360px]" />
        </motion.div>
      </div>
    </section>
  );
}
