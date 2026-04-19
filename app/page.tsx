"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Archive, BookOpen, Shield, ArrowRight, Lock, MapPin, Mail, ShieldCheck, X, Terminal } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "./config/site";

// --- DOSSIER DATA DICTIONARY ---
// This holds the data for your modals so we don't clutter the HTML
type DossierKey = "secai" | "sams" | "mern" | "neural" | "lira";

const dossierData: Record<DossierKey, { title: string, objective: string, execution: string, image: string, isNDA: boolean, codeLink?: string, liveLink?: string }> = {
  secai: {
    title: "SecAI Integration",
    objective: "Developed an AI-driven plugin for SonarQube integrating the Cognicrypt SAST tool to detect and explain security vulnerabilities in source code. Implemented Quick Fix and Pull Request automation to bridge analysis results with real-world developer workflows.",
    execution: "Java, React.js, Docker, SonarQube, Ubuntu, GitHub, VM, CI/CD. Designed automated test scenarios using JUnit5, achieving 57% backend code coverage.",
    image: "/project-images/secai.webp",
    isNDA: false,
  },
  sams: {
    title: "Smart S.A.M.S.",
    objective: "Developed a dual-application ecosystem to automate attendance tracking. Built one portal for system administration and another for faculty/student daily use, achieving 60% higher tracking accuracy over manual methods.",
    execution: "Android, Java, PHP, Google Firebase, MySQL, phpMyAdmin. Hosted via Hostinger.",
    image: "/project-images/smart-sams.webp",
    isNDA: false,
    codeLink: "https://github.com/s-dharmik/Smart-SAMS",
  },
  mern: {
    title: "The MERN Network",
    objective: "Engineered a full-stack web application designed for secure content publication. Implemented strict JWT (JSON Web Token) authentication to manage user sessions and protect API routes.",
    execution: "MongoDB, ExpressJS, React, NodeJS. Full CRUD operations locked behind authenticated sessions.",
    image: "/project-images/mern.webp",
    isNDA: false,
    codeLink: "https://github.com/s-dharmik/MERN_Blog_app",
  },
  neural: {
    title: "Neural Argumentation",
    objective: "Built a machine learning system capable of extracting and identifying foremost arguments from unstructured dataset corpuses. Executed data splitting, argument mining, and quality assessment.",
    execution: "Python, Pandas, NumPy, NLTK (Natural Language Toolkit). Algorithm achieved an accuracy rate exceeding 80%.",
    image: "/project-images/neural-nets.webp",
    isNDA: false,
    codeLink: "https://github.com/s-dharmik/Argumentation-using-Neural-Nets",
  },
  lira: {
    title: "LIRA Service GmbH",
    objective: "Designed and improved enterprise Java-based backend components. Identified workflow delays and implemented real-time, barcode-based asset handling to reduce task handling time by 10 minutes per session.",
    execution: "Java, Spring Boot, SQL, Oracle, JPA, SWT, Android Studio, Eclipse. Secured REST APIs for mobile-to-backend communication, contributing to a 40% increase in active system usage.",
    image: "/project-images/lira_service.png",
    isNDA: true,
  }
};





// --- BRAND ICON COMPONENTS (LUCIDE-COMPATIBLE) ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);



