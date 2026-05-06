import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, Zap, CheckCircle2 } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const experiences = [
  {
    role: "AI Certification & Employability",
    company: "Infosys Foundation",
    duration: "2025",
    location: "Gorakhpur",
    description: "Intensive training on AI fundamentals and professional workplace readiness.",
    color: "pink",
    highlights: [
      "Explored Artificial Intelligence fundamentals",
      "Participated in the Employability Program",
      "Mastered professional communication and ethics"
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "Softpro India Computer Technologies Pvt. Ltd.",
    duration: "June 2025 - August 2025",
    location: "Noida, UP",
    description: "Built scalable backend services and integrated modern frontends for enterprise-level applications.",
    color: "cyan",
    highlights: [
      "Developed 10+ REST APIs using Spring Boot and MySQL",
      "Implemented MVC architecture and optimized SQL queries",
      "Collaborated in an Agile SDLC environment",
      "Achieved A+ Grade for project excellence"
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "TEACHNOOK",
    duration: "Oct 2024 - Nov 2024",
    location: "Remote",
    description: "Focused on building responsive user interfaces and integrating complex backend services.",
    color: "violet",
    highlights: [
      "Built responsive React interfaces using Tailwind CSS",
      "Implemented secure JWT Authentication systems",
      "Integrated REST APIs for real-time data handling",
      "Designed role-based access control (RBAC)"
    ],
  },

];

const colorMap = {
  cyan: "from-cyan-500/20 to-blue-600/20",
  violet: "from-violet-500/20 to-indigo-600/20",
  pink: "from-pink-500/20 to-rose-600/20",
};

const borderMap = {
  cyan: "border-cyan-500/30 group-hover:border-cyan-500/60",
  violet: "border-violet-500/30 group-hover:border-violet-500/60",
  pink: "border-pink-500/30 group-hover:border-pink-500/60",
};

const accentMap = {
  cyan: "bg-cyan-500",
  violet: "bg-violet-500",
  pink: "bg-pink-500",
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 section-border">
      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label">My Journey</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-pink-500 opacity-20" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 sm:left-1/2 top-6 sm:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className={`w-10 h-10 rounded-full ${accentMap[exp.color]} p-[2px] shadow-lg shadow-black`}>
                      <div className="w-full h-full rounded-full bg-[#060b14] flex items-center justify-center">
                        <Briefcase size={16} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[45%] ml-12 sm:ml-0 ${isEven ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                    <div className={`group glass-card rounded-2xl p-6 sm:p-8 border ${borderMap[exp.color]} bg-gradient-to-br ${colorMap[exp.color]} transition-all duration-500 hover:-translate-y-2`}>
                      {/* Duration & Location */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
                          <Calendar size={12} className="text-cyan-400" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
                          <MapPin size={12} className="text-pink-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:gradient-text transition-all">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-sm mb-4">{exp.company}</p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                            <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 ${accentMap[exp.color].replace('bg-', 'text-')}`} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
