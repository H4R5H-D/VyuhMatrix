"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, CircleX, Diamond, Receipt, ScanSearch, UserCheck } from "lucide-react";

// Vyuh Drift is the product we sell. Copy here must match drift.vyuhmatrix.com/pricing
// (trial, prices, which networks work today) — update both together.
const DRIFT_SIGNUP = "https://drift.vyuhmatrix.com/login?mode=signup&next=/channels";
const DRIFT_PRICING = "https://drift.vyuhmatrix.com/pricing";

const features = [
  { icon: Receipt, title: "A receipt for every post", text: "Verified, failed or could not check, with a link to the live post. Never just “sent”." },
  { icon: UserCheck, title: "Client approval in one link", text: "Your client approves the exact version. Edit it after, and it goes back to them." },
  { icon: ScanSearch, title: "Checks before it goes out", text: "Flags vague copy and claims you cannot back up." },
];

// Sample posts for the illustration; the colours are the app's own status colours.
const receipts = [
  { stripe: "#3DDC97", icon: CircleCheck, state: "Verified", where: "Bluesky · 09:00", text: "Fresh sourdough is ready at 8 tomorrow." },
  { stripe: "#F2B84B", icon: Diamond, state: "Published · Could not check", where: "LinkedIn · 11:00", text: "Our autumn menu is here: pumpkin loaf and chai buns." },
  { stripe: "#F26D6D", icon: CircleX, state: "Failed · reason shown, retry in one click", where: "Telegram · 16:00", text: "Thank you for 1,000 orders this year!" },
];

export function DriftSection() {
  return (
    <section id="drift" className="w-full py-28 md:py-36 px-6 flex justify-center relative z-10 pointer-events-auto">
      <div className="max-w-[1120px] w-full grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <p className="font-mono text-[11px] tracking-[0.35em] text-gray-500 uppercase mb-5">
            {"// Our product"}
          </p>
          <h2
            className="font-bold tracking-tight text-white text-4xl md:text-5xl leading-[1.05]"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Vyuh <span className="text-[#FF1E1E]">Drift</span>
          </h2>
          <p className="text-xl text-white mt-5 leading-snug">
            Social scheduling that shows you what actually posted.
          </p>
          <p className="text-gray-400 leading-relaxed mt-4 max-w-lg">
            Most schedulers stop at &ldquo;sent&rdquo;. Drift checks each post after it goes out
            and keeps a receipt you can show your client.
          </p>

          <ul className="flex flex-col gap-5 mt-8">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <Icon className="w-5 h-5 mt-0.5 text-[#FF1E1E] flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">{title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10">
            <a
              href={DRIFT_SIGNUP}
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition-shadow"
            >
              Start free for 10 days
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={DRIFT_PRICING}
              className="inline-flex items-center justify-center whitespace-nowrap px-8 py-3.5 rounded-full border border-white/15 text-gray-300 font-medium text-sm hover:border-white/40 hover:text-white transition-colors"
            >
              See pricing
            </a>
          </div>
          <p className="font-mono text-[10px] text-gray-500 tracking-widest mt-4">
            NO CARD · FROM $19 A MONTH
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mt-6 max-w-lg">
            Works today with LinkedIn profiles, Bluesky, Mastodon and Telegram. Facebook and
            Instagram are waiting on Meta&apos;s review.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "circOut" }}
        >
          <div className="rounded-2xl border border-white/[0.07] bg-[#070708]/90 p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] tracking-[0.25em] text-gray-500 uppercase">This week</span>
              <span className="font-mono text-[11px] text-gray-500">3 posts</span>
            </div>
            <ul className="flex flex-col gap-3">
              {receipts.map(({ stripe, icon: Icon, state, where, text }) => (
                <li
                  key={where}
                  className="rounded-lg border border-white/[0.07] bg-[#0b0b0d] p-4"
                  style={{ borderLeft: `3px solid ${stripe}` }}
                >
                  <p className="font-mono text-[11px] text-gray-500">{where}</p>
                  <p className="text-sm text-white mt-1.5">{text}</p>
                  <p className="flex items-center gap-1.5 text-xs mt-2.5" style={{ color: stripe }}>
                    <Icon className="w-3.5 h-3.5" />
                    {state}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-mono text-[10px] text-gray-600 tracking-widest mt-3 text-center">
            ILLUSTRATION WITH SAMPLE POSTS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
