import React, { useState } from 'react';
import { Search, Bookmark, Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  currentCategory: Category;
  onSelectCategory: (cat: Category) => void;
  bookmarksCount: number;
  onOpenBookmarks: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  bookmarksCount,
  onOpenBookmarks,
  searchQuery,
  onSearchChange,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems: Category[] = [
    'EVERYTHING',
    'WOMEN',
    'MEN',
    'ACCESSORIES',
    'ABOUT',
    'CONTACT US'
  ];

  const handleNavClick = (cat: Category) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="border-b border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-950/95 backdrop-blur-md sticky top-0 z-40 transition-colors duration-200">
      {/* Top micro bar */}
      <div className="border-b border-stone-100 dark:border-stone-900 px-4 sm:px-8 py-1.5 text-[11px] tracking-wider text-stone-500 dark:text-stone-400 flex justify-between items-center font-sans">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-stone-900 dark:text-stone-200">LONDON · UK EDITION</span>
          <span className="hidden sm:inline text-stone-300 dark:text-stone-700">|</span>
          <span className="hidden sm:inline">AUTUMN / WINTER 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">INDEPENDENT SARTORIAL & TECH JOURNAL</span>
          <button
            onClick={onToggleDarkMode}
            className="flex items-center gap-1.5 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>

      {/* Main Logo Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
        {/* Left utility: Search toggle */}
        <div className="flex items-center gap-3 w-1/4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer py-1"
            title="Search articles"
          >
            <Search className="w-4 h-4" />
            <span className="hidden lg:inline font-medium">Search</span>
          </button>
        </div>

        {/* Center: Brand Masthead */}
        <div className="text-center flex-1 cursor-pointer" onClick={() => handleNavClick('EVERYTHING')}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-serif font-bold text-stone-950 dark:text-stone-50 hover:opacity-90 transition-opacity">
            Aidas.uk
          </h1>
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-stone-500 dark:text-stone-400 mt-1 font-sans">
            Style · Wearable Tech · Contemporary Living
          </p>
        </div>

        {/* Right utility: Bookmarks & Mobile Menu */}
        <div className="flex items-center justify-end gap-3 sm:gap-4 w-1/4">
          <button
            onClick={onOpenBookmarks}
            className="relative flex items-center gap-2 text-xs uppercase tracking-widest text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer py-1"
            title="View saved reading list"
          >
            <Bookmark className="w-4 h-4" />
            <span className="hidden lg:inline font-medium">Reading List</span>
            {bookmarksCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-950 text-[10px] font-bold flex items-center justify-center">
                {bookmarksCount}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-stone-800 dark:text-stone-200 hover:text-black dark:hover:text-white p-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation - Desktop (Zero-pill, refined typography) */}
      <nav className="hidden md:block border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-8 lg:gap-12 py-3 text-xs tracking-[0.16em] uppercase font-sans font-medium">
          {navItems.map((item) => {
            const isActive = currentCategory === item;
            return (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative py-1 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-stone-950 dark:text-white font-semibold'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100'
                }`}
              >
                {item}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-stone-900 dark:bg-stone-100 transition-all" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Expandable Search Bar */}
      {searchOpen && (
        <div className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 px-4 sm:px-8 py-3 animate-in fade-in duration-200">
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <Search className="w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search articles on tailoring, wearables, smart rings, design..."
              className="w-full bg-transparent text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 uppercase tracking-wider font-semibold"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setSearchOpen(false)}
              className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 px-6 py-6 space-y-4">
          <div className="space-y-3 pb-4 border-b border-stone-100 dark:border-stone-800">
            {navItems.map((item) => {
              const isActive = currentCategory === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center justify-between text-left py-2 text-sm tracking-widest uppercase font-medium ${
                    isActive
                      ? 'text-stone-950 dark:text-white font-bold'
                      : 'text-stone-600 dark:text-stone-400'
                  }`}
                >
                  <span>{item}</span>
                  {isActive && <ArrowRight className="w-4 h-4" />}
                </button>
              );
            })}
          </div>

          {/* Mobile search input */}
          <div className="pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search Aidas.uk..."
                className="w-full pl-9 pr-3 py-2 bg-stone-100 dark:bg-stone-900 rounded border border-stone-200 dark:border-stone-800 text-sm text-stone-900 dark:text-stone-100 focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
