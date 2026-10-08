'use client';

import React, { useState } from 'react';
import { Play, Sparkles, FolderDown, FileSpreadsheet, Image as ImageIcon, ChevronRight } from 'lucide-react';

type Recipe = {
  id: string;
  title: string;
  icon: React.ElementType;
  prompt: string;
  code: string;
  output: string;
};

const RECIPES: Recipe[] = [
  {
    id: 'clean-downloads',
    title: '🧹 Clean Messy Downloads',
    icon: FolderDown,
    prompt: 'Group all my downloads by file type into folders and delete anything older than 30 days.',
    code: `import sweet_scripts as ss

# Group files by their extension
ss.organize_folder('~/Downloads', by='type')

# Remove anything older than a month
ss.cleanup('~/Downloads', older_than='30d')`,
    output: '✨ Done! 42 files neatly organized into 4 folders, and 12 old files removed in 0.12s.',
  },
  {
    id: 'excel-to-json',
    title: '📊 Excel to Clean JSON',
    icon: FileSpreadsheet,
    prompt: 'Read "sales_q3.xlsx", format all dates nicely, and save it as "data.json".',
    code: `import sweet_scripts as ss

# Load the messy excel file
data = ss.read_excel('sales_q3.xlsx')

# Clean up date formats and save
data.format_dates('MM/DD/YYYY')
data.save('data.json')`,
    output: '✨ Done! 150 rows processed and saved to data.json in 0.25s.',
  },
  {
    id: 'bulk-resize',
    title: '🖼️ Bulk Resize Photos',
    icon: ImageIcon,
    prompt: 'Resize all images in the "vacation" folder to 1080p and add a watermak.',
    code: `import sweet_scripts as ss

# Get all photos in the folder
photos = ss.get_files('./vacation', ext=['jpg', 'png'])

# Resize and watermark in bulk
photos.resize(width=1920, height=1080)
photos.add_watermark('Copyright 2026', position='bottom-right')`,
    output: '✨ Done! 84 photos resized and watermarked in 1.4s.',
  }
];

export function InteractiveSandbox() {
  const [activeRecipe, setActiveRecipe] = useState<Recipe>(RECIPES[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 800);
  };

  const selectRecipe = (recipe: Recipe) => {
    setActiveRecipe(recipe);
    setShowOutput(false);
    setIsRunning(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#FAF8F5] border-2 border-[#2A5C6A] rounded-xl shadow-[6px_6px_0px_#2A5C6A] overflow-hidden flex flex-col font-body">
      {/* Browser Bar */}
      <div className="bg-[#FFE5D9] border-b-2 border-[#2A5C6A] px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2A5C6A]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2A5C6A]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#2A5C6A]"></div>
        </div>
        <div className="ml-4 flex-1">
          <div className="bg-white border-2 border-[#2A5C6A] rounded-full px-4 py-1 text-sm font-bold text-[#2A5C6A] text-center w-3/4 mx-auto shadow-[1px_1px_0px_#2A5C6A]">
            scriptsweet.net/sandbox
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#FFF3B0] border-b-2 border-[#2A5C6A] overflow-x-auto hide-scrollbar">
        {RECIPES.map((recipe) => (
          <button
            key={recipe.id}
            onClick={() => selectRecipe(recipe)}
            className={\`px-4 py-3 flex items-center gap-2 font-bold text-sm whitespace-nowrap border-r-2 border-[#2A5C6A] transition-colors \${
              activeRecipe.id === recipe.id ? 'bg-white text-[#2A5C6A]' : 'hover:bg-[#ffe66d] text-[#2A5C6A]/70'
            }\`}
          >
            {recipe.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 bg-white flex flex-col gap-5 relative">
        
        {/* Human Prompt Card */}
        <div className="bg-[#D8F3DC] border-2 border-[#2A5C6A] rounded-lg p-4 shadow-[3px_3px_0px_#2A5C6A] relative">
          <div className="absolute -top-3 -left-3 bg-[#EE76AE] text-white text-xs font-extrabold px-2 py-1 rounded-md border-2 border-[#2A5C6A] transform -rotate-6">
            YOU SAY
          </div>
          <p className="text-[#2A5C6A] font-bold leading-relaxed mt-1">
            "{activeRecipe.prompt}"
          </p>
        </div>

        {/* Code Editor */}
        <div className="bg-[#2A5C6A] border-2 border-[#2A5C6A] rounded-lg p-4 shadow-[3px_3px_0px_#2A5C6A] relative">
           <div className="absolute -top-3 -right-3 bg-[#FFE5D9] text-[#2A5C6A] text-xs font-extrabold px-2 py-1 rounded-md border-2 border-[#2A5C6A] transform rotate-3">
            SCRIPTSWEET WRITES
          </div>
          <pre className="font-mono text-[13px] leading-relaxed overflow-x-auto">
            <code>
              {activeRecipe.code.split('\n').map((line, i) => {
                const isComment = line.trim().startsWith('#');
                const isKeyword = line.includes('import') || line.includes('as ');
                return (
                  <div key={i} className={\`\${isComment ? 'text-[#a1c4ce] italic' : isKeyword ? 'text-[#F472B6]' : 'text-white'}\`}>
                    {line || ' '}
                  </div>
                );
              })}
            </code>
          </pre>
          
          <div className="flex justify-end mt-4">
             <button
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-2 bg-[#D8F3DC] hover:bg-[#bcebce] text-[#2A5C6A] border-2 border-[#2A5C6A] shadow-[2px_2px_0px_#2A5C6A] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#2A5C6A] active:translate-y-[2px] active:shadow-none transition-all rounded-full px-5 py-2 font-bold disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isRunning ? (
                <Sparkles className="w-4 h-4 animate-spin text-[#EE76AE]" />
              ) : (
                <Play className="w-4 h-4 fill-current" />
              )}
              {isRunning ? 'Running...' : 'Run Script'}
            </button>
          </div>
        </div>

      </div>

      {/* Output Drawer */}
      <div className={\`bg-white border-t-2 border-[#2A5C6A] px-6 transition-all duration-500 ease-in-out \${showOutput ? 'max-h-40 py-4' : 'max-h-0 overflow-hidden py-0'}\`}>
        <div className="flex gap-3 items-center text-[#2A5C6A] font-bold bg-[#FAF8F5] border-2 border-[#2A5C6A] border-dashed p-3 rounded-lg">
          <ChevronRight className="w-5 h-5 text-[#EE76AE]" />
          {activeRecipe.output}
        </div>
      </div>
      
    </div>
  );
}
