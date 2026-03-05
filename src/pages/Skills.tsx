import React from 'react';
import LastUpdated from '../components/LastUpdated';

const skillCategories = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3/SCSS", "SQL", "Go"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Vue.js"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase", "Supabase"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest", "CI/CD"]
  }
];

export default function Skills() {
  return (
    <div className="space-y-8 md:space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-5 md:pb-6">
        <div className="space-y-2 md:space-y-3">
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-stone-400 dark:text-stone-500 uppercase">
            Portfolio
          </h2>
          <h1 className="text-2xl md:text-4xl font-serif text-stone-900 dark:text-stone-50 tracking-tight">
            Skills
          </h1>
          <div className="w-12 h-0.5 bg-emerald-500"></div>
          <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 max-w-2xl font-light">
            A comprehensive list of technologies and tools I've worked with.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-serif text-stone-900 dark:text-stone-50 border-b border-stone-100 dark:border-stone-800 pb-2">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span 
                  key={item} 
                  className="px-2.5 py-1 md:px-3 md:py-1.5 bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded text-stone-600 dark:text-stone-400 text-[11px] md:text-xs font-medium hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
