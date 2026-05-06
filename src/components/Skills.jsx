import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Database, Wrench, BookOpen, Cpu } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const skillCategories = [
  {
    label: "Languages",
    icon: Code2,
    color: "cyan",
    skills: ["Java", "JavaScript"],
  },
  {
    label: "Frontend",
    icon: Cpu,
    color: "violet",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Backend",
    icon: Server,
    color: "pink",
    skills: ["Node.js", "Express.js", "Spring Boot"],
  },
  {
    label: "Database",
    icon: Database,
    color: "amber",
    skills: ["MongoDB", "MySQL"],
  },
  {
    label: "Concepts",
    icon: BookOpen,
    color: "emerald",
    skills: ["OOP", "DSA", "DBMS", "OS", "Computer Networks", "REST APIs", "JWT Auth", "MVC", "SDLC"],
  },
  {
    label: "Tools",
    icon: Wrench,
    color: "blue",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "MongoDB Compass"],
  },
];

const colorMap = {
  cyan:    { bg: "bg-cyan-500/10",    border: "border-cyan-500/20",    icon: "text-cyan-400",    badge: "bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20 text-cyan-200",    glow: "hover:shadow-cyan-500/10"    },
  violet:  { bg: "bg-violet-500/10",  border: "border-violet-500/20",  icon: "text-violet-400",  badge: "bg-violet-500/10 border-violet-500/20 hover:bg-violet-500/20 text-violet-200",  glow: "hover:shadow-violet-500/10"  },
  pink:    { bg: "bg-pink-500/10",    border: "border-pink-500/20",    icon: "text-pink-400",    badge: "bg-pink-500/10 border-pink-500/20 hover:bg-pink-500/20 text-pink-200",    glow: "hover:shadow-pink-500/10"    },
  amber:   { bg: "bg-amber-500/10",   border: "border-amber-500/20",   icon: "text-amber-400",   badge: "bg-amber-500/10 border-amber-500/20 hover:bg-amber-500/20 text-amber-200",   glow: "hover:shadow-amber-500/10"   },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", icon: "text-emerald-400", badge: "bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-200", glow: "hover:shadow-emerald-500/10" },
  blue:    { bg: "bg-blue-500/10",    border: "border-blue-500/20",    icon: "text-blue-400",    badge: "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20 text-blue-200",    glow: "hover:shadow-blue-500/10"    },
};

/* Coding profiles */
const profiles = [
  { label: "GitHub",      href: "https://github.com/Abhishek0736",                       handle: "@Abhishek0736",    color: "border-white/10 hover:border-white/25",           bg: "bg-white/5"         },
  { label: "LeetCode",    href: "https://leetcode.com/u/Abhishek_Kumar0736/",             handle: "@Abhishek_Kumar0736",   color: "border-amber-500/20 hover:border-amber-500/40",  bg: "bg-amber-500/5"     },
  { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/akabhi073woa/",    handle: "@akabhi073woa",    color: "border-emerald-500/20 hover:border-emerald-500/40", bg: "bg-emerald-500/5"  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("All");
  const tabs = ["All", ...skillCategories.map(c => c.label)];

  const filtered = active === "All"
    ? skillCategories
    : skillCategories.filter(c => c.label === active);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 section-border"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <span className="section-label">Technical Arsenal</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated set of technologies I work with to build modern, scalable applications
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === tab
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map(({ label, icon: Icon, color, skills }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={label}
                variants={sectionVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: i * 0.08 }}
                className={`group glass-card rounded-2xl p-6 border ${c.border} ${c.glow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${c.bg} border ${c.border}`}>
                    <Icon size={18} className={c.icon} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{label}</h3>
                    <p className="text-xs text-muted">{skills.length} technologies</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className={`skill-badge border ${c.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coding Profiles */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-5 text-center">Coding Profiles</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {profiles.map(({ label, href, handle, color, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`group flex flex-col items-center gap-3 p-5 rounded-2xl ${bg} border ${color} hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
              >
                <span className="text-2xl">{label === "GitHub" ? "🐙" : label === "LeetCode" ? "⚡" : "🟢"}</span>
                <div className="text-center">
                  <p className="font-semibold text-white">{label}</p>
                  <p className="text-xs text-muted mt-1">{handle}</p>
                </div>
                <span className="text-xs text-muted group-hover:text-white transition-colors px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  View Profile →
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
