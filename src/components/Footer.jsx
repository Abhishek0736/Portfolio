import React, { useState } from "react";
import { Github, Linkedin, Mail, ArrowUp, ExternalLink, Code2, Zap } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const copyEmail = () => {
    navigator.clipboard.writeText("akabhi0736@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  const resources = [
    { label: "GitHub", href: "https://github.com/Abhishek0736", target: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-ku0736", target: true },
    { label: "Resume", href: "/resume.pdf", target: true },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-t border-white/5">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Abhishek Kumar
              </h3>
              <p className="text-xs text-cyan-400 font-semibold tracking-wider mt-1">Full-Stack Developer</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Crafting modern, scalable web applications with focus on clean code, performance, and exceptional user experiences.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Code2 className="text-cyan-400" size={16} />
              <span className="text-xs text-gray-400">React • Node • MongoDB • Full-Stack</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.target ? "_blank" : undefined}
                    rel={link.target ? "noreferrer" : undefined}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                    {link.target && <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 lg:mb-8">
          {/* Quick Contact */}
          <div className="p-4 sm:p-6 rounded-2xl glass shimmer border border-white/10 hover:border-cyan-400/30 transition-all group animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                <Mail className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Quick Contact</p>
                <p className="text-sm text-white font-medium mt-1">akabhi0736@gmail.com</p>
                <button
                  onClick={copyEmail}
                  className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors mt-2 font-medium"
                >
                  {copied ? "✓ Copied!" : "Copy Email"}
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-4 sm:p-6 rounded-2xl glass shimmer border border-white/10 hover:border-purple-400/30 transition-all animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <Zap className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Follow Me</p>
                <div className="flex items-center gap-2 mt-2">
                  <a href="https://github.com/Abhishek0736" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all tilt-hover">
                    <Github className="text-white" size={16} />
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek-ku0736" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all tilt-hover">
                    <Linkedin className="text-white" size={16} />
                  </a>
                  <a href="mailto:akabhi0736@gmail.com" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all tilt-hover">
                    <Mail className="text-white" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div>
            <p className="text-gray-400 text-sm">
              © 2025 <span className="text-cyan-400 font-semibold">Abhishek Kumar</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">Built with React, Tailwind CSS & ❤️</p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:scale-105 transform transition-all shadow-md hover:shadow-lg tilt-hover group"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
