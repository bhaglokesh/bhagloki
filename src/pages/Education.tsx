import React from 'react';
import LastUpdated from '../components/LastUpdated';

const getBadgeColor = (badge: string) => {
  switch (badge.toLowerCase()) {
    case 'degree':
    case 'diploma':
      return 'text-blue-600 border-blue-600/30 bg-blue-600/10 dark:text-blue-500 dark:border-blue-500/30 dark:bg-blue-500/10';
    case 'bootcamp':
    case 'course':
      return 'text-emerald-600 border-emerald-600/30 bg-emerald-600/10 dark:text-emerald-500 dark:border-emerald-500/30 dark:bg-emerald-500/10';
    case 'certificate':
      return 'text-yellow-600 border-yellow-600/30 bg-yellow-600/10 dark:text-yellow-500 dark:border-yellow-500/30 dark:bg-yellow-500/10';
    case 'self-learn':
    case 'selflearn':
      return 'text-purple-600 border-purple-600/30 bg-purple-600/10 dark:text-purple-500 dark:border-purple-500/30 dark:bg-purple-500/10';
    default:
      return 'text-stone-600 border-stone-200 bg-stone-100 dark:text-stone-400 dark:border-stone-800 dark:bg-stone-900';
  }
};

const educations = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2015 — 2019",
    badges: ["Degree"],
    description: "Graduated with Honors. Specialized in Software Engineering and Human-Computer Interaction."
  },
  {
    title: "Full Stack Web Development Bootcamp",
    institution: "CodeAcademy Pro",
    period: "2019",
    badges: ["Bootcamp", "Certificate"],
    description: "Intensive 12-week program covering modern web technologies including React, Node.js, and SQL."
  },
  {
    title: "Advanced React Patterns",
    institution: "Frontend Masters",
    period: "2020",
    badges: ["Course", "Self-learn"],
    description: "Deep dive into advanced React concepts, performance optimization, and custom hooks."
  }
];

export default function Education() {
  return (
    <div className="space-y-8 md:space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-5 md:pb-6">
        <div className="space-y-2 md:space-y-3">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-stone-400 dark:text-stone-500 uppercase">
            Portfolio
          </h2>
          <h1 className="text-2xl md:text-4xl font-serif text-stone-900 dark:text-stone-50 tracking-tight">
            Education
          </h1>
          <div className="w-12 h-0.5 bg-emerald-500"></div>
          <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 max-w-2xl font-light">
            Academic background and certifications.
          </p>
        </div>
        
      </div>

      <div className="relative border-l border-stone-200 dark:border-stone-800 ml-3 space-y-10">
        {educations.map((edu, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-50 rounded-full -left-3 ring-8 ring-white dark:ring-stone-950 dark:bg-emerald-900/20">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </span>
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg md:text-xl font-serif text-stone-900 dark:text-stone-50">{edu.title}</h3>
                  <div className="flex items-center gap-2">
                    {edu.badges.map(badge => (
                      <span key={badge} className={`px-2 py-0.5 rounded border text-[10px] font-medium ${getBadgeColor(badge)}`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-stone-400 dark:text-stone-500 font-mono text-[11px] md:text-xs shrink-0">{edu.period}</span>
              </div>
              <div className="text-stone-800 dark:text-stone-200 font-medium text-xs md:text-sm">{edu.institution}</div>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl font-light text-sm">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
