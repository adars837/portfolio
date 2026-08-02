import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Building2, Sparkles, Award, Users, Code, ArrowUpRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [filter, setFilter] = useState('All');

  const filteredExperiences = filter === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === filter);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/50">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Briefcase size={14} />
            <span>Track Record & Leadership</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Work & <span className="text-gradient">Experience</span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {['All', 'Internships', 'Leadership'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Roles' : cat}
            </button>
          ))}
        </div>

        {/* Attractive Timeline & Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:${exp.glowColor} transition-all duration-500 flex flex-col justify-between group relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Card Header Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.color}`} />

              <div>
                {/* Top Badges & Period */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-blue-400 text-xs font-mono font-bold">
                    {exp.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Role Title & Company */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm font-bold text-blue-400 flex items-center gap-1.5">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </p>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <MapPin size={12} className="text-purple-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Impact Metric Banner */}
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between mb-5">
                  <span className="text-xs text-slate-400 font-mono">Impact Metric:</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono flex items-center gap-1">
                    <Sparkles size={13} />
                    {exp.featuredMetric}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      <ChevronRight size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tech Pills */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {exp.tech.map((t, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono">
                    #{t}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
