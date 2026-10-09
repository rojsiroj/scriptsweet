import React from 'react';
import Link from 'next/link';
import { ScriptsweetLogo } from './Logo';

export function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-[#2A5C6A] pt-16 pb-8 font-body mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          <div className="max-w-sm">
            <ScriptsweetLogo className="mb-6 scale-90 origin-left" />
            <p className="text-[#2A5C6A] font-bold text-lg mb-2">
              "Built to let everyone taste the sweet of scripting."
            </p>
            <p className="text-[#2A5C6A]/70">
              Stop fighting your computer. Start sweetening your workflow with scripts you actually understand.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-extrabold text-[#2A5C6A] text-lg uppercase tracking-wide">Platform</h4>
              <Link href="#features" className="text-[#2A5C6A] hover:text-[#EE76AE] font-semibold transition-colors">Features</Link>
              <Link href="#sandbox" className="text-[#2A5C6A] hover:text-[#EE76AE] font-semibold transition-colors">Sandbox</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-heading font-extrabold text-[#2A5C6A] text-lg uppercase tracking-wide">Company</h4>
              <Link href="/about" className="text-[#2A5C6A] hover:text-[#EE76AE] font-semibold transition-colors">About Us</Link>
              <Link href="/blog" className="text-[#2A5C6A] hover:text-[#EE76AE] font-semibold transition-colors">Blog</Link>
              <Link href="/contact" className="text-[#2A5C6A] hover:text-[#EE76AE] font-semibold transition-colors">Contact</Link>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t-2 border-[#2A5C6A] flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-bold text-[#2A5C6A]/60">
          <p>© 2026 Scriptsweet.net. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#2A5C6A] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#2A5C6A] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
