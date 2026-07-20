"use client";

import { motion } from "framer-motion";

const nodes = [
  { value: "72h", label: "From kickoff to live system" },
  { value: "4–5 hrs", label: "Saved per week, guaranteed" },
  { value: "24/7", label: "AI agents working for you" },
];

export function MetricNodes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1120px] mx-auto px-6 relative z-20">
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="p-10 flex flex-col justify-center rounded-2xl border border-white/[0.07] bg-white/[0.02]"
        >
          <span
            className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-3"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            {node.value}
          </span>
          <span className="text-sm text-gray-500 font-light">{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
