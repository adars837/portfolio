import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code2, Database, FolderGit2, CheckCircle2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo.typingRoles;

  // Typing effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      typingSpeed = 2000; // Pause at full word
      const timer = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Top Pill Status Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase font-mono">
              Available for Software Engineer Roles
            </span>
          </motion.div>

          {/* Main Greeting */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="text-gradient">Adarsh Pandey</span>
          </motion.h1>

          {/* Subheading & Dynamic Role Cycling */}
          <motion.div 
            className="mt-3 text-lg sm:text-xl lg:text-2xl font-medium text-slate-300 font-display flex flex-wrap items-center justify-center lg:justify-start gap-2 h-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-slate-400">I am a</span>
            <span className="text-blue-400 font-bold border-b-2 border-blue-500/60 pb-0.5">
              {displayText}
            </span>
            <span className="w-0.5 h-6 bg-blue-400 animate-pulse inline-block -ml-1"></span>
          </motion.div>

          {/* Core Tagline Description */}
          <motion.p 
            className="mt-5 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I build <span className="text-slate-200 font-semibold">scalable web applications</span>, <span className="text-slate-200 font-semibold">intelligent database systems</span>, and AI-powered software solutions. Electrical Engineering undergrad at <span className="text-blue-400 font-semibold">NIT Silchar</span> with expertise in full-stack engineering and algorithmic problem solving.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.03] transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm hover:border-slate-500 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              <Download size={16} className="text-blue-400" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800/80 text-slate-300 font-semibold text-sm hover:text-white transition-all duration-300"
            >
              <Mail size={16} className="text-purple-400" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Quick Statistics Grid Cards */}
          <motion.div 
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="glass-card p-4 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <Code2 size={18} />
                <span className="text-2xl font-bold font-heading text-white">500+</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">DSA Problems Solved</span>
            </div>

            <div className="glass-card p-4 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left border border-slate-800 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <Database size={18} />
                <span className="text-2xl font-bold font-heading text-white">50+</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">SQL Problems Solved</span>
            </div>

            <div className="glass-card p-4 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <FolderGit2 size={18} />
                <span className="text-2xl font-bold font-heading text-white">4+</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">Major Projects</span>
            </div>

            <div className="glass-card p-4 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <CheckCircle2 size={18} />
                <span className="text-lg font-bold font-heading text-emerald-300">Active</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">Open to Work</span>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Column: Glowing Animated Avatar Card */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            
            {/* Outer Glowing Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 animate-spin-slow opacity-75 blur-md" style={{ animationDuration: '15s' }}></div>

            {/* Inner Border Outer Shell */}
            <div className="absolute inset-1 rounded-full bg-[#030712] p-2 flex items-center justify-center shadow-2xl border border-slate-800">
              <img
                src={personalInfo.avatar}
                alt="Adarsh Pandey"
                className="w-full h-full rounded-full object-cover shadow-inner hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-2 -right-2 glass-panel p-3 rounded-2xl border border-blue-500/30 shadow-xl animate-float flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                MERN
              </div>
              <div>
                <p className="text-xs font-bold text-white">Full Stack</p>
                <p className="text-[10px] text-slate-400">React & Node.js</p>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 glass-panel p-3 rounded-2xl border border-purple-500/30 shadow-xl animate-float flex items-center gap-2" style={{ animationDelay: '2s' }}>
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                SQL
              </div>
              <div>
                <p className="text-xs font-bold text-white">3NF Architect</p>
                <p className="text-[10px] text-slate-400">Triggers & Indexing</p>
              </div>
            </div>

            <div className="absolute top-1/2 -left-8 -translate-y-1/2 glass-panel p-2.5 rounded-2xl border border-cyan-500/30 shadow-xl animate-float flex items-center gap-2 hidden sm:flex" style={{ animationDelay: '4s' }}>
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                NIT
              </div>
              <div>
                <p className="text-xs font-bold text-white">NIT Silchar</p>
                <p className="text-[10px] text-slate-400">CGPA 8.3</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
