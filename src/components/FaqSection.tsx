"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does the autonomous Swarm operate?",
    answer: "The Vyuh Matrix swarm utilizes highly decentralized, emergent AI agents. They constantly analyze incoming data vectors across your infrastructure, instantly sharing threat signatures and orchestrating active defense protocols without human intervention."
  },
  {
    question: "What is the structural latency of the Next-Gen Defense?",
    answer: "Our core data nodes guarantee sub-5ms operational latency. By processing logic at the absolute edge of your network, the Matrix neutralizes zero-day anomalies before they breach the application firewall."
  },
  {
    question: "Can I implement my own custom defensive schemas?",
    answer: "Yes. The architecture is fully programmable. You can inject custom neural schemas into the control plane using our deterministic API, allowing the swarm to adapt to highly specific industry attack vectors."
  },
  {
    question: "What defines Cognitive Supremacy?",
    answer: "It is the ability of a defense system to think faster and adapt more rapidly than any attacking entity. By leveraging massive parallel processing and continual intelligence sync, your enterprise remains perpetually one step ahead."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-32 flex flex-col items-center justify-center relative z-10 pointer-events-auto px-8">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-black tracking-[0.2em] text-gray-400 uppercase text-center mb-16">
          &gt; Operational Data
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div 
                key={i} 
                className={`border-b ${isOpen ? 'border-white/30' : 'border-white/10'} transition-colors duration-300 pb-4`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                >
                  <span className={`font-mono text-sm md:text-base tracking-wide transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {faq.question}
                  </span>
                  <span className={`text-[#FF1E1E] transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
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
                      <p className="pt-2 pb-6 text-gray-500 font-sans leading-relaxed text-sm md:text-base">
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
