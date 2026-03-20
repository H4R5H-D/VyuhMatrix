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
    gradient: "from-red-500/10 to-transparent"
  },
  {
    id: "sales",
    title: "Sales Automation",
    domain: "Revenue",
    icon: TrendingUp,
    desc: "Scale your revenue instantly. AI agents that generate leads, handle objections, and close deals 24/7 without expanding human headcount.",
    className: "md:col-span-1 min-h-[300px]",
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    id: "marketing",
    title: "Marketing AI",
    domain: "Growth",
    icon: Megaphone,
    desc: "Deploy hyper-personalized campaigns across all platforms simultaneously. Custom AI that perfectly understands your brand voice.",
    className: "md:col-span-1 min-h-[300px]",
    gradient: "from-purple-500/10 to-transparent"
  },
  {
    id: "hr",
    title: "HR & Operations",
    domain: "Management",
    icon: Users,
    desc: "Streamline your internal infrastructure. Automate recruitment screening, massive document parsing, and employee onboarding.",
    className: "md:col-span-1 min-h-[250px]",
    gradient: "from-emerald-500/10 to-transparent"
  },
  {
    id: "web",
    title: "Website & App Intelligence",
    domain: "Infrastructure",
    icon: LayoutTemplate,
    desc: "We build elite digital storefronts and mobile apps powered by deep AI tracking, adapting to user behavior to maximize operational conversion.",
    className: "md:col-span-2 min-h-[250px]",
    gradient: "from-gray-500/10 to-transparent"
  }
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
          <SpotlightCard className="w-full h-full p-8 md:p-10 flex flex-col justify-between group overflow-hidden border border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur-2xl rounded-2xl shadow-2xl">
            {/* Ambient Background Gradient (Subtle) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
            
            {/* Massive Abstract Background Icon */}
            <item.icon className="absolute -bottom-10 -right-10 w-72 h-72 text-white/[0.01] group-hover:text-white/[0.03] transition-colors duration-700 transform -rotate-6 pointer-events-none" />

            {/* Content Top */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-12 border border-white/10 group-hover:border-white/30 transition-colors shadow-lg">
              <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
              
            {/* Content Bottom */}
            <div className="relative z-10">
              <p className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-gray-500 uppercase mb-3 drop-shadow-md">
                // {item.domain}
              </p>
              <h3 className="text-2xl md:text-4xl font-sans font-bold tracking-tight text-white mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[90%] font-light group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </div>
  );
}
