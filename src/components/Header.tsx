import React, { useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { Tooltip } from './Tooltip';

export default memo(function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F6F4]/75 dark:bg-[#121212]/75 backdrop-blur-md border-b border-[#E5E7EB] dark:border-[#2A2A2A] transition-colors duration-300 supports-[backdrop-filter]:bg-[#F8F6F4]/60 dark:supports-[backdrop-filter]:bg-[#121212]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-medium text-[#1A1A1A] dark:text-[#E5E7EB] tracking-tight hover:opacity-80 transition-opacity flex items-center">
          Lokesh Bh.
        </Link>

        <div className="flex items-center gap-2 sm:gap-6">
          {/* Tablet Nav (Hidden on Mobile and Large Desktop) */}
          <nav className="hidden md:flex lg:hidden items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs font-medium transition-colors uppercase tracking-wide",
                  isActive(link.path) 
                    ? "text-[#1A1A1A] dark:text-[#E5E7EB]" 
                    : "text-[#555555] dark:text-[#9CA3AF] hover:text-emerald-700 dark:hover:text-emerald-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-4 bg-[#E5E7EB] dark:bg-[#2A2A2A] mx-2"></div>
          </nav>

          {/* Theme Toggle (Always Visible) */}
          <Tooltip content={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} position="bottom">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5E7EB] dark:border-[#2A2A2A] text-[#555555] dark:text-[#9CA3AF] hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-500 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all text-sm font-medium"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={16} />
                  <span className="md:hidden lg:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon size={16} />
                  <span className="md:hidden lg:inline">Dark</span>
                </>
              )}
            </button>
          </Tooltip>

          {/* Mobile Menu Toggle (Hidden on Tablet+) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#1A1A1A] dark:text-[#E5E7EB] hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-500 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#E5E7EB] dark:border-[#2A2A2A] bg-[#F8F6F4] dark:bg-[#121212] overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium py-3 px-4 rounded-md transition-colors",
                    isActive(link.path)
                      ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-500"
                      : "text-[#555555] dark:text-[#9CA3AF] hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-500"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});
