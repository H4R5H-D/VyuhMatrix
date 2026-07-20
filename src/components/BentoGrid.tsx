"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Megaphone, Users, LayoutTemplate, ArrowUpRight } from "lucide-react";

const bentoItems = [
  {
    id: "cyber",
    title: "Cyber Security AI",
    domain: "Defense",
    icon: ShieldCheck,
    desc: "A self-learning defense system that monitors your network in real time, isolates threats before they escalate, and adapts to new attack vectors automatically.",
    className: "md:col-span-2 md:row-span-2 min-h-[380px]",
  },
  {
    id: "sales",
    title: "Sales Automation",
    domain: "Revenue",
    icon: TrendingUp,
    desc: "AI agents that qualify leads, run outreach, and close deals 24/7 — scaling revenue without scaling headcount.",
    className: "md:col-span-1 min-h-[280px]",
  },
  {
    id: "marketing",
    title: "Marketing AI",
    domain: "Growth",
    icon: Megaphone,
    desc: "Hyper-personalized campaigns across every platform, tuned to your brand voice and optimized in real time.",
    className: "md:col-span-1 min-h-[280px]",
  },
  {
    id: "hr",
    title: "HR & Operations",
    domain: "Operations",
    icon: Users,
    desc: "Automate resume screening, document parsing, and onboarding so your team focuses on people, not paperwork.",
    className: "md:col-span-1 min-h-[240px]",
  },
  {
    id: "web",
    title: "Website & App Intelligence",
    domain: "Infrastructure",
    icon: LayoutTemplate,
    desc: "Digital products embedded with AI that tracks behavior, predicts intent, and lifts conversion continuously.",
    className: "md:col-span-2 min-h-[240px]",
  },
];

export function BentoGrid() {
  return (
    <div className="max-w-[1120px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-6 relative z-20">
      {bentoItems.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
          className={item.className}
        >
          <div
            className="relative w-full h-full p-8 md:p-9 flex flex-col justify-between group rounded-2xl overflow-hidden transition-colors duration-500"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Subtle hover wash */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl" />

            {/* Header row */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/[0.08] group-hover:border-[#FF1E1E]/40 transition-colors duration-500">
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-[#FF1E1E] transition-colors duration-300" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-10">
              <p className="font-mono text-[10px] tracking-[0.25em] text-gray-600 uppercase mb-3">
                {item.domain}
              </p>
              <h3
                className="text-2xl md:text-[1.7rem] font-bold tracking-tight text-white mb-3 leading-tight"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-[95%] font-light group-hover:text-gray-400 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
