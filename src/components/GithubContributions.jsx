import React from "react";
import { motion } from "framer-motion";
import { Github, GitPullRequest, GitMerge, Star, Terminal } from "lucide-react";

export default function GithubContributions() {
  // Mock data for a professional look if live fetching isn't available
  const stats = [
    { label: "Pull Requests", value: "25+", icon: GitPullRequest, color: "text-cyan-400" },
    { label: "Repositories", value: "15+", icon: Terminal, color: "text-violet-400" },
    { label: "Stars Earned", value: "10+", icon: Star, color: "text-amber-400" },
    { label: "Contributions", value: "200+", icon: GitMerge, color: "text-pink-400" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label">Activity</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Open Source <span className="gradient-text">& Activity</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Grid */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-4 border border-white/5 flex flex-col items-center justify-center text-center hover:border-white/10 transition-all"
              >
                <stat.icon size={20} className={`${stat.color} mb-2`} />
                <span className="text-xl font-bold text-white">{stat.value}</span>
                <span className="text-[10px] text-muted uppercase tracking-widest mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Activity Graph Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Github size={120} />
            </div>
            
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Github size={20} className="text-cyan-400" />
                    GitHub Contributions
                </h3>
                <a 
                    href="https://github.com/Abhishek0736" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-cyan-400 hover:underline font-medium"
                >
                    View profile →
                </a>
            </div>

            {/* Simulated Contribution Grid */}
            <div className="overflow-x-auto pb-2">
                <div className="flex gap-1 min-w-[500px]">
                    {[...Array(35)].map((_, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            {[...Array(7)].map((_, j) => {
                                const level = Math.floor(Math.random() * 4);
                                const bgClass = level === 0 ? "bg-white/5" : 
                                               level === 1 ? "bg-cyan-900/40" :
                                               level === 2 ? "bg-cyan-600/60" : "bg-cyan-400";
                                return (
                                    <div 
                                        key={j} 
                                        className={`w-3 h-3 rounded-sm ${bgClass} transition-colors hover:scale-125 hover:z-10`}
                                        title={`${Math.floor(Math.random() * 10)} contributions`}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-[10px] text-muted uppercase tracking-widest">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-sm bg-white/5" />
                        <div className="w-2.5 h-2.5 rounded-sm bg-cyan-900/40" />
                        <div className="w-2.5 h-2.5 rounded-sm bg-cyan-600/60" />
                        <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
                    </div>
                    <span>More</span>
                </div>
                <p className="text-[10px] text-muted">Consistent streak of learning and building</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
