import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Vyuh Matrix",
  description: "How Vyuh Matrix collects, uses, and protects your information.",
};

const sections = [
  {
    h: "1. What we collect",
    p: [
      "When you contact us through the form on this site or by email, we collect the information you choose to share: your name, email address, and the content of your message.",
      "Like most websites, our hosting provider (Vercel) collects standard technical logs — IP address, browser type, and pages visited — used for security and performance monitoring.",
    ],
  },
  {
    h: "2. How we use it",
    p: [
      "We use your contact information for exactly one purpose: replying to your inquiry and, if you become a client, delivering our services to you.",
      "We do not sell your data. We do not share it with advertisers. We do not add you to a marketing list without your explicit consent.",
    ],
  },
  {
    h: "3. AI and your data",
    p: [
      "Information you share with us is never used to train public AI models.",
      "For client projects, your business data stays yours. Systems we build for you process your data under your control, with encryption in transit and at rest, and access limited to the people you authorize.",
    ],
  },
  {
    h: "4. Data retention",
    p: [
      "We keep inquiry emails for as long as needed to serve you. If you'd like your information deleted, email us and we will remove it within 30 days.",
    ],
  },
  {
    h: "5. Third-party services",
    p: [
      "This site is hosted on Vercel. Their privacy practices are described in their own privacy policy. We use no advertising trackers and no third-party analytics that sell data.",
    ],
  },
  {
    h: "6. Your rights",
    p: [
      "You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it — at any time, by emailing harsh@vyuhmatrix.com. We respond within 30 days.",
    ],
  },
  {
    h: "7. Contact",
    p: [
      "Questions about this policy? Email harsh@vyuhmatrix.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative bg-[#020202] text-gray-300 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 pt-44 pb-32">
        <p className="font-mono text-[11px] tracking-[0.4em] text-[#FF1E1E]/50 uppercase mb-4">
          {"// Legal"}
        </p>
        <h1 className="font-mono font-black text-4xl md:text-5xl text-white tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-gray-600 mb-12">Last updated: June 2026</p>

        <p className="leading-relaxed text-gray-400 mb-10">
          Vyuh Matrix (&quot;we&quot;, &quot;us&quot;) builds custom AI systems for businesses.
          This page explains, in plain language, what information we collect on
          this website and what we do with it.
        </p>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-mono font-bold text-lg text-white mb-3">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="leading-relaxed text-gray-400 text-[15px] mb-3">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
