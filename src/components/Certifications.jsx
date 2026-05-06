import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ShieldCheck, Zap, Globe, FileCode } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const certs = [
  {
    title: "AI Certification",
    issuer: "Infosys Foundation",
    icon: Zap,
    color: "cyan",
  },
  {
    title: "Java Fundamentals",
    issuer: "Infosys Springboard",
    icon: FileCode,
    color: "violet",
  },
  {
    title: "Career Edge",
    issuer: "TCS iON",
    icon: ShieldCheck,
    color: "pink",
  },
  {
    title: "PepsiCo Certification",
    issuer: "Internshala",
    icon: Award,
    color: "cyan",
  },
  {
    title: "Git and GitHub",
    issuer: "Certification",
    icon: Globe,
    color: "violet",
  },
];

const colorMap = {
  cyan:   "from-cyan-500/10 to-blue-600/10 border-cyan-500/20 group-hover:border-cyan-500/50",
  violet: "from-violet-500/10 to-indigo-600/10 border-violet-500/20 group-hover:border-violet-500/50",
  pink:   "from-pink-500/10 to-rose-600/10 border-pink-500/20 group-hover:border-pink-500/50",
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 section-border">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label">Recognition</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Certifications & <span className="gradient-text">Badges</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group glass-card rounded-2xl p-6 text-center border bg-gradient-to-br ${colorMap[cert.color]} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className={cert.color === 'cyan' ? 'text-cyan-400' : cert.color === 'violet' ? 'text-violet-400' : 'text-pink-400'} size={28} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[10px] text-muted font-black uppercase tracking-widest">
                  {cert.issuer}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
