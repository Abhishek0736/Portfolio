import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

// Custom Logo Component
const Logo = () => {
  return (
    <a href="#home" className="flex items-center gap-2 group">
      {/* Logo Icon - Modern & Professional */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 p-0.5 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110">
        <div className="w-full h-full rounded-lg bg-slate-900 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Stylized 'A' */}
            <span className="font-black text-lg bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              A
            </span>
            {/* Accent dots */}
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Logo Text */}
      <div className="hidden sm:flex flex-col">
        <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-none">
          Abhishek
        </span>
        <span className="text-xs text-gray-400 font-semibold">Developer</span>
      </div>
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20"
            : "bg-gradient-to-r from-slate-900/80 via-purple-900/50 to-slate-900/80 backdrop-blur-md border-b border-purple-500/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  index === 0
                    ? "text-purple-300"
                    : "text-gray-300 hover:text-purple-300"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-8 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Download CV Button - Desktop */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Code2 size={16} />
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-xl border-t border-purple-500/20 px-4 py-4 space-y-1 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-gray-300 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300 text-sm font-medium rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-purple-500/20 mt-2">
              <a
                href="#contact"
                className="block px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Navbar Spacer */}
      <div className="h-16"></div>
    </>
  );
}
