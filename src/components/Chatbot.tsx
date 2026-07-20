"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

type Msg = { sender: "bot" | "user"; text: string };

const QUICK_REPLIES = [
  "What do you build?",
  "How much does it cost?",
  "How fast can you deploy?",
  "Is my data safe?",
];

function botReply(input: string): string {
  const q = input.toLowerCase();

  if (q.includes("cost") || q.includes("price") || q.includes("much") || q.includes("pricing"))
    return "Every engagement starts with an AI Time Audit — we map your workflows and show you where AI saves 4–5 hours/week. If we can't find the savings, you don't pay. After that, builds are fixed-price, agreed upfront. Want me to set up a call?";

  if (q.includes("fast") || q.includes("long") || q.includes("time") || q.includes("deploy") || q.includes("quick"))
    return "Most systems go live within 72 hours of kickoff. Larger custom builds take one to two weeks — but you'll see working results in the first week, not a demo at the end.";

  if (q.includes("data") || q.includes("safe") || q.includes("secure") || q.includes("privacy") || q.includes("security"))
    return "Your data stays yours. It's never used to train public models or shared with third parties. Everything is encrypted in transit and at rest, with role-based access, and built to pass a security review (SOC 2 / ISO 27001 / GDPR if you need it).";

  if (q.includes("build") || q.includes("do") || q.includes("service") || q.includes("offer") || q.includes("solution"))
    return "We build custom AI for five areas: Cyber Security, Sales Automation, Marketing, HR & Operations, and Website Intelligence. Tell me where your team loses the most time and I'll point you to the right one.";

  if (q.includes("contact") || q.includes("call") || q.includes("talk") || q.includes("email") || q.includes("book"))
    return "Easiest way: email harsh@vyuhmatrix.com, or use the contact form at the bottom of this page. We reply within 24 hours.";

  if (q.includes("hi") || q.includes("hello") || q.includes("hey"))
    return "Hey! I'm the Vyuh Matrix assistant. Ask me about what we build, pricing, timelines, or data security.";

  return "Good question. The quickest way to get a real answer is to email harsh@vyuhmatrix.com or drop a note in the contact form below — Harsh replies within 24 hours. Meanwhile, ask me about pricing, timelines, or what we build.";
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { sender: "bot", text: "Hi 👋 I'm the Vyuh Matrix assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply(trimmed) }]);
    }, 700);
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-[#FF1E1E] text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,30,30,0.45)] hover:shadow-[0_0_40px_rgba(255,30,30,0.6)] hover:scale-105 transition-all duration-300"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-[#020202] animate-pulse" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed bottom-6 right-6 z-[70] w-[calc(100vw-3rem)] sm:w-96 h-[560px] max-h-[80vh] flex flex-col rounded-2xl overflow-hidden border border-[#FF1E1E]/20 shadow-[0_20px_60px_rgba(0,0,0,0.7)] pointer-events-auto"
            style={{ background: "rgba(8,6,6,0.97)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-white/[0.07] bg-gradient-to-r from-[#FF1E1E]/12 to-transparent">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-[#FF1E1E]/15 border border-[#FF1E1E]/30 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-[#FF1E1E]" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0a0606]" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-mono text-sm text-white font-bold tracking-wide">Vyuh Assistant</span>
                  <span className="font-mono text-[10px] text-green-400/80 tracking-widest">ONLINE</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="text-gray-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`px-4 py-2.5 max-w-[85%] text-sm leading-relaxed rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-[#FF1E1E]/90 text-white rounded-br-sm"
                        : "bg-white/[0.05] text-gray-200 border border-white/[0.06] rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.05] border border-white/[0.06] rounded-2xl rounded-bl-sm w-fit">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="w-1.5 h-1.5 rounded-full bg-[#FF1E1E]"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                    />
                  ))}
                </div>
              )}

              {/* Quick replies — only before first user message */}
              {messages.length === 1 && !typing && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {QUICK_REPLIES.map((qr) => (
                    <button
                      key={qr}
                      onClick={() => send(qr)}
                      className="px-3 py-1.5 rounded-full border border-[#FF1E1E]/30 text-[#FF1E1E]/90 text-xs hover:bg-[#FF1E1E]/10 hover:border-[#FF1E1E]/50 transition-all duration-200"
                    >
                      {qr}
                    </button>
                  ))}
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="p-3 border-t border-white/[0.07] flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-white/[0.04] border border-white/[0.08] text-white text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-[#FF1E1E]/40 transition-colors placeholder:text-gray-600"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                aria-label="Send"
                className="w-10 h-10 rounded-full bg-[#FF1E1E] text-white flex items-center justify-center hover:bg-[#FF1E1E]/85 hover:shadow-[0_0_16px_rgba(255,30,30,0.4)] transition-all duration-200 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
