import React, { useEffect, useState } from "react";
import { Code2, Database, Zap, GitBranch, Palette, Server, Lightbulb, Users, Rocket, Target } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      icon: <Palette size={24} />,
      items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server size={24} />,
      items: ["Node.js", "Express.js", "Java", "Spring Boot"],
    },
    {
      category: "Database",
      icon: <Database size={24} />,
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools",
      icon: <GitBranch size={24} />,
      items: ["Git", "GitHub", "VS Code", "Postman", "Netlify"],
    },
  ];

  const softSkills = ["Leadership", "Communication", "Problem-Solving", "Team Collaboration"];

  const personality = [
    {
      icon: <Lightbulb size={28} />,
      title: "Innovative Thinker",
      description: "I love exploring creative solutions and thinking outside the box to solve complex problems efficiently.",
      color: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-500/30",
      text: "text-yellow-300",
    },
    {
      icon: <Users size={28} />,
      title: "Collaborative Developer",
      description: "Strong believer in teamwork. I actively contribute ideas, listen to feedback, and help team members grow.",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      text: "text-blue-300",
    },
    {
      icon: <Rocket size={28} />,
      title: "Fast Learner",
      description: "Passionate about continuous learning. I quickly adapt to new technologies and frameworks to stay ahead.",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      text: "text-purple-300",
    },
    {
      icon: <Target size={28} />,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality, scalable solutions. I set clear objectives and execute with precision.",
      color: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      text: "text-green-300",
    },
  ];

  const workStyle = [
    {
      label: "Code Quality",
      percentage: 95,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Problem Solving",
      percentage: 92,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Communication",
      percentage: 88,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Team Collaboration",
      percentage: 90,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  // UI state for skills section
  const [activeTab, setActiveTab] = useState('All');
  const [mounted, setMounted] = useState(false);

  // Category proficiency percentages
  const categoryPct = {
    Frontend: 85,
    Backend: 80,
    Database: 75,
    Tools: 78,
  };

  // Individual skill proficiency (used for mini bars)
  const skillLevels = {
    "HTML": 96,
    "CSS": 92,
    "JavaScript": 90,
    "React.js": 90,
    "Next.js": 82,
    "Tailwind CSS": 88,
    "Node.js": 85,
    "Express.js": 82,
    "Java": 78,
    "Spring Boot": 75,
    "MongoDB": 80,
    "MySQL": 75,
    "Git": 92,
    "GitHub": 92,
    "VS Code": 96,
    "IntelliJ IDEA": 78,
    "MongoDB Compass": 85,
    "Postman": 85,
    "Netlify": 80,
    "Vercel": 85,
  };

  useEffect(() => {
    // trigger animated bars after mount
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate MERN stack developer with a mission to build scalable, user-centric applications
          </p>
        </div>

        {/* Career Objective */}
        <div className="mb-16 p-8 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl hover:border-purple-500/50 transition-all duration-300">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-purple-500/20 rounded-lg h-fit">
              <Zap size={24} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-3">Career Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Aspiring MERN stack developer dedicated to building innovative, scalable web applications. I combine technical expertise with strong problem-solving skills and a collaborative mindset. My approach emphasizes clean code, user experience, and continuous improvement. I'm committed to growing as a developer while contributing meaningfully to team projects.
              </p>
            </div>
          </div>
        </div>

        {/* Personality & Attitude Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">My Approach & Attitude</h3>
            <p className="text-gray-400">What drives me as a developer and team member</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {personality.map((trait, index) => (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br ${trait.color} border ${trait.border} rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group hover:scale-105 transform`}
              >
                <div className={`p-3 bg-gradient-to-br ${trait.color} rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={trait.text}>{trait.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{trait.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Style & Strengths */}
        <div className="mb-16 p-8 bg-gradient-to-r from-slate-800/50 to-purple-900/30 border border-purple-500/20 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-8">Work Style Strengths</h3>
          <div className="space-y-6">
            {workStyle.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 font-semibold">{item.label}</span>
                  <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-bold`}>
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${item.percentage}%`,
                      animation: `slideIn 1s ease-out forwards`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills - Simple Glass Cards */}
        <div className="mb-16">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-1">Technical Skills</h3>
            <p className="text-gray-400">Core technologies I use — clear, professional and minimal.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="p-5 rounded-xl glass border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-white/6 to-white/3">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-white">{skill.category}</h4>
                      <div className="text-xs text-gray-300">{skill.items.length}</div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {skill.items.map((it) => (
                        <span key={it} className="px-2 py-1 text-xs bg-white/5 rounded-md text-gray-200">{it}</span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <div className="text-xs text-gray-400 mb-1">Proficiency</div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700"
                          style={{ width: mounted ? `${categoryPct[skill.category]}%` : '0%' }}
                        />
                      </div>
                      <div className="mt-2 text-xs text-gray-300">{categoryPct[skill.category]}% confidence</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Soft Skills & Values</h3>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-full text-purple-300 font-medium hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts / Personal Touch */}
        <div className="p-6 bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/20 rounded-lg">
          <h4 className="text-lg font-bold text-pink-300 mb-3">💡 Quick Facts</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold mt-0.5">→</span>
              <span>Passionate about writing clean, maintainable code that scales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold mt-0.5">→</span>
              <span>Love collaborating with cross-functional teams and mentoring junior developers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold mt-0.5">→</span>
              <span>Always exploring new technologies and best practices in web development</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 font-bold mt-0.5">→</span>
              <span>Committed to delivering projects on time with high-quality standards</span>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
