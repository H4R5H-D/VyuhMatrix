"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin scroll-progress bar pinned to the very top — a subtle award-site signature. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF1E1E] via-[#FF6B35] to-[#FF1E1E] origin-left z-[80] pointer-events-none"
    />
  );
}
