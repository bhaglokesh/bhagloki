import React from 'react';

export default function LastUpdated() {
  return (
    <div className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 text-[10px] font-mono bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded-md border border-stone-200 dark:border-stone-800 shrink-0">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
      </span>
      <span>Last updated: Mar 3, 2026</span>
    </div>
  );
}
