import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import BackToTop from './BackToTop';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname.split('/').length > 2;

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-stone-950 transition-colors duration-300 font-sans relative">
      {!isBlogPost && <Header />}
      
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-8">
        {!isBlogPost && <Sidebar />}
        
        <motion.main 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="flex-1 w-full py-8 md:py-12 min-w-0"
        >
          {children}
        </motion.main>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}
