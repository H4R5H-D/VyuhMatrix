"use client";

import { useState, useEffect } from "react";
import { SpotlightCard } from "./SpotlightCard";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

function CryptoText({ finalValue, isActive }: { finalValue: string; isActive: boolean }) {
  const [displayText, setDisplayText] = useState(finalValue);

  useEffect(() => {
    if (!isActive) {
      setDisplayText(finalValue);
      return;
    }

    let iteration = 0;
    const maxIterations = 15;
    
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) return finalValue[index];
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iteration >= finalValue.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isActive, finalValue]);

  return <>{displayText}</>;
}

export function MetricNodes() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    {
      id: "alpha",
      value: "99.999%",
      label: "Network Uptime Guarantee",
      glow: false,
    },
    {
      id: "beta",
      value: "< 5ms",
      label: "Threat Detection Latency",
      glow: true, // Needs red pulsating text shadow
    },
    {
      id: "gamma",
      value: "24/7",
      label: "Autonomous Orchestration",
      glow: false,
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto relative z-20">
      {nodes.map((node) => (
        <div 
          key={node.id} 
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
          className="h-full"
        >
          <SpotlightCard className="p-10 flex flex-col justify-center h-full min-h-[240px]">
            <h4 
              className={`text-6xl font-black mb-4 font-sans tracking-tighter ${
                node.glow ? 'text-white drop-shadow-[0_0_25px_rgba(255,30,30,0.8)] animate-pulse' : 'text-white'
              }`}
            >
              <CryptoText finalValue={node.value} isActive={hoveredNode === node.id} />
            </h4>
            <p className="font-mono text-sm tracking-widest uppercase text-gray-500">
              {node.label}
            </p>
          </SpotlightCard>
        </div>
      ))}
    </div>
  );
}
