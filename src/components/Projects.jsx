import React from "react";
import { ExternalLink, Github, Star, Zap, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
       {
      title: "Role-Based Project Management System",
      status: "Completed",
      color: "from-blue-500/20 to-cyan-600/20",
      borderColor: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      icon: Code2,
      description: "Web application with admin, manager, and employee dashboards based on MERN stack for efficient task management.",
      highlights: [
        "40% faster task assignment through improved API handling",
        "Secure role-based access control with JWT authentication",
        "Real-time progress monitoring and project tracking",
      ],
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      impact: "Increased team productivity with streamlined workflows",
      link: "https://github.com/Abhishek0736/Role-Based-Project-Management-System",
      liveDemo: "#"
    },
    {
      title: "AgriTrade — Farm Commerce Platform",
      status: "Completed",
      color: "from-pink-500/20 to-rose-600/20",
      borderColor: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      icon: Zap,
      description: "An end-to-end e-commerce platform tailored for farmers and merchants to seamlessly trade agricultural products.",
      highlights: [
        "Role-based access & secure JWT authentication",
        "Product CRUD with image upload & validation",
        "Order & transaction history with CSV export",
      ],
      tech: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
      impact: "Enabled seamless agricultural commerce transactions",
      link: "https://github.com/Abhishek0736/Agriculture-E-Commerce-Platform",
      liveDemo: "#"
    },
    {
      title: "Voice Assistant — Interactive Web Assistant",
      status: "Completed",
      color: "from-purple-500/20 to-indigo-600/20",
      borderColor: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      icon: Star,
      description: "A browser-based voice assistant that uses Web Speech APIs for speech recognition and synthesis with intent parsing.",
      highlights: [
        "Real-time speech recognition & synthesis",
        "Natural language intent parsing",
        "Conversational UI with command architecture",
      ],
      tech: ["JavaScript", "Web Speech API", "HTML", "CSS"],
      impact: "Seamless voice-based interaction for web applications",
      link: "https://github.com/Abhishek0736/Virtual-Assistant",
      liveDemo: "https://novavirtualassistant.netlify.app/"
    },
  ];

  const [visibleIndex, setVisibleIndex] = React.useState(-1);

  React.useEffect(() => {
    projects.forEach((_, index) => {
      setTimeout(() => setVisibleIndex(index), index * 150);
    });
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-blue-400 font-semibold text-sm tracking-widest">PORTFOLIO</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-3">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Showcase of innovative solutions and real-world impact</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComp = project.icon;
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 group ${visibleIndex >= index ? 'animate-float-up opacity-100' : 'opacity-0 translate-y-8'}`}
              >
                {/* Animated background glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

                {/* Main card with enhanced animations */}
                <div className={`relative h-full overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br ${project.color} border-2 bg-gradient-to-br ${project.borderColor} shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 p-8 flex flex-col`}>
                  
                  {/* Multiple shine effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white to-transparent blur-sm transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Header with icon - animated */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="inline-block">
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm group-hover:text-white transition-colors">{project.description}</p>
                      </div>
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br ${project.borderColor} p-0.5 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all ml-4 shadow-lg">
                        <div className="w-full h-full rounded-md bg-slate-900 flex items-center justify-center group-hover:bg-slate-800">
                          <IconComp className="text-white group-hover:text-blue-400 transition-colors" size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Status badge - animated */}
                    <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all">
                      <div className={`w-2.5 h-2.5 rounded-full ${project.status === "Ongoing" ? "bg-blue-400 animate-pulse" : "bg-gray-400"}`}></div>
                      <span className={`text-xs font-bold tracking-widest ${project.status === "Ongoing" ? "text-blue-400" : "text-gray-300"}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Highlights - staggered animation */}
                    <div className="mb-6">
                      <p className="text-xs text-gray-400 font-bold mb-3 uppercase tracking-widest opacity-75 group-hover:opacity-100 transition-opacity">✨ Key Features</p>
                      <ul className="space-y-2.5">
                        {project.highlights.map((highlight, idx) => (
                          <li 
                            key={idx} 
                            className="text-gray-300 text-sm flex items-start gap-3 group-hover:text-white transition-all group-hover:translate-x-1"
                            style={{transitionDelay: `${idx * 50}ms`}}
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack - animated badges */}
                    <div className="mb-6">
                      <p className="text-xs text-gray-400 font-bold mb-3 uppercase tracking-widest opacity-75 group-hover:opacity-100 transition-opacity">🛠 Technology</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-white/5 border border-white/20 text-white text-xs font-medium rounded-lg group-hover:bg-white/15 group-hover:border-blue-400/50 transition-all hover:scale-110"
                            style={{transitionDelay: `${idx * 30}ms`}}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact box - animated */}
                    <div className="mb-6 p-4 rounded-xl bg-gradient-to-r ${project.bgGradient} border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all group-hover:scale-105 origin-bottom">
                      <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        🎯 {project.impact}
                      </p>
                    </div>

                    {/* Links - enhanced buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 group-hover:border-white/30 transition-colors">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-blue-500/30 border border-white/20 hover:border-blue-400 rounded-lg text-white hover:text-blue-300 text-sm font-bold transition-all hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20"
                      >
                        <Github size={16} className="group-hover:rotate-12 transition-transform" /> Code
                      </a>
                      <a
                        href={project.liveDemo}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500/30 to-pink-500/30 hover:from-blue-500/50 hover:to-pink-500/50 border border-blue-400/50 hover:border-pink-400 rounded-lg text-white hover:text-pink-300 text-sm font-bold transition-all hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/20"
                      >
                        <ExternalLink size={16} className="group-hover:-rotate-12 transition-transform" /> Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
