"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Megaphone, Users, LayoutTemplate } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const bentoItems = [
  {
    id: "cyber",
    title: "Cyber Security AI",
    domain: "Defense",
    icon: ShieldCheck,
    desc: "Military-grade autonomous defense. Our AI hunts, isolates, and neutralizes network anomalies before they breach your firewall.",
    className: "md:col-span-2 md:row-span-2 min-h-[400px]",
    accent: "rgba(255,30,30,0.12)",
    accentBorder: "rgba(255,30,30,0.25)",
  },
  {
    id: "sales",
    title: "Sales Automation",
    domain: "Revenue",
    icon: TrendingUp,
    desc: "Scale your revenue instantly. AI agents that generate leads, handle objections, and close deals 24/7 without expanding human headcount.",
    className: "md:col-span-1 min-h-[300px]",
    accent: "rgba(59,130,246,0.08)",
    accentBorder: "rgba(59,130,246,0.2)",
  },
  {
    id: "marketing",
    title: "Marketing AI",
    domain: "Growth",
    icon: Megaphone,
    desc: "Deploy hyper-personalized campaigns across all platforms simultaneously. Custom AI that perfectly understands your brand voice.",
    className: "md:col-span-1 min-h-[300px]",
    accent: "rgba(168,85,247,0.08)",
    accentBorder: "rgba(168,85,247,0.2)",
  },
  {
    id: "hr",
    title: "HR & Operations",
    domain: "Management",
    icon: Users,
    desc: "Streamline your internal infrastructure. Automate recruitment screening, massive document parsing, and employee onboarding.",
    className: "md:col-span-1 min-h-[250px]",
    accent: "rgba(16,185,129,0.08)",
    accentBorder: "rgba(16,185,129,0.2)",
  },
  {
    id: "web",
    title: "Website & App Intelligence",
    domain: "Infrastructure",
    icon: LayoutTemplate,
    desc: "We build elite digital storefronts and mobile apps powered by deep AI tracking, adapting to user behavior to maximize operational conversion.",
    className: "md:col-span-2 min-h-[250px]",
    accent: "rgba(156,163,175,0.06)",
    accentBorder: "rgba(156,163,175,0.15)",
  },
];

export function BentoGrid() {
  return (
    <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8 relative z-20 pb-20">
      {bentoItems.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: "circOut" }}
          className={item.className}
        >
          <SpotlightCard className="relative w-full h-full p-8 md:p-10 flex flex-col justify-between group overflow-hidden rounded-2xl shadow-2xl"
            style={{
              background: "rgba(8,8,8,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Animated scan line on hover */}
            <div className="card-scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Hover accent glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
              style={{ background: `radial-gradient(ellipse at 50% 100%, ${item.accent}, transparent 70%)` }}
            />

            {/* Hover border glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ boxShadow: `inset 0 0 0 1px ${item.accentBorder}` }}
            />

            {/* HUD corner brackets — visible on hover */}
            <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-red-600/0 group-hover:border-red-600/50 transition-colors duration-300 rounded-none" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-red-600/0 group-hover:border-red-600/50 transition-colors duration-300 rounded-none" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-red-600/0 group-hover:border-red-600/50 transition-colors duration-300 rounded-none" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-red-600/0 group-hover:border-red-600/50 transition-colors duration-300 rounded-none" />

            {/* Massive abstract background icon */}
            <item.icon className="absolute -bottom-10 -right-10 w-72 h-72 text-white/[0.015] group-hover:text-white/[0.04] transition-colors duration-700 -rotate-6 pointer-events-none" />

            {/* Icon badge */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-12 border border-white/10 group-hover:border-red-600/30 group-hover:shadow-[0_0_20px_rgba(255,30,30,0.15)] transition-all duration-500 shadow-lg">
              <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-gray-600 group-hover:text-red-700/70 uppercase mb-3 transition-colors duration-300">
                // {item.domain}
              </p>
              <h3 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-white mb-4 leading-tight group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[90%] font-light group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}
