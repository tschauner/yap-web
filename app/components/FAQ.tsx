"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "What is Yap?",
    a: "Yap uses AI agents with unique personalities to motivate you to finish tasks. Pick an agent, describe your mission, set a deadline, and get yapped at until it's done.",
  },
  {
    q: "How does the free plan work?",
    a: "You get 6 agents for free - Mom, Best Friend, Boss, Drill Sergeant, Therapist, and Grandma - with 1 mission per day. AI-powered messages and the leaderboard are included for everyone.",
  },
  {
    q: "What does Pro unlock?",
    a: "Pro unlocks 6 special agents, unlimited daily missions, a custom deadline per mission, deadline extension, and a Custom Roast in Settings.",
  },
  {
    q: "What are special agents?",
    a: "Ex, Conspiracy Theorist, Passive-Aggressive Colleague, Chef, Disappointed Dad, and Gym Bro. They remember your past failures and bring them up when you least want to hear it.",
  },
  {
    q: "What happens when I miss a deadline?",
    a: "The mission counts as failed and affects your stats. Your agent won't be happy about it either.",
  },
  {
    q: "Can I extend a deadline?",
    a: "Pro users can extend a deadline once per mission.",
  },
  {
    q: "Will I get notifications at night?",
    a: "By default, Quiet Hours are active between 22:00 and 8:00 - no notifications during that window. You can change the hours or turn them off entirely in Settings.",
  },
  {
    q: "How do agents differ?",
    a: "Each agent has a unique personality and communication style - from Mom's guilt trips to Drill Sergeant's tough love. Special agents even remember your past missions.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#0a0a0a] py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-[800px] mx-auto">
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="border-b border-white/15"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
              >
                <span className="text-xl md:text-[34px] font-medium text-white pr-6 leading-tight">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-white/50 text-2xl md:text-3xl flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-base md:text-lg text-white/50 leading-relaxed pb-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
