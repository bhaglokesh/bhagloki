import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'About', path: '/', end: true },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Sidebar() {
  return (
    <nav className="w-48 shrink-0 py-8 hidden lg:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
      <h2 className="text-[11px] font-bold tracking-[0.15em] text-stone-500 dark:text-stone-400 uppercase mb-4 pl-4">
        Contents
      </h2>
      <ul className="relative border-l border-stone-200 dark:border-stone-800">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              end={item.end}
              className={({ isActive }) => cn(
                "block pl-4 pr-3 py-2.5 text-sm transition-all duration-200 -ml-[1px] border-l-2",
                isActive
                  ? "border-emerald-700 text-emerald-700 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10"
                  : "border-transparent text-stone-500 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-500 hover:border-emerald-200 dark:hover:border-emerald-800"
              )}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
