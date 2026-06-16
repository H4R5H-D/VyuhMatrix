"use client";

import { motion } from "framer-motion";

interface VyuhLogoProps {
  size?: number;
  animate?: boolean;
  className?: string;
}

export function VyuhLogo({ size = 40, animate = false, className = "" }: VyuhLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vyuh Matrix logo"
    >
      <defs>
        <linearGradient id="vm-g" x1="120" y1="20" x2="120" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FF6060"/>
          <stop offset="42%"  stopColor="#FF1E1E"/>
          <stop offset="100%" stopColor="#990A0A"/>
        </linearGradient>

        <linearGradient id="vm-hl" x1="120" y1="20" x2="120" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="white" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>

        <filter id="vm-sh" x="-35%" y="-35%" width="170%" height="170%">
          <feDropShadow dx="0" dy="5" stdDeviation="16"
            floodColor="#FF1E1E" floodOpacity="0.32"/>
        </filter>

        <filter id="vm-eg" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {animate && (
        <motion.circle
          cx="120" cy="120" r="116"
          stroke="#FF1E1E"
          strokeWidth="1"
          fill="none"
          animate={{ opacity: [0.05, 0.2, 0.05], scale: [0.93, 1.04, 0.93] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "120px 120px" }}
        />
      )}

      {/* VM shape: two peaks = M, bottom apex = V */}
      <polygon
        points="120,220 15,132 45,20 120,88 195,20 225,132"
        fill="url(#vm-g)"
        filter="url(#vm-sh)"
      />

      {/* Inner specular facet */}
      <polygon
        points="120,207 31,132 57,37 120,97 183,37 209,132"
        fill="url(#vm-hl)"
      />

      {/* M valley ridge lines */}
      <line x1="57"  y1="37"  x2="120" y2="97"  stroke="white" strokeWidth="1.4" opacity="0.2"  filter="url(#vm-eg)"/>
      <line x1="183" y1="37"  x2="120" y2="97"  stroke="white" strokeWidth="1.4" opacity="0.16" filter="url(#vm-eg)"/>

      {/* Top edge lit highlights */}
      <line x1="15"  y1="132" x2="45"  y2="20"  stroke="white" strokeWidth="1"   opacity="0.22"/>
      <line x1="195" y1="20"  x2="225" y2="132" stroke="white" strokeWidth="1"   opacity="0.18"/>
      <line x1="45"  y1="20"  x2="120" y2="88"  stroke="white" strokeWidth="0.8" opacity="0.14"/>
      <line x1="120" y1="88"  x2="195" y2="20"  stroke="white" strokeWidth="0.8" opacity="0.12"/>
    </svg>
  );
}
