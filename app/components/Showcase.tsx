"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="bg-[#0a0a0a] py-6 px-5 scroll-mt-20" ref={ref}>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left — Fake Review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#007AFF] rounded-[28px] p-10 md:p-12 flex flex-col justify-center items-start min-h-[480px]"
        >
          <div>
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">⭐</span>
              ))}
            </div>

            {/* Review quote */}
            <p className="text-[28px] md:text-[36px] font-bold leading-[1.15] tracking-[-0.5px] text-white">
              &ldquo;My Mom agent is scarier than my actual mom.{" "}
              I cleaned my entire apartment in 20 minutes.&rdquo;
            </p>
          </div>

          {/* Username */}
          <p className="text-white/60 text-sm font-medium mt-8">
            procrastinator_supreme
          </p>
        </motion.div>

        {/* Right — Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[28px] p-10 md:p-12 flex flex-col min-h-[480px] overflow-hidden"
        >
          {/* Headline */}
          <h3 className="text-[28px] md:text-[36px] font-bold leading-[1.1] tracking-[-0.5px] text-[#0a0a0a] mb-10">
            Pick an agent.<br />
            Set a mission.<br />
            Get nagged.
          </h3>

          {/* Notifications image */}
          <div className="flex-1 flex items-end justify-center -mb-12 -mx-4">
            <Image
              src="/notifications.png"
              alt="Yap notifications"
              width={800}
              height={600}
              className="w-full h-auto rounded-t-[16px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
