import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Server, Database, Wrench, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const categoryIcons = {
    "Programming Languages": <Code2 size={16} />,
    "Frontend": <Cpu size={16} />,
    "Backend": <Server size={16} />,
    "Database": <Database size={16} />,
    "Tools & Platforms": <Wrench size={16} />,
    "Core CS Subjects": <BookOpen size={16} />
  };

  // Marquee item list
  const marqueeItems = [
    "C++", "JavaScript", "Python", "SQL", "React.js", "Next.js", "Tailwind CSS",
    "Node.js", "Express.js", "MongoDB", "PostgreSQL", "SQLite", "Git", "GitHub",
    "TypeScript", "REST APIs", "DSA", "DBMS", "OOP", "Vite", "Framer Motion"
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Cpu size={14} />
            <span>Technical Mastery</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Skills & <span className="text-gradient">Tech Stack</span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Infinite Logo Ticker Marquee */}
        <div className="mb-14 relative overflow-hidden py-4 border-y border-slate-800/80 bg-slate-950/40">
          <div className="flex animate-marquee gap-6">
            {marqueeItems.concat(marqueeItems).map((tech, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 font-mono text-xs font-semibold whitespace-nowrap shadow-sm hover:border-blue-500/40 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Grid */}
        <motion.div 
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skillsData[activeCategory].map((skill, index) => (
            <div 
              key={skill.name}
              className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm font-mono group-hover:scale-110 transition-transform">
                    {skill.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">{skill.name}</h3>
                    <p className="text-[11px] text-slate-400 leading-tight">{skill.experience}</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-blue-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden mt-4">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
