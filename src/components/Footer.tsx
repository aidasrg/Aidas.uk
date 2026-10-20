import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Category } from '../types';

interface FooterProps {
  onSelectCategory: (cat: Category) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; category: Category }[] = [
    { label: 'Everything', category: 'EVERYTHING' },
    { label: 'Women', category: 'WOMEN' },
    { label: 'Men', category: 'MEN' },
    { label: 'Accessories', category: 'ACCESSORIES' },
    { label: 'About', category: 'ABOUT' },
    { label: 'Contact Us', category: 'CONTACT US' },
  ];

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-600 dark:text-stone-400 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-stone-200 dark:border-stone-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <h3 
              onClick={() => onSelectCategory('EVERYTHING')}
              className="text-2xl sm:text-3xl font-serif font-bold text-stone-950 dark:text-stone-50 cursor-pointer hover:opacity-80 transition-opacity"
            >
              Aidas.uk
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-sans leading-relaxed max-w-sm">
              An independent British journal of contemporary style, computational textiles, and quiet wearable intelligence. Edited and published in London.
            </p>
            <div className="text-[11px] text-stone-400 pt-1">
              Marylebone High Street · London W1U 5JT · United Kingdom
            </div>
          </div>

          {/* Quick Categories */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-200">
              Journal Sections
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onSelectCategory(item.category);
                    scrollToTop();
                  }}
                  className="text-left text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 transition-colors py-1 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Ethics & Standards */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-stone-200">
              Editorial Notice
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              All editorial features are strictly unsponsored. Products evaluated across our London bureau are purchased independently or tested under strict journalistic embargo.
            </p>
            <div className="pt-1">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-stone-800 dark:text-stone-200 hover:text-black dark:hover:text-white font-medium cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-500">
          <div>
            © {new Date().getFullYear()} Aidas.uk. All rights reserved. Registered in England & Wales.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Journalistic Integrity</span>
            <span aria-hidden="true">·</span>
            <span>Privacy & Ethics</span>
            <span aria-hidden="true">·</span>
            <span>ISSN 2841-8902</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
