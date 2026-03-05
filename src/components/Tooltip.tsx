import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export function Tooltip({ children, content, position = 'top', delay = 200 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2 md:right-full md:left-auto md:top-1/2 md:-translate-y-1/2 md:-translate-x-0 max-md:bottom-full max-md:left-1/2 max-md:-translate-x-1/2 max-md:mb-2 max-md:top-auto max-md:translate-y-0',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2 md:left-full md:right-auto md:top-1/2 md:-translate-y-1/2 md:-translate-x-0 max-md:bottom-full max-md:left-1/2 max-md:-translate-x-1/2 max-md:mb-2 max-md:top-auto max-md:translate-y-0',
  };

  return (
    <div 
      className="relative inline-flex items-center justify-center"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onTouchStart={showTooltip}
      onTouchEnd={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsVisible(false), 1500);
      }}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-[100] px-2.5 py-1.5 text-xs font-medium text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded shadow-md pointer-events-none w-max max-w-[250px] sm:max-w-xs text-center whitespace-normal break-words ${positionClasses[position]}`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
