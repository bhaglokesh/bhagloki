import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Tooltip } from '../components/Tooltip';

const getBadgeColor = (badge: string) => {
  switch (badge.toLowerCase()) {
    case 'in progress':
      return 'text-amber-600 border-amber-600/30 bg-amber-600/10 dark:text-amber-500 dark:border-amber-500/30 dark:bg-amber-500/10';
    case 'open source':
      return 'text-sky-600 border-sky-600/30 bg-sky-600/10 dark:text-sky-500 dark:border-sky-500/30 dark:bg-sky-500/10';
    case 'live':
      return 'text-emerald-600 border-emerald-600/30 bg-emerald-600/10 dark:text-emerald-500 dark:border-emerald-500/30 dark:bg-emerald-500/10';
    case 'archived':
      return 'text-stone-600 border-stone-600/30 bg-stone-600/10 dark:text-stone-400 dark:border-stone-500/30 dark:bg-stone-500/10';
    default:
      return 'text-stone-600 border-stone-200 bg-stone-100 dark:text-stone-400 dark:border-stone-800 dark:bg-stone-900';
  }
};

const projects = [
  {
    title: "Personal Finance Tracker",
    badges: ["Live", "Open Source"],
    year: "2024",
    description: "A minimal web app to track income and expenses, with visual charts and monthly summaries. Built with a focus on simplicity and speed.",
    tags: ["React", "Chart.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "Open Notes",
    badges: ["In Progress", "Open Source"],
    year: "2024",
    description: "A lightweight markdown note-taking app with offline support and a clean, distraction-free writing mode. No accounts needed.",
    tags: ["TypeScript", "IndexedDB", "CSS"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather CLI",
    badges: ["Completed", "Open Source"],
    year: "2023",
    description: "Command-line tool that fetches real-time weather data and displays it with clean terminal formatting. Supports geolocation and unit conversion.",
    tags: ["Go", "Weather API", "CLI"],
    github: "#",
    live: null // CLI tool might not have a live link
  },
  {
    title: "Portfolio v1",
    badges: ["Archived"],
    year: "2022",
    description: "My first portfolio website built with vanilla HTML/CSS and JavaScript. A learning experience in responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 border-b border-stone-100 dark:border-stone-800 pb-6">
        <h2 className="text-[10px] font-bold tracking-[0.2em] text-stone-500 dark:text-stone-400 uppercase font-sans">
          Portfolio
        </h2>
        <h1 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-stone-50 tracking-tight">
          Projects
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-light">
          A selection of things I've built — side projects, tools, and experiments.
        </p>
      </div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col gap-1 p-2 border border-transparent rounded-lg hover:border-stone-100 dark:hover:border-stone-800 hover:bg-stone-50/50 dark:hover:bg-stone-900/30 hover:shadow-sm transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
              <h3 className="text-base font-serif font-medium text-stone-900 dark:text-stone-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-[10px] font-mono">
                {project.badges?.map(badge => (
                  <span key={badge} className={`px-1.5 py-0 rounded border text-[9px] font-medium ${getBadgeColor(badge)}`}>
                    {badge}
                  </span>
                ))}
                <span className="text-stone-400 dark:text-stone-500">
                  {project.year}
                </span>
              </div>
            </div>

            <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl font-light text-xs">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[9px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0 rounded">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-0.5">
              {project.github && (
                <a href={project.github} className="flex items-center gap-0.5 text-[9px] font-bold text-stone-900 dark:text-stone-100 hover:text-emerald-700 dark:hover:text-emerald-500 uppercase tracking-[0.2em] transition-colors">
                  GitHub <ArrowUpRight size={9} />
                </a>
              )}
              {project.live && (
                <a href={project.live} className="flex items-center gap-0.5 text-[9px] font-bold text-stone-900 dark:text-stone-100 hover:text-emerald-700 dark:hover:text-emerald-500 uppercase tracking-[0.2em] transition-colors">
                  Live <ArrowUpRight size={9} />
                </a>
              )}
              {/* Future Blog Link Placeholder */}
              <button className="flex items-center gap-0.5 text-[9px] font-bold text-stone-400 dark:text-stone-600 uppercase tracking-[0.2em] cursor-not-allowed">
                Blog Post (Coming Soon)
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
