import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Vyuh Matrix",
  description: "The terms that govern your use of the Vyuh Matrix website and services.",
};

const sections = [
  {
    h: "1. About this site",
    p: [
      "vyuhmatrix.com is the website of Vyuh Matrix, a provider of custom AI systems for businesses. The content on this site is for general information about our services.",
    ],
  },
  {
    h: "2. Service engagements",
    p: [
      "Client work — audits, builds, and ongoing maintenance — is governed by the individual written agreement we sign with each client, including scope, pricing, timelines, and guarantees. Nothing on this website constitutes a binding offer; final terms live in your agreement.",
    ],
  },
  {
    h: "3. Intellectual property",
    p: [
      "The Vyuh Matrix name, logo, and the content of this site are our property. Systems we build for clients are governed by the ownership terms in each client agreement — by default, you own what we build for you once it's paid for.",
    ],
  },
  {
    h: "4. Accuracy and availability",
    p: [
      "We work to keep this site accurate and available, but it is provided \"as is\", without warranties of any kind. Metrics shown on this site are illustrative of typical results and do not guarantee outcomes for any specific business.",
    ],
  },
  {
    h: "5. Limitation of liability",
    p: [
      "To the maximum extent permitted by law, Vyuh Matrix is not liable for indirect or consequential damages arising from use of this website. Liability under client engagements is defined in the applicable client agreement.",
    ],
  },
  {
    h: "6. Changes",
    p: [
      "We may update these terms from time to time. The date below reflects the latest revision; continued use of the site after changes means you accept the updated terms.",
    ],
  },
  {
    h: "7. Contact",
    p: [
      "Questions about these terms? Email harsh@vyuhmatrix.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="relative bg-[#020202] text-gray-300 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 pt-44 pb-32">
        <p className="font-mono text-[11px] tracking-[0.4em] text-[#FF1E1E]/50 uppercase mb-4">
          {"// Legal"}
        </p>
        <h1 className="font-mono font-black text-4xl md:text-5xl text-white tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="font-mono text-xs text-gray-600 mb-12">Last updated: June 2026</p>

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
