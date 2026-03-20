"use client";

import { useState } from "react";
import { BootSequence } from "@/components/BootSequence";
import { Background3D } from "@/components/Background3D";
import { BentoGrid } from "@/components/BentoGrid";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Chatbot } from "@/components/Chatbot";
import { MetricNodes } from "@/components/MetricNodes";
import { ClientMarquee } from "@/components/ClientMarquee";
import { FaqSection } from "@/components/FaqSection";
import { motion } from "framer-motion";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="relative bg-[#050505] text-gray-200 selection:bg-[#FF1E1E] selection:text-white font-sans overflow-x-hidden min-h-screen">
      
      {/* Global Ambient Core Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 flex rounded-full items-center justify-center mix-blend-screen">
        <div className="w-[800px] h-[800px] bg-[#FF1E1E]/[0.03] blur-[120px] rounded-full" />
      </div>

      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      
      {/* 1. SCENE ARCHITECTURE (THE R3F CANVAS) */}
      <Background3D />

      <motion.div 
        className="relative z-10 w-full flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <div className="w-full">
          <Navbar />

          {/* 3. TYPOGRAPHY & DATA INJECTION - ELITE AESTHETIC */}
          <section id="about" className="min-h-screen flex flex-col justify-center items-center px-8 relative pt-40 pb-32 pointer-events-none">
            <div className="max-w-[1400px] w-full flex flex-col items-center text-center mt-20 pointer-events-auto z-10">
              
              <motion.h1 
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="text-6xl md:text-8xl lg:text-[120px] font-mono font-black tracking-tighter mb-4 bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-[length:200%_auto] animate-[shimmer_4s_infinite_linear] bg-clip-text text-transparent leading-none drop-shadow-xl pb-2"
              >
                Vyuh Matrix
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                className="text-xl md:text-3xl text-gray-500 tracking-tight max-w-4xl font-sans leading-relaxed mt-4 font-light drop-shadow-md"
              >
                <span className="text-gray-100 font-medium tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">We build custom AI to scale your business</span><br/>and secure your digital infrastructure.
              </motion.h2>

            </div>
          </section>

          {/* 4. THE METRIC NODES */}
          <section className="py-32 md:py-40 w-full flex justify-center px-8 relative pointer-events-none">
             <div className="pointer-events-auto w-full">
                <MetricNodes />
             </div>
          </section>

          <ClientMarquee />

          {/* SOLUTIONS / BENTO GRID */}
          <section id="solutions" className="min-h-screen py-40 md:py-48 flex flex-col justify-center items-center relative pointer-events-none">
            <div className="max-w-[1400px] w-full px-8 mb-20 text-center pointer-events-auto">
              <h2 className="text-3xl font-black tracking-[0.2em] text-gray-400 uppercase">
                &gt; Solutions
              </h2>
            </div>
            
            <div className="pointer-events-auto w-full relative z-20">
              <BentoGrid />
            </div>
          </section>

          <FaqSection />

          <div className="pointer-events-auto">
            <ContactForm />
            <Footer />
          </div>
        </div>
      </motion.div>
      <Chatbot />
    </main>
  );
}
