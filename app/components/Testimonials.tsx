"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    text: "My Mom agent is scarier than my actual mom. I cleaned my entire apartment in 20 minutes.",
    author: "procrastinator_supreme",
    stars: 5,
  },
  {
    text: "The Drill Sergeant made me cry at a coffee shop. Finished my thesis that afternoon.",
    author: "caffeine_and_tears",
    stars: 5,
  },
  {
    text: "I set a 2-hour deadline and my Therapist agent asked 'why do you keep hurting yourself like this?' I've never worked faster.",
    author: "existential_productivity",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#666] bg-white rounded-full shadow-sm border border-black/[0.06]">
            Reviews
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-5xl font-semibold tracking-[-1px] text-center mb-16"
        >
          They love it, so will you
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-[#fafafa] rounded-2xl p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-[15px] text-[#333] leading-relaxed flex-1 mb-5">
                &ldquo;{review.text}&rdquo;
              </p>
              
              {/* Author */}
              <span className="text-[13px] text-[#bbb] font-medium">
                {review.author}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
