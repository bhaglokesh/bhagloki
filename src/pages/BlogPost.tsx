import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, Clock, Calendar, RefreshCw, Copy, Check } from 'lucide-react';
import Markdown from 'react-markdown';
import { posts } from '../data/posts';

const PreBlock = ({ children, ...props }: any) => {
  const [copied, setCopied] = useState(false);
  
  const codeElement = React.Children.toArray(children)[0] as React.ReactElement;
  const elementProps = codeElement?.props as any;
  const textContent = elementProps?.children || '';
  const className = elementProps?.className || '';
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(String(textContent).replace(/\n$/, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group not-prose my-6">
      {language && (
        <div className="absolute top-0 right-12 px-2 py-1 text-xs text-stone-400 font-sans z-10 bg-stone-800 rounded-b-md">
          {language}
        </div>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-stone-800 text-stone-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-stone-700 hover:text-stone-200 z-10"
        aria-label="Copy code"
        title="Copy code"
      >
        {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
      </button>
      <pre {...props} className="!m-0 bg-stone-950 text-stone-200 border border-stone-800 rounded-xl shadow-lg overflow-x-auto p-4 text-sm font-mono leading-relaxed">
        {children}
      </pre>
    </div>
  );
};

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

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) return null;

  const otherPosts = posts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="max-w-3xl mx-auto space-y-8 md:space-y-10 mt-6 md:mt-12 mb-20">
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 text-[10px] font-medium tracking-widest text-stone-400 hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-300 transition-colors uppercase"
      >
        <ArrowLeft size={20} /> Back to blog
      </Link>

      <header className="space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400">
            <span className="px-2 py-1 rounded bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-200 font-medium uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
            {post.lastUpdated && (
              <>
                <span>•</span>
                <span>Updated {post.lastUpdated}</span>
              </>
            )}
            {post.badges && post.badges.length > 0 && (
              <>
                <span>•</span>
                <div className="flex items-center gap-2">
                  {post.badges.map(badge => (
                    <span key={badge} className={`px-2 py-0.5 rounded border text-[10px] font-medium font-sans tracking-normal ${getBadgeColor(badge)}`}>
                      {badge}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-6xl font-serif text-stone-900 dark:text-stone-50 leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          
          <p className="text-lg md:text-2xl text-stone-500 dark:text-stone-400 font-serif leading-relaxed italic">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center gap-4 py-6 border-t border-b border-stone-100 dark:border-stone-800">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-100 ring-2 ring-white dark:ring-stone-950">
            <img 
              src="https://picsum.photos/seed/developer/100/100" 
              alt="Author" 
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <div className="font-medium text-sm text-stone-900 dark:text-stone-50">John Doe</div>
            <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
              <span>{post.date}</span>
            </div>
          </div>
          <div className="flex gap-2">
             {/* Social share placeholders could go here */}
          </div>
        </div>
      </header>

      {post.image && (
        <div className="w-full aspect-[2/1] md:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <div className={`prose prose-stone dark:prose-invert max-w-none prose-md md:prose-lg prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-headings:mt-8 prose-headings:mb-4 prose-p:font-light prose-p:leading-relaxed prose-p:mb-6 prose-a:text-stone-900 dark:prose-a:text-stone-100 hover:prose-a:text-emerald-700 dark:hover:prose-a:text-emerald-500 prose-blockquote:border-l-stone-900 dark:prose-blockquote:border-l-stone-100 prose-blockquote:italic prose-blockquote:font-serif first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-[1] prose-pre:bg-stone-950 prose-pre:text-stone-200 dark:prose-pre:bg-stone-950 dark:prose-pre:text-stone-200 prose-pre:border prose-pre:border-stone-800 prose-ul:list-disc ${post.template === 'roman-list' ? 'prose-ol:list-[upper-roman]' : 'prose-ol:list-decimal'} ${post.template === 'code-heavy' ? 'prose-pre:shadow-lg prose-pre:rounded-xl prose-code:text-emerald-500 dark:prose-code:text-emerald-400' : ''}`}>
        <Markdown
          components={{
            pre: PreBlock
          }}
        >
          {post.content}
        </Markdown>
      </div>

      <div className="pt-10 border-t border-stone-100 dark:border-stone-800">
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-stone-50 dark:bg-stone-900 text-stone-600 dark:text-stone-400 text-xs border border-stone-100 dark:border-stone-800">
              <Tag size={12} /> {tag}
            </span>
          ))}
        </div>

        {/* Previous/Next Navigation */}
        <div className="grid md:grid-cols-2 gap-6 pt-10 border-t border-stone-100 dark:border-stone-800">
          {(() => {
            const currentIndex = posts.findIndex((p) => p.id === id);
            const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
            const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

            return (
              <>
                <div className="text-left">
                  {prevPost ? (
                    <Link to={`/blog/${prevPost.id}`} className="group block space-y-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-stone-400 dark:text-stone-500 uppercase">Previous Post</span>
                      <h4 className="text-lg font-serif font-medium text-stone-900 dark:text-stone-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors leading-tight">
                        {prevPost.title}
                      </h4>
                    </Link>
                  ) : <div />}
                </div>
                <div className="text-right">
                  {nextPost ? (
                    <Link to={`/blog/${nextPost.id}`} className="group block space-y-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-stone-400 dark:text-stone-500 uppercase">Next Post</span>
                      <h4 className="text-lg font-serif font-medium text-stone-900 dark:text-stone-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors leading-tight">
                        {nextPost.title}
                      </h4>
                    </Link>
                  ) : <div />}
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
