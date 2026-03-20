"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState("");
  const fullText = "> ./orchestrator --secure --resolve-anomalies";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 40); // Fast, mechanical typing speed
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] text-[#AAAAAA] font-mono text-lg sm:text-xl md:text-2xl"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: "blur(5px)", scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start px-6">
          <div className="flex items-center drop-shadow-[0_0_10px_rgba(255,30,30,0.2)]">
            <span>{text}</span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-2 w-3 md:w-4 h-5 md:h-6 bg-[#FF1E1E] inline-block"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
