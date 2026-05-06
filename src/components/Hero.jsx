import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Me1 from "../assets/Me_1.jpg";
import Me2 from "../assets/Me_2.jpg";
import Me3 from "../assets/Me_3.jpg";
import ResumePdf from "../assets/Abhishek_Kumar.pdf";

/* ── Typing Effect ── */
function TypingText() {
  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React.js Engineer",
    "Aspiring Software Engineer",
    "Problem Solver",
  ];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const current = roles[wordIdx];
    const speed = forward ? 75 : 35;
    const t = setTimeout(() => {
      if (forward) {
        if (charIdx < current.length) setCharIdx(c => c + 1);
        else { setTimeout(() => setForward(false), 1600); }
      } else {
        if (charIdx > 0) setCharIdx(c => c - 1);
        else { setForward(true); setWordIdx(w => (w + 1) % roles.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [charIdx, forward, wordIdx]);

  return (
    <div className="flex items-center gap-2 h-8">
      <span className="text-cyan-300 font-semibold text-lg sm:text-xl">
        {roles[wordIdx].slice(0, charIdx)}
      </span>
      <span className="typing-cursor inline-block h-6 w-0" />
    </div>
  );
}

/* ── Floating Orb ── */
const Orb = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
);

/* ── Stats ── */
const stats = [
  { value: "10+",  label: "REST APIs Built"     },
  { value: "3+",   label: "Projects Deployed"   },
  { value: "2",    label: "Internships"          },
  { value: "7.0",  label: "CGPA"                },
];

/* ── Social Links ── */
const socials = [
  { href: "https://github.com/Abhishek0736",              icon: Github,   label: "GitHub",   color: "hover:bg-white/10 hover:border-white/30"         },
  { href: "https://www.linkedin.com/in/abhishek-ku0736",  icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-500/10 hover:border-blue-400/40"  },
  { href: "mailto:akabhi0736@gmail.com",                  icon: Mail,     label: "Email",    color: "hover:bg-cyan-500/10 hover:border-cyan-400/40"   },
];

export default function Hero() {
  const images = [Me1, Me2, Me3];
  const [imgIdx, setImgIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const frameRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  /* Auto-cycle photos */
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setImgIdx(i => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [autoPlay, images.length]);

  /* 3-D tilt on photo */
  const handleMove = (e) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 10}deg) rotateY(${x * 12}deg) scale(1.02)`;
  };
  const handleLeave = () => {
    if (frameRef.current)
      frameRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      ref={ref}
      aria-label="Hero"
      className="relative min-h-screen flex items-center pt-4 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background orbs */}
      <Orb className="w-[600px] h-[600px] -left-64 -top-32 bg-violet-600/20" />
      <Orb className="w-[500px] h-[500px] right-[-200px] bottom-[-100px] bg-cyan-500/15" />
      <Orb className="w-[300px] h-[300px] left-1/2 top-1/3 bg-pink-500/10" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-7 order-2 lg:order-1"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="text-white">Abhishek</span>
                <br />
                <span className="gradient-text">Kumar</span>
              </h1>
            </motion.div>

            {/* Typing */}
            <motion.div variants={itemVariants}>
              <TypingText />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              Aspiring <span className="text-cyan-300 font-medium">MERN Stack Developer</span> passionate about building{" "}
              <span className="text-violet-300 font-medium">scalable, performant</span> web applications with clean code
              and exceptional user experience. B.Tech CSE 2026.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all"
              >
                View Projects
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={ResumePdf}
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/15 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/25 transition-all"
              >
                <Download size={16} />
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-gray-300 border border-white/10 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white transition-all hover:-translate-y-0.5 ${color}`}
                >
                  <Icon size={19} />
                </a>
              ))}
              <div className="h-px w-8 bg-gradient-to-r from-white/10 to-transparent" />
              <span className="text-xs text-muted">Connect</span>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-4 gap-4 pt-2 border-t border-white/[0.06]"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-xl sm:text-2xl font-black gradient-text">{value}</p>
                  <p className="text-[10px] sm:text-xs text-muted mt-0.5 leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div
              ref={frameRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px]"
              style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }}
            >
              {/* Glow ring */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-600/20 to-pink-500/20 blur-2xl animate-pulse-glow" />

              {/* Rotating dashed ring */}
              <div
                className="absolute -inset-3 rounded-full border border-dashed border-violet-500/30 animate-rotate-slow"
                style={{ animationDuration: "25s" }}
              />

              {/* Orbit dots */}
              {[
                { bg: "bg-cyan-400", delay: "0s" },
                { bg: "bg-pink-400", delay: "-4s" },
                { bg: "bg-violet-400", delay: "-8s" },
              ].map(({ bg, delay }, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full top-1/2 left-1/2 -mt-1.5 -ml-1.5"
                  style={{ animation: `orbit 12s linear ${delay} infinite` }}
                >
                  <div className={`w-3 h-3 rounded-full ${bg} shadow-lg`} />
                </div>
              ))}

              {/* Photo frame */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Abhishek Kumar photo ${i + 1}`}
                    draggable={false}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                      i === imgIdx ? "opacity-100 scale-100" : "opacity-0 scale-110"
                    }`}
                  />
                ))}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b14]/60 via-transparent to-transparent" />
                {/* Bottom badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-white border border-white/10 whitespace-nowrap">
                  MERN Stack Developer
                </div>
              </div>

              {/* Carousel controls */}
              <button
                onClick={() => { setImgIdx(i => (i - 1 + images.length) % images.length); setAutoPlay(false); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass border border-white/10 hover:border-white/20 hover:scale-110 transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft size={16} className="text-white" />
              </button>
              <button
                onClick={() => { setImgIdx(i => (i + 1) % images.length); setAutoPlay(false); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full glass border border-white/10 hover:border-white/20 hover:scale-110 transition-all"
                aria-label="Next photo"
              >
                <ChevronRight size={16} className="text-white" />
              </button>

              {/* Indicators */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setImgIdx(i); setAutoPlay(false); }}
                    aria-label={`Photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === imgIdx ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
