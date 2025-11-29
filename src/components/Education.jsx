import React from "react";
import { BookOpen, Award, Trophy, Star } from "lucide-react";

export default function Education() {
  const [visible, setVisible] = React.useState(-1);

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Buddha Institute of Technology, Gorakhpur",
      duration: "Aug 2022 - Jun 2026 (Expected)",
      location: "Gorakhpur, India",
      icon: BookOpen,
    },
    {
      degree: "Higher Secondary (12th)",
      field: "CBSE",
      institution: "St. Xavier's School, Salempur, Deoria",
      duration: "2021",
      location: "Deoria, India",
      icon: BookOpen,
    },
    {
      degree: "Secondary (10th)",
      field: "CBSE",
      institution: "St. Xavier's School, Salempur, Deoria",
      duration: "2019",
      location: "Deoria, India",
      icon: BookOpen,
    },
  ];

  const certifications = [
    {
      title: "Internship — Softpro India",
      issuer: "Softpro India Computer Technologies Pvt. Ltd.",
      achievement: "A+ Grade — Full-Stack Development",
      icon: Trophy,
    },
    {
      title: "Internship — TEACHNOOK",
      issuer: "TeachScape Online Learning Services Pvt. Ltd.",
      achievement: "Web Development & Integration",
      icon: Award,
    },
    {
      title: "AI & ML Workshop",
      issuer: "GeeksforGeeks",
      achievement: "Core AI Concepts & Implementation",
      icon: Star,
    },
    {
      title: "Tech Events",
      issuer: "College Events",
      achievement: "Participant — Tech Yuva 2024 & Challenges",
      icon: Award,
    },
  ];

  React.useEffect(() => {
    const timers = [];
    education.concat(certifications).forEach((_, i) => {
      timers.push(setTimeout(() => setVisible(i), i * 120));
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-400" />
            <span className="text-indigo-400 font-semibold text-sm tracking-widest">ACADEMIC</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-gray-400 mt-3">Academic record, internships and notable certifications</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Education list */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((e, idx) => {
                const Icon = e.icon;
                const visibleIdx = idx;
                return (
                  <article
                    key={idx}
                    className={`relative overflow-hidden rounded-2xl p-5 sm:p-6 backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/3 to-white/5 tilt-hover shimmer pop-on-hover group hover:shadow-2xl transition-all duration-400 ${visible >= visibleIdx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${idx * 90}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 p-3 flex items-center justify-center shadow-md pulse-badge group-hover:scale-105 transform transition-transform">
                        <Icon className="text-white" size={22} />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-white">{e.degree}</h4>
                        <p className="text-sm text-gray-300 mt-1">{e.field}</p>
                        <p className="text-sm text-gray-400 mt-2">{e.institution}</p>
                        <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-400">
                          <span className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/3">📍 {e.location}</span>
                          <span className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/3">📅 {e.duration}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Certifications & Achievements</h3>
            <div className="grid gap-4">
              {certifications.map((c, idx) => {
                const Icon = c.icon;
                const visibleIdx = education.length + idx;
                return (
                  <div
                    key={idx}
                    className={`relative rounded-2xl p-4 sm:p-5 backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/3 to-white/5 tilt-hover shimmer pop-on-hover group transition-all duration-400 ${visible >= visibleIdx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${visibleIdx * 90}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 p-2 flex items-center justify-center shadow-sm pulse-badge group-hover:scale-105 transform transition-transform">
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-md font-semibold text-white">{c.title}</h4>
                        <p className="text-sm text-gray-300 mt-1">{c.issuer}</p>
                        <p className="text-sm text-gray-400 mt-2">{c.achievement}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
