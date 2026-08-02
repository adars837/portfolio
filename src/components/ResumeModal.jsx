import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, GraduationCap, Briefcase, Code2, Award, ArrowLeft } from 'lucide-react';
import { personalInfo, education, experiences, projects, achievements } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
        >
          {/* Header Controls with Prominent Back Button */}
          <div className="p-4 sm:p-6 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 hover:text-blue-300 border border-slate-700 font-semibold text-xs transition-all shadow-md group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <h3 className="text-xs font-bold text-white font-heading">Adarsh_Pandey_Resume.pdf</h3>
                <p className="text-[11px] text-slate-400 font-mono">Official PDF Document</p>
              </div>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md"
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Close Resume"
              >
                <X size={18} />
              </button>
            </div>

          </div>

          {/* Printable Resume Content */}
          <div className="p-6 sm:p-10 text-slate-200 max-h-[75vh] overflow-y-auto font-['Inter',sans-serif] space-y-8 bg-[#030712]">
            
            {/* Main Header */}
            <div className="pb-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">{personalInfo.name}</h1>
                <p className="text-sm font-semibold text-blue-400 mt-1 font-mono">{personalInfo.email} | {personalInfo.phone}</p>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-400 underline">github.com/adarsh7624</a> | LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">Adarsh Pandey</a>
                </p>
              </div>

              <div className="text-xs font-mono text-slate-300 sm:text-right">
                <p className="font-bold text-emerald-400">NIT Silchar (B.Tech EE '27)</p>
                <p className="text-slate-400">CGPA: 8.27 / 10</p>
                <p className="text-amber-400">LeetCode Max: 1738</p>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold font-mono text-blue-400 uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-800 pb-1">
                <GraduationCap size={16} />
                <span>Education</span>
              </h2>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row justify-between text-xs">
                  <div>
                    <h3 className="font-bold text-white text-sm">{education.institution}</h3>
                    <p className="text-slate-300">{education.degree} in {education.branch}; <strong>CGPA: {education.cgpa}</strong></p>
                  </div>
                  <div className="text-slate-400 font-mono sm:text-right">
                    <p>{education.location}</p>
                    <p>{education.period}</p>
                  </div>
                </div>

                {education.schooling.map((sch, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between text-xs text-slate-300 pt-2 border-t border-slate-800/60">
                    <div>
                      <p className="font-semibold text-slate-200">{sch.school}</p>
                      <p className="text-slate-400">{sch.level} – <strong className="text-amber-400">{sch.score}</strong></p>
                    </div>
                    <div className="text-slate-400 font-mono sm:text-right">
                      <p>{sch.location}</p>
                      <p>{sch.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship Experience */}
            <div>
              <h2 className="text-xs font-bold font-mono text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-800 pb-1">
                <Briefcase size={16} />
                <span>Internship Experience</span>
              </h2>

              <div className="space-y-4">
                {experiences.slice(0, 2).map((exp, idx) => (
                  <div key={idx} className="space-y-1.5 text-xs">
                    <div className="flex flex-col sm:flex-row justify-between font-bold text-white text-sm">
                      <p>{exp.role} — <span className="text-blue-400">{exp.company}</span></p>
                      <p className="text-slate-400 font-mono text-xs font-normal">{exp.duration}</p>
                    </div>
                    <p className="text-[11px] font-mono text-purple-400">{exp.badge}</p>
                    <ul className="list-disc list-inside text-slate-300 space-y-1 pl-1">
                      {exp.responsibilities.map((r, rIdx) => (
                        <li key={rIdx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-800 pb-1">
                <Code2 size={16} />
                <span>Projects</span>
              </h2>

              <div className="space-y-4">
                {projects.map((p) => (
                  <div key={p.id} className="space-y-1 text-xs">
                    <div className="flex flex-col sm:flex-row justify-between font-bold text-white">
                      <p>{p.title} <span className="text-slate-400 font-mono font-normal">({p.tech.slice(0, 3).join(", ")})</span></p>
                      <p className="text-blue-400 font-mono">{p.category}</p>
                    </div>
                    <ul className="list-disc list-inside text-slate-300 space-y-0.5 pl-1">
                      {p.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Work & Organizational Experience */}
            <div>
              <h2 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-slate-800 pb-1">
                <Award size={16} />
                <span>Work & Leadership Experience</span>
              </h2>

              <div className="space-y-3 text-xs">
                {experiences.slice(2).map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row justify-between font-bold text-white">
                      <p>{exp.role} — <span className="text-emerald-400">{exp.company}</span></p>
                      <p className="text-slate-400 font-mono">{exp.duration}</p>
                    </div>
                    <ul className="list-disc list-inside text-slate-300 space-y-0.5 pl-1">
                      {exp.responsibilities.map((r, rIdx) => (
                        <li key={rIdx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800 text-xs">
              <div>
                <h3 className="font-bold font-mono text-slate-300 uppercase mb-2">Technical Skills</h3>
                <ul className="space-y-1 font-mono text-slate-300">
                  <li>• <strong>Languages:</strong> C, C++, HTML, CSS, JavaScript</li>
                  <li>• <strong>Frameworks:</strong> React.js, Next.js, Node.js, Express.js</li>
                  <li>• <strong>Databases:</strong> MongoDB, SQL (PostgreSQL)</li>
                  <li>• <strong>Tools & DevOps:</strong> Azure DevOps, Git, VS Code, Postman</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold font-mono text-slate-300 uppercase mb-2">Achievements & Certifications</h3>
                <ul className="space-y-1 font-mono text-slate-300">
                  <li>• <strong>LeetCode:</strong> Max Rating 1738; 500+ DSA & 50+ SQL solved</li>
                  <li>• <strong>Codeforces:</strong> Pupil rating, max 1240</li>
                  <li>• <strong>Founding Member:</strong> Esports Club, NIT Silchar</li>
                  <li>• <strong>IEEE Cert:</strong> IS3IP-2024 (Prof. Ambrish Devanshu)</li>
                  <li>• <strong>Finalist:</strong> DSA Coding Challenge (Knowvy Perks)</li>
                </ul>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
