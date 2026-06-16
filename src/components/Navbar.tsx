"use client";

import { motion } from "framer-motion";
import { VyuhLogo } from "@/components/VyuhLogo";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between pointer-events-auto bg-black/40 backdrop-blur-md border-b border-white/[0.06]"
    >
      {/* Logo lockup */}
      <a href="/" className="flex items-center gap-3 group cursor-pointer">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <VyuhLogo size={36} />
        </motion.div>
        <div className="flex flex-col leading-none">
          <span className="font-mono font-bold text-[15px] text-white tracking-wide group-hover:text-white/90 transition-colors">
            Vyuh Matrix
          </span>
          <span className="font-mono text-[9px] text-[#FF1E1E]/60 tracking-[0.25em] uppercase">
            AI Solutions
          </span>
        </div>
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-8 text-sm font-mono tracking-wide text-gray-400">
        <a href="/#about"     className="hover:text-white transition-colors duration-300 hidden md:block">Home</a>
        <a href="/solutions"  className="hover:text-white transition-colors duration-300 hidden md:block">Solutions</a>
        <a href="/#contact"   className="hover:text-white transition-colors duration-300 hidden md:block">Contact</a>

        <a
          href="/#contact"
          className="px-5 py-2 border border-[#FF1E1E]/40 text-white font-mono text-xs tracking-widest uppercase hover:bg-[#FF1E1E]/10 hover:border-[#FF1E1E]/70 hover:shadow-[0_0_16px_rgba(255,30,30,0.3)] transition-all duration-300"
        >
          [ ACCESS ]
        </a>
      </div>
    </motion.nav>
  );
}
