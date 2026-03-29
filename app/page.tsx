"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Archive, BookOpen, Map, Shield, ArrowRight, Lock } from "lucide-react";

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
          <Image
            src="https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=2070&auto=format&fit=crop"
            alt="Dark Office Vibe"
            fill
            priority
            className="object-cover grayscale brightness-50"
          />
        </div>



        {/* Content Canvas */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-12 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          <div className="md:col-span-8 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col">
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
              className="flex flex-wrap items-center gap-8 mt-8">
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
            className="hidden md:flex md:col-span-4 flex-col gap-12 items-end justify-center">
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




      {/* --- THE ARCHIVE (BENTO GRID) --- */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-12 md:px-24 py-32 pl-20 md:pl-32">

        {/* Section Header */}
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <span className="text-[#af8d11] font-mono text-xs tracking-[0.4em] uppercase mb-4 block">
              Confidential Records
            </span>
            <h2 className="font-serif text-6xl md:text-8xl text-[#e5e2e1] leading-none tracking-tight camelcase">
              The Archives
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-right border-r-2 border-[#8b0000] pr-6 py-2">
            <p className="text-[#e5e2e1]/60 font-mono text-sm max-w-xs leading-relaxed italic">
              {`"A man who doesn't spend time with his projects can never be a real developer."`}
            </p>
          </motion.div>


        </header>




        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px] md:auto-rows-[400px]">

          {/* Dossier 01 - Large Lead */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-[#1c1b1b] cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
              <div>
                <span className="text-[#e9c349] text-xs font-bold tracking-[0.3em] uppercase block mb-3 font-mono">
                  Full-Stack Architecture
                </span>
                <h3 className="font-serif text-4xl md:text-5xl text-white camelcase">The Spring Liquidation</h3>
              </div>
              <ArrowRight className="hidden md:block text-[#af8d11] w-10 h-10 group-hover:translate-x-2 transition-transform duration-500" />
            </div>
            <div className="absolute top-8 right-8 border border-white/20 px-3 py-1 text-[10px] tracking-widest text-white/60 font-mono">
              FILE_REF: 1947_HV
            </div>
          </motion.div>




          {/* Dossier 02 - Vertical */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 md:row-span-1 group relative overflow-hidden bg-[#1c1b1b] cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478144596228-39227568114f?q=80&w=800&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-[#af8d11] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2 font-mono">API Intelligence</span>
              <h3 className="font-serif text-3xl text-white camelcase">Intercepted REST Comms</h3>
            </div>
          </motion.div>




          {/* Dossier 03 - Square */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-4 md:row-span-1 group relative overflow-hidden bg-[#1c1b1b] cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520114092497-767812f86ab5?q=80&w=800&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-[#af8d11] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2 font-mono">Android Asset Management</span>
              <h3 className="font-serif text-3xl text-white camelcase">Vegas Mobile Transfers</h3>
            </div>
          </motion.div>




          {/* Dossier 04 - Long Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-7 md:row-span-1 group relative overflow-hidden bg-[#1c1b1b] cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop')" }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-[#e9c349] text-xs font-bold tracking-[0.3em] uppercase block mb-2 font-mono">Database Logistics</span>
              <h3 className="font-serif text-4xl text-white camelcase">The SQL Convoy</h3>
            </div>
          </motion.div>




          {/* Dossier 05 - Small Feature (Redacted) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-5 md:row-span-1 group relative overflow-hidden bg-[#201f1f] cursor-pointer border-t-2 border-[#8b0000]/30 flex flex-col justify-center p-8 md:p-12 hover:bg-[#2a2a2a] transition-colors duration-500">
            <Lock className="text-[#af8d11] mb-6 w-10 h-10" />
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 camelcase">Redacted_Case_049</h3>
            <p className="text-[#e5e2e1]/60 text-sm leading-relaxed max-w-xs font-mono">
              Classified operations regarding the microservices expansion. Requires Level 5 clearance and signature from the Consigliere.
            </p>
            <div className="mt-8 flex gap-4">
              <span className="bg-[#e9c349] text-[#241a00] text-[10px] px-3 py-1 font-bold tracking-widest uppercase font-mono">CLASSIFIED</span>
              <span className="bg-[#8b0000] text-[#ff907f] text-[10px] px-3 py-1 font-bold tracking-widest uppercase font-mono">TOP_SECRET</span>
            </div>
          </motion.div>

        </div>
      </section>



      {/* THE BACKSTORY - ABOUT ME SECTION */}


    </div>
  );
}