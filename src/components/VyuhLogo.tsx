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
        {/* Vivid top-to-bottom gradient */}
        <linearGradient id="vm-g" x1="120" y1="20" x2="120" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FF9090"/>
          <stop offset="35%"  stopColor="#FF2020"/>
          <stop offset="100%" stopColor="#CC0000"/>
        </linearGradient>

        {/* Inner specular highlight */}
        <linearGradient id="vm-hl" x1="120" y1="20" x2="120" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="white" stopOpacity="0.22"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>

        {/* Strong ambient glow */}
        <filter id="vm-sh" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="4" stdDeviation="14"
            floodColor="#FF1E1E" floodOpacity="0.55"/>
        </filter>

        {/* Edge blur for specular lines */}
        <filter id="vm-eg" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Outer pulse ring (always shown faintly, animates when animate=true) */}
      {animate ? (
        <motion.circle
          cx="120" cy="120" r="116"
          stroke="#FF1E1E"
          strokeWidth="1"
          fill="none"
          animate={{ opacity: [0.06, 0.24, 0.06], scale: [0.92, 1.05, 0.92] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "120px 120px" }}
        />
      ) : (
        <circle cx="120" cy="120" r="116" stroke="#FF1E1E" strokeWidth="0.5" fill="none" opacity="0.1" />
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
      <line x1="57"  y1="37"  x2="120" y2="97"  stroke="white" strokeWidth="1.6" opacity="0.28" filter="url(#vm-eg)"/>
      <line x1="183" y1="37"  x2="120" y2="97"  stroke="white" strokeWidth="1.6" opacity="0.22" filter="url(#vm-eg)"/>

      {/* Top edge lit highlights */}
      <line x1="15"  y1="132" x2="45"  y2="20"  stroke="white" strokeWidth="1.2" opacity="0.32"/>
      <line x1="195" y1="20"  x2="225" y2="132" stroke="white" strokeWidth="1.2" opacity="0.28"/>
      <line x1="45"  y1="20"  x2="120" y2="88"  stroke="white" strokeWidth="0.9" opacity="0.20"/>
      <line x1="120" y1="88"  x2="195" y2="20"  stroke="white" strokeWidth="0.9" opacity="0.18"/>
    </svg>
  );
}
