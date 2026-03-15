"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { agents, specialAgents } from "../data/agents";

function lighten(hex: string, amount: number = 0.45): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lr = Math.round(r + (255 - r) * amount);
  const lg = Math.round(g + (255 - g) * amount);
  const lb = Math.round(b + (255 - b) * amount);
  return `#${lr.toString(16).padStart(2, "0")}${lg.toString(16).padStart(2, "0")}${lb.toString(16).padStart(2, "0")}`;
}

const allAgents = [...agents, ...specialAgents];

export default function QuoteCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % allAgents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const agent = allAgents[current];

  return (
    <section id="team" className="relative bg-[#0a0a0a] py-24 md:py-36 px-6 overflow-hidden scroll-mt-20">
      <div className="max-w-[720px] mx-auto flex flex-col items-center text-center">
        {/* Quote marks */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-[22px]"
        >
          <Image
            src="/quote.png"
            alt="Quote"
            width={120}
            height={60}
            className="h-6 md:h-[38px] w-auto"
          />
        </motion.div>

        {/* Quote text */}
        <div className="min-h-[140px] md:min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.p
              key={agent.id}
              custom={direction}
              initial={{ opacity: 0, y: 20 * direction }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 * direction }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-3xl md:text-[44px] font-bold leading-[1.15] tracking-[-1px] text-white"
            >
              {agent.pitch}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Agent avatar + name */}
        <AnimatePresence mode="wait">
          <motion.div
            key={agent.id + "-avatar"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center mt-[35px]"
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-[40px] md:text-[56px] mb-3"
              style={{
                background: `linear-gradient(145deg, ${agent.color}, ${lighten(agent.color)})`,
              }}
            >
              {agent.emoji}
            </div>
            <span className="text-lg md:text-[28px] text-white font-medium">
              {agent.name}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Pager dots */}
        <div className="flex items-center gap-2 mt-12">
          {allAgents.map((a, i) => (
            <button
              key={a.id}
              onClick={() => goTo(i)}
              className="group p-1 cursor-pointer"
              aria-label={`Go to ${a.name}`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 h-2 bg-white"
                    : "w-2 h-2 bg-white/25 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
