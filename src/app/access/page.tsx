"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background3D } from "@/components/Background3D";
import { ScrollProgress } from "@/components/ScrollProgress";
import { KineticHeading, Reveal } from "@/components/KineticHeading";
import { VyuhLogo } from "@/components/VyuhLogo";
import {
  ShieldCheck, TrendingUp, Megaphone, Users, LayoutTemplate,
  MessageSquare, Lock, Check, Loader2, ArrowRight,
} from "lucide-react";

/* ── Projects we've built — snapshot only, access stays locked ── */
const projects = [
  {
    icon: ShieldCheck,
    name: "Cyber Security AI",
    is: "Autonomous defense system",
    does: "Monitors your network in real time, isolates threats before they spread, and patches vulnerabilities without human intervention.",
    status: "Live",
    accent: "#FF1E1E",
  },
  {
    icon: TrendingUp,
    name: "Sales Automation",
    is: "AI sales agents",
    does: "Qualifies leads, runs personalized outreach at scale, and closes deals 24/7 — synced to your CRM.",
    status: "Live",
    accent: "#3B82F6",
  },
  {
    icon: Megaphone,
    name: "Marketing AI",
    is: "Campaign engine",
    does: "Generates and runs hyper-personalized campaigns across every platform, tuned to your brand voice.",
    status: "Live",
    accent: "#A855F7",
  },
  {
    icon: Users,
    name: "HR & Ops AI",
    is: "Operations automation",
    does: "Screens résumés, parses documents, and runs onboarding flows so your team focuses on people, not paperwork.",
    status: "Beta",
    accent: "#10B981",
  },
  {
    icon: LayoutTemplate,
    name: "Web Intelligence",
    is: "Adaptive web & apps",
    does: "Digital products that track behavior, predict intent, and optimize for conversion in real time.",
    status: "Live",
    accent: "#FF6B35",
  },
  {
    icon: MessageSquare,
    name: "Vyuh Assistant",
    is: "Conversational AI",
    does: "A custom-trained assistant that answers customer questions, books meetings, and deflects support tickets 24/7.",
    status: "Beta",
    accent: "#FF1E1E",
  },
];

export default function AccessPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("sending");
    setTimeout(() => setState("done"), 1600);
  }

  return (
    <main className="relative bg-[#040404] text-gray-300 min-h-screen overflow-x-hidden selection:bg-[#FF1E1E] selection:text-white">
      <ScrollProgress />
      <div className="grain" />
      <Background3D />

      {/* Soft ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] max-w-[95vw] bg-[#FF1E1E]/[0.05] blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-40 pb-16 flex flex-col items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="mb-8"
          >
            <VyuhLogo size={56} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#FF1E1E]/25 bg-[#FF1E1E]/[0.06]"
          >
            <Lock className="w-3 h-3 text-[#FF1E1E]" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#FF1E1E]/80 uppercase">
              Invite Only
            </span>
          </motion.div>

          <KineticHeading
            delay={0.35}
            className="font-bold tracking-tight text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontFamily: "var(--font-space-grotesk), sans-serif" }}
            segments={[
              { text: "The" }, { text: "Vyuh" }, { text: "Matrix" }, { br: true },
              { text: "platform", accent: true }, { text: "—" }, { text: "request" }, { text: "access" },
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="text-lg text-gray-400 max-w-2xl leading-relaxed mt-8 font-light"
          >
            Every AI system we&apos;ve built, in one place. Access is granted
            by invitation — sign up below and we&apos;ll reach out when a seat
            opens for your use case.
          </motion.p>
        </section>

        {/* ── Signup / request access ──────────────────────── */}
        <section className="px-6 flex justify-center pb-24">
          <Reveal className="w-full max-w-lg">
            <div
              className="relative rounded-2xl border border-white/[0.08] p-8 md:p-10 overflow-hidden"
              style={{ background: "rgba(8,6,6,0.9)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            >
              {state === "done" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-4 py-8"
                >
                  <div className="w-16 h-16 rounded-full border border-[#FF1E1E]/30 bg-[#FF1E1E]/10 flex items-center justify-center">
                    <Check className="w-7 h-7 text-[#FF1E1E]" />
                  </div>
                  <h3 className="font-bold text-xl text-white" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    You&apos;re on the list
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    Thanks{name ? `, ${name.split(" ")[0]}` : ""}. Access is invite-only —
                    we&apos;ll email <span className="text-gray-300">{email}</span> the
                    moment a seat opens for you.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="text-center mb-2">
                    <h3 className="font-bold text-xl text-white mb-2" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                      Request early access
                    </h3>
                    <p className="text-gray-500 text-sm">Tell us where to reach you.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="ac-name" className="font-mono text-[10px] text-gray-600 tracking-[0.25em] uppercase">Name</label>
                    <input
                      id="ac-name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-white/[0.03] border border-white/[0.08] text-white text-sm rounded-lg px-4 py-3 placeholder:text-gray-700 focus:outline-none focus:border-[#FF1E1E]/40 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="ac-email" className="font-mono text-[10px] text-gray-600 tracking-[0.25em] uppercase">Work email</label>
                    <input
                      id="ac-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-white/[0.03] border border-white/[0.08] text-white text-sm rounded-lg px-4 py-3 placeholder:text-gray-700 focus:outline-none focus:border-[#FF1E1E]/40 transition-colors"
                    />
                  </div>

                  <motion.button
                    type="submit" disabled={state === "sending"}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="mt-2 w-full py-3.5 rounded-full bg-white text-black font-medium text-sm flex items-center justify-center gap-2 disabled:opacity-60 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
                  >
                    {state === "sending" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      <>Request Access <ArrowRight className="w-4 h-4" /></>
                    )}
                  </motion.button>

                  <p className="text-center font-mono text-[10px] text-gray-700 tracking-widest uppercase mt-1">
                    No spam · We reply within 24h
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </section>

        {/* ── Project showcase (locked) ────────────────────── */}
        <section className="px-6 pb-32 max-w-[1120px] mx-auto w-full">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] tracking-[0.35em] text-gray-500 uppercase mb-4">
              What&apos;s inside
            </p>
            <h2 className="font-bold tracking-tight text-white text-3xl md:text-4xl" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Six systems. One platform.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 overflow-hidden"
              >
                {/* Locked badge */}
                <div className="absolute top-5 right-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/[0.08] bg-black/40">
                  <Lock className="w-2.5 h-2.5 text-gray-500" />
                  <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">{p.status}</span>
                </div>

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/[0.08] mb-6 transition-colors duration-500"
                  style={{ background: `${p.accent}14` }}
                >
                  <p.icon className="w-5 h-5" style={{ color: p.accent }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                  {p.name}
                </h3>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: p.accent }}>
                  {p.is}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-400 transition-colors">
                  {p.does}
                </p>

                {/* Locked footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-gray-600">
                  <Lock className="w-3 h-3" />
                  <span className="font-mono text-[10px] tracking-widest uppercase">Access by invite</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom nudge back to signup */}
          <Reveal className="text-center mt-16" delay={0.1}>
            <p className="text-gray-500 mb-5">Want in? Request access above — it takes 20 seconds.</p>
            <a
              href="#top"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#FF1E1E]/40 text-white font-medium text-sm hover:bg-[#FF1E1E]/10 hover:border-[#FF1E1E]/70 transition-all duration-300"
            >
              Request Access <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </section>

        <Footer />
      </div>
    </main>
  );
}
