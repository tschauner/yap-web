"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { agents, sampleNotifications } from "../data/agents";

const agentColorMap = Object.fromEntries(agents.map(a => [a.name, a.color]));

const levelColors: Record<string, string> = {
  gentle: "#4ade80",
  nudge: "#facc15",
  push: "#f97316",
  urgent: "#ef4444",
  meltdown: "#dc2626",
};

export default function Notifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 md:py-44 px-6 bg-[#fafafa]" ref={ref}>
      <div className="max-w-[900px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium text-[#999] text-center mb-4 tracking-wide uppercase"
        >
          Notifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-5xl font-semibold tracking-[-1px] text-center mb-6"
        >
          They don&apos;t stop
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base text-[#999] text-center mb-16 max-w-md mx-auto"
        >
          Ignore them at your own risk.
        </motion.p>

        <div className="flex flex-col gap-3 max-w-[520px] mx-auto">
          {sampleNotifications.map((notif, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.1,
                ease: "easeOut",
              }}
              className="px-5 py-4 bg-white rounded-2xl shadow-sm border border-black/[0.04]"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(145deg, ${agentColorMap[notif.agent] || '#999'}15, ${agentColorMap[notif.agent] || '#999'}50)`,
                  }}
                >
                  {notif.emoji}
                </span>
                <span className="text-sm font-semibold text-[#0a0a0a]">{notif.agent}</span>
                <span
                  className="ml-1 w-1.5 h-1.5 rounded-full"
                  style={{ background: levelColors[notif.level] }}
                />
                <span className="text-xs text-[#bbb] ml-auto">
                  {notif.time}
                </span>
              </div>
              <p className="text-[15px] text-[#666] leading-relaxed">
                {notif.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
