"use client";

import { motion } from "framer-motion";
import { DatabaseZap, GitMerge, ShieldCheck } from "lucide-react";

export function ProcessPipeline() {
  const steps = [
    {
      num: "01",
      title: "Ingest & Audit",
      desc: "Our architecture seamlessly connects to your legacy infrastructure, mapping global vulnerabilities and dark data silos in milliseconds.",
      icon: DatabaseZap
    },
    {
      num: "02",
      title: "Orchestrate Swarm",
      desc: "Autonomously deploy specialized AI agents. They evaluate logic gates and assign probabilistic risk scores without human oversight.",
      icon: GitMerge
    },
    {
      num: "03",
      title: "Neutralize & Scale",
      desc: "Threats are isolated actively. In revenue domains, leads are processed and closed. Immediate structural superiority achieved.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="w-full py-32 md:py-48 px-8 relative z-20 flex justify-center bg-[#050505]">
      <div className="max-w-[1200px] w-full">
        
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-white mb-6">
            Converting Abstract Tech <br/><span className="text-gray-600">to Concrete Business Value.</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl text-lg">
            A linear progression from legacy vulnerability to absolute autonomous superiority.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-12 md:gap-0 mt-16">
          {/* Horizontal connecting line (hidden on mobile) */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-gradient-to-r from-[#FF1E1E]/0 via-[#FF1E1E]/30 to-[#FF1E1E]/0 -z-10" />

          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              className="flex-1 flex flex-col items-center md:items-start group"
            >
              {/* Icon / Node Container */}
              <div className="w-20 h-20 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-8 relative group-hover:border-[#FF1E1E]/50 transition-colors duration-500 shadow-xl">
                <div className="absolute inset-0 bg-[#FF1E1E]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <step.icon className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors" />
                
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-black font-bold font-mono text-xs flex items-center justify-center border-4 border-[#050505]">
                  {step.num}
                </div>
              </div>

              {/* Text */}
              <div className="text-center md:text-left pr-0 md:pr-12">
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
