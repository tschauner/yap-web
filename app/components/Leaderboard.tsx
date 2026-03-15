"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { agents, leaderboardData } from "../data/agents";

const agentColorMap = Object.fromEntries(agents.map(a => [a.name, a.color]));

export default function Leaderboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const getRateColor = (rate: number) => {
    if (rate >= 80) return "#22c55e";
    if (rate >= 65) return "#facc15";
    return "#f97316";
  };

  return (
    <section id="leaderboard" className="py-20 md:py-28 px-6 bg-[#fafafa]" ref={ref}>
      <div className="max-w-[700px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#666] bg-white rounded-full shadow-sm border border-black/[0.06]">
            Leaderboard
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-5xl font-semibold tracking-[-1px] text-center mb-6"
        >
          The scoreboard
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base text-[#999] text-center mb-14"
        >
          See which agent actually gets results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-white border border-black/[0.04] overflow-hidden shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-[48px_1fr_100px_100px] md:grid-cols-[48px_1fr_120px_120px] items-center px-5 py-3 border-b border-black/[0.04] text-xs text-[#bbb] uppercase tracking-wider font-semibold">
            <span>#</span>
            <span>Agent</span>
            <span className="text-right">Rate</span>
            <span className="text-right">Missions</span>
          </div>

          {/* Rows */}
          {leaderboardData.map((entry, i) => (
            <motion.div
              key={entry.agent}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              className={`grid grid-cols-[48px_1fr_100px_100px] md:grid-cols-[48px_1fr_120px_120px] items-center px-5 py-4 ${
                i < leaderboardData.length - 1 ? "border-b border-black/[0.04]" : ""
              } hover:bg-[#fafafa] transition-colors`}
            >
              <span
                className={`text-sm font-semibold ${
                  i === 0
                    ? "text-yellow-500"
                    : i === 1
                    ? "text-gray-400"
                    : i === 2
                    ? "text-orange-400"
                    : "text-[#ccc]"
                }`}
              >
                {entry.rank}
              </span>
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-base flex-shrink-0"
                  style={{
                    background: `linear-gradient(145deg, ${agentColorMap[entry.agent] || '#999'}15, ${agentColorMap[entry.agent] || '#999'}50)`,
                  }}
                >
                  {entry.emoji}
                </span>
                <span className="text-sm font-semibold text-[#333]">{entry.agent}</span>
              </div>
              <div className="text-right">
                <span
                  className="text-sm font-semibold"
                  style={{ color: getRateColor(entry.rate) }}
                >
                  {entry.rate}%
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm text-[#999]">
                  {entry.missions.toLocaleString()}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-xs text-[#ccc] mt-6"
        >
          Updated in real-time from all Yap missions worldwide
        </motion.p>
      </div>
    </section>
  );
}
