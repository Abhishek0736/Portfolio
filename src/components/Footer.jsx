import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#060b14] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Pre-footer CTA */}
        <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to build something <span className="gradient-text">extraordinary?</span></h2>
            <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-cyan-400 hover:scale-105 transition-all shadow-xl shadow-cyan-500/10"
            >
                Let's Work Together
            </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
                    <span className="text-xs font-black text-white">AK</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">Abhishek Kumar</span>
            </div>
            <p className="text-muted text-sm max-w-xs text-center md:text-left">
                MERN Stack Developer building the future of the web, one pixel at a time.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {["Home", "About", "Experience", "Projects", "Contact"].map(l => (
                  <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest">
                      {l}
                  </a>
              ))}
          </div>

          {/* Socials & Scroll Top */}
          <div className="flex items-center gap-6">
              <div className="flex gap-4">
                  {[
                      { icon: Github,   href: "https://github.com/Abhishek0736" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-ku0736" },
                      { icon: Mail,     href: "mailto:akabhi0736@gmail.com" },
                  ].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                          <s.icon size={20} />
                      </a>
                  ))}
              </div>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
                aria-label="Scroll to top"
              >
                  <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
              </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
                © {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
            </p>
            <p className="text-xs text-muted flex items-center gap-1.5">
                Designed & Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> by Abhishek
            </p>
        </div>
      </div>
    </footer>
  );
}
