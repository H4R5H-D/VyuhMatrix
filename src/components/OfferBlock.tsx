"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, BadgeCheck } from "lucide-react";

// TODO: replace with your Cal.com booking link (e.g. "https://cal.com/yourname/audit")
const BOOKING_URL = "mailto:harsh@vyuhmatrix.com?subject=AI%20Time%20Audit";

const guarantees = [
  { icon: Clock, text: "Results in one week" },
  { icon: BadgeCheck, text: "4–5 hrs/week found, or you don't pay" },
  { icon: ShieldCheck, text: "No commitment beyond the audit" },
];

export function OfferBlock() {
  return (
    <section className="w-full py-24 px-8 flex justify-center relative z-10 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "circOut" }}
        className="relative max-w-4xl w-full group"
      >
        {/* Glow border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#FF1E1E]/40 via-[#FF6B35]/20 to-[#FF1E1E]/40 opacity-60 group-hover:opacity-100 blur-[1px] transition-opacity duration-700" />

        <div
          className="relative rounded-2xl border border-[#FF1E1E]/25 p-10 md:p-14 overflow-hidden"
          style={{
            background: "rgba(10,4,4,0.95)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >

          <div className="flex flex-col md:flex-row md:items-center gap-10">
            {/* Left: the offer */}
            <div className="flex-1">
              <p className="font-mono text-[11px] tracking-[0.4em] text-[#FF1E1E]/60 uppercase mb-4">
                {"// Start Here"}
              </p>
              <h2 className="font-mono font-black text-3xl md:text-4xl text-white tracking-tight leading-tight mb-4">
                AI <span className="text-[#FF1E1E]">Time Audit</span>
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                In one week, we map your team&apos;s workflows and show you exactly
                where AI can save you{" "}
                <span className="text-white font-medium">4–5 hours per week</span>
                {" "}— with the numbers to prove it. If we can&apos;t find the
                savings, you pay nothing.
              </p>

              <ul className="flex flex-col gap-3 mt-6">
                {guarantees.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-gray-300">
                    <Icon className="w-4 h-4 text-[#FF1E1E] flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: the CTA */}
            <div className="flex flex-col items-center gap-4 md:min-w-[240px]">
              <a
                href={BOOKING_URL}
                className="w-full text-center px-8 py-4 rounded-full font-mono text-xs tracking-[0.25em] uppercase text-white border border-[#FF1E1E]/50 bg-[#FF1E1E]/15 hover:bg-[#FF1E1E]/25 hover:border-[#FF1E1E]/80 hover:shadow-[0_0_30px_rgba(255,30,30,0.35)] transition-all duration-300 flex items-center justify-center gap-3"
              >
                Book Your Audit
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <p className="font-mono text-[10px] text-gray-600 tracking-widest text-center">
                One week · No commitment
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
