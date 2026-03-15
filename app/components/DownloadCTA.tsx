"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DownloadCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="download" className="bg-[#0a0a0a] py-20 md:py-28 px-6" ref={ref}>
      <div className="max-w-[600px] mx-auto flex justify-center">
        <motion.a
          href="https://apps.apple.com/app/yap/id6738916276"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
            alt="Download on the App Store"
            className="h-[54px] w-auto"
          />
        </motion.a>
      </div>
    </section>
  );
}
