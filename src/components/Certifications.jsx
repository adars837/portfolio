import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, X, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award size={14} />
            <span>Verified Learning</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Certifications & <span className="text-gradient">Recognitions</span>
          </motion.h2>

          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
        </div>

        {/* Certifications Card Container */}
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                      {cert.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">{cert.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">{cert.issuer}</p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">{cert.description}</p>
                </div>
              </div>

              <button
                onClick={() => setActiveCert(cert)}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>View Certificate</span>
                <ExternalLink size={14} />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              className="relative w-full max-w-xl glass-panel p-8 rounded-3xl border border-slate-700 shadow-2xl text-center space-y-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto">
                <Award size={32} />
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Verified IEEE Credential</span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1">{activeCert.title}</h3>
                <p className="text-sm font-mono text-slate-400 mt-1">{activeCert.issuer}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
                <p>Credential ID: <strong className="text-blue-400">{activeCert.credentialId}</strong></p>
                <p>Status: <strong className="text-emerald-400">Verified & Active</strong></p>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed">{activeCert.description}</p>

              <button
                onClick={() => setActiveCert(null)}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs"
              >
                Close Certificate
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
