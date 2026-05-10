import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Download, User, Briefcase, Code, GraduationCap, Send, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ResumePdf from "../assets/Abhishek_Kumar.pdf";

const navLinks = [
  { label: "Home",       href: "#home",       icon: <Home size={18} /> },
  { label: "About",      href: "#about",      icon: <User size={18} /> },
  { label: "Skills",     href: "#skills",     icon: <Code size={18} /> },
  { label: "Experience", href: "#experience", icon: <Briefcase size={18} /> },
  { label: "Projects",   href: "#projects",   icon: <Code size={18} /> },
  { label: "Education",  href: "#education",  icon: <GraduationCap size={18} /> },
  { label: "Contact",    href: "#contact",    icon: <Send size={18} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);

  // Toggle Body Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Scroll & Active Section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Intersection Observer for active section detection
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Handle Click Outside & Escape Key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-[#060b14]/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group relative z-[110]"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 via-violet-600 to-pink-500 opacity-90 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
              <div className="absolute inset-[2px] rounded-[10px] bg-[#060b14] flex items-center justify-center">
                <span className="text-sm font-black gradient-text">AK</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-white leading-none">Abhishek Kumar</p>
              <p className="text-[10px] text-muted font-medium tracking-widest uppercase mt-1">Full Stack Developer</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  active === link.href.slice(1)
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={ResumePdf}
              download
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all active:scale-95"
            >
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[110] p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Darkened Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-[90]"
            />

            {/* Menu Content */}
            <motion.div
              ref={menuRef}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-0 left-0 w-full bg-[#060b14] border-b border-white/[0.08] lg:hidden z-[100] pt-24 pb-8 px-6 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    variants={itemVariants}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium transition-all ${
                      active === link.href.slice(1)
                        ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <span className={active === link.href.slice(1) ? "text-cyan-400" : "text-gray-500"}>
                      {link.icon}
                    </span>
                    {link.label}
                  </motion.a>
                ))}

                <motion.div
                  variants={itemVariants}
                  className="mt-6 pt-6 border-t border-white/[0.05] grid grid-cols-2 gap-4"
                >
                  <a
                    href={ResumePdf}
                    download
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600"
                  >
                    <Download size={18} /> Resume
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center py-4 rounded-2xl text-sm font-bold border border-white/10 text-gray-300 bg-white/5"
                  >
                    Hire Me
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
