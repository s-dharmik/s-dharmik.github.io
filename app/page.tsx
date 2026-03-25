"use client";

import { motion } from "framer-motion";

export default function Home() {
  // This is your "Database". You can change your projects easily right here.
  const projects = [
    {
      id: 1,
      meta: "Vol. I — 1945",
      title: "The Blueprint",
      desc: "A study in loyalty, respect, and quiet power. Designing systems with traditional integrity.",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      meta: "Vol. II — 1952",
      title: "Omertà",
      desc: "Minimalist brand identity for a private speakeasy. Silence is golden, and so is the brass.",
      img: "https://images.unsplash.com/photo-1478144596228-39227568114f?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      meta: "Vol. III — 1960",
      title: "The Syndicate",
      desc: "An editorial layout focusing on heavy contrasts, sharp edges, and uncompromising typography.",
      img: "https://images.unsplash.com/photo-1520114092497-767812f86ab5?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <main className="relative flex flex-col items-center z-10 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center w-full">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-mono text-[#b88645] text-sm tracking-[2px] uppercase mb-6 block"
        >
          Hello, I am
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          // Added the Pirata One font class below
          className="font-['Pirata_One'] text-6xl md:text-7xl tracking-tight mb-4 drop-shadow-xl text-[#e4d8c5]"
        >
          Dharmik Savaliya.
        </motion.h1>

        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
          className="h-[1px] bg-[#b88645] my-8 mx-auto"
        ></motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
          className="font-mono text-[#8a8275] text-base leading-relaxed max-w-lg mb-12 mx-auto"
        >
          Master Student at Paderborn University | Full-stack developer focusing on Spring, REST and Android;
        </motion.p>

        <motion.a
          href="#portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="inline-block font-mono text-[#e4d8c5] text-sm tracking-widest uppercase py-3 px-8 border border-[#8a8275] hover:border-[#b88645] hover:text-[#b88645] hover:bg-[#b88645]/5 transition-all duration-500"
        >
          Want to know more?
        </motion.a>
      </section>

      {/* --- THE ARCHIVE SECTION --- */}
      <section id="portfolio" className="w-full max-w-6xl mx-auto px-8 py-32">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-[#b88645] text-sm tracking-[2px] uppercase mb-4 block">
            Here are
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-[#e4d8c5]">
            The Projects
          </h2>
          <div className="w-16 h-[1px] bg-[#b88645] opacity-70 my-6 mx-auto"></div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer border border-[#8a8275]/20 bg-black/15 p-4 hover:border-[#b88645] transition-colors duration-500"
            >
              {/* Image Frame */}
              <div className="overflow-hidden border border-black mb-6 relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-72 object-cover sepia-[0.8] grayscale-[0.6] brightness-75 contrast-125 transition-all duration-700 group-hover:sepia-0 group-hover:grayscale-0 group-hover:brightness-[0.9] group-hover:contrast-100 group-hover:scale-105"
                />
              </div>
              
              {/* Text Meta */}
              <div>
                <span className="font-mono text-[#b88645] text-xs tracking-widest uppercase mb-3 block">
                  {project.meta}
                </span>
                <h3 className="text-2xl font-medium text-[#e4d8c5] mb-3">
                  {project.title}
                </h3>
                <p className="font-mono text-[#8a8275] text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </section>

    </main>
  );
}