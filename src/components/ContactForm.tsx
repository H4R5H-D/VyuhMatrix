"use client";

import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <section id="contact" className="min-h-screen py-32 flex flex-col justify-center items-center relative bg-black px-8">
      <div className="max-w-4xl w-full">


        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#050505] border border-[#222] p-8 md:p-12 relative overflow-hidden"
        >
          <div className="text-center mb-10 w-full flex flex-col items-center">
            <h3 className="text-white text-3xl font-bold font-sans tracking-tight">Secure Transmission Channel</h3>
            <p className="text-gray-500 mt-2 font-mono text-sm max-w-sm">
              Direct line to the architecture node:
              <br/>
              <a href="mailto:harsh@vyuhmatrix.com" className="text-white hover:text-gray-300 transition-colors">harsh@vyuhmatrix.com</a>
            </p>
          </div>
          
          <form className="flex flex-col gap-6 font-mono relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  className="bg-[#0A0A0A] border border-white/10 text-white p-4 focus:outline-none focus:border-white/30 transition-colors rounded-sm"
                  placeholder="Architect"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  className="bg-[#0A0A0A] border border-white/10 text-white p-4 focus:outline-none focus:border-white/30 transition-colors rounded-sm"
                  placeholder="name@domain.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-400 uppercase tracking-widest">Message</label>
              <textarea 
                rows={5}
                className="bg-[#0A0A0A] border border-white/10 text-white p-4 focus:outline-none focus:border-white/30 transition-colors resize-none rounded-sm"
                placeholder="How can we assist you?"
              />
            </div>

            <button type="submit" className="w-full py-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 rounded-sm mt-4">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
