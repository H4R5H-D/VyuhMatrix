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
import { VyuhLogo } from "@/components/VyuhLogo";
import { OfferBlock } from "@/components/OfferBlock";
import { ScrollProgress } from "@/components/ScrollProgress";
import { KineticHeading, Reveal } from "@/components/KineticHeading";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="relative bg-[#040404] text-gray-300 selection:bg-[#FF1E1E] selection:text-white overflow-x-hidden min-h-screen">

      {/* Single, soft ambient glow — no more competing layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] max-w-[95vw] bg-[#FF1E1E]/[0.05] blur-[160px] rounded-full" />
      </div>

      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      {/* Award-site signatures: scroll progress + fixed film grain */}
      <ScrollProgress />
      <div className="grain" />

      <Background3D />

      <motion.div
        className="relative z-10 w-full flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
      >
        <div className="w-full">
          <Navbar />

          {/* ── HERO ──────────────────────────────────────────── */}
          <section
            id="about"
            className="min-h-[92vh] flex flex-col justify-center items-center px-6 relative pt-32 pb-24 pointer-events-none"
          >
            <div className="max-w-4xl w-full flex flex-col items-center text-center pointer-events-auto">

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                className="mb-12"
              >
                <VyuhLogo size={72} />
              </motion.div>

              {/* Small kicker */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-2.5 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]" />
                <span className="font-mono text-[11px] tracking-[0.35em] text-gray-500 uppercase">
                  Custom AI Solutions
                </span>
              </motion.div>

              {/* Title — kinetic word-by-word reveal, type as the hero */}
              <KineticHeading
                delay={0.4}
                className="font-bold tracking-tight text-white leading-[1.05]"
                style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)", fontFamily: "var(--font-space-grotesk), sans-serif" }}
                segments={[
                  { text: "AI" }, { text: "that" }, { text: "saves" }, { text: "your" }, { br: true },
                  { text: "team" }, { text: "hours", accent: true }, { text: "every", accent: true }, { text: "week", accent: true },
                ]}
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mt-8 font-light"
              >
                We design, build, and run custom AI systems for security, sales,
                marketing, and operations — deployed in days, not months.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-12"
              >
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
                >
                  Book a free consult
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
                <motion.a
                  href="/solutions"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 text-gray-300 font-medium text-sm hover:border-white/40 hover:text-white"
                >
                  See what we build
                </motion.a>
              </motion.div>
            </div>

            {/* Minimal scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent"
              />
            </motion.div>
          </section>

          {/* ── METRICS ──────────────────────────────────────── */}
          <section className="py-24 md:py-32 w-full flex justify-center px-6 relative pointer-events-none">
            <div className="pointer-events-auto w-full">
              <MetricNodes />
            </div>
          </section>

          <ClientMarquee />

          {/* ── SOLUTIONS ────────────────────────────────────── */}
          <section
            id="solutions"
            className="py-28 md:py-36 flex flex-col justify-center items-center relative pointer-events-none"
          >
            <Reveal className="max-w-4xl w-full px-6 mb-16 text-center pointer-events-auto">
              <p className="font-mono text-[11px] tracking-[0.35em] text-gray-500 uppercase mb-5">
                What we do
              </p>
              <h2
                className="font-bold tracking-tight text-white text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                Five ways we put AI to work
              </h2>
            </Reveal>
            <div className="pointer-events-auto w-full relative z-20">
              <BentoGrid />
            </div>
          </section>

          <OfferBlock />

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
