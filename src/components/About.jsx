import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Code2, Layout, GraduationCap, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolioData';

export default function About() {
  const highlightIcons = {
    Server: <Server className="text-blue-400" size={24} />,
    Database: <Database className="text-purple-400" size={24} />,
    Code2: <Code2 className="text-cyan-400" size={24} />,
    Layout: <Layout className="text-emerald-400" size={24} />
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles size={14} />
            <span>Discover My Journey</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio Story */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-base"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Electrical Engineering @ NIT Silchar</h3>
                  <p className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
                    <MapPin size={12} className="text-red-400" />
                    Silchar, Assam, India • B.Tech Candidate (2022 - 2026)
                  </p>
                </div>
              </div>

              <p className="text-slate-300 font-normal leading-relaxed text-sm sm:text-base">
                {aboutMe.paragraph1}
              </p>

              <p className="text-slate-300 font-normal leading-relaxed text-sm sm:text-base">
                {aboutMe.paragraph2}
              </p>

              <p className="text-slate-300 font-normal leading-relaxed text-sm sm:text-base">
                {aboutMe.paragraph3}
              </p>

              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-blue-200 text-xs sm:text-sm font-medium flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span>{aboutMe.paragraph4}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Highlight Cards */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {aboutMe.highlights.map((item, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {highlightIcons[item.icon]}
                </div>
                <h4 className="text-base font-bold text-white font-heading mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
