import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Code2, Calendar, BookOpen, Globe, X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { projects } from '../data/projects';

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

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [lightbox, setLightbox] = useState<{ images: string[], index: number } | null>(null);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-50">Project not found</h2>
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-12">
      {/* Header Section */}
      <div className="space-y-6">
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 uppercase font-sans transition-colors"
        >
          <ArrowLeft size={14} /> Back to Projects
        </button>
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-serif text-stone-900 dark:text-stone-50 tracking-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-stone-400 dark:text-stone-500">
            <span className="flex items-center gap-1">
              <Calendar size={12} /> {project.year}
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700"></span>
            <span className="flex items-center gap-1">
              <Code2 size={12} /> {project.tags.length} Technologies
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700"></span>
            <div className="flex flex-wrap items-center gap-2">
              {project.badges?.map(badge => (
                <span key={badge} className={`inline-flex items-center px-2 py-0.5 rounded border text-[10px] font-medium transition-colors ${getBadgeColor(badge)}`}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="max-w-3xl text-base md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium bg-stone-100 dark:bg-stone-800/50 px-3 py-1.5 rounded border border-stone-200/50 dark:border-stone-700/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 uppercase tracking-[0.15em] transition-all group/link"
            >
              <Github size={16} className="group-hover/link:scale-110 transition-transform" />
              Source Code
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-500 uppercase tracking-[0.15em] transition-all group/link"
            >
              <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Video Demo Section */}
      {project.youtube && (
        <div className="space-y-4">
          <h2 className="text-xl font-serif text-stone-900 dark:text-stone-50">Video Demo</h2>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm bg-stone-100 dark:bg-stone-900">
            <iframe 
              src={project.youtube} 
              title={`${project.title} Video Demo`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Screenshot Gallery Section */}
      {project.images && project.images.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-serif text-stone-900 dark:text-stone-50">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {project.images.slice(0, 5).map((img, index) => {
              const isLast = index === 4;
              const hasMore = project.images.length > 5;
              const remaining = project.images.length - 5;

              return (
                <div 
                  key={index}
                  className={`group relative aspect-video rounded-xl cursor-pointer ${isLast && hasMore ? '' : 'overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900'}`}
                  onClick={() => setLightbox({ images: project.images, index: isLast && hasMore ? 4 : index })}
                >
                  {isLast && hasMore ? (
                    <div className="relative w-full h-full">
                      {/* Deck of cards effect (background layers) */}
                      <div className="absolute inset-0 bg-stone-300 dark:bg-stone-700 rounded-xl translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 border border-stone-400 dark:border-stone-600 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 sm:group-hover:translate-x-4 sm:group-hover:translate-y-4 shadow-sm"></div>
                      <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 rounded-xl translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 border border-stone-300 dark:border-stone-700 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 shadow-sm"></div>
                      
                      {/* Top card */}
                      <div className="absolute inset-0 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 z-10 shadow-sm bg-stone-100 dark:bg-stone-900">
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-stone-900/60 dark:bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-white transition-colors group-hover:bg-stone-900/50 dark:group-hover:bg-black/50">
                          <Plus size={28} className="mb-1 opacity-90" />
                          <span className="text-sm font-medium tracking-wider uppercase">{remaining} More</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/20 transition-colors duration-300" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

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
