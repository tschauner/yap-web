"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { specialAgents } from "../data/agents";

const features = [
  {
    icon: "🧠",
    title: "Agent Memory",
    description:
      "Special Agents remember your past missions — your excuses, your victories, your shameful 2 AM failures. They use it all against you.",
  },
  {
    icon: "🎯",
    title: "Custom Roast",
    description:
      "Tell us something personal. Your agents will weaponize it into the most uncomfortably specific motivational messages you've ever received.",
  },
  {
    icon: "⏱️",
    title: "Custom Deadlines",
    description:
      "Set your own deadline. 3 hours or 3 days — the escalation compresses to fit. Short deadlines = maximum chaos.",
  },
];

export default function SpecialAgents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  return (
    <section className="py-28 md:py-36 px-6" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span className="text-xs font-bold tracking-[3px] uppercase text-purple-400">
            Pro
          </span>
          <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
            Unlock
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl font-black tracking-[-1.5px] text-center mb-4"
        >
          Special Agents
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#888] text-center mb-16 max-w-lg mx-auto"
        >
          Unhinged. Memorable. Disturbingly effective.
        </motion.p>

        {/* Agent cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {specialAgents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
              className="relative group rounded-2xl border border-white/[0.06] bg-[#0a0a0a] overflow-hidden cursor-default"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${agent.color}18, transparent 70%)`,
                }}
              />

              <div className="relative z-10 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${agent.color}20` }}
                  >
                    {agent.emoji}
                  </span>
                  <div>
                    <h3 className="font-bold text-[15px]">{agent.name}</h3>
                    <p className="text-xs text-[#666]">Special Agent</p>
                  </div>
                </div>
                <p className="text-sm text-[#999] leading-relaxed italic mb-3">
                  &ldquo;{agent.pitch}&rdquo;
                </p>
                <p className="text-xs text-[#555]">{agent.description}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${agent.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Pro features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <span className="text-3xl mb-3 block">{feat.icon}</span>
              <h4 className="font-bold text-sm mb-2">{feat.title}</h4>
              <p className="text-xs text-[#666] leading-relaxed max-w-[280px] mx-auto">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
