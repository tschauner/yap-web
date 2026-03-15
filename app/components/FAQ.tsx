"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "What is Yap?",
    a: "Yap uses AI agents with unique personalities to motivate you to finish tasks. Pick an agent, describe your mission, set a deadline, and get nagged until you're done.",
  },
  {
    q: "How does the free plan work?",
    a: "You get all 6 base agents with 1 mission per day. AI-powered messages, the leaderboard, and quiet hours are included for everyone.",
  },
  {
    q: "What does Pro unlock?",
    a: "Pro is a one-time lifetime purchase. You get unlimited daily missions, the Chaos Pack (The Ex, The Theorist, The Colleague), Agent Memory, Custom Roast, custom deadlines, and the ability to extend deadlines by 24 hours. The Legends Pack (Gordon Ramsay, Disappointed Dad, Gym Bro) can be purchased separately.",
  },
  {
    q: "What are agent packs?",
    a: "There are two special agent packs you can buy. The Chaos Pack includes The Ex, The Theorist, and The Colleague — it's included with Pro. The Legends Pack with Gordon Ramsay, Disappointed Dad, and Gym Bro is a separate one-time purchase.",
  },
  {
    q: "What happens when I miss a deadline?",
    a: "The mission counts as failed and affects your stats. Your agent won't be happy about it either.",
  },
  {
    q: "What are quiet hours?",
    a: "Set a time window where agents won't send notifications. They'll resume bugging you after.",
  },
  {
    q: "How do agents differ?",
    a: "Each agent has a unique personality, escalation style, and communication tone — from Mom's guilt trips to Drill Sergeant's tough love. Special agents even remember your past missions.",
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
