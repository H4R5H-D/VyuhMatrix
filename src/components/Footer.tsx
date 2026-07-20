import { VyuhLogo } from "@/components/VyuhLogo";

export function Footer() {
  return (
    <footer className="py-14 border-t border-white/[0.06] bg-black/80 backdrop-blur-md px-8 relative z-20 pointer-events-auto">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-sm border-b border-white/[0.06] pb-12">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <a href="/" className="flex items-center gap-3">
            <VyuhLogo size={34} />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-[15px] text-white tracking-wide">Vyuh Matrix</span>
              <span className="text-[9px] text-[#FF1E1E]/60 tracking-[0.25em] uppercase">AI Solutions</span>
            </div>
          </a>
          <p className="text-gray-500 leading-relaxed mt-2 text-[13px]">
            Custom AI systems that save your team hours every week — built,
            deployed, and maintained for you.
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold tracking-widest uppercase mb-2 text-xs">Explore</h4>
          <a href="/" className="text-gray-500 hover:text-[#FF1E1E] transition-colors">Home</a>
          <a href="/solutions" className="text-gray-500 hover:text-[#FF1E1E] transition-colors">Solutions</a>
          <a href="/#faq" className="text-gray-500 hover:text-[#FF1E1E] transition-colors">FAQ</a>
          <a href="/#contact" className="text-gray-500 hover:text-[#FF1E1E] transition-colors">Contact</a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold tracking-widest uppercase mb-2 text-xs">Legal</h4>
          <a href="/privacy" className="text-gray-500 hover:text-[#FF1E1E] transition-colors">Privacy Policy</a>
          <a href="/terms" className="text-gray-500 hover:text-[#FF1E1E] transition-colors">Terms of Service</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold tracking-widest uppercase mb-2 text-xs">Contact</h4>
          <a
            href="mailto:harsh@vyuhmatrix.com"
            className="text-[#FF1E1E]/80 hover:text-[#FF1E1E] transition-colors"
          >
            harsh@vyuhmatrix.com
          </a>
          <p className="text-gray-600 text-[12px] leading-relaxed">
            We reply within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-gray-600 font-mono">
        <p>© {new Date().getFullYear()} Vyuh Matrix. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0 items-center">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            STATUS: <span className="text-green-500">OPERATIONAL</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
