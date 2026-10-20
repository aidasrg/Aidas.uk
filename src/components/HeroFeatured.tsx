import React from 'react';
import { ArrowRight, Bookmark, Clock, Volume2 } from 'lucide-react';
import { Article } from '../types';

interface HeroFeaturedProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  article,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <section className="relative border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Context */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-5">
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-amber-800 dark:text-amber-400 font-sans font-semibold">
              <span>COVER STORY</span>
              <span aria-hidden="true">·</span>
              <span>INNOVATION & MATERIAL SCIENCE</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
            </div>

            <h2 
              onClick={() => onSelectArticle(article)}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.12] font-serif font-bold text-stone-950 dark:text-stone-50 hover:text-stone-700 dark:hover:text-stone-300 transition-colors cursor-pointer"
            >
              {article.title}
            </h2>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
              {article.subtitle}
            </p>

            {/* Author info */}
            <div className="pt-2 flex items-center justify-between border-t border-stone-200/80 dark:border-stone-800">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-stone-300 dark:border-stone-700"
                />
                <div>
                  <div className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                    {article.author.name}
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400">
                    {article.author.role} · {article.publishedAt}
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(article.id);
                }}
                className={`p-2 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors ${
                  isBookmarked ? 'text-amber-600 dark:text-amber-400' : 'text-stone-400'
                }`}
                title={isBookmarked ? 'Remove from reading list' : 'Save to reading list'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectArticle(article)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-950 dark:bg-stone-100 text-stone-50 dark:text-stone-950 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 dark:hover:bg-white transition-colors cursor-pointer shadow-sm"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onSelectArticle(article)}
                className="inline-flex items-center gap-2 px-4 py-3 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs uppercase tracking-widest font-medium hover:border-stone-500 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Audio Edition</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual with the user's uploaded AI image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div 
              onClick={() => onSelectArticle(article)}
              className="group relative cursor-pointer overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-900 shadow-md aspect-[16/10] sm:aspect-[16/9]"
            >
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-stone-300">
                <div className="text-[11px] uppercase tracking-wider text-stone-400 font-sans">
                  FIGURE 01 · COGNITIVE COMPUTING ATELIER
                </div>
                <div className="text-xs sm:text-sm text-stone-200 mt-1 line-clamp-2 font-serif italic">
                  "{article.imageCaption}"
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
