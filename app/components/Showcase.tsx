"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const showcaseVariants = [
  {
    quote:
      "My Mom agent is scarier than my actual mom. I cleaned my entire apartment in 20 minutes.",
    author: "procrastinator_supreme",
    image: "/mom.png",
    overlayWidth: "w-[92%]",
  },
  {
    quote:
      "Boss mode called me out so hard I finished my slides before lunch. Low-key terrifying, but it works.",
    author: "deck_deadline_survivor",
    image: "/boss.png",
    overlayWidth: "w-[92%]",
  },
  {
    quote:
      "The Theorist told me Big Sofa profits every hour I skip the gym. I haven\u2019t missed a day since.",
    author: "big_sofa_truther",
    image: "/theorist.png",
    overlayWidth: "w-[88%]",
  },
];

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    const initial = Math.random() < 0.5 ? 0 : 1;
    setVariantIndex(initial);

    const interval = window.setInterval(() => {
      setVariantIndex((prev) => (prev + 1) % showcaseVariants.length);
    }, 12000);

    return () => window.clearInterval(interval);
  }, []);

  const variant = showcaseVariants[variantIndex];

  return (
    <section id="how-it-works" className="bg-[#0a0a0a] py-6 px-5 scroll-mt-20" ref={ref}>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left — Fake Review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-[#007AFF] rounded-[28px] p-10 md:p-12 flex flex-col justify-center items-start min-h-[560px]"
        >
          <div>
            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">⭐</span>
              ))}
            </div>

            {/* Review quote */}
            <p className="text-[28px] md:text-[36px] font-bold leading-[1.15] tracking-[-0.5px] text-white">
              &ldquo;{variant.quote}&rdquo;
            </p>

            {/* Username */}
            <p className="text-white/60 text-sm font-medium mt-8">
              {variant.author}
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {showcaseVariants.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show review ${i + 1}`}
                onClick={() => setVariantIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === variantIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right — Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[28px] p-10 md:p-12 flex flex-col min-h-[560px] overflow-hidden"
        >
          {/* Headline */}
          <h3 className="text-[28px] md:text-[36px] font-bold leading-[1.1] tracking-[-0.5px] text-[#0a0a0a] mb-10">
            Pick an agent.<br />
            Set a mission.<br />
            Get yapped at.
          </h3>

          {/* Phone + animated overlay */}
          <div className="relative flex-1 flex items-end justify-center -mb-12 -mx-4">
            {/* Phone background — smaller */}
            <img
              src="/phone.png"
              alt="Yap phone"
              className="relative z-0 w-[85%] h-auto rounded-t-[16px]"
            />
            {/* Notifications overlay — full width, independent of phone */}
            <motion.img
              key={`overlay-${variantIndex}`}
              src={variant.image}
              alt="Yap notifications overlay"
                initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
              className={`absolute z-10 bottom-10 left-1/2 -translate-x-1/2 ${variant.overlayWidth} object-cover object-bottom h-auto`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
