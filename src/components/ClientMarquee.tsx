"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Building2, ShoppingCart, HeartPulse, Landmark, Rocket, Factory } from "lucide-react";

const industriesRow1 = [
  { name: "FINTECH", icon: Landmark },
  { name: "E-COMMERCE", icon: ShoppingCart },
  { name: "HEALTHCARE", icon: HeartPulse },
  { name: "SAAS & STARTUPS", icon: Rocket },
];

const industriesRow2 = [
  { name: "PROFESSIONAL SERVICES", icon: Building2 },
  { name: "MANUFACTURING", icon: Factory },
  { name: "SECURITY & DEFENSE", icon: Shield },
  { name: "GROWTH & SALES", icon: TrendingUp },
];

export function ClientMarquee() {
  return (
    <div className="w-full py-24 bg-gradient-to-b from-transparent via-[#050505] to-transparent overflow-hidden flex flex-col items-center justify-center relative z-10 pointer-events-auto">
      <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-md border-y border-white/5 pointer-events-none" />

      <p className="text-gray-500 font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-12 relative z-10 drop-shadow-md">
        Industries We Serve
      </p>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />

      {/* Row 1 */}
      <div className="flex w-[300%] gap-12 items-center opacity-70 mb-8 hover:opacity-100 transition-opacity duration-500 relative z-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-32"
        >
          {[...industriesRow1, ...industriesRow1, ...industriesRow1, ...industriesRow1].map((item, i) => (
            <div key={`r1-${i}`} className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#FF1E1E]/50 group-hover:bg-[#FF1E1E]/10 transition-all duration-300">
                <item.icon className="w-5 h-5 text-gray-500 group-hover:text-[#FF1E1E] transition-colors" />
              </div>
              <span className="text-xl md:text-3xl font-black font-mono text-[#444] group-hover:text-white transition-colors cursor-default tracking-tighter">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="flex w-[300%] gap-12 items-center opacity-70 hover:opacity-100 transition-opacity duration-500 relative z-10">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-32"
        >
          {[...industriesRow2, ...industriesRow2, ...industriesRow2, ...industriesRow2].map((item, i) => (
            <div key={`r2-${i}`} className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
                <item.icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xl md:text-3xl font-black font-mono text-[#444] group-hover:text-white transition-colors cursor-default tracking-tighter">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
