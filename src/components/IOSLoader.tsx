import React from 'react';

export default function IOSLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-8 h-8 ${className}`} role="status" aria-label="Loading">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 left-1/2 w-[8%] h-[28%] -ml-[4%] rounded-full bg-current opacity-0 animate-ios-spinner"
          style={{
            transform: `rotate(${i * 30}deg) translate(0, 140%)`,
            animationDelay: `-${1.2 - (i * 0.1)}s`,
          }}
        />
      ))}
    </div>
  );
}
