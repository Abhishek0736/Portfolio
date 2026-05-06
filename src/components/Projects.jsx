import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Code2, Layers, Cpu, Smartphone } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const projects = [
  {
    title: "Innovative AI — Collaboration Platform",
    desc: "A powerful MERN Stack application featuring real-time socket-based communication and integrated AI prompt engineering.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tech: ["MERN Stack", "Socket.io", "JWT Auth", "OpenAI"],
    features: ["Real-time messaging", "Secure REST APIs", "AI Prompt generation", "Role-based Access"],
    impact: "Built for high-concurrency real-time interactions",
    github: "https://github.com/Abhishek0736",
    demo: "#",
    color: "cyan",
  },
  {
    title: "Project Management System (RBAC)",
    desc: "Enterprise-grade task management system with complex role-based access control and high-performance data handling.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "Node.js", "MongoDB", "Redux"],
    features: ["Admin/Employee Dashboards", "Task Automation", "Progress Analytics", "Activity Logs"],
    impact: "Optimized data queries by 40% using MongoDB indexing",
    github: "https://github.com/Abhishek0736/Role-Based-Project-Management-System",
    demo: "#",
    color: "violet",
  },
  {
    title: "AgriTrade — Commerce Platform",
    desc: "Full-stack agricultural trading platform bridging the gap between farmers and merchants with secure payment flows.",
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    features: ["Product Lifecycle", "Secure Transactions", "User Verification", "Inventory Tracking"],
    impact: "Architected using Spring Boot for microservices scalability",
    github: "https://github.com/Abhishek0736/Agriculture-E-Commerce-Platform",
    demo: "#",
    color: "pink",
  },
];

const colorMap = {
  cyan:   "from-cyan-500/20 to-blue-600/20 hover:shadow-cyan-500/10",
  violet: "from-violet-500/20 to-indigo-600/20 hover:shadow-violet-500/10",
  pink:   "from-pink-500/20 to-rose-600/20 hover:shadow-pink-500/10",
};

const badgeMap = {
  cyan:   "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  pink:   "bg-pink-500/10 text-pink-300 border-pink-500/20",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 section-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label">Selected Work</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Building robust and scalable applications with modern tech stacks.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative flex flex-col glass-card rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${colorMap[proj.color]} transition-all duration-500 hover:-translate-y-3`}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-transparent opacity-80" />
                
                {/* Tech Badges on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {proj.tech.slice(0, 3).map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {proj.desc}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-4">Core Features</p>
                  <div className="grid grid-cols-2 gap-y-2">
                    {proj.features.map(f => (
                      <div key={f} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${proj.color === 'cyan' ? 'bg-cyan-500' : proj.color === 'violet' ? 'bg-violet-500' : 'bg-pink-500'}`} />
                        <span className="text-xs text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Box */}
                <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-cyan-500/20 transition-all">
                  <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2">Technical Impact</p>
                  <p className="text-xs font-bold text-white leading-relaxed">
                    🎯 {proj.impact}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={proj.demo}
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r ${proj.color === 'cyan' ? 'from-cyan-500 to-blue-600' : proj.color === 'violet' ? 'from-violet-500 to-indigo-600' : 'from-pink-500 to-rose-600'} text-white font-semibold shadow-lg shadow-black/20 hover:scale-[1.02] transition-all`}
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Call */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Abhishek0736"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-medium group"
          >
            Explore more projects on GitHub
            <Github size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
