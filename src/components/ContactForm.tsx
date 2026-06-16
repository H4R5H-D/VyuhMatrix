"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 flex flex-col justify-center items-center px-8 overflow-hidden"
    >
      {/* Section ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF1E1E]/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-2xl w-full relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-[11px] tracking-[0.4em] text-[#FF1E1E]/50 uppercase mb-4">
            // Initiate Contact
          </p>
          <h2
            className="font-mono font-black tracking-tight text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Secure Channel
          </h2>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#FF1E1E]/60 to-transparent mx-auto mb-4" />
          <p className="font-mono text-[12px] text-gray-600 tracking-widest">
            DIRECT_NODE ·{" "}
            <a
              href="mailto:harsh@vyuhmatrix.com"
              className="text-[#FF1E1E]/70 hover:text-[#FF1E1E] transition-colors"
            >
              harsh@vyuhmatrix.com
            </a>
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative group"
        >
          {/* Outer glow on hover */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#FF1E1E]/20 via-[#FF1E1E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.07] p-8 md:p-12"
            style={{
              background: "rgba(6,6,6,0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Card scan line */}
            <div className="card-scan-line opacity-30 group-hover:opacity-70 transition-opacity duration-500" />

            {/* HUD corners */}
            <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#FF1E1E]/30 rounded-none" />
            <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#FF1E1E]/30 rounded-none" />
            <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#FF1E1E]/30 rounded-none" />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#FF1E1E]/30 rounded-none" />

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-5 py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full border border-[#FF1E1E]/30 bg-[#FF1E1E]/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-[#FF1E1E]" />
                </div>
                <p className="font-mono text-white text-lg tracking-wide">Transmission received.</p>
                <p className="font-mono text-[11px] text-gray-600 tracking-widest">
                  RESPONSE_ETA :: &lt;24h
                </p>
              </motion.div>
            ) : (
              <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField id="name" label="Name" type="text" placeholder="Your name" />
                  <InputField id="email" label="Email" type="email" placeholder="name@domain.com" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="msg" className="font-mono text-[10px] text-gray-600 tracking-[0.25em] uppercase">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    rows={5}
                    required
                    placeholder="Describe your project or challenge..."
                    className="w-full bg-white/[0.03] border border-white/[0.08] text-white text-sm font-mono p-4 rounded-lg resize-none placeholder:text-gray-700 focus:outline-none focus:border-[#FF1E1E]/40 focus:shadow-[0_0_0_1px_rgba(255,30,30,0.15)] transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="relative w-full py-4 rounded-lg font-mono text-xs tracking-[0.3em] uppercase text-white border border-[#FF1E1E]/35 bg-[#FF1E1E]/8 hover:bg-[#FF1E1E]/15 hover:border-[#FF1E1E]/60 hover:shadow-[0_0_28px_rgba(255,30,30,0.25)] disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-3 mt-2"
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Transmission
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Bottom label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 font-mono text-[9px] text-gray-700 tracking-[0.3em] uppercase"
        >
          AES-256 encrypted · Zero retention · Response within 24h
        </motion.p>
      </div>
    </section>
  );
}

function InputField({
  id, label, type, placeholder,
}: { id: string; label: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[10px] text-gray-600 tracking-[0.25em] uppercase">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-white/[0.03] border border-white/[0.08] text-white text-sm font-mono p-4 rounded-lg placeholder:text-gray-700 focus:outline-none focus:border-[#FF1E1E]/40 focus:shadow-[0_0_0_1px_rgba(255,30,30,0.15)] transition-all duration-200"
      />
    </div>
  );
}
