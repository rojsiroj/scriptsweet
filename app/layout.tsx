import type { Metadata } from 'next';
import { Fredoka, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  weight: ['400', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Scriptsweet | The Sweet Side of Scripting',
  description: 'Turn boring daily tasks into simple, friendly scripts you actually understand.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={\`\${fredoka.variable} \${plusJakartaSans.variable} \${jetbrainsMono.variable} font-body bg-[#FAF8F5] text-[#2A5C6A] antialiased selection:bg-[#F472B6] selection:text-white\`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
