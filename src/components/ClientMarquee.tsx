"use client";

import { motion } from "framer-motion";
import { Shield, Fingerprint, Cpu, Network, Database, Lock, Globe, Zap } from "lucide-react";

const clientsRow1 = [
  { name: "NEURAL_NET_V4", icon: Network },
  { name: "GLOBAL_SWARM_LOGISTICS", icon: Globe },
  { name: "SECURE_NODE_9", icon: Shield },
  { name: "AUTONOMOUS_DEFENSE_CORP", icon: Lock },
];

const clientsRow2 = [
  { name: "AETHER_DYNAMICS", icon: Zap },
  { name: "XENON_LABS", icon: Cpu },
  { name: "TESSERACT_AI", icon: Database },
  { name: "VOID_DATABANKS", icon: Fingerprint },
];

export function ClientMarquee() {
  return (
    <div className="w-full py-24 bg-gradient-to-b from-transparent via-[#050505] to-transparent overflow-hidden flex flex-col items-center justify-center relative z-10 pointer-events-auto">
      <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-md border-y border-white/5 pointer-events-none" />
      
      <p className="text-gray-500 font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-12 relative z-10 drop-shadow-md">
        Active Node Integrations
      </p>
      
      {/* High-Fidelity Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />

      {/* Row 1: Fast Left */}
      <div className="flex w-[300%] gap-12 items-center opacity-70 mb-8 hover:opacity-100 transition-opacity duration-500 relative z-10">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-32"
        >
          {/* Quad-array for hyper-wide, seamless looping on ultrawides */}
          {[...clientsRow1, ...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, i) => (
            <div key={`r1-${i}`} className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-[#FF1E1E]/50 group-hover:bg-[#FF1E1E]/10 transition-all duration-300">
                 <client.icon className="w-5 h-5 text-gray-500 group-hover:text-[#FF1E1E] transition-colors" />
              </div>
              <span className="text-xl md:text-3xl font-black font-mono text-[#444] group-hover:text-white transition-colors cursor-default tracking-tighter">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Slow Right */}
      <div className="flex w-[300%] gap-12 items-center opacity-70 hover:opacity-100 transition-opacity duration-500 relative z-10">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-16 md:gap-32"
        >
           {[...clientsRow2, ...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, i) => (
            <div key={`r2-${i}`} className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
                 <client.icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xl md:text-3xl font-black font-mono text-[#444] group-hover:text-white transition-colors cursor-default tracking-tighter">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
