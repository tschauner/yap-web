"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { agents } from "../data/agents";

export default function Agents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#666] bg-white rounded-full shadow-sm border border-black/[0.06]">
            Agents
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-5xl font-semibold tracking-[-1px] text-center mb-14"
        >
          Choose your agent
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-6 mb-12">
          {agents.map((agent, i) => (
            <motion.button
              key={agent.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              onClick={() => setSelected(i)}
              className={`flex flex-col items-center gap-3 cursor-pointer transition-all duration-200 ${
                selected === i ? "scale-110" : "opacity-60 hover:opacity-100"
              }`}
            >
              <div
                className={`w-20 h-20 md:w-[88px] md:h-[88px] rounded-full flex items-center justify-center text-4xl md:text-5xl transition-shadow duration-200 ${
                  selected === i ? "ring-2 ring-offset-2" : ""
                }`}
                style={{
                  background: `linear-gradient(145deg, ${agent.color}15, ${agent.color}50)`,
                  boxShadow: selected === i ? `0 8px 32px ${agent.color}30` : `0 8px 32px ${agent.color}12`,
                  ...(selected === i ? { ringColor: agent.color } as React.CSSProperties : {}),
                }}
              >
                {agent.emoji}
              </div>
              <span className={`text-[13px] font-medium transition-colors duration-200 ${
                selected === i ? "text-[#0a0a0a]" : "text-[#999]"
              }`}>
                {agent.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={agents[selected].id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="flex justify-center mb-5">
              <svg className="w-10 h-10 text-[#ddd]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11.068 13.273 11.068 15.226c0 .966-.345 1.893-.96 2.576-.614.683-1.448 1.067-2.317 1.067-1.13 0-2.21-.588-3.208-1.548zm10.5 0C14.053 16.227 13.5 15 13.5 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.986.178 3.463 1.761 3.463 3.714 0 .966-.345 1.893-.96 2.576-.614.683-1.448 1.067-2.317 1.067-1.13 0-2.21-.588-3.208-1.548z" />
              </svg>
            </div>
            <p className="text-2xl md:text-3xl text-[#333] leading-snug font-medium">
              {agents[selected].pitch}
            </p>
            <p className="text-base text-[#bbb] mt-5 font-medium">
              — {agents[selected].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
