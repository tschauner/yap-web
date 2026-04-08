"use client";

import Image from "next/image";

interface Testimonial {
  agent: string;
  emoji: string;
  avatar: string;
  quote: string;
}

export default function AgentTestimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="grid gap-4 mt-6">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5"
        >
          <Image
            src={t.avatar}
            alt={t.agent}
            width={44}
            height={44}
            className="w-11 h-11 rounded-full flex-shrink-0"
          />
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-sm font-semibold text-white">
                {t.agent}
              </span>
              <span className="text-base">{t.emoji}</span>
            </div>
            <p className="text-[15px] text-white/60 leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
