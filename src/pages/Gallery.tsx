import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import LastUpdated from '../components/LastUpdated';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  aspectRatio: string; // 'portrait' | 'landscape' | 'square'
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: 'https://picsum.photos/seed/workspace/1200/800', title: 'Minimal Workspace', category: 'Setup', aspectRatio: 'landscape' },
  { id: 2, src: 'https://picsum.photos/seed/code/800/1200', title: 'Late Night Coding', category: 'Dev', aspectRatio: 'portrait' },
  { id: 3, src: 'https://picsum.photos/seed/coffee/800/800', title: 'Morning Brew', category: 'Lifestyle', aspectRatio: 'square' },
  { id: 4, src: 'https://picsum.photos/seed/tech/800/600', title: 'Tech Essentials', category: 'Gear', aspectRatio: 'landscape' },
  { id: 5, src: 'https://picsum.photos/seed/plant/600/800', title: 'Green Corner', category: 'Interior', aspectRatio: 'portrait' },
  { id: 6, src: 'https://picsum.photos/seed/city/1200/600', title: 'Urban View', category: 'Travel', aspectRatio: 'landscape' },
  { id: 7, src: 'https://picsum.photos/seed/arch/800/1000', title: 'Modern Architecture', category: 'Design', aspectRatio: 'portrait' },
  { id: 8, src: 'https://picsum.photos/seed/desk/1000/600', title: 'Clean Desk', category: 'Setup', aspectRatio: 'landscape' },
  { id: 9, src: 'https://picsum.photos/seed/book/800/800', title: 'Reading List', category: 'Lifestyle', aspectRatio: 'square' },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedItem = galleryItems.find(item => item.id === selectedId);

  const navigate = (direction: 'next' | 'prev') => {
    if (selectedId === null) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedId);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    setSelectedId(galleryItems[newIndex].id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId === null) return;
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="mb-12 md:mb-20 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-5 md:pb-6"
        >
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-[10px] font-bold tracking-[0.2em] text-stone-400 dark:text-stone-500 uppercase">
              Portfolio
            </h2>
            <h1 className="text-2xl md:text-4xl font-serif text-stone-900 dark:text-stone-50 tracking-tight">
              Visual Journal
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base max-w-2xl font-light">
              A collection of moments, spaces, and objects that inspire my work and daily life.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="break-inside-avoid"
          >
            <motion.div
              layoutId={`card-${item.id}`}
              className="group relative overflow-hidden rounded-xl bg-stone-100 dark:bg-stone-900 cursor-zoom-in"
              onClick={() => setSelectedId(item.id)}
            >
              <motion.img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent pt-12">
                <div>
                  <p className="text-stone-300 text-xs uppercase tracking-wider font-medium mb-1">{item.category}</p>
                  <h3 className="text-white font-serif text-lg">{item.title}</h3>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              className="relative w-full max-w-6xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-0 text-stone-400 hover:text-emerald-500 transition-colors z-50 p-2"
                onClick={() => setSelectedId(null)}
              >
                <X size={24} />
              </button>

              {/* Navigation */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-emerald-500 p-4 transition-colors z-50 hidden md:block"
                onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
              >
                <ChevronLeft size={32} />
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-emerald-500 p-4 transition-colors z-50 hidden md:block"
                onClick={(e) => { e.stopPropagation(); navigate('next'); }}
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <motion.div
                layoutId={`card-${selectedItem.id}`}
                className="relative max-h-[85vh] w-auto overflow-hidden rounded-lg shadow-2xl"
              >
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[85vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                
                {/* Caption in Lightbox */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="text-stone-300 text-xs uppercase tracking-wider font-medium mb-1">{selectedItem.category}</p>
                  <h3 className="font-serif text-2xl">{selectedItem.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
