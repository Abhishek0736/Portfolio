import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import Me1 from "../assets/Me_1.jpg";
import Me2 from "../assets/Me_2.jpg";
import Me3 from "../assets/Me_3.jpg";
import ResumePdf from "/public/Abhishek_Kumar_.pdf"

export default function Hero() {
  const images = [Me1, Me2, Me3];
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hover, setHover] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [auto, images.length]);

  const handleMove = (e) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = -y * 8;
    const ry = x * 10;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${hover ? 1.02 : 1})`;
  };

  const handleLeave = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -left-56 -top-44 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-3xl mix-blend-multiply animate-float" />
        <div className="absolute right-[-180px] bottom-[-120px] w-96 h-96 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 blur-3xl mix-blend-multiply animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: copy */}
                  <div className="space-y-8 md:pr-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 backdrop-blur-md hover:border-cyan-400/60 transition-all">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                      </span>
                      <span className="text-cyan-200 font-semibold text-sm">Available for Work</span>
                    </div>

                    {/* Main Heading */}
                    <div>
                      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-400 drop-shadow-lg">
                        Abhishek Kumar
                      </h1>
                      <p className="text-base sm:text-lg text-cyan-300/80 font-medium mt-3">Full Stack Developer</p>
                    </div>

                    {/* Description */}
                    <p className="text-lg sm:text-xl text-gray-300/90 max-w-xl leading-relaxed font-light">
                      I craft high-performance web experiences with <span className="text-cyan-300 font-semibold">React</span>, <span className="text-blue-300 font-semibold">Node.js</span>, and <span className="text-violet-300 font-semibold">MongoDB</span>. Performance-first, design-driven, always learning.
                    </p>

                    <TypingRole />

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href="#projects"
                        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all overflow-hidden"
                      >
                        <span className="relative z-10">View Work</span>
                        <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-400/50 text-white rounded-xl hover:bg-cyan-500/10 hover:border-cyan-300 transition-all font-semibold backdrop-blur-sm"
                      >
                        Get in Touch
                      </a>

                      <a
                        href={ResumePdf}
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-white rounded-xl hover:bg-white/10 hover:border-white/40 transition-all font-semibold backdrop-blur-md"
                        aria-label="Download resume"
                      >
                        <Download size={18} /> Resume
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 pt-4">
                      <a href="https://github.com/Abhishek0736" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all hover:scale-110">
                        <Github size={20} className="text-cyan-300" />
                      </a>
                      <a href="https://www.linkedin.com/in/abhishek-ku0736" target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all hover:scale-110">
                        <Linkedin size={20} className="text-blue-300" />
                      </a>
                      <a href="mailto:akabhi0736@gmail.com" className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-violet-500/20 hover:border-violet-400/50 transition-all hover:scale-110">
                        <Mail size={20} className="text-violet-300" />
                      </a>
                    </div>
                  </div>

                  {/* Right: portrait with frames + carousel */}
          <div className="flex items-center justify-center">
            <div
              ref={frameRef}
              onMouseMove={handleMove}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => {
                setHover(false);
                handleLeave();
              }}
              className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]"
            >
              {/* Layered frames */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-10 blur-sm transform rotate-3" />
              <div className="absolute -inset-8 rounded-3xl border-2 border-white/6 transform rotate-3 opacity-30" />

              {/* image frame */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl img-shine">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Abhishek photo ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                      i === index ? "opacity-100 scale-100" : "opacity-0 scale-110"
                    }`} 
                    draggable={false}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />
              </div>

              {/* controls */}
              <button
                onClick={() => {
                  setIndex((i) => (i - 1 + images.length) % images.length);
                  setAuto(false);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass shadow-md hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => {
                  setIndex((i) => (i + 1) % images.length);
                  setAuto(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass shadow-md hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight />
              </button>

              {/* indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIndex(i);
                      setAuto(false);
                    }}
                    aria-label={`Show image ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-md" : "w-2.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>

              {/* small particles */}
              <span className="particle" style={{ left: '12%', top: '10%', background: 'rgba(6,182,212,0.8)' }} />
              <span className="particle" style={{ right: '12%', bottom: '20%', background: 'rgba(99,102,241,0.8)' }} />
              <span className="particle" style={{ left: '68%', top: '18%', background: 'rgba(236,72,153,0.85)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TypingRole() {
  const roles = ["Full Stack Developer", "MERN Engineer", "UI-focused", "Performance-minded"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const current = roles[wordIndex];
    const speed = forward ? 80 : 40;
    const t = setTimeout(() => {
      if (forward) {
        if (charIndex < current.length) setCharIndex((c) => c + 1);
        else setForward(false);
      } else {
        if (charIndex > 0) setCharIndex((c) => c - 1);
        else {
          setForward(true);
          setWordIndex((w) => (w + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [charIndex, forward, wordIndex, roles]);

  return (
    <div className="mt-2 flex items-center gap-3">
      <span className="text-sm text-cyan-300 font-medium">{roles[wordIndex].slice(0, charIndex)}</span>
      <span className="typing-cursor" style={{ height: 18 }} />
      <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
    </div>
  );
}
