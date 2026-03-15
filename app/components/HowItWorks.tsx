"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Set your mission",
    desc: "What are you avoiding? Type it in. Be honest.",
  },
  {
    number: "02",
    title: "Pick your agent",
    desc: "Choose who nags you. Mom? Drill Sergeant? Your therapist?",
  },
  {
    number: "03",
    title: "Get it done",
    desc: "Your agent won\u2019t stop. Notifications escalate until you finish — or give up.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how" className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#666] bg-white rounded-full shadow-sm border border-black/[0.06]">
            How it works
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-5xl font-semibold tracking-[-1px] text-center mb-14"
        >
          It&apos;s embarrassingly easy
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-[#fafafa] rounded-2xl p-8 text-center"
            >
              <span className="text-sm font-bold text-[#bbb] tracking-wide mb-4 block">{step.number}</span>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-[15px] text-[#888] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
