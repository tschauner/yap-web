"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { feature: "Reminds you to do things", yap: true, todo: true },
  { feature: "Actually makes you do them", yap: true, todo: false },
  { feature: "Escalates when you ignore it", yap: true, todo: false },
  { feature: "Guilt trips you personally", yap: true, todo: false },
  { feature: "Multiple agent personalities", yap: true, todo: false },
  { feature: "Remembers your excuses", yap: true, todo: false },
  { feature: "Silent, passive judgment", yap: false, todo: true },
  { feature: "Makes you feel productive without doing anything", yap: false, todo: true },
];

export default function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28 px-5" ref={ref}>
      <div className="max-w-[800px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-[-1.5px] text-white text-center mb-16"
        >
          Yap vs. your to-do app
        </motion.h2>

        <div>
          {/* Header */}
          <div className="grid grid-cols-[1fr_80px_80px] items-center px-2 pb-4 border-b border-white/15">
            <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">Feature</span>
            <span className="text-xs font-bold text-center uppercase tracking-wider text-white">Yap</span>
            <span className="text-xs text-white/40 text-center uppercase tracking-wider font-semibold">To-Do</span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
              className={`grid grid-cols-[1fr_80px_80px] items-center px-2 py-4 ${
                i < rows.length - 1 ? "border-b border-white/15" : ""
              }`}
            >
              <span className="text-[15px] text-white/60">{row.feature}</span>
              <span className="text-center text-lg">
                {row.yap ? (
                  <span className="text-green-400">✓</span>
                ) : (
                  <span className="text-white/20">—</span>
                )}
              </span>
              <span className="text-center text-lg">
                {row.todo ? (
                  <span className="text-green-400">✓</span>
                ) : (
                  <span className="text-white/20">—</span>
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
