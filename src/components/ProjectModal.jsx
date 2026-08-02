import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Play, Terminal, Sparkles, Utensils, Shield, ArrowLeft } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Interactive Demo Sandbox States
  const [sqlQuery, setSqlQuery] = useState(project.sqlQuerySample || "SELECT * FROM doctors LIMIT 3;");
  const [sqlOutput, setSqlOutput] = useState(null);
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState(null);
  const [foodCart, setFoodCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [eventRegistered, setEventRegistered] = useState(false);

  // SQL Execution Simulator
  const handleRunSql = () => {
    setSqlOutput([
      { doctor_id: 101, doctor_name: "Dr. Sarah Jenkins", specialization: "Cardiology", total_appointments: 142, rank: 1 },
      { doctor_id: 104, doctor_name: "Dr. Rajesh Sharma", specialization: "Neurology", total_appointments: 118, rank: 1 },
      { doctor_id: 108, doctor_name: "Dr. Elena Rostova", specialization: "Cardiology", total_appointments: 98, rank: 2 }
    ]);
  };

  // AI Recommendation Simulator
  const handleRunAi = (e) => {
    e.preventDefault();
    setAiResponse({
      title: "Gemini AI Smart Recommendation",
      products: [
        { name: "ProTech Ergo Mechanical Keyboard", price: "$129", score: "99% Match" },
        { name: "UltraWide 34' Curved Monitor", price: "$499", score: "95% Match" },
        { name: "Noise Cancelling Headphones", price: "$199", score: "92% Match" }
      ]
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div 
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden my-8"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Prominent Back Button Top Bar */}
          <div className="p-4 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between z-30 relative">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-blue-300 border border-slate-800 font-semibold text-xs transition-all shadow-md group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Close Modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Header Banner */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-2">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">{project.title}</h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">{project.subtitle}</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-500/25"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[55vh] overflow-y-auto">
            
            {/* Overview */}
            <div>
              <h3 className="text-sm font-bold font-mono text-blue-400 uppercase tracking-wider mb-2">Project Overview</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-sm font-bold font-mono text-purple-400 uppercase tracking-wider mb-3">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Live Sandbox Simulator */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              
              {/* CarePulse SQL Sandbox */}
              {project.demoType === 'sql_sandbox' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold">
                      <Terminal size={16} />
                      <span>SQL Query Executor Simulator (3NF Database)</span>
                    </div>
                    <button
                      onClick={handleRunSql}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-colors"
                    >
                      <Play size={12} />
                      <span>Execute Query</span>
                    </button>
                  </div>

                  <textarea
                    value={sqlQuery}
                    onChange={(e) => setSqlQuery(e.target.value)}
                    rows={3}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                  />

                  {sqlOutput && (
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 overflow-x-auto">
                      <p className="text-[11px] font-mono text-emerald-400 mb-2">Query Executed in 1.4ms (B-Tree Index Used)</p>
                      <table className="w-full text-left font-mono text-xs text-slate-300">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400">
                            <th className="pb-2">ID</th>
                            <th className="pb-2">Doctor</th>
                            <th className="pb-2">Specialization</th>
                            <th className="pb-2">Appointments</th>
                            <th className="pb-2">Rank</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sqlOutput.map((row) => (
                            <tr key={row.doctor_id} className="border-b border-slate-800/40">
                              <td className="py-2 text-blue-400">{row.doctor_id}</td>
                              <td className="py-2">{row.doctor_name}</td>
                              <td className="py-2 text-purple-400">{row.specialization}</td>
                              <td className="py-2 font-bold">{row.total_appointments}</td>
                              <td className="py-2 text-amber-400">#{row.rank}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* OneCart AI Sandbox */}
              {project.demoType === 'ai_sandbox' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold">
                    <Sparkles size={16} />
                    <span>Gemini AI Recommendation Sandbox</span>
                  </div>

                  <form onSubmit={handleRunAi} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask Gemini AI for developer product recommendations..."
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs"
                    >
                      Ask AI
                    </button>
                  </form>

                  {aiResponse && (
                    <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/40 space-y-3">
                      <p className="text-xs font-bold text-purple-300">{aiResponse.title}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {aiResponse.products.map((p, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1">
                            <p className="font-bold text-white">{p.name}</p>
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-emerald-400 font-mono">{p.price}</span>
                              <span className="text-purple-400 font-mono">{p.score}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* HungryHub Food Sandbox */}
              {project.demoType === 'food_sandbox' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                      <Utensils size={16} />
                      <span>Live Order Simulator</span>
                    </div>
                    {orderPlaced && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                        Order #HH-8492 Out for Delivery!
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setFoodCart([...foodCart, "Special Biryani Combo"])}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-xs text-slate-200"
                    >
                      + Add Biryani Combo ($14.99)
                    </button>
                    <button
                      onClick={() => setOrderPlaced(true)}
                      disabled={foodCart.length === 0}
                      className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-semibold text-xs"
                    >
                      Place Order ({foodCart.length} items)
                    </button>
                  </div>
                </div>
              )}

              {/* Electra Portal Sandbox */}
              {project.demoType === 'portal_sandbox' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                      <Shield size={16} />
                      <span>NIT Silchar EE Workshop Registration Simulator</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white">Annual HackEEthon 2026</p>
                      <p className="text-slate-400">Date: August 25, 2026 • NIT Silchar Campus</p>
                    </div>
                    <button
                      onClick={() => setEventRegistered(!eventRegistered)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                        eventRegistered
                          ? 'bg-emerald-600 text-white'
                          : 'bg-blue-600 hover:bg-blue-500 text-white'
                      }`}
                    >
                      {eventRegistered ? '✓ Registered' : 'Register Now'}
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
