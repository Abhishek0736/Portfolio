import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GithubContributions from "./components/GithubContributions";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* ── Loading Screen ── */
function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(t); setTimeout(onDone, 200); return 100; }
        return p + 4;
      });
    }, 60);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <div className="loading-screen">
      <div className="flex flex-col items-center gap-6">
        {/* Logo mark */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-violet-600 to-pink-500 animate-pulse-glow" />
          <div className="absolute inset-[2px] rounded-2xl bg-[#060b14] flex items-center justify-center">
            <span className="text-2xl font-black gradient-text">AK</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted tracking-[0.25em] uppercase mb-1">Initializing Portfolio</p>
          <p className="text-lg font-bold text-white">Abhishek Kumar</p>
        </div>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" />
        </div>
        <p className="text-xs text-muted">{progress}%</p>
      </div>
    </div>
  );
}

/* ── Cursor Glow ── */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

/* ── Scroll Progress ── */
function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setWidth(Math.min(pct, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      {loaded && (
        <div className="theme-root grid-bg overflow-x-hidden">
          <CursorGlow />
          <ScrollProgress />
          <main>
            <div className="h-[72px]" />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <GithubContributions />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <Navbar />
        </div>
      )}
    </>
  );
}
