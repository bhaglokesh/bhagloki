import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from './Tooltip';

const footerLinks = [
  { name: 'About', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-stone-200 dark:border-stone-800 mt-auto bg-[#fafafa] dark:bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-stone-600 dark:text-stone-400 text-xs md:text-sm">
              Designed and developed by <span className="font-medium text-stone-900 dark:text-stone-100">Lokesh Bh</span>. built using{' '}
              <Tooltip content="React is a JavaScript library for building user interfaces" position="top">
                <span className="font-medium text-stone-900 dark:text-stone-100 cursor-help border-b border-stone-300 dark:border-stone-700 border-dashed hover:border-emerald-700 dark:hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">React</span>
              </Tooltip>
              {' '}&amp; hosted on{' '}
              <Tooltip content="Cloudflare provides content delivery network services, DDoS mitigation, Internet security, and distributed domain name server services" position="top">
                <span className="font-medium text-stone-900 dark:text-stone-100 cursor-help border-b border-stone-300 dark:border-stone-700 border-dashed hover:border-emerald-700 dark:hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-500 transition-colors">Cloudflare</span>
              </Tooltip>
            </div>
            <div className="text-stone-500 dark:text-stone-500 text-xs mt-1">
              &copy; 2026 Lokesh Bh.<br />
              Last updated: March 3, 2026, 05:54 AM
            </div>
          </div>
        </div>
        
        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-medium md:text-medium font-serif text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-500 transition-all duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
