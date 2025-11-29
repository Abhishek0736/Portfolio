import React from "react";
import { Briefcase, Calendar, ArrowRight, Zap, Target, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const [visibleIndex, setVisibleIndex] = React.useState(-1);
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  React.useEffect(() => {
    experiences.forEach((_, index) => {
      setTimeout(() => setVisibleIndex(index), index * 200);
    });
  }, []);

  const experiences = [
    {
      role: "Summer Intern - Full Stack Development",
      company: "Softpro India Computer Technologies Pvt. Ltd.",
      duration: "June 2025 - August 2025",
      location: "Gorakhpur (On-site)",
      grade: "A+",
      color: "from-cyan-500/20 to-blue-600/20",
      borderColor: "from-cyan-400 to-blue-500",
      icon: Zap,
      description: "Developed scalable backend services using Spring Boot and integrated modern React frontends for enterprise applications.",
      highlights: [
        "Architected reusable Spring Boot microservices for auth & payment processing",
        "Built REST APIs handling 10K+ concurrent requests with optimized query performance",
        "Designed responsive React UI components with 95% Lighthouse score",
      ],
    },
    {
      role: "Web Development Intern",
      company: "TEACHNOOK (TeachScape Online Learning)",
      duration: "October 2024 - November 2024",
      location: "Remote",
      grade: "Completed",
      color: "from-violet-500/20 to-pink-600/20",
      borderColor: "from-violet-400 to-pink-500",
      icon: Briefcase,
      description: "Developed interactive front-end features and improved user experience for an online learning platform.",
      highlights: [
        "Built 12+ reusable React components with accessibility compliance (WCAG 2.1)",
        "Integrated REST APIs and implemented real-time data synchronization",
        "Reduced page load time by 40% through code splitting and lazy loading",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm tracking-widest">JOURNEY</span>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mb-2 sm:mb-3">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Internships & real-world contributions</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 rounded-full"></div>

          {/* Experience Cards */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => {
              const IconComp = exp.icon;
              return (
                <div 
                  key={i} 
                  className={`relative transition-all duration-700 ${visibleIndex >= i ? 'animate-float-up opacity-100' : 'opacity-0 translate-y-8'}`}
                >
                  {/* Timeline dot - Desktop only */}
                  <div className="hidden lg:block absolute left-0 top-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.borderColor} p-0.5 shadow-lg shadow-cyan-500/50 transform transition-transform duration-500 hover:scale-110 flex items-center justify-center cursor-pointer`}>
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center group">
                        <IconComp className="text-white group-hover:text-cyan-400 transition-colors" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Mobile icon badge */}
                  <div className="lg:hidden flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.borderColor} p-0.5 shadow-lg flex-shrink-0`}>
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <IconComp className="text-cyan-400" size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Main card */}
                  <div className={`lg:ml-32 transition-all duration-500 group`}>
                    {/* Animated background glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

                    <div className={`relative p-6 sm:p-8 rounded-2xl backdrop-blur-xl border-2 bg-gradient-to-br ${exp.color} border-gradient-to-br ${exp.borderColor} shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden`}>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                      <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white to-transparent blur-sm transition-opacity duration-500"></div>

                      <div className="relative z-10">
                        {/* Header - Responsive flex */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text group-hover:from-cyan-200 group-hover:to-blue-300 transition-all mb-1 sm:mb-2 break-words">
                              {exp.role}
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base font-medium group-hover:text-white transition-colors truncate">
                              {exp.company}
                            </p>
                          </div>
                          
                          {/* Duration badge - More responsive */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-all w-fit">
                              <Calendar size={14} className="text-cyan-400 flex-shrink-0" />
                              <span className="text-xs sm:text-sm font-semibold text-gray-300 whitespace-nowrap">{exp.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Location & Grade */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm">
                          <span className="text-gray-400 group-hover:text-gray-200 transition-colors">📍 {exp.location}</span>
                          <div className="hidden sm:block w-1 h-1 rounded-full bg-cyan-400"></div>
                          <span className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">Grade: {exp.grade}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm sm:text-base mb-6 group-hover:text-gray-100 transition-colors leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Highlights - Responsive grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                          {exp.highlights.map((h, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
                              style={{transitionDelay: `${idx * 50}ms`}}
                            >
                              <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">
                                {h}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

