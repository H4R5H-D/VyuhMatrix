"use client";

import { useRef } from "react";
import { Background3D } from "@/components/Background3D";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VyuhLogo } from "@/components/VyuhLogo";
import { DriftSection } from "@/components/DriftSection";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck, TrendingUp, Megaphone, Users, LayoutTemplate,
  Check, ArrowRight, Zap, BadgeCheck, Lock,
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────── */

const solutions = [
  {
    id: "cyber",
    num: "01",
    domain: "Defense",
    title: "Cyber Security AI",
    subtitle: "Alert triage, built around your systems",
    desc: "AI that watches your logs and alerts, groups what matters, and drafts the first response, so your team spends its time on real incidents instead of noise. We tell you up front what it can and cannot catch.",
    features: [
      "Log and alert monitoring",
      "Anomalies flagged with the evidence attached",
      "Incident triage and first-response drafts",
      "A weekly summary of what was flagged and why",
      "Built on the tools you already run",
    ],
    terminal: [
      "> START: AI Time Audit, one week",
      "> MAP: your alerts and who handles them",
      "> BUILD: on your logs, tested before launch",
      "> PROVE: results from your own systems",
    ],
    icon: ShieldCheck,
    accent: "#FF1E1E",
    glow: "rgba(255,30,30,0.15)",
    border: "rgba(255,30,30,0.2)",
  },
  {
    id: "sales",
    num: "02",
    domain: "Revenue",
    title: "Sales Automation",
    subtitle: "Lead research and outreach, with a person in the loop",
    desc: "AI that researches leads, scores them against your ideal customer, and drafts personal outreach for your team to review and send. No mass blasting: every message is one a person approved.",
    features: [
      "Lead research with its sources cited",
      "Scoring against your ideal customer",
      "Personal outreach drafts, approved by a person",
      "Follow-up reminders so nobody slips",
      "Updates to the CRM you already use",
    ],
    terminal: [
      "> START: AI Time Audit, one week",
      "> MAP: your pipeline and who sells",
      "> BUILD: on your CRM and inbox",
      "> PROVE: results from your own systems",
    ],
    icon: TrendingUp,
    accent: "#3B82F6",
    glow: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    id: "marketing",
    num: "03",
    domain: "Growth",
    title: "Marketing AI",
    subtitle: "On-brand content, checked before it posts",
    desc: "AI trained on your brand voice and your facts drafts posts and campaigns your team approves. Every draft is checked for vague copy and claims you cannot back up, and published through Vyuh Drift so each post has a receipt.",
    features: [
      "Brand voice trained on your own material",
      "Campaign drafts across your channels",
      "Checks for vague copy and unbacked claims",
      "Approval before anything posts",
      "A receipt for every post, via Vyuh Drift",
    ],
    link: { href: "#drift", label: "See Vyuh Drift" },
    terminal: [
      "> START: AI Time Audit, one week",
      "> MAP: your channels and who posts",
      "> BUILD: on your brand voice and facts",
      "> PROVE: results from your own systems",
    ],
    icon: Megaphone,
    accent: "#A855F7",
    glow: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.2)",
  },
  {
    id: "hr",
    num: "04",
    domain: "Operations",
    title: "HR & Operations",
    subtitle: "Automate your internal infrastructure",
    desc: "From screening CVs to parsing documents and answering policy questions, AI takes the repetitive work off your team's plate. A person stays in charge of every hiring decision.",
    features: [
      "CV screening against your own criteria",
      "Document parsing and data extraction",
      "Onboarding checklists and reminders",
      "Policy questions answered from your handbook",
      "A clear log of what the AI did",
    ],
    terminal: [
      "> START: AI Time Audit, one week",
      "> MAP: your paperwork and who does it",
      "> BUILD: on your documents and tools",
      "> PROVE: results from your own systems",
    ],
    icon: Users,
    accent: "#10B981",
    glow: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    id: "web",
    num: "05",
    domain: "Infrastructure",
    title: "Website & App Intelligence",
    subtitle: "Websites and apps with AI built in",
    desc: "We build web and mobile products with AI where it helps: answering customers, tailoring what they see, and showing you what visitors actually do. Measured in your own analytics, not ours.",
    features: [
      "Website and app builds",
      "Chat and support assistants on your own content",
      "Tailored content and recommendations",
      "Conversion tracking you can check yourself",
      "A performance dashboard",
    ],
    terminal: [
      "> START: AI Time Audit, one week",
      "> MAP: your visitors and what they need",
      "> BUILD: on your site and analytics",
      "> PROVE: results from your own systems",
    ],
    icon: LayoutTemplate,
    accent: "#FF6B35",
    glow: "rgba(255,107,53,0.12)",
    border: "rgba(255,107,53,0.2)",
  },
];

