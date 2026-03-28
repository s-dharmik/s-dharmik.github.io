"use client";

import { motion } from "framer-motion";
import { Archive, BookOpen, Map, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-mono selection:bg-[#8b0000] selection:text-[#ff907f] min-h-screen overflow-x-hidden">
      
      {/* --- TOP NAV BAR --- */}
      <nav className="fixed top-0 w-full bg-[#131313]/80 backdrop-blur-md z-50 flex justify-between items-center px-8 md:px-12 py-6 border-b border-[#5a403c]/20">
        <div className="font-serif text-3xl tracking-wider text-[#ffb4a8] camelcase">
          Dharmik Savaliya
        </div>
        <div className="hidden md:flex items-center gap-12">
          <a href="#" className="text-[#e9c349] border-b-2 border-[#af8d11] pb-1 font-bold text-sm tracking-widest uppercase">Archive</a>
          <a href="#" className="text-[#e5e2e1] opacity-70 hover:opacity-100 hover:text-[#e9c349] transition-all duration-500 text-sm tracking-widest uppercase">Contracts</a>
          <a href="#" className="text-[#e5e2e1] opacity-70 hover:opacity-100 hover:text-[#e9c349] transition-all duration-500 text-sm tracking-widest uppercase">Meetings</a>
        </div>
        <button className="bg-[#8b0000] text-[#ffdad4] hover:bg-[#920703] px-8 py-2 text-sm font-bold tracking-[0.2em] transition-all active:scale-95 uppercase">
          Contact
        </button>
      </nav>

      {/* --- SIDE NAV BAR (Hover to Expand) --- */}
      <aside className="fixed left-0 top-0 h-full z-40 flex flex-col bg-[#0e0e0e] w-20 hover:w-64 transition-all duration-500 group border-r border-[#5a403c]/15 overflow-hidden">
        <div className="flex flex-col h-full py-32 gap-8">
          <a href="#" className="flex items-center px-6 gap-4 group-hover:pl-8 transition-all duration-300">
            <Archive className="text-[#e9c349] w-6 h-6 shrink-0" />
            <span className="opacity-0 group-hover:opacity-100 text-xs font-bold tracking-widest uppercase text-[#e9c349] whitespace-nowrap transition-opacity duration-300 delay-100">The Vault</span>
          </a>
          <a href="#" className="flex items-center px-6 gap-4 group-hover:pl-8 transition-all duration-300">
            <BookOpen className="text-[#e5e2e1]/50 w-6 h-6 shrink-0 hover:text-[#e9c349] transition-colors" />
            <span className="opacity-0 group-hover:opacity-100 text-xs font-bold tracking-widest uppercase text-[#e5e2e1]/50 whitespace-nowrap transition-opacity duration-300 delay-100">Dossiers</span>
          </a>
          <a href="#" className="flex items-center px-6 gap-4 group-hover:pl-8 transition-all duration-300">
            <Map className="text-[#e5e2e1]/50 w-6 h-6 shrink-0 hover:text-[#e9c349] transition-colors" />
            <span className="opacity-0 group-hover:opacity-100 text-xs font-bold tracking-widest uppercase text-[#e5e2e1]/50 whitespace-nowrap transition-opacity duration-300 delay-100">Territories</span>
          </a>
          <a href="#" className="flex items-center px-6 gap-4 group-hover:pl-8 transition-all duration-300">
            <Shield className="text-[#e5e2e1]/50 w-6 h-6 shrink-0 hover:text-[#e9c349] transition-colors" />
            <span className="opacity-0 group-hover:opacity-100 text-xs font-bold tracking-widest uppercase text-[#e5e2e1]/50 whitespace-nowrap transition-opacity duration-300 delay-100">Omertà</span>
          </a>
        </div>
      </aside>

      {/* --- MAIN HERO SECTION --- */}
      <main className="relative min-h-screen w-full flex items-center pt-20 pl-20">
        
        {/* Background Chiaroscuro Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop" 
            alt="Dark Office Vibe" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>

        {/* Content Canvas */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-12 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col"
            >
              <span className="text-[#e9c349] tracking-[0.5em] text-sm mb-4 font-bold uppercase">
                Full-Stack Software Developer
              </span>
              <h1 className="font-serif text-[6rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tight text-[#e5e2e1] uppercase drop-shadow-2xl">
                D. SAVALIYA
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-md border-l-4 border-[#8b0000] pl-8 py-4 bg-[#0e0e0e]/40 backdrop-blur-sm mt-4">
              <p className="text-[#e5e2e1]/80 text-lg leading-relaxed font-light italic">
                {`"I'm gonna make them an offer they can't refuse. My code is the ledger of problems solved and systems built."`}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap items-center gap-8 mt-8"
            >
              <button className="bg-[#8b0000] text-[#e5e2e1] hover:bg-[#a30000] transition-colors px-10 py-4 text-sm md:text-base font-bold tracking-widest uppercase active:scale-95">
                Enter The Family
              </button>
              <button className="text-[#e9c349] border-b border-[#e9c349]/30 hover:border-[#e9c349] transition-all px-2 py-4 text-xs md:text-sm font-bold tracking-widest uppercase">
                View Dossiers
              </button>
            </motion.div>
          </div>

          {/* Right Side Stats */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="hidden md:flex md:col-span-4 flex-col gap-12 items-end justify-center"
          >
            <div className="text-right flex flex-col gap-1">
              <span className="text-[#af8d11] text-xs font-bold tracking-widest camelcase">Coordinates</span>
              <span className="text-[#e5e2e1] font-serif text-3xl">Paderborn, DE</span>
            </div>
            <div className="text-right flex flex-col gap-1">
              <span className="text-[#af8d11] text-xs font-bold tracking-widest camelcase">Framework</span>
              <span className="text-[#e5e2e1] font-serif text-3xl">Spring / React</span>
            </div>
            <div className="text-right flex flex-col gap-1">
              <span className="text-[#af8d11] text-xs font-bold tracking-widest camelcase">Status</span>
              <span className="text-[#e9c349] font-serif text-3xl camelcase">Untouchable</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Narrative Bar */}
        <div className="absolute bottom-12 right-12 z-20 hidden md:flex items-center gap-6">
          <span className="h-[1px] w-24 bg-[#5a403c]/50"></span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#e5e2e1]/40">Keep your friends close, and your data closer.</span>
        </div>

      </main>

    </div>
  );
}