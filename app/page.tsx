import { InteractiveSandbox } from '@/components/InteractiveSandbox';
import { TasteTester } from '@/components/TasteTester';
import { Sparkles, TerminalSquare, ShieldCheck, HeartHandshake, ZapOff, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden font-body pb-20">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div className="flex flex-col items-start gap-6 relative z-10">
          <div className="bg-[#D8F3DC] border-2 border-[#2A5C6A] rounded-full px-4 py-1.5 shadow-[2px_2px_0px_#2A5C6A] text-[#2A5C6A] font-bold text-sm inline-flex items-center gap-2">
            <span>🍬</span> Scripting for humans, not just engineers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-[#2A5C6A] leading-[1.1] tracking-tight">
            Discover the <span className="relative inline-block">
              <span className="text-[#EE76AE] relative z-10">sweet</span>
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-6 text-[#FFF3B0] -z-0" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 25 20, 50 10 T 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span> side of scripting.
          </h1>
          
          <p className="text-[#2A5C6A]/80 text-lg md:text-xl font-medium leading-relaxed max-w-lg mt-2">
            Turn boring daily tasks into simple, friendly scripts you actually understand. No scary terminals, no gatekeeping—just pure automation joy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link 
              href="#sandbox" 
              className="bg-[#EE76AE] text-white border-2 border-[#2A5C6A] shadow-[4px_4px_0px_#2A5C6A] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2A5C6A] active:translate-y-[4px] active:shadow-none transition-all rounded-full px-8 py-3.5 font-bold text-lg text-center"
            >
              Write Your First Script — Free
            </Link>
            <Link 
              href="#examples" 
              className="bg-white text-[#2A5C6A] border-2 border-[#2A5C6A] shadow-[4px_4px_0px_#2A5C6A] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2A5C6A] active:translate-y-[4px] active:shadow-none transition-all rounded-full px-8 py-3.5 font-bold text-lg text-center"
            >
              Explore Examples
            </Link>
          </div>
        </div>

        <div className="w-full relative" id="sandbox">
          <div className="absolute -top-10 -right-10 text-[#FFE5D9] hidden md:block">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0ZM100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20Z"/></svg>
          </div>
          <InteractiveSandbox />
        </div>
      </section>

      {/* "Why Scripting Feels Sour" Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20" id="how-it-works">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#2A5C6A] mb-4 tracking-tight">Why Scripting Feels Sour<br/><span className="text-[#EE76AE]">(And How We Make It Sweet)</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sour Way */}
          <div className="bg-[#FAF8F5] border-2 border-[#2A5C6A] border-dashed rounded-2xl p-8 relative opacity-70">
            <div className="absolute -top-4 left-6 bg-white border-2 border-[#2A5C6A] px-4 py-1 rounded-full text-xl font-bold text-[#2A5C6A] shadow-[2px_2px_0px_#2A5C6A]">
              🍋 The Old Way
            </div>
            <ul className="space-y-6 mt-4">
              <li className="flex items-start gap-4">
                <ZapOff className="w-6 h-6 text-[#2A5C6A] flex-shrink-0 mt-0.5" />
                <span className="text-lg font-medium text-[#2A5C6A]/80">Intimidating black terminal errors with cryptic stack traces.</span>
              </li>
              <li className="flex items-start gap-4">
                <TerminalSquare className="w-6 h-6 text-[#2A5C6A] flex-shrink-0 mt-0.5" />
                <span className="text-lg font-medium text-[#2A5C6A]/80">Spending hours on StackOverflow just to rename some files.</span>
              </li>
              <li className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#2A5C6A] flex-shrink-0 mt-0.5 grayscale" />
                <span className="text-lg font-medium text-[#2A5C6A]/80">Constant fear of accidentally breaking your computer.</span>
              </li>
            </ul>
          </div>
          
          {/* Sweet Way */}
          <div className="bg-white border-2 border-[#2A5C6A] rounded-2xl p-8 shadow-[6px_6px_0px_#2A5C6A] relative transform md:-translate-y-4">
             <div className="absolute -top-4 left-6 bg-[#EE76AE] border-2 border-[#2A5C6A] px-4 py-1 rounded-full text-xl font-bold text-white shadow-[2px_2px_0px_#2A5C6A]">
              🍬 The Scriptsweet Way
            </div>
            <ul className="space-y-6 mt-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#EE76AE] flex-shrink-0 mt-0.5" />
                <span className="text-lg font-bold text-[#2A5C6A]">Plain-English explanations and simple human language.</span>
              </li>
              <li className="flex items-start gap-4">
                <HeartHandshake className="w-6 h-6 text-[#EE76AE] flex-shrink-0 mt-0.5" />
                <span className="text-lg font-bold text-[#2A5C6A]">Gentle hints and guidance instead of scary error messages.</span>
              </li>
              <li className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#EE76AE] flex-shrink-0 mt-0.5" />
                <span className="text-lg font-bold text-[#2A5C6A]">100% safe sandbox where absolutely nothing can break.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 bg-[#FFE5D9]/40 rounded-3xl border-2 border-[#2A5C6A] shadow-[8px_8px_0px_#2A5C6A] my-10" id="features">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#2A5C6A] mb-4 tracking-tight">Everything You Need.</h2>
          <p className="text-xl text-[#2A5C6A]/70 font-medium">Built for everyday people, not just developers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border-2 border-[#2A5C6A] rounded-2xl p-6 shadow-[4px_4px_0px_#2A5C6A] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#2A5C6A] transition-all">
            <div className="bg-[#D8F3DC] border-2 border-[#2A5C6A] rounded-full w-12 h-12 flex items-center justify-center mb-6 shadow-[2px_2px_0px_#2A5C6A]">
              <Sparkles className="w-6 h-6 text-[#2A5C6A]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#2A5C6A] mb-3">Plain Words to Real Code</h3>
            <p className="text-[#2A5C6A]/80 font-medium leading-relaxed">
              Describe what bores you; get a clean, readable script in Python, Bash, or JS with step-by-step annotations explaining exactly what happens.
            </p>
          </div>
          
          <div className="bg-white border-2 border-[#2A5C6A] rounded-2xl p-6 shadow-[4px_4px_0px_#2A5C6A] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#2A5C6A] transition-all">
            <div className="bg-[#FFF3B0] border-2 border-[#2A5C6A] rounded-full w-12 h-12 flex items-center justify-center mb-6 shadow-[2px_2px_0px_#2A5C6A]">
              <HeartHandshake className="w-6 h-6 text-[#2A5C6A]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#2A5C6A] mb-3">Gentle, Human Debugging</h3>
            <p className="text-[#2A5C6A]/80 font-medium leading-relaxed">
              No cryptic stack traces. When something goes wrong, Scriptsweet explains <em>why</em> like a patient friend, showing you exactly how to fix it.
            </p>
          </div>
          
          <div className="bg-white border-2 border-[#2A5C6A] rounded-2xl p-6 shadow-[4px_4px_0px_#2A5C6A] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#2A5C6A] transition-all">
            <div className="bg-[#FFE5D9] border-2 border-[#2A5C6A] rounded-full w-12 h-12 flex items-center justify-center mb-6 shadow-[2px_2px_0px_#2A5C6A]">
              <ShieldCheck className="w-6 h-6 text-[#2A5C6A]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#2A5C6A] mb-3">Zero-Risk Safe Sandbox</h3>
            <p className="text-[#2A5C6A]/80 font-medium leading-relaxed">
              Test and tweak scripts in an isolated browser environment before ever running them on your machine. You simply can't break anything here.
            </p>
          </div>
        </div>
      </section>

      {/* Script Taste-Tester Section */}
      <section className="w-full mx-auto px-6 py-24 bg-white border-t-2 border-b-2 border-[#2A5C6A]" id="examples">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#2A5C6A] mb-4 tracking-tight">Script Taste-Tester</h2>
          <p className="text-xl text-[#2A5C6A]/70 font-medium">Click any recipe to see the sweet script inside.</p>
        </div>
        
        <TasteTester />
      </section>

    </main>
  );
}
