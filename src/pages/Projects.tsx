import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code2, Calendar, Globe, Terminal, Archive, BookOpen, X, ChevronLeft, ChevronRight, Plus, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { TechBadge } from '../components/TechBadge';

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

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ images: string[], index: number } | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<{ pIndex: number, iIndex: number } | null>({ pIndex: 0, iIndex: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (activeTooltip) {
      const timer = setTimeout(() => {
        setActiveTooltip(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [activeTooltip]);

  return (
    <div className="space-y-8">
      <div className="space-y-2 border-b border-stone-200 dark:border-stone-800 pb-8">
        <h2 className="text-[10px] font-bold tracking-[0.2em] text-stone-500 dark:text-stone-400 uppercase font-sans">
          Portfolio
        </h2>
        <h1 className="text-3xl md:text-5xl font-serif text-stone-900 dark:text-stone-50 tracking-tight">
          Projects
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
          A selection of things I've built — side projects, tools, and experiments.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => {
          return (
            <div 
              key={index} 
              className="group relative flex flex-col gap-4 p-6 bg-white dark:bg-stone-900/40 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 ease-in-out"
            >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-medium text-stone-900 dark:text-stone-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
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
                  <Link 
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all bg-emerald-500 text-white border border-transparent hover:bg-emerald-600 dark:bg-emerald-500 dark:text-stone-950 dark:hover:bg-emerald-400 shadow-sm hover:shadow-emerald-500/20 hover:-translate-y-0.5 group/details"
                  >
                    Details
                    <ArrowRight size={10} className="group-hover/details:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl font-light text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TechBadge key={tag} tag={tag} />
                ))}
              </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-200 dark:border-stone-800 mt-auto">
              <div className="flex items-center gap-6">
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

              {/* Small Avatar-like Images */}
              {project.images && project.images.length > 0 && (
                <div className="flex items-center gap-2">
                  {project.images.slice(0, 2).map((img, imgIndex) => {
                    const isTooltipVisible = activeTooltip?.pIndex === index && activeTooltip?.iIndex === imgIndex && !lightbox;
                    return (
                      <div 
                        key={imgIndex} 
                        className="relative group/img"
                        onMouseEnter={() => setActiveTooltip({ pIndex: index, iIndex: imgIndex })}
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="w-8 h-8 rounded object-cover cursor-pointer border border-stone-200 dark:border-stone-700 hover:scale-110 hover:border-emerald-500/50 transition-all shadow-sm"
                          onClick={() => setLightbox({ images: project.images, index: imgIndex })}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-stone-800 dark:bg-stone-200 text-stone-100 dark:text-stone-800 text-[10px] font-medium rounded transition-opacity pointer-events-none z-10 whitespace-nowrap shadow-sm ${isTooltipVisible ? 'opacity-100' : 'opacity-0'}`}>
                          Click to zoom
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-800 dark:border-t-stone-200"></div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Add symbol to navigate to project page */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/projects/${project.id}`);
                    }}
                    className="w-8 h-8 flex items-center justify-center rounded bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:scale-110 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm cursor-pointer"
                    title="View project details & gallery"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
        })}
      </div>

      {/* Image Modal Gallery */}
      {lightbox && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div 
            className="relative max-w-5xl w-full flex items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 p-2 text-stone-400 hover:text-white transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={24} />
            </button>

            {lightbox.images.length > 1 && (
              <button 
                className="absolute left-2 md:static z-50 flex p-2 md:p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-all backdrop-blur-md"
                onClick={() => setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null)}
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            )}

            <div className="relative flex-1 flex justify-center items-center">
              <img 
                src={lightbox.images[lightbox.index]} 
                alt="Project Zoom" 
                className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl"
              />
              
              {/* Mobile Navigation Overlays */}
              {lightbox.images.length > 1 && (
                <>
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1/3 md:hidden"
                    onClick={() => setLightbox(prev => prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null)}
                  />
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-1/3 md:hidden"
                    onClick={() => setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null)}
                  />
                </>
              )}
            </div>

            {lightbox.images.length > 1 && (
              <button 
                className="absolute right-2 md:static z-50 flex p-2 md:p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-all backdrop-blur-md"
                onClick={() => setLightbox(prev => prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null)}
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            )}
          </div>
          
          {/* Image Counter */}
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white/80 text-xs font-mono tracking-widest">
              {lightbox.index + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

