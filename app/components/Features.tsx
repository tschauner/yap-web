"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-20 md:py-28 px-5" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        {/* Section headline — Apple style */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-[64px] font-bold leading-[1.05] tracking-[-2px] text-center mb-4"
        >
          Built to nag.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-[#86868b] text-center mb-16 max-w-lg mx-auto"
        >
          Every feature is designed to make sure you actually do the thing.
        </motion.p>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Card 1 — Big statement, colored */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#1d1d1f] rounded-[28px] p-10 md:p-14 flex flex-col justify-end min-h-[420px]"
          >
            <h3 className="text-[32px] md:text-[40px] font-bold leading-[1.1] tracking-[-1px] text-white">
              Six agents.<br />
              Six ways to<br />
              get nagged.
            </h3>
          </motion.div>

          {/* Card 2 — with phone screenshot */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-[#f5f5f7] rounded-[28px] p-10 md:p-14 flex flex-col min-h-[420px] overflow-hidden"
          >
            <h3 className="text-[28px] md:text-[34px] font-bold leading-[1.1] tracking-[-0.5px] text-[#1d1d1f] mb-8">
              Notifications that<br />
              escalate until<br />
              you finish.
            </h3>
            <div className="flex-1 flex justify-center items-end -mb-14">
              <div className="w-[220px] relative">
                <Image
                  src="/screen.png"
                  alt="Yap notifications"
                  width={750}
                  height={1624}
                  className="w-full h-auto rounded-t-[24px] shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3 — stat highlight */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-[#f5f5f7] rounded-[28px] p-10 md:p-14 flex flex-col justify-center min-h-[320px]"
          >
            <p className="text-[17px] font-semibold text-[#86868b] mb-3">Completion rate</p>
            <h3 className="text-[56px] md:text-[72px] font-bold leading-[1] tracking-[-3px] text-[#1d1d1f]">
              3x higher
            </h3>
            <p className="text-[17px] text-[#86868b] mt-4 leading-relaxed max-w-sm">
              than your average to-do app. Guilt is a powerful motivator.
            </p>
          </motion.div>

          {/* Card 4 — colorful feature */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-[#1d1d1f] rounded-[28px] p-10 md:p-14 flex flex-col justify-end min-h-[320px]"
          >
            <p className="text-[17px] font-semibold text-[#86868b] mb-3">Leaderboard</p>
            <h3 className="text-[28px] md:text-[34px] font-bold leading-[1.1] tracking-[-0.5px] text-white">
              See which agent<br />
              gets people to<br />
              actually do stuff.
            </h3>
          </motion.div>

          {/* Card 5 — full width */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="md:col-span-2 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-[28px] p-10 md:p-14 flex flex-col justify-center items-center text-center min-h-[280px]"
          >
            <h3 className="text-[32px] md:text-[44px] font-bold leading-[1.1] tracking-[-1.5px] text-white max-w-xl">
              Your mission. Your agent. Your problem.
            </h3>
            <p className="text-[17px] text-white/70 mt-5 max-w-md">
              Set any goal, pick an agent, and let the nagging begin. Free on iOS.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
