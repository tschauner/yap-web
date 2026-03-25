"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistFormProps {
  buttonLabel?: string;
  dark?: boolean; // true = dark background (white button), false = light bg (dark button)
  className?: string;
}

export default function WaitlistForm({
  buttonLabel = "Notify Me",
  dark = true,
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading" || status === "success") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inputBase = `flex-1 min-w-0 px-4 py-3 rounded-full text-sm outline-none border transition-colors ${
    dark
      ? "bg-white/10 text-white placeholder:text-white/40 border-white/10 focus:border-white/30"
      : "bg-black/5 text-[#0a0a0a] placeholder:text-black/30 border-black/10 focus:border-black/30"
  }`;

  const buttonBase = `px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-opacity ${
    dark
      ? "bg-white text-[#0a0a0a] hover:opacity-85"
      : "bg-[#0a0a0a] text-white hover:opacity-80"
  }`;

  return (
    <div className={`w-full ${className}`}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm font-medium ${dark ? "text-white/70" : "text-[#555]"}`}
          >
            You&apos;re on the list. We&apos;ll let you know when Yap launches. 🎉
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex gap-2 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className={inputBase}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={buttonBase}
            >
              {status === "loading" ? "..." : buttonLabel}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">{errorMsg}</p>
      )}
    </div>
  );
}
