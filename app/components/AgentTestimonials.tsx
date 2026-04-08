"use client";

import Image from "next/image";

interface Testimonial {
  agent: string;
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
          className="flex items-center gap-5 bg-white/[0.04] border border-white/[0.06] rounded-3xl p-5"
        >
          <Image
            src={t.avatar}
            alt={t.agent}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full flex-shrink-0"
          />
          <div>
            <span className="text-sm font-semibold text-white mb-1.5 block">
              {t.agent}
            </span>
            <p className="text-[15px] text-white/60 leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
