"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Terminal, Database, Network } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroDashboard() {
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Matrix core online.",
    "[AETHER] Establishing neural handshake...",
  ]);

  useEffect(() => {
    const fakeLogs = [
      "[SWARM] Agent node 0x4F deployed.",
      "[DEFENSE] Anomalous payload detected on port 443.",
      "[DEFENSE] Isolating sector 7G...",
      "[REVENUE] Lead confidence scored: 98%.",
      "[SYSTEM] Routing telemetry to deep storage.",
      "[SWARM] Consensus reached. Threat neutralized."
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, fakeLogs[i % fakeLogs.length]];
        if (next.length > 5) next.shift(); // Keep only last 5
        return next;
      });
      i++;
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto perspective-[2000px] mt-16 mb-24 z-20 px-4 group">
      {/* Background glow behind dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF1E1E]/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ rotateX: 35, y: 150, opacity: 0, scale: 0.9 }}
        animate={{ rotateX: 10, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-[350px] md:h-[500px] rounded-xl md:rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl shadow-2xl flex overflow-hidden group-hover:border-white/20 transition-colors duration-700"
      >
        {/* Left Sidebar */}
        <div className="w-16 md:w-24 border-r border-white/10 flex flex-col items-center py-8 gap-8 bg-black/50">
          <div className="w-8 h-8 rounded bg-[#FF1E1E] flex items-center justify-center animate-pulse">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-gray-600 hover:text-white transition-colors cursor-pointer" />
          <Network className="w-5 h-5 md:w-6 md:h-6 text-gray-600 hover:text-white transition-colors cursor-pointer" />
          <Database className="w-5 h-5 md:w-6 md:h-6 text-gray-600 hover:text-white transition-colors cursor-pointer" />
        </div>

        {/* Main Body */}
        <div className="flex-1 flex flex-col relative w-full overflow-hidden">
          {/* Top Bar */}
          <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Swarm Cluster ACTIVE
            </div>
            <div className="text-xs text-gray-600 font-mono">
              LATENCY: 4ms
            </div>
          </div>

          {/* Grid Content */}
          <div className="flex-1 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Chart Module (Fake) */}
            <div className="col-span-1 md:col-span-2 rounded-xl border border-white/5 bg-white/[0.02] p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1E1E]/50 to-transparent" />
              <h4 className="text-gray-400 font-mono text-xs uppercase mb-4">Neural Bandwidth</h4>
              
              {/* Fake Graph Lines */}
              <div className="flex items-end gap-2 h-full w-full opacity-60">
                {[40, 70, 45, 90, 60, 80, 50, 100, 70, 30, 85, 60].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                    className="flex-1 bg-gradient-to-t from-[#FF1E1E]/20 to-[#FF1E1E]/80 rounded-t-sm"
                  />
                ))}
              </div>
            </div>

            {/* Terminal Module */}
            <div className="col-span-1 rounded-xl border border-white/5 bg-[#020202] p-6 flex flex-col font-mono relative">
              <div className="flex items-center gap-2 mb-4 text-[#FF1E1E]">
                <Terminal className="w-4 h-4" />
                <span className="text-xs">Console</span>
              </div>
              <div className="flex col flex-col gap-2 overflow-hidden h-full">
                {logs.map((log, i) => (
                  <motion.div 
                    key={i + log}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[10px] md:text-xs text-gray-500 tracking-tight"
                  >
                    {log}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
