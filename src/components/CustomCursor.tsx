"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for the trailing ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor globally
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center offset (-16px for 32px w/h)
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    // Check if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group") // target our Bento cards
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* The solid dot (Immediate) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#FF1E1E] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: useSpring(useMotionValue(0), { stiffness: 1000, damping: 40 }), // Instant track approximation
          y: useSpring(useMotionValue(0), { stiffness: 1000, damping: 40 }),
          translateX: cursorX.get() + 12 + "px", // Offset 12px to center the 8px dot inside the 32px ring
          translateY: cursorY.get() + 12 + "px"
        }}
        variants={{
          visible: { opacity: 1, scale: isHovering ? 0 : 1 },
          hidden: { opacity: 0 }
        }}
        animate={isVisible ? "visible" : "hidden"}
      />

      {/* The trailing expanding ring (Spring) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#FF1E1E]/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        variants={{
          visible: { 
            opacity: 1, 
            scale: isHovering ? 2.5 : 1,
            backgroundColor: isHovering ? "rgba(255, 30, 30, 0.1)" : "rgba(255, 30, 30, 0)",
            backdropFilter: isHovering ? "blur(2px)" : "blur(0px)"
          },
          hidden: { opacity: 0 }
        }}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
