import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, Bookmark } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Education & <span className="text-gradient">Coursework</span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Education Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Institution Details */}
          <motion.div 
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 p-[1px] shadow-lg shadow-purple-500/20">
                    <div className="w-full h-full bg-[#030712] rounded-[15px] flex items-center justify-center text-purple-400">
                      <GraduationCap size={28} />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-purple-400 tracking-wider uppercase">Tier-1 Premier Institute</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">{education.institution}</h3>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-bold font-mono flex items-center gap-1.5">
                  <Award size={16} />
                  <span>CGPA: {education.cgpa}</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <p className="text-xs text-slate-400 font-mono">Degree</p>
                  <p className="text-base font-bold text-white mt-1">{education.degree}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <p className="text-xs text-slate-400 font-mono">Branch</p>
                  <p className="text-base font-bold text-white mt-1">{education.branch}</p>
                </div>
              </div>

              <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                Pursuing Bachelor of Technology in Electrical Engineering while mastering Core Computer Science fundamentals including Data Structures, Database Systems, Computer Networks, and Full-Stack Web Development.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4">
              <span className="flex items-center gap-1.5 font-mono">
                <Calendar size={14} className="text-purple-400" />
                Duration: {education.period}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <MapPin size={14} className="text-blue-400" />
                Silchar, Assam, India
              </span>
            </div>
          </motion.div>

          {/* Relevant Coursework Badges */}
          <motion.div 
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Relevant CS Coursework</h3>
                  <p className="text-xs text-slate-400">Core Computer Science Subjects</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {education.coursework.map((course, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 text-slate-200 text-xs font-medium transition-colors"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Bookmark size={14} className="text-purple-400 shrink-0" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-purple-950/20 border border-purple-900/30 flex items-center gap-3 text-xs text-purple-300">
              <CheckCircle2 size={18} className="text-purple-400 shrink-0" />
              <span>Extensive practical application in DSA problem solving and full-stack software development.</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
