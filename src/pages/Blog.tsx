import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { posts } from '../data/posts';

const getBadgeColor = (badge: string) => {
  switch (badge.toLowerCase()) {
    case 'new':
    case 'featured':
      return 'text-emerald-600 border-emerald-600/30 bg-emerald-600/10 dark:text-emerald-500 dark:border-emerald-500/30 dark:bg-emerald-500/10';
    case 'deep dive':
    case 'tutorial':
      return 'text-blue-600 border-blue-600/30 bg-blue-600/10 dark:text-blue-500 dark:border-blue-500/30 dark:bg-blue-500/10';
    case 'opinion':
      return 'text-purple-600 border-purple-600/30 bg-purple-600/10 dark:text-purple-500 dark:border-purple-500/30 dark:bg-purple-500/10';
    default:
      return 'text-stone-600 border-stone-200 bg-stone-100 dark:text-stone-400 dark:border-stone-800 dark:bg-stone-900';
  }
};

export default function Blog() {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="space-y-3 border-b border-stone-100 dark:border-stone-800 pb-8">
        <h2 className="text-[10px] font-bold tracking-[0.2em] text-stone-500 dark:text-stone-400 uppercase font-sans">
          Writing
        </h2>
        <h1 className="text-3xl md:text-5xl font-serif text-stone-900 dark:text-stone-50 tracking-tight">
          Blog
        </h1>
        <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>
        <p className="max-w-2xl text-base md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-light">
          Thoughts on development, design, and tech. Deep dives into code, tutorials, and opinion pieces.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="group flex flex-col gap-4 p-4 border border-transparent rounded-lg hover:border-stone-100 dark:hover:border-stone-800 hover:bg-stone-50/50 dark:hover:bg-stone-900/30 hover:shadow-sm transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-stone-500 dark:text-stone-400">
              <span className="px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-medium uppercase tracking-wider">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <Link to={`/blog/${post.id}`} className="block space-y-3 flex-grow">
              <h2 className="text-xl font-serif font-medium text-stone-900 dark:text-stone-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light text-sm line-clamp-3">
                {post.excerpt}
              </p>
            </Link>

            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-400 dark:text-stone-500">{post.readTime}</span>
                <Link 
                  to={`/blog/${post.id}`}
                  className="flex items-center gap-1 text-[10px] font-bold text-stone-900 dark:text-stone-100 hover:text-emerald-700 dark:hover:text-emerald-500 uppercase tracking-[0.2em] transition-colors"
                >
                  Read <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
