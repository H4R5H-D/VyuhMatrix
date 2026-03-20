export function Footer() {
  return (
    <footer className="py-12 border-t border-[#222] bg-black/80 backdrop-blur-md px-8 relative z-20 pointer-events-auto">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-sm border-b border-[#222] pb-12">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-[#FF0044]">॥</span> &lt;Vyuh Matrix/&gt; <span className="text-[#FF0044]">॥</span>
          </span>
          <p className="text-gray-500 leading-relaxed mt-2">
            Cognitive Supremacy & Autonomous Agents for the structural layer of the future.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold tracking-widest uppercase mb-2">Systems</h4>
          <a href="#" className="text-gray-500 hover:text-[#FF0044] transition-colors">Neural Web</a>
          <a href="#" className="text-gray-500 hover:text-[#FF0044] transition-colors">Agent Swarm</a>
          <a href="#" className="text-gray-500 hover:text-[#FF0044] transition-colors">Documentation</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold tracking-widest uppercase mb-2">Legal</h4>
          <a href="#" className="text-gray-500 hover:text-[#FF0044] transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-[#FF0044] transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:text-[#FF0044] transition-colors">Data Processing Addendum</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold tracking-widest uppercase mb-2">Headquarters</h4>
          <p className="text-gray-500 leading-relaxed">
            Harsh<br/>
            777 Cybernetic Way<br/>
            Silicon Valley, CA 94025<br/>
            United States
          </p>
          <a href="mailto:harsh@vyuhmatrix.com" className="text-[#FF0044] hover:text-white transition-colors mt-2">harsh@vyuhmatrix.com</a>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-gray-600 font-mono">
        <p>© 2026 Vyuh Matrix. All Nodes Active.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>STATUS: <span className="text-green-500">OPTIMAL</span></span>
          <span className="text-[#FF0044]">|</span>
          <span>LATENCY: 12ms</span>
        </div>
      </div>
    </footer>
  );
}
