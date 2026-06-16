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
import { HUDOverlay } from "@/components/HUDOverlay";
import { VyuhLogo } from "@/components/VyuhLogo";
import { motion } from "framer-motion";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="relative bg-[#020202] text-gray-200 selection:bg-[#FF1E1E] selection:text-white overflow-x-hidden min-h-screen">

      {/* Multi-layer ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Core pulse — crimson */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF1E1E]/[0.04] blur-[160px] rounded-full animate-pulse" />
        {/* Top-left — ember warmth */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-[#FF6B35]/[0.025] blur-[120px] rounded-full" />
        {/* Bottom-right — deep red */}
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#FF1E1E]/[0.03] blur-[130px] rounded-full" />
      </div>

      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      {/* 3D Scene */}
      <Background3D />

      {/* HUD Overlay — scanlines, brackets, live data */}
      <HUDOverlay />

      <motion.div
        className="relative z-10 w-full flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      >
        <div className="w-full">
          <Navbar />

          {/* ── HERO ──────────────────────────────────────────── */}
          <section
            id="about"
            className="min-h-screen flex flex-col justify-center items-center px-8 relative pt-40 pb-32 pointer-events-none"
          >
            <div className="max-w-[1400px] w-full flex flex-col items-center text-center mt-20 pointer-events-auto z-10 gap-0">

              {/* Brand mark */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className="mb-10"
              >
                <VyuhLogo size={64} animate />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="brand-badge mb-8"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E] animate-pulse" />
                <span className="font-mono text-[11px] tracking-[0.3em] text-[#FF1E1E]/80 uppercase">
                  Next-Gen AI Solutions
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="font-mono font-black tracking-tighter mb-0 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-[length:200%_auto] animate-[shimmer_5s_infinite_linear] bg-clip-text text-transparent leading-none pb-2"
                style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
              >
                Vyuh Matrix
              </motion.h1>

              {/* Accent divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                className="w-56 h-[1px] my-7 bg-gradient-to-r from-transparent via-[#FF1E1E]/70 to-transparent"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                className="text-lg md:text-2xl lg:text-3xl max-w-3xl leading-relaxed font-light"
                style={{ fontFamily: "var(--font-sans-brand)" }}
              >
                <span className="text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]">
                  We build custom AI to scale your business
                </span>
                <span className="text-gray-500 block mt-1">
                  and secure your digital infrastructure.
                </span>
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="flex items-center gap-4 mt-10"
              >
                <a
                  href="/solutions"
                  className="px-7 py-3 rounded-full border border-[#FF1E1E]/40 bg-[#FF1E1E]/10 text-white font-mono text-xs tracking-widest uppercase hover:bg-[#FF1E1E]/20 hover:border-[#FF1E1E]/70 hover:shadow-[0_0_20px_rgba(255,30,30,0.3)] transition-all duration-300"
                >
                  View Solutions
                </a>
                <a
                  href="#contact"
                  className="px-7 py-3 rounded-full border border-white/10 text-gray-400 font-mono text-xs tracking-widest uppercase hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 1 }}
                className="mt-24 flex flex-col items-center gap-2"
              >
                <span className="font-mono text-[10px] text-[#FF1E1E]/40 tracking-[0.4em] uppercase">
                  Scroll
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[1px] h-8 bg-gradient-to-b from-[#FF1E1E]/50 to-transparent"
                />
              </motion.div>
            </div>
          </section>

          {/* ── METRIC NODES ─────────────────────────────────── */}
          <section className="py-32 md:py-40 w-full flex justify-center px-8 relative pointer-events-none">
            <div className="pointer-events-auto w-full">
              <MetricNodes />
            </div>
          </section>

          <ClientMarquee />

          {/* ── SOLUTIONS ────────────────────────────────────── */}
          <section
            id="solutions"
            className="min-h-screen py-40 md:py-48 flex flex-col justify-center items-center relative pointer-events-none"
          >
            <div className="max-w-[1400px] w-full px-8 mb-20 text-center pointer-events-auto">
              <p className="font-mono text-[11px] tracking-[0.4em] text-[#FF1E1E]/50 uppercase mb-4">
                // What we do
              </p>
              <h2 className="font-mono font-black tracking-[0.15em] text-gray-300 uppercase text-3xl md:text-4xl">
                Solutions
              </h2>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF1E1E]/50 to-transparent mx-auto mt-5" />
            </div>
            <div className="pointer-events-auto w-full relative z-20">
              <BentoGrid />
            </div>
          </section>

          <FaqSection />

          <div id="contact" className="pointer-events-auto">
            <ContactForm />
            <Footer />
          </div>
        </div>
      </motion.div>

      <Chatbot />
    </main>
  );
}
