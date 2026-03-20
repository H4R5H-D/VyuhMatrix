"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ChevronRight } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: "bot" | "user", text: string}[]>([
    { sender: "bot", text: "Vyuh System initialized. State your directive." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: "user", text: input }]);
    const currentInput = input;
    setInput("");
    
    // Simulate bot thinking and responding
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: "bot", 
        text: `Acknowledged: "${currentInput}". A routing agent has been deployed to process your request.` 
      }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[60] p-4 bg-[#FF0044] text-white border border-[#FF0044] hover:bg-black hover:text-[#FF0044] transition-all duration-300 shadow-[0_0_20px_rgba(255,0,68,0.4)] ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <Terminal className="w-6 h-6" />
      </button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 right-8 z-[70] w-80 md:w-96 h-[500px] bg-[#050505] border border-[#333] flex flex-col font-mono shadow-[0_0_40px_rgba(0,0,0,0.8)] pointer-events-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-[#333] bg-[#111]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF0044] animate-pulse" />
                <span className="text-xs text-white font-bold tracking-widest uppercase">Vyuh_Agent</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-black/50 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                  <span className="text-[10px] text-gray-600 mb-1">{msg.sender === "user" ? "GUEST" : "SYSTEM"}</span>
                  <div className={`p-3 max-w-[85%] text-sm ${msg.sender === "user" ? "bg-[#222] text-white border border-[#444]" : "bg-[#0A0A0A] text-[#FF0044] border border-[#FF0044]/30"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-[#333] bg-[#111] flex gap-2">
              <span className="text-[#FF0044] mt-3">{'>'}</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none focus:ring-0 p-2"
                placeholder="Enter command..."
              />
              <button type="submit" className="text-gray-500 hover:text-[#FF0044] transition-colors p-2">
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
