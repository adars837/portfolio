import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, BarChart3, Linkedin, FileText, Mail, ExternalLink, Globe } from 'lucide-react';
import { codingProfiles, personalInfo } from '../data/portfolioData';

export default function CodingProfiles({ onOpenResume }) {
  const profileIcons = {
    Github: <Github size={24} />,
    Code2: <Code2 size={24} />,
    BarChart3: <BarChart3 size={24} />,
    Linkedin: <Linkedin size={24} />
  };

  return (
    <section id="profiles" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950/40">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe size={14} />
            <span>Connect & Explore</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Coding <span className="text-gradient">Profiles</span> & Links
          </motion.h2>

          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {codingProfiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-slate-600 transition-all duration-300 group flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {profileIcons[profile.icon]}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold ${profile.badgeColor}`}>
                    {profile.stats}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                  {profile.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">{profile.handle}</p>

                <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono font-semibold text-blue-400 group-hover:text-blue-300">
                <span>View Profile</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}

          {/* Download Resume Card */}
          <motion.div
            onClick={onOpenResume}
            className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-900/50 text-blue-300">
                  PDF Format
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                Official Resume
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">Adarsh_Pandey_SDE_Resume.pdf</p>

              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                Download or view complete single-page PDF resume with education, projects, skills, and experience.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono font-semibold text-blue-400 group-hover:text-blue-300">
              <span>View / Download Resume</span>
              <FileText size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Quick Email Card */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-purple-500/40 transition-all duration-300 group flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-900/50 text-purple-300">
                  Direct Email
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-white group-hover:text-purple-400 transition-colors">
                Email Dispatch
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">{personalInfo.email}</p>

              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                Reach out directly for software engineering opportunities, technical discussions, or project inquiries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono font-semibold text-purple-400 group-hover:text-purple-300">
              <span>Send Direct Email</span>
              <Mail size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
}