const pillars = [
  {
    icon: Zap,
    title: "Speed",
    desc: "Most builds go live in days, not months. You see a working version early, and we adjust from there.",
  },
  {
    icon: BadgeCheck,
    title: "Proof",
    desc: "Every result we report comes from your own systems. No made-up dashboards, no vanity numbers.",
  },
  {
    icon: Lock,
    title: "Security",
    desc: "Each system gets only the access it needs, runs in your own accounts where possible, and we tell you exactly what data it keeps.",
  },
];

/* ── Card component ────────────────────────────────────────────── */

function SolutionCard({
  num, domain, title, subtitle, desc, features, terminal, link, icon: Icon, accent, glow, border,
  index,
}: (typeof solutions)[0] & { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "circOut" }}
      className="group relative w-full border-t border-white/[0.06] last:border-b"
    >
      {/* Hover background wash */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at ${isEven ? "80%" : "20%"} 50%, ${glow}, transparent 70%)` }}
      />

      <div className={`max-w-[1200px] mx-auto px-8 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${isEven ? "" : "md:[&>*:first-child]:order-2"}`}>

        {/* ── Text column ── */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-5xl font-black text-white/[0.06] leading-none">
              {num}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full border"
              style={{ color: accent, borderColor: border, background: glow }}
            >
              {domain}
            </span>
          </div>

          <div>
            <h2 className="font-mono font-black text-3xl md:text-4xl text-white tracking-tight leading-tight mb-2">
              {title}
            </h2>
            <p className="font-mono text-sm tracking-wide" style={{ color: accent }}>
              {subtitle}
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed text-base font-light max-w-lg">
            {desc}
          </p>

          <ul className="flex flex-col gap-3 mt-2">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <span
                  className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: glow, border: `1px solid ${border}` }}
                >
                  <Check className="w-2.5 h-2.5" style={{ color: accent }} />
                </span>
                {f}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-4 inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase py-3 px-6 rounded-full border w-fit group/btn transition-all duration-300"
            style={{
              color: accent,
              borderColor: border,
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = glow;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${glow}`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Ask about {title}
            <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
          </motion.a>
          {link && (
            <a
              href={link.href}
              className="-mt-2 inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-gray-400 hover:text-white transition-colors w-fit"
            >
              {link.label}
              <ArrowRight className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* ── Visual column ── */}
        <div className="relative flex flex-col items-center justify-center min-h-[320px]">
          {/* Large icon with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Outer ring */}
            <div
              className="absolute -inset-8 rounded-full opacity-20 blur-2xl"
              style={{ background: accent }}
            />
            <div
              className="relative w-28 h-28 rounded-full flex items-center justify-center"
              style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`, border: `1px solid ${border}` }}
            >
              <Icon className="w-12 h-12" style={{ color: accent }} />
            </div>
          </motion.div>

          {/* Terminal readout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="w-full max-w-sm rounded-xl border bg-black/60 backdrop-blur-xl overflow-hidden"
            style={{ borderColor: border }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 border-b"
              style={{ borderColor: border, background: glow }}
            >
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
              <div className="w-2 h-2 rounded-full bg-green-500/40" />
              <span className="font-mono text-[10px] text-gray-500 ml-2 tracking-widest">
                VYUH::{domain.toUpperCase()}_PLAN
              </span>
            </div>
            {/* Lines */}
            <div className="p-4 flex flex-col gap-2">
              {terminal.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="font-mono text-[11px] leading-relaxed"
                  style={{ color: i === 0 ? accent : "rgba(156,163,175,0.7)" }}
                >
                  {line}
                </motion.p>
              ))}
              {/* Blinking cursor */}
              <span
                className="font-mono text-[11px] animate-pulse"
                style={{ color: accent }}
              >
                █
              </span>
            </div>
          </motion.div>

          {/* Decorative dot grid */}
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{
            backgroundImage: `radial-gradient(circle, ${accent} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }} />
        </div>
      </div>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function SolutionsPage() {
  const pillarsRef = useRef(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-60px" });

  return (
    <main className="relative bg-[#020202] text-gray-200 selection:bg-[#FF1E1E] selection:text-white overflow-x-hidden min-h-screen">

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF1E1E]/[0.03] blur-[180px] rounded-full" />
        <div className="absolute top-0 right-1/3 w-[400px] h-[300px] bg-[#FF6B35]/[0.02] blur-[120px] rounded-full" />
      </div>

      <Background3D />

      <div className="relative z-10 w-full">
        <Navbar />

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-52 pb-32 flex flex-col items-center text-center px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="mb-8"
          >
            <VyuhLogo size={52} animate />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[11px] tracking-[0.4em] text-[#FF1E1E]/50 uppercase mb-4"
          >
            // Intelligence Suite
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="font-mono font-black tracking-tighter bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-[length:200%_auto] animate-[shimmer_5s_infinite_linear] bg-clip-text text-transparent leading-none pb-2"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
          >
            Solutions
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="w-40 h-[1px] my-6 bg-gradient-to-r from-transparent via-[#FF1E1E]/60 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-light"
          >
            One product you can try today, and five AI systems we build to
            order around the way your team already works.
          </motion.p>
        </section>

        {/* ── Available now: the product ───────────────────── */}
        <DriftSection />

        {/* ── Solution cards ────────────────────────────────── */}
        <section className="w-full">
          <div className="max-w-[1200px] mx-auto px-8 pb-8">
            <p className="font-mono text-[11px] tracking-[0.4em] text-[#FF1E1E]/50 uppercase mb-3">
              {"// Built to order"}
            </p>
            <h2 className="font-mono font-black text-3xl md:text-4xl text-white tracking-tight">
              Systems we build for your team
            </h2>
          </div>
          {solutions.map((sol, i) => (
            <SolutionCard key={sol.id} {...sol} index={i} />
          ))}
        </section>

        {/* ── Why Vyuh Matrix ───────────────────────────────── */}
        <section ref={pillarsRef} className="py-32 md:py-40 px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-20">
              <p className="font-mono text-[11px] tracking-[0.4em] text-[#FF1E1E]/50 uppercase mb-3">
                // Core Principles
              </p>
              <h2 className="font-mono font-black text-3xl md:text-4xl text-white tracking-tight">
                Why Vyuh Matrix
              </h2>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF1E1E]/50 to-transparent mx-auto mt-5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="group relative p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-xl hover:border-[#FF1E1E]/25 hover:bg-[#FF1E1E]/[0.03] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(255,30,30,0.2)] transition-shadow duration-500">
                    <Icon className="w-5 h-5 text-[#FF1E1E]" />
                  </div>
                  <h3 className="font-mono font-bold text-xl text-white mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-400 transition-colors">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────── */}
        <section className="py-32 px-8 flex flex-col items-center text-center border-t border-white/[0.05]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 max-w-xl"
          >
            <VyuhLogo size={40} animate />
            <h2 className="font-mono font-black text-2xl md:text-3xl text-white tracking-tight">
              Ready to deploy AI?
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Start with the one-week AI Time Audit. If we cannot find the
              hours, you don&apos;t pay. No lock-in, no bloated retainers.
            </p>
            <a
              href="/#contact"
              className="mt-2 inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase py-4 px-10 rounded-full border border-[#FF1E1E]/40 bg-[#FF1E1E]/10 text-white hover:bg-[#FF1E1E]/20 hover:border-[#FF1E1E]/70 hover:shadow-[0_0_30px_rgba(255,30,30,0.3)] transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
