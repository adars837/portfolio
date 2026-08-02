import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Github, Linkedin, Code2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030712] border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-display font-bold text-white text-xs">
              AP
            </div>
            <span className="text-lg font-bold font-heading text-white">Adarsh Pandey</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Software Engineer | Full Stack Developer | Problem Solver • NIT Silchar '26
          </p>
        </div>

        {/* Center: Made With Love & Copyright */}
        <div className="flex flex-col items-center text-center space-y-1">
          <p className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by</span>
            <span className="text-gradient font-bold">Adarsh Pandey</span>
          </p>
          <p className="text-[11px] text-slate-400 font-mono">
            Copyright © 2026 • All Rights Reserved
          </p>
        </div>

        {/* Right: Social Links & Back to Top Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
              <Code2 size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-400 transition-colors">
              <Mail size={18} />
            </a>
          </div>

          {/* Circular Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="relative w-11 h-11 rounded-full bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg group"
            title="Back to Top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
