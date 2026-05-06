import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Buddha Institute of Technology, Gorakhpur",
    duration: "2022 – 2026",
    // score: "CGPA: 7.0",
    location: "Gorakhpur, India",
    desc: "Focusing on Software Engineering, Data Structures, Algorithms, and Full Stack Development.",
    color: "cyan",
  },
  {
    degree: "Class XII (Senior Secondary)",
    institution: "CBSE Board",
    duration: "2021",
    // score: "Percentage: 74%",
    location: "India",
    desc: "Science Stream (PCM). Developed a strong foundation in Mathematics and Physics.",
    color: "violet",
  },
  {
    degree: "Class X (Secondary)",
    institution: "CBSE Board",
    duration: "2019",
    // score: "Percentage: 72%",
    location: "India",
    desc: "General subjects with a keen interest in Computer Applications and Science.",
    color: "pink",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 section-border overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label">Academic Background</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto" />
        </motion.div>

        {/* Timeline Desktop */}
        <div className="relative hidden md:block">
          {/* Main Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/20 via-violet-500/20 to-pink-500/20" />

          {educationData.map((edu, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-center mb-16 last:mb-0 ${isEven ? 'flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-[#060b14] bg-[#090f1c] z-10 flex items-center justify-center shadow-xl">
                  <GraduationCap size={20} className={edu.color === 'cyan' ? 'text-cyan-400' : edu.color === 'violet' ? 'text-violet-400' : 'text-pink-400'} />
                </div>

                {/* Card */}
                <div className={`w-[44%] ${isEven ? 'text-right' : 'text-left'}`}>
                  <div className={`group glass-card rounded-2xl p-8 border border-white/10 hover:border-${edu.color}-500/30 transition-all duration-500 hover:-translate-y-1`}>
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <span className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold ${edu.color === 'cyan' ? 'text-cyan-400' : edu.color === 'violet' ? 'text-violet-400' : 'text-pink-400'}`}>
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">{edu.degree}</h3>
                    <p className="text-cyan-300 font-semibold mb-4">{edu.institution}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{edu.desc}</p>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-bold text-white ${isEven ? 'float-right' : 'float-left'}`}>
                      <Award size={16} className="text-pink-500" />
                      {edu.score}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden space-y-10">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-violet-500 opacity-20" />
              <div className="absolute left-[-15px] top-0 w-8 h-8 rounded-full border-4 border-[#060b14] bg-[#090f1c] flex items-center justify-center">
                <GraduationCap size={14} className="text-cyan-400" />
              </div>
              <div className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-cyan-400">
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-cyan-400 font-semibold text-sm mb-4">{edu.institution}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">{edu.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white">
                  <Award size={14} className="text-pink-500" />
                  {edu.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
