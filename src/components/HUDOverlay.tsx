"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const dataLines = [
  "NEURAL_NET :: ACTIVE",
  "THREAT_LEVEL :: ZERO",
  "ENCRYPTION :: AES-256",
  "UPTIME :: 99.97%",
  "NODES :: 2,847",
  "BANDWIDTH :: 12.4TB/s",
  "AI_CORE :: ONLINE",
  "QUANTUM_SYNC :: ████░",
];

export function HUDOverlay() {
  const [metrics, setMetrics] = useState({ packets: 4823, latency: 2, integrity: 99.98 });
  const [flashLine, setFlashLine] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setMetrics({
        packets: Math.floor(Math.random() * 9000 + 1000),
        latency: Math.floor(Math.random() * 5 + 1),
        integrity: 98 + Math.random() * 2,
      });
      setFlashLine(Math.floor(Math.random() * dataLines.length));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Scanlines */}
      <div className="scanlines absolute inset-0" />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Top-left bracket */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <div className="hud-bracket hud-bracket-tl" />
        <motion.p
          className="text-[10px] font-mono text-red-600/60 mt-2 ml-2 tracking-widest"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          VYUH_MATRIX::v2.4.1
        </motion.p>
      </div>

      {/* Top-right bracket */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 flex flex-col items-end">
        <div className="hud-bracket hud-bracket-tr" />
        <motion.p
          className="text-[10px] font-mono text-red-600/50 mt-2 mr-2 tracking-widest"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
        >
          {new Date().toISOString().slice(0, 10)}
        </motion.p>
      </div>

      {/* Bottom-left bracket */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
        <div className="hud-bracket hud-bracket-bl" />
      </div>

      {/* Bottom-right bracket */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
        <div className="hud-bracket hud-bracket-br" />
      </div>

      {/* Right data panel — desktop only */}
      <div className="hidden lg:flex absolute top-1/3 right-6 md:right-10 flex-col gap-[6px] items-end">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-red-900/50 mb-1" />
        {dataLines.map((line, i) => (
          <motion.p
            key={i}
            className="text-[9px] font-mono tracking-widest"
            animate={{
              opacity: i === flashLine ? [0.9, 0.3, 0.9] : [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: i === flashLine ? 0.4 : 2 + i * 0.15,
              repeat: Infinity,
            }}
            style={{ color: i === flashLine ? "#FF4444" : "#6B1111" }}
          >
            {line}
          </motion.p>
        ))}
        <div className="w-[1px] h-10 bg-gradient-to-b from-red-900/50 to-transparent mt-1" />
      </div>

      {/* Bottom metrics bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-6 md:gap-10">
        {[
          { label: "PKT", value: metrics.packets.toLocaleString() },
          { label: "LAT", value: `${metrics.latency}ms` },
          { label: "INT", value: `${metrics.integrity.toFixed(2)}%` },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-red-600/60 animate-pulse" />
            <span className="text-[9px] font-mono text-red-900/70 tracking-widest">
              {label}·{value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
