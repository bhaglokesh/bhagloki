import React from 'react';
import { Github, ExternalLink, Code2, Calendar, Globe, Terminal, Archive, BookOpen } from 'lucide-react';
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
    github: "https://github.com",
    live: "https://example.com",
    blog: "/blog/finance-tracker"
  },
  {
    title: "Open Notes",
    badges: ["In Progress", "Open Source"],
    year: "2024",
    description: "A lightweight markdown note-taking app with offline support and a clean, distraction-free writing mode. No accounts needed.",
    tags: ["TypeScript", "IndexedDB", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
    blog: null
  },
  {
    title: "Weather CLI",
    badges: ["Completed", "Open Source"],
    year: "2023",
    description: "Command-line tool that fetches real-time weather data and displays it with clean terminal formatting. Supports geolocation and unit conversion.",
    tags: ["Go", "Weather API", "CLI"],
    github: "https://github.com",
    live: null,
    blog: "/blog/weather-cli"
  },
  {
    title: "Portfolio v1",
    badges: ["Archived"],
    year: "2022",
    description: "My first portfolio website built with vanilla HTML/CSS and JavaScript. A learning experience in responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com",
    live: "https://example.com",
    blog: null
  }
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 border-b border-stone-100 dark:border-stone-800 pb-8">
        <h2 className="text-[10px] font-bold tracking-[0.2em] text-stone-500 dark:text-stone-400 uppercase font-sans">
          Portfolio
        </h2>
        <h1 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-stone-50 tracking-tight">
          Projects
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
          A selection of things I've built — side projects, tools, and experiments.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col gap-4 p-6 border border-stone-100 dark:border-stone-800/50 rounded-xl hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:bg-stone-50/50 dark:hover:bg-stone-900/20 transition-all duration-500 ease-in-out"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xl font-serif font-medium text-stone-900 dark:text-stone-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-[10px] font-mono text-stone-400 dark:text-stone-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {project.year}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700"></span>
                  <span className="flex items-center gap-1">
                    <Code2 size={12} /> {project.tags.length} Technologies
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                {project.badges?.map(badge => (
                  <span key={badge} className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] font-medium transition-colors ${getBadgeColor(badge)}`}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl font-light text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium bg-stone-100 dark:bg-stone-800/50 px-2 py-1 rounded border border-stone-200/50 dark:border-stone-700/50 group-hover:border-emerald-500/20 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-2 border-t border-stone-100/50 dark:border-stone-800/50">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-bold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 uppercase tracking-[0.2em] transition-all group/link"
                >
                  <Github size={14} className="group-hover/link:scale-110 transition-transform" />
                  Source Code
                </a>
              )}
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-bold text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-500 uppercase tracking-[0.2em] transition-all group/link"
                >
                  <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
                  Live Demo
                </a>
              )}
              {project.blog && (
                <a 
                  href={project.blog}
                  className="flex items-center gap-2 text-[10px] font-bold text-stone-600 dark:text-stone-400 hover:text-purple-700 dark:hover:text-purple-500 uppercase tracking-[0.2em] transition-all group/link"
                >
                  <BookOpen size={14} className="group-hover/link:scale-110 transition-transform" />
                  Read Post
                </a>
              )}
              {!project.live && !project.blog && (
                <span className="flex items-center gap-2 text-[10px] font-bold text-stone-300 dark:text-stone-700 uppercase tracking-[0.2em] cursor-not-allowed">
                  <Globe size={14} />
                  No Demo
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

