import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/SmoothScrolling";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vyuh Matrix | Custom AI Solutions for Business",
  description:
    "We build custom AI systems that save your team hours every week — cyber security, sales automation, marketing, HR, and web intelligence. Deployed in days, not months.",
  keywords: [
    "custom AI solutions",
    "AI automation",
    "business AI",
    "AI security",
    "sales automation AI",
  ],
  openGraph: {
    title: "Vyuh Matrix | Custom AI Solutions for Business",
    description:
      "Custom AI systems that save your team hours every week. Deployed in days, not months.",
    url: "https://vyuhmatrix.com",
    siteName: "Vyuh Matrix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased font-sans bg-[#020202]`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