export default function Home() {
  const [activeDossier, setActiveDossier] = useState<DossierKey | null>(null);

  // Helper to grab the currently active data safely
  const activeData = activeDossier ? dossierData[activeDossier] : null;


  const [activeSection, setActiveSection] = useState("home_page");

  // --- WEB3FORMS STATE ---
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home_page", "archive", "tradecraft", "family", "contact"];
      let current = "home_page";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };






  // Added the entire form handling logic
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Encrypting Transmission...");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    // Grabbing the secret key from your .env.local file
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.error("Missing Web3Forms Access Key in environment variables.");
      setFormStatus("System Error: Missing Credentials.");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("Proposition Accepted.");
        formElement.reset();
      } else {
        console.error("Error submitting form:", data);
        setFormStatus("Transmission Failed. Try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormStatus("Network Interference. Try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };








  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-mono selection:bg-[#8b0000] selection:text-[#ff907f] min-h-screen overflow-x-hidden">

      {/* --- TOP NAV BAR --- */}
      <nav className="fixed top-0 w-full bg-[#131313]/80 backdrop-blur-md z-50 flex justify-between items-center px-8 md:px-12 py-6 border-b border-[#5a403c]/20">

        {/* Left: The Brand */}
        <div className="font-serif text-3xl tracking-wider text-[#ffb4a8] camelcase">
          <a href="#home_page">{siteConfig.name}</a>
        </div>

        <a href="#contact">
          <button className="bg-[#8b0000] text-[#ffdad4] hover:bg-[#920703] px-8 py-2 text-sm font-bold tracking-[0.2em] transition-all active:scale-95 uppercase font-mono">
            Contact
          </button>
        </a>

      </nav>

      {/* --- SIDE NAV BAR (Dynamic Scroll Spy) --- */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full z-40 flex-col bg-[#0e0e0e] w-20 hover:w-64 transition-all duration-500 group border-r border-[#5a403c]/15 overflow-hidden">
        <div className="flex flex-col h-full py-32 gap-8">
          <a
            href="#home_page"
            onClick={(e) => scrollToSection(e, "home_page")}
            className="flex items-center px-6 gap-4 group-hover:pl-8 transition-all duration-300">
            <Shield className={`${activeSection === "home_page" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"} w-6 h-6 shrink-0 hover:text-[#e9c349] transition-colors`} />
            <span className={`opacity-0 group-hover:opacity-100 text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 delay-100 ${activeSection === "home_page" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"}`}>
              Command
            </span>
          </a>

          <a
            href="#archive"
            onClick={(e) => scrollToSection(e, "archive")}
            className="flex items-center px-6 gap-4 group-hover:pl-8 transition-all duration-300">
            <Archive className={`${activeSection === "archive" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"} w-6 h-6 shrink-0 hover:text-[#e9c349] transition-colors`} />
            <span className={`opacity-0 group-hover:opacity-100 text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 delay-100 ${activeSection === "archive" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"}`}>
              The Vault
            </span>
          </a>


          <a
            href="#tradecraft"
            onClick={(e) => scrollToSection(e, "tradecraft")}
            className="flex items-center px-6 gap-4 group-hover:pl-8 transition-all duration-300">
            <Terminal className={`${activeSection === "tradecraft" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"} w-6 h-6 shrink-0 hover:text-[#e9c349] transition-colors`} />
            <span className={`opacity-0 group-hover:opacity-100 text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 delay-100 ${activeSection === "tradecraft" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"}`}>
              Tradecraft
            </span>
          </a>

          <a
            href="#family"
            onClick={(e) => scrollToSection(e, "family")}
            className="flex items-center px-6 gap-4 group-hover:pl-8 transition-all duration-300">
            <BookOpen className={`${activeSection === "family" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"} w-6 h-6 shrink-0 hover:text-[#e9c349] transition-colors`} />
            <span className={`opacity-0 group-hover:opacity-100 text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 delay-100 ${activeSection === "family" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"}`}>
              Backstory
            </span>
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="flex items-center px-6 gap-4 group-hover:pl-8 transition-all duration-300">
            <MapPin className={`${activeSection === "contact" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"} w-6 h-6 shrink-0 hover:text-[#e9c349] transition-colors`} />
            <span className={`opacity-0 group-hover:opacity-100 text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 delay-100 ${activeSection === "contact" ? "text-[#e9c349]" : "text-[#e5e2e1]/50"}`}>
              Contracts
            </span>
          </a>

        </div>
      </aside>

      {/* --- MAIN HERO SECTION --- */}
      <main id="home_page" className="relative min-h-screen w-full flex items-center pt-24 pb-12 md:pl-20">

        {/* Background Chiaroscuro Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/80 to-transparent z-10"></div>
          <Image
            src="/project-images/typewriter.png"
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
                {siteConfig.role}
              </span>
              <h1 className="font-serif text-[6rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tight text-[#e5e2e1] uppercase drop-shadow-2xl">
                {siteConfig.short_name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-md border-l-4 border-[#8b0000] pl-8 py-4 bg-[#0e0e0e]/40 backdrop-blur-sm mt-4">
              <p className="text-[#e5e2e1]/80 text-lg leading-relaxed font-light italic">
                {`"I build systems you can rely on. My code is the ledger of secure APIs, clean architecture, and unbreakable backends."`}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap items-center gap-8 mt-8"
            >
              <a href="#contact">
                <button className="bg-[#8b0000] text-[#e5e2e1] hover:bg-[#a30000] transition-colors px-10 py-4 text-sm md:text-base font-bold tracking-widest uppercase active:scale-95">
                  Enter The Family
                </button>
              </a>


              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="relative group">
               <button className="border border-[#5a403c] text-[#e5e2e1]/80 hover:border-[#e9c349] hover:text-[#e9c349] transition-all px-6 py-4 text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                  <Archive className="w-4 h-4" /> Extract Record
                </button>

                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0e0e0e] text-[#e9c349] font-mono text-[10px] tracking-widest px-3 py-2 border border-[#e9c349]/30 whitespace-nowrap pointer-events-none z-50">
                  [ INITIATE RESUME DOWNLOAD ]
                </span>

              </a>

              <a href="#archive">
                <button className="text-[#e9c349] border-b border-[#e9c349]/30 hover:border-[#e9c349] transition-all px-2 py-4 text-xs md:text-sm font-bold tracking-widest uppercase">
                  View Dossiers
                </button>
              </a>
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
              <span className="text-[#e5e2e1] font-serif text-3xl">{siteConfig.location}</span>
            </div>
            <div className="text-right flex flex-col gap-1">
              <span className="text-[#af8d11] text-xs font-bold tracking-widest camelcase">Framework</span>
              <span className="text-[#e5e2e1] font-serif text-3xl">{siteConfig.framework}</span>
            </div>
            <div className="text-right flex flex-col gap-1">
              <span className="text-[#af8d11] text-xs font-bold tracking-widest camelcase">Status</span>
              <span className="text-[#e9c349] font-serif text-3xl camelcase">{siteConfig.status}</span>
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
      <section id="archive" className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-24 py-24 md:py-32 md:pl-32">

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

          {/* Dossier 01 - Large Lead: SecAI */}
          <motion.div
            onClick={() => setActiveDossier("secai")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-8 md:row-span-2 group relative overflow-hidden bg-[#1c1b1b] cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
              style={{ backgroundImage: `url('${dossierData.secai.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
              <div className="max-w-xl">
                <span className="text-[#e9c349] text-xs font-bold tracking-[0.3em] uppercase block mb-3 font-mono">
                  {"Master's Project / React & Java"}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl text-white camelcase mb-4">{dossierData.secai.title}</h3>
                <p className="hidden md:block text-[#e5e2e1]/70 font-mono text-sm leading-relaxed">
                  AI-driven SonarQube plugin integrating Cognicrypt SAST. Engineered to detect vulnerabilities and deploy Quick Fix automations.
                </p>
              </div>
              <ArrowRight className="hidden md:block text-[#af8d11] w-10 h-10 group-hover:translate-x-2 transition-transform duration-500 shrink-0" />
            </div>
            <div className="absolute top-8 right-8 border border-white/20 px-3 py-1 text-[10px] tracking-widest text-white/60 font-mono">
              FILE_REF: 2025_SONAR
            </div>
          </motion.div>

          {/* Dossier 02 - Vertical: Smart SAMS */}
          <motion.div
            onClick={() => setActiveDossier("sams")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 md:row-span-1 group relative overflow-hidden bg-[#1c1b1b] cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${dossierData.sams.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-[#af8d11] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                Android / Firebase / PHP
              </span>
              <h3 className="font-serif text-3xl text-white camelcase mb-2">{dossierData.sams.title}</h3>
              <p className="text-[#e5e2e1]/60 font-mono text-xs">Dual-app architecture for automated tracking operations.</p>
            </div>
          </motion.div>

          {/* Dossier 03 - Square: Blog WebApp */}
          <motion.div
            onClick={() => setActiveDossier("mern")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-4 md:row-span-1 group relative overflow-hidden bg-[#1c1b1b] cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${dossierData.mern.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-[#af8d11] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                MERN Stack / JWT
              </span>
              <h3 className="font-serif text-3xl text-white camelcase mb-2">{dossierData.mern.title}</h3>
              <p className="text-[#e5e2e1]/60 font-mono text-xs">Secure MongoDB & Node.js operations with strict authentication.</p>
            </div>
          </motion.div>

          {/* Dossier 04 - Long Horizontal: Neural Networks */}
          <motion.div
            onClick={() => setActiveDossier("neural")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-7 md:row-span-1 group relative overflow-hidden bg-[#1c1b1b] cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${dossierData.neural.image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-[#e9c349] text-xs font-bold tracking-[0.3em] uppercase block mb-2 font-mono">
                Python / Pandas / NLTK
              </span>
              <h3 className="font-serif text-4xl text-white camelcase mb-2">{dossierData.neural.title}</h3>
              <p className="text-[#e5e2e1]/70 font-mono text-sm max-w-lg">
                Argument mining and quality assessment achieving 80%+ accuracy across dataset corpuses.
              </p>
            </div>
          </motion.div>

          {/* Dossier 05 - Small Feature: LIRA / Redacted */}
          <motion.div
            onClick={() => setActiveDossier("lira")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:col-span-5 md:row-span-1 group relative overflow-hidden bg-[#201f1f] cursor-pointer border-t-2 border-[#8b0000]/30 flex flex-col justify-center p-8 md:p-12 hover:bg-[#2a2a2a] transition-colors duration-500"
          >
            <Lock className="text-[#af8d11] mb-6 w-10 h-10" />
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 camelcase">REDACTED_LIRA_OPS</h3>
            <p className="text-[#e5e2e1]/60 text-sm leading-relaxed max-w-xs font-mono">
              Classified operations regarding enterprise CMMS backend infrastructure and REST APIs at LIRA Service GmbH.
            </p>
            <div className="mt-8 flex gap-4">
              <span className="bg-[#e9c349] text-[#241a00] text-[10px] px-3 py-1 font-bold tracking-widest uppercase font-mono">CLASSIFIED</span>
              <span className="bg-[#8b0000] text-[#ff907f] text-[10px] px-3 py-1 font-bold tracking-widest uppercase font-mono">NDA_ACTIVE</span>
            </div>
          </motion.div>

        </div>
      </section>






      {/* --- TRADECRAFT (SKILLS) --- */}
      <section id="tradecraft" className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-24 py-24 md:py-32 md:pl-32 border-t border-[#5a403c]/20">
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#af8d11] font-mono text-xs tracking-[0.4em] uppercase mb-4 block flex items-center gap-3">
              <Terminal className="w-4 h-4" /> Operational Capabilities
            </span>
            <h2 className="font-serif text-6xl md:text-8xl text-[#e5e2e1] leading-none tracking-tight camelcase">
              Tradecraft
            </h2>
          </motion.div>
        </header>


        {/* The Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Column 1: Core Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="border-l border-[#8b0000]/50 pl-6 space-y-6"
          >
            <h3 className="font-mono text-sm tracking-[0.3em] text-[#e9c349] uppercase">Syntax & Linguistics</h3>
            <ul className="space-y-4 font-mono text-[#e5e2e1]/80 text-sm">
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>Java</span> <span className="text-[#af8d11]">Advanced</span>
              </li>
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>SQL</span> <span className="text-[#af8d11]">Advanced</span>
              </li>
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>Python</span> <span className="text-[#af8d11]">Proficient</span>
              </li>
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>JavaScript / HTML5</span> <span className="text-[#af8d11]">Proficient</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Frameworks & Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="border-l border-[#8b0000]/50 pl-6 space-y-6"
          >
            <h3 className="font-mono text-sm tracking-[0.3em] text-[#e9c349] uppercase">Infrastructure</h3>
            <ul className="space-y-4 font-mono text-[#e5e2e1]/80 text-sm">
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>Spring Boot & JPA</span> <span className="text-[#af8d11]">Production</span>
              </li>
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>React.js / Node.js</span> <span className="text-[#af8d11]">Production</span>
              </li>
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>REST & Microservices</span> <span className="text-[#af8d11]">Production</span>
              </li>
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>Android SDK / SWT</span> <span className="text-[#e5e2e1]/40">Prior Use</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Tools, DBs, & Deployment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="border-l border-[#8b0000]/50 pl-6 space-y-6"
          >
            <h3 className="font-mono text-sm tracking-[0.3em] text-[#e9c349] uppercase">Field Equipment</h3>
            <ul className="space-y-4 font-mono text-[#e5e2e1]/80 text-sm">
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>Docker & CI/CD</span> <span className="text-[#af8d11]">Daily Use</span>
              </li>
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>Oracle & MongoDB</span> <span className="text-[#af8d11]">Proficient</span>
              </li>
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>Git & GitHub Actions</span> <span className="text-[#af8d11]">Daily Use</span>
              </li>
              <li className="flex justify-between border-b border-[#5a403c]/20 pb-2">
                <span>Linux & Postman</span> <span className="text-[#af8d11]">Standard</span>
              </li>
            </ul>
          </motion.div>

        </div>

      </section>








      {/* --- THE BACKSTORY (ABOUT ME) --- */}
      <section id="family" className="relative w-full overflow-hidden py-24 md:py-32 border-t border-[#5a403c]/20">
        <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Content: The Narrative */}
          <div className="lg:col-span-7 flex flex-col z-10">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-serif text-6xl md:text-8xl text-[#e9c349] tracking-tight uppercase mb-8"
            >
              The Backstory
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-xl space-y-8"
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#e5e2e1]/90 italic border-l-2 border-[#8b0000] pl-6">
                {"Architecture, design, and strategy are the three pillars of my operation. Every microservice is a calculated move; every API endpoint is a signed contract."}
              </p>

              <p className="text-lg leading-relaxed text-[#e5e2e1]/70 font-mono">
                {"My foundation spans from Gujarat to Paderborn. I specialize in Java, Spring Boot, and enterprise-level system architecture. From developing AI-driven security plugins for SonarQube to optimizing CMMS backends at LIRA Service GmbH, I don't just write code - I build leverage. My role is simple: I am the shadow that ensures the system never fails."}
              </p>

              {/* Key Stats Bento Grid */}
              <div className="grid grid-cols-2 gap-px bg-[#5a403c]/30 mt-12">
                <div className="p-8 bg-[#1c1b1b] hover:bg-[#201f1f] transition-colors">
                  <div className="font-serif text-5xl text-[#e9c349]">M.Sc.</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase mt-2 text-[#e5e2e1]/40 font-mono">PADERBORN UNIVERSITY</div>
                </div>
                <div className="p-8 bg-[#1c1b1b] hover:bg-[#201f1f] transition-colors">
                  <div className="font-serif text-5xl text-[#e9c349]">LIRA Service</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase mt-2 text-[#e5e2e1]/40 font-mono">SOFTWARE ENGINEER</div>
                </div>
                <div className="p-8 bg-[#1c1b1b] hover:bg-[#201f1f] transition-colors">
                  <div className="font-serif text-5xl text-[#e9c349]">SecAI</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase mt-2 text-[#e5e2e1]/40 font-mono">SECURITY INTEGRATION</div>
                </div>
                <div className="p-8 bg-[#1c1b1b] hover:bg-[#201f1f] transition-colors">
                  <div className="font-serif text-5xl text-[#e9c349]">OMERTÀ</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase mt-2 text-[#e5e2e1]/40 font-mono">CLEAN ARCHITECTURE</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Portrait */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-5 relative h-[600px] w-full border border-[#5a403c]/20"
          >
            <Image
              src="/project-images/suit.png"
              alt="The Strategist"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale brightness-75 contrast-125"
            />
            {/* Overlay Gradient for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent lg:bg-gradient-to-r"></div>
          </motion.div>

        </div>
      </section>

      {/* --- MAKE AN OFFER (CONTACT) --- */}
      <section id="contact" className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-24 py-24 md:py-32 md:pl-32">

        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-8"
          >
            <h2 className="font-serif text-7xl md:text-9xl leading-none text-[#e9c349] tracking-tighter camelcase">
              Make An Offer
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 text-right"
          >
            <p className="font-light italic text-xl md:text-2xl text-[#e5e2e1]/80 leading-snug">
              {`"I'm gonna make them an offer they can't refuse."`}
            </p>
            <div className="h-1 w-24 bg-[#8b0000] ml-auto mt-6"></div>
          </motion.div>
        </div>

        {/* Layout Grid: Form vs Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Information Column (The Whisper) */}
          <div className="lg:col-span-4 space-y-16">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-mono text-xs tracking-[0.3em] text-[#e9c349] uppercase opacity-60 flex items-center gap-3">
                <MapPin className="w-4 h-4" /> Territory
              </h3>
              <div className="space-y-2">
                <p className="text-2xl font-light text-[#e5e2e1]">{siteConfig.location}</p>
                <p className="text-[#e5e2e1]/60 font-mono text-sm">Germany</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="font-mono text-xs tracking-[0.3em] text-[#e9c349] uppercase opacity-60 flex items-center gap-3">
                <Mail className="w-4 h-4" /> The Frequency
              </h3>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-light text-[#e5e2e1] underline decoration-[#8b0000] decoration-2 underline-offset-8">
                  {siteConfig.email}
                </p>
                <p className="text-[#e5e2e1]/60 font-mono text-sm mt-4">Priority response for active contracts.</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form (The Protocol) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-8 bg-[#0e0e0e] p-8 md:p-16 border-l border-[#5a403c]/20"
          >
            <form className="space-y-12" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Field: The Name */}
                <div className="space-y-2 group relative">
                  <label className="font-mono text-xs tracking-widest text-[#e5e2e1]/40 uppercase group-focus-within:text-[#e9c349] transition-colors">The Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="WHO IS ASKING?"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#5a403c]/30 py-4 focus:ring-0 focus:border-[#e9c349] transition-all placeholder:text-[#e5e2e1]/10 uppercase tracking-widest text-lg outline-none text-[#e5e2e1]"
                  />
                </div>

                {/* Field: The Contact */}
                <div className="space-y-2 group relative">
                  <label className="font-mono text-xs tracking-widest text-[#e5e2e1]/40 uppercase group-focus-within:text-[#e9c349] transition-colors">The Contact</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="WHERE DO WE REACH YOU?"
                    className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#5a403c]/30 py-4 focus:ring-0 focus:border-[#e9c349] transition-all placeholder:text-[#e5e2e1]/10 uppercase tracking-widest text-lg outline-none text-[#e5e2e1]"
                  />
                </div>
              </div>

              {/* Field: The Business */}
              <div className="space-y-2 group relative">
                <label className="font-mono text-xs tracking-widest text-[#e5e2e1]/40 uppercase group-focus-within:text-[#e9c349] transition-colors">The Business</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="WHAT IS YOUR PROPOSITION?"
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#5a403c]/30 py-4 focus:ring-0 focus:border-[#e9c349] transition-all placeholder:text-[#e5e2e1]/10 uppercase tracking-widest text-lg resize-none outline-none text-[#e5e2e1]"
                ></textarea>
              </div>


              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="pt-8 flex flex-col xl:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4 text-[#e5e2e1]/40 text-xs tracking-widest font-mono">
                  <ShieldCheck className="text-[#8b0000] w-5 h-5" />
                  ENCRYPTED VIA OMERTA PROTOCOL
                </div>

                {/* CHANGED: Wrapped button in a div to hold the status message */}
                <div className="w-full xl:w-auto flex flex-col items-end gap-2">
                  <button
                    type="submit"
                    // NEW: Disables button and changes styling while submitting
                    disabled={isSubmitting}
                    className="w-full xl:w-auto px-12 py-5 bg-[#8b0000] text-[#e5e2e1] font-mono font-bold tracking-[0.2em] uppercase hover:bg-[#a30000] disabled:bg-[#5a403c] disabled:cursor-not-allowed transition-colors active:scale-95">
                    { /* Button text changes based on state */}
                    {isSubmitting ? "Transmitting..." : "Submit Proposition"}
                  </button>

                  {/* NEW: Displays the success/error message */}
                  {formStatus && (
                    <span className={`text-xs tracking-widest font-mono uppercase ${formStatus.includes("Accepted") ? "text-[#e9c349]" : "text-[#e5e2e1]/60"}`}>
                      {formStatus}
                    </span>
                  )}


                </div>
              </div>

            </form>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-50 w-full bg-[#0e0e0e] border-t border-[#5a403c]/20 py-8 px-8 md:px-12 md:pl-32 flex flex-col md:flex-row justify-between items-center gap-6 mt-20">
        <div className="font-mono text-xs tracking-widest text-[#e5e2e1]/40 uppercase">
          © {new Date().getFullYear()} {siteConfig.short_name}. ALL RIGHTS RESERVED.
        </div>

        <div className="flex flex-wrap gap-8">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs tracking-widest text-[#e5e2e1]/40 hover:text-[#e9c349] transition-colors uppercase group"
          >
            <GithubIcon className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Source_Code
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs tracking-widest text-[#e5e2e1]/40 hover:text-[#e9c349] transition-colors uppercase group"
          >
            <LinkedinIcon className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            The_Network
          </a>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs tracking-widest text-[#e5e2e1]/40 hover:text-[#e9c349] transition-colors uppercase group"
          >
            <InstagramIcon className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Public_Records
          </a>
        </div>
      </footer>

      {/* --- CLASSIFIED DOSSIER MODAL --- */}
      <AnimatePresence>
        {activeDossier && activeData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-[#0e0e0e]/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-[#1c1b1b] border border-[#5a403c]/40 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDossier(null)}
                className="absolute top-4 right-4 z-20 text-[#e5e2e1]/50 hover:text-[#e9c349] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Modal Image Left Side (Dynamic Integration) */}
              <div className={`w-full md:w-2/5 h-[300px] md:h-auto relative hidden md:block ${activeData.isNDA ? 'bg-[#0e0e0e]' : ''}`}>
                <Image
                  src={activeData.image}
                  alt="Project Details"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className={`${activeData.isNDA ? 'object-contain scale-[0.7] invert brightness-110 contrast-100' : 'object-cover grayscale brightness-50'}`}
                />
                {/* Blending Gradient Overlay for Chiaroscuro effect */}
                {!activeData.isNDA && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#131313] via-[#131313]/95 to-transparent z-10 pointer-events-none"></div>
                )}
              </div>

              {/* Modal Content Right Side */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col font-mono">
                <span className="text-[#8b0000] text-xs tracking-widest uppercase mb-4 block flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Security Clearance Verified
                </span>

                <h3 className="font-serif text-4xl md:text-5xl text-white uppercase mb-8">
                  {activeData.title}
                </h3>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="text-[#e9c349] font-mono text-xs tracking-[0.2em] uppercase mb-2">The Objective</h4>
                    <p className="text-[#e5e2e1]/70 font-mono text-sm leading-relaxed">
                      {activeData.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#e9c349] font-mono text-xs tracking-[0.2em] uppercase mb-2">The Execution</h4>
                    <p className="text-[#e5e2e1]/70 font-mono text-sm leading-relaxed">
                      {activeData.execution}
                    </p>
                  </div>
                </div>

                {/* Action Buttons (Handles NDA Case & Missing Links) */}
                <div className="mt-12 flex flex-wrap gap-6 border-t border-[#5a403c]/20 pt-8">
                  {activeData.isNDA ? (
                    <div className="text-[#8b0000] font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                      <Lock className="w-4 h-4" /> ACCESS RESTRICTED BY NDA
                    </div>
                  ) : (
                    <>
                      {activeData.codeLink && (
                        <a href={activeData.codeLink} target="_blank" rel="noopener noreferrer" className="bg-[#8b0000] text-[#e5e2e1] px-6 py-3 font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#a30000] transition-colors">
                          Access Code
                        </a>
                      )}
                      {activeData.liveLink && (
                        <a href={activeData.liveLink} target="_blank" rel="noopener noreferrer" className="text-[#e9c349] border-b border-[#e9c349]/30 hover:border-[#e9c349] transition-all px-2 py-3 font-mono text-xs font-bold tracking-widest uppercase">
                          Live Environment
                        </a>
                      )}
                    </>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}