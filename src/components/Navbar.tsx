"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex flex-col md:flex-row items-center justify-between pointer-events-auto bg-black/40 backdrop-blur-md border-b border-[#222]"
    >
      <div className="flex flex-col cursor-pointer group hover:opacity-80 transition-opacity mb-4 md:mb-0">
        <span className="text-xl font-bold font-mono text-white leading-tight flex items-center gap-2">
          <span className="text-[#FF0044]">॥</span> &lt;Vyuh Matrix/&gt; <span className="text-[#FF0044]">॥</span>
        </span>
      </div>
      
      <div className="flex items-center gap-8 text-sm font-mono tracking-wide text-gray-400">
        <a href="#about" className="hover:text-white transition-colors duration-300">Home</a>
        <a href="#solutions" className="hover:text-white transition-colors duration-300">Solutions</a>
        <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        <button className="px-6 py-2 bg-[#222222] text-white hover:bg-[#FF0044] border border-[#333] hover:border-[#FF0044] transition-all duration-300 shadow-[0_0_10px_rgba(255,0,68,0)] hover:shadow-[0_0_20px_rgba(255,0,68,0.4)]">
          [ ACCESS ]
        </button>
      </div>
    </motion.nav>
  );
}
