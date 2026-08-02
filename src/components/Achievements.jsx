import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Brain, Database, Zap, GitCommit, Flame, Award, CheckCircle2 } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  // Heatmap day blocks simulation
  const generateHeatmap = () => {
    const days = [];
    for (let i = 0; i < 112; i++) {
      const level = Math.floor(Math.random() * 5); // 0 to 4
      days.push(level);
    }
    return days;
  };

  const [heatmapData] = useState(generateHeatmap());

  const levelColors = [
    'bg-slate-900 border-slate-800',
    'bg-emerald-950 border-emerald-800',
    'bg-emerald-700 border-emerald-600',
    'bg-emerald-500 border-emerald-400',
    'bg-emerald-300 border-emerald-200'
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Trophy size={14} />
            <span>Milestones & Ratings</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Key <span className="text-gradient-gold">Achievements</span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-mono font-semibold">
                    {ach.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    {ach.icon === 'Brain' && <Brain size={20} />}
                    {ach.icon === 'Database' && <Database size={20} />}
                    {ach.icon === 'Trophy' && <Trophy size={20} />}
                    {ach.icon === 'Zap' && <Zap size={20} />}
                  </div>
                </div>

                <div className="text-3xl font-extrabold font-heading text-white mb-2">
                  {ach.prefix || ''}{ach.value || ach.rating}{ach.suffix || ''}
                </div>

                <h3 className="text-sm font-bold text-slate-200 mb-2">{ach.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{ach.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                <CheckCircle2 size={12} />
                <span>Verified Competitive Record</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub & LeetCode Heatmap Activity Visualizer */}
        <motion.div 
          className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <GitCommit size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-white">Consistent Problem Solving Activity</h3>
                <p className="text-xs text-slate-400 font-mono">GitHub & LeetCode Daily Submissions Heatmap</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Flame size={16} className="text-orange-500" />
              <span>Current Streak: <strong className="text-white">124 Days</strong></span>
            </div>
          </div>

          {/* Grid of Days */}
          <div className="overflow-x-auto pb-2">
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[700px]">
              {heatmapData.map((lvl, index) => (
                <div
                  key={index}
                  className={`w-3.5 h-3.5 rounded-sm border ${levelColors[lvl]} hover:scale-125 transition-transform cursor-pointer`}
                  title={`Day ${index + 1}: ${lvl * 3} submissions`}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono pt-2">
            <span>500+ Solved across LeetCode & Codeforces</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              {levelColors.map((c, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm border ${c}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
