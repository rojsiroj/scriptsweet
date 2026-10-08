'use client';

import React, { useState } from 'react';
import { FileText, Tags, HardDriveDownload, Table2 } from 'lucide-react';

const TASTE_RECIPES = [
  {
    id: 'rename',
    title: 'Rename 100 invoices',
    icon: FileText,
    color: '#D8F3DC',
    desc: 'Add today\\'s date to every PDF in a folder.',
    code: `import sweet as ss

invoices = ss.get_files('~/invoices', ext='pdf')
for file in invoices:
    file.rename(f"invoice_{ss.today()}_{file.name}")`
  },
  {
    id: 'scrape',
    title: 'Scrape book prices',
    icon: Tags,
    color: '#FFE5D9',
    desc: 'Extract all prices from a product page.',
    code: `import sweet as ss

page = ss.visit('https://books.example.com')
prices = page.extract_elements('.price-tag')
ss.save_csv(prices, 'book_prices.csv')`
  },
  {
    id: 'backup',
    title: 'Auto-backup project',
    icon: HardDriveDownload,
    color: '#FFF3B0',
    desc: 'Zip a folder and copy it to an external drive.',
    code: `import sweet as ss

project = ss.folder('~/Projects/website')
archive = project.zip()
archive.copy_to('/Volumes/BackupDrive')`
  },
  {
    id: 'csv',
    title: 'CSV to Markdown',
    icon: Table2,
    color: '#e0fbfc', // Ice blue pastel
    desc: 'Convert spreadsheet data into a readable table.',
    code: `import sweet as ss

data = ss.read_csv('users.csv')
markdown = data.to_markdown()
ss.write_text('table.md', markdown)`
  }
];

export function TasteTester() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto font-body">
      {TASTE_RECIPES.map((recipe) => (
        <div 
          key={recipe.id}
          className="relative perspective-1000 group cursor-pointer"
          onClick={() => setActiveCard(activeCard === recipe.id ? null : recipe.id)}
        >
          <div className={\`w-full h-full min-h-[160px] bg-white border-2 border-[#2A5C6A] rounded-xl shadow-[4px_4px_0px_#2A5C6A] p-6 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_#2A5C6A] flex flex-col justify-center \${activeCard === recipe.id ? 'hidden' : 'block'}\`}>
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 rounded-lg border-2 border-[#2A5C6A]" style={{ backgroundColor: recipe.color }}>
                <recipe.icon className="w-6 h-6 text-[#2A5C6A]" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#2A5C6A]">{recipe.title}</h3>
            </div>
            <p className="text-[#2A5C6A]/70 font-medium">{recipe.desc}</p>
            <div className="absolute top-4 right-4 bg-[#FAF8F5] border-2 border-[#2A5C6A] text-xs font-bold px-2 py-1 rounded-full text-[#2A5C6A]">
              Click to view code
            </div>
          </div>

          <div className={\`w-full h-full min-h-[160px] bg-[#2A5C6A] border-2 border-[#2A5C6A] rounded-xl shadow-[4px_4px_0px_#2A5C6A] p-5 transition-all duration-300 \${activeCard === recipe.id ? 'block' : 'hidden'}\`}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#EE76AE] font-bold text-sm font-heading">{recipe.title} Script</span>
              <span className="text-white/50 text-xs cursor-pointer hover:text-white transition-colors">Close ✕</span>
            </div>
            <pre className="font-mono text-sm leading-relaxed text-white whitespace-pre-wrap break-words">
              <code>
                {recipe.code.split('\\n').map((line, i) => (
                  <div key={i}>
                    {line.includes('import') || line.includes('for ') || line.includes('in ') ? (
                      <span className="text-[#EE76AE]">{line}</span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
