import React from 'react';

export function ScriptsweetLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="56"
        height="56"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#2A5C6A] flex-shrink-0"
      >
        {/* Small S */}
        <text x="50" y="25" fontSize="20" fontWeight="900" fill="currentColor" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif">S</text>
        
        {/* Bridge */}
        <path d="M40 38 Q 50 33 60 38" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
        
        {/* Left Lens */}
        <circle cx="30" cy="45" r="18" stroke="currentColor" strokeWidth="5" fill="#FAF8F5" />
        <circle cx="33" cy="45" r="5" fill="currentColor" />
        <path d="M25 40 Q 28 37 32 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> {/* Small eye sparkle or detail, keeping it simple */}
        
        {/* Right Lens */}
        <circle cx="70" cy="45" r="18" stroke="currentColor" strokeWidth="5" fill="#FAF8F5" />
        <circle cx="67" cy="45" r="5" fill="currentColor" />
        
        {/* Chain */}
        <path d="M22 61 L 32 75 L 43 82 L 57 82 L 68 75 L 78 61" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Beads on chain */}
        <rect x="35" y="73" width="6" height="10" rx="3" fill="#FAF8F5" stroke="currentColor" strokeWidth="2" transform="rotate(-35 38 78)" />
        <rect x="47" y="80" width="6" height="10" rx="3" fill="#FAF8F5" stroke="currentColor" strokeWidth="2" transform="rotate(90 50 85)" />
        <rect x="58" y="73" width="6" height="10" rx="3" fill="#FAF8F5" stroke="currentColor" strokeWidth="2" transform="rotate(35 61 78)" />
      </svg>
      <span className="font-heading font-extrabold text-[#EE76AE] tracking-wide text-2xl uppercase mt-1">SCRIPTSWEET.NET</span>
    </div>
  );
}
