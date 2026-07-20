"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does Vyuh Matrix actually do?",
    answer:
      "We build custom AI systems for real business problems — security monitoring, sales outreach, marketing content, HR screening, and intelligent websites. You tell us where your team loses time or money; we design, build, and run the AI system that fixes it. No off-the-shelf chatbot wrappers — every system is built for your workflows.",
  },
  {
    question: "How long until my system is live?",
    answer:
      "Most integrations go live within 72 hours of kickoff. Larger custom builds take one to two weeks. We deploy in stages, so you see working results in the first week — not a demo at the end of a quarter.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every engagement starts with an AI Time Audit: we map your workflows and identify at least 4–5 hours per week of automatable work — if we can't, you don't pay. After the audit, every build is scoped at a fixed price agreed upfront. No open-ended retainers, no surprise invoices.",
  },
  {
    question: "Is my business data safe with AI?",
    answer:
      "Yes. Your data stays yours — it is never used to train public models and never shared with third parties. Every system we ship uses encryption in transit and at rest, role-based access, and is designed to pass a security review. If you have compliance requirements (SOC 2, ISO 27001, GDPR), we build to them from day one.",
  },
  {
    question: "Do I need a technical team to run this?",
    answer:
      "No. We handle deployment, monitoring, and maintenance. Your team gets plain-English dashboards and simple controls — if you can use email, you can run the systems we build. Training for your staff is included in every rollout.",
  },
  {
    question: "What if it doesn't work for my business?",
    answer:
      "That's what the audit is for. If we can't find measurable time or cost savings in your operation, we tell you honestly and refund the audit fee. We only propose a build when the numbers justify it — our business depends on your system paying for itself.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-32 flex flex-col items-center justify-center relative z-10 pointer-events-auto px-8">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-16">
          <p className="font-mono text-[11px] tracking-[0.4em] text-[#FF1E1E]/50 uppercase mb-4">
            {"// Straight Answers"}
          </p>
          <h2 className="font-mono font-black tracking-[0.1em] text-gray-200 uppercase text-3xl md:text-4xl">
            Questions
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF1E1E]/50 to-transparent mx-auto mt-5" />
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`border-b ${isOpen ? "border-[#FF1E1E]/30" : "border-white/10"} transition-colors duration-300 pb-4`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                >
                  <span className={`font-mono text-sm md:text-base tracking-wide transition-colors ${isOpen ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                    {faq.question}
                  </span>
                  <span className={`text-[#FF1E1E] transform transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2 pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
