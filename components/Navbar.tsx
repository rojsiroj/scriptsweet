import React from 'react';
import Link from 'next/link';
import { ScriptsweetLogo } from './Logo';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FAF8F5] border-b-2 border-[#2A5C6A]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <ScriptsweetLogo />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-body font-bold text-[#2A5C6A]">
          <Link href="#how-it-works" className="hover:text-[#EE76AE] transition-colors relative group">
            How it Works
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#EE76AE] transition-all group-hover:w-full rounded-full"></span>
          </Link>
          <Link href="#sweet-scripts" className="hover:text-[#EE76AE] transition-colors relative group">
            Sweet Scripts
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#EE76AE] transition-all group-hover:w-full rounded-full"></span>
          </Link>
          <Link href="#sandbox" className="hover:text-[#EE76AE] transition-colors relative group">
            Sandbox
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#EE76AE] transition-all group-hover:w-full rounded-full"></span>
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            href="#sandbox"
            className="bg-[#EE76AE] text-white border-2 border-[#2A5C6A] shadow-[3px_3px_0px_#2A5C6A] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#2A5C6A] active:translate-y-[3px] active:shadow-none transition-all rounded-full px-6 py-2.5 font-bold font-body"
          >
            Try Sandbox
          </Link>
        </div>
      </div>
    </nav>
  );
}
