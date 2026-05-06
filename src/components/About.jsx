import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Users, Rocket, Target, Lightbulb, Code2, Coffee, Heart } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const traits = [
  {
    icon: Lightbulb,
    title: "Innovative Thinker",
    desc: "I explore creative solutions and think outside the box to solve complex problems efficiently.",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
    iconColor: "text-amber-300",
    glow: "hover:shadow-amber-500/10",
  },
  {
    icon: Users,
    title: "Collaborative Developer",
    desc: "Strong believer in teamwork — I actively contribute ideas, give feedback, and help teammates grow.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    iconColor: "text-blue-300",
    glow: "hover:shadow-blue-500/10",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    desc: "Passionate about continuous learning — I quickly adapt to new technologies and frameworks.",
    gradient: "from-violet-500/20 to-pink-500/20",
    border: "border-violet-500/20",
    iconColor: "text-violet-300",
    glow: "hover:shadow-violet-500/10",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    desc: "Focused on delivering high-quality, scalable solutions on time with precision and care.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-300",
    glow: "hover:shadow-emerald-500/10",
  },
];

const quickFacts = [
  { icon: Code2,   text: "Passionate about clean, maintainable, scalable code"    },
  { icon: Users,   text: "Love collaborating with cross-functional teams"          },
  { icon: Rocket,  text: "Always exploring new technologies and best practices"    },
  { icon: Heart,   text: "Committed to delivering projects with high-quality standards" },
  { icon: Coffee,  text: "DSA enthusiast — practice problems every day"            },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 section-border"
    >
      {/* BG accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-label">Who I Am</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate MERN Stack developer on a mission to build scalable, user-centric applications
          </p>
        </motion.div>

        {/* Career Vision */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="relative glass-card rounded-2xl p-8 border-gradient overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex gap-5 items-start">
              <div className="p-3 rounded-xl bg-violet-500/15 border border-violet-500/20 flex-shrink-0">
                <Zap size={22} className="text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Career Vision</h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  Aspiring <span className="text-cyan-300 font-medium">MERN Stack Developer</span> dedicated to building
                  innovative, scalable web applications. I combine technical expertise with strong problem-solving skills
                  and a collaborative mindset. My approach emphasizes{" "}
                  <span className="text-violet-300 font-medium">clean code, user experience,</span> and continuous
                  improvement. Backed by hands-on experience in{" "}
                  <span className="text-pink-300 font-medium">REST APIs, JWT authentication, MVC architecture</span> and
                  Agile SDLC — I'm ready to contribute meaningfully from day one.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Traits */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {traits.map(({ icon: Icon, title, desc, gradient, border, iconColor, glow }) => (
            <motion.div
              key={title}
              variants={sectionVariants}
              className={`group glass-card rounded-2xl p-6 border ${border} bg-gradient-to-br ${gradient} hover:shadow-xl ${glow} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <Icon size={22} className={iconColor} />
              </div>
              <h4 className="font-bold text-white mb-2">{title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-2xl p-8 border border-white/[0.06]"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-xl">💡</span>
            Quick Facts
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {quickFacts.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/15 flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors mt-0.5">
                  <Icon size={14} className="text-cyan-400" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
