import React from 'react';
import { Bookmark, Clock, ArrowUpRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  layout?: 'grid' | 'horizontal';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelectArticle,
  isBookmarked,
  onToggleBookmark,
  layout = 'grid',
}) => {
  if (layout === 'horizontal') {
    return (
      <article
        onClick={() => onSelectArticle(article)}
        className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-6 border-b border-stone-200 dark:border-stone-800 transition-colors"
      >
        <div className="md:col-span-5 aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-7 space-y-3">
          {/* Metadata - unboxed text with subtle separators */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-sans">
            <span className="font-semibold text-stone-900 dark:text-stone-200">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedAt}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-2 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="font-medium text-stone-800 dark:text-stone-200">{article.author.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(article.id);
                }}
                className={`p-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ${
                  isBookmarked ? 'text-amber-600 dark:text-amber-400' : 'text-stone-400'
                }`}
                title="Bookmark article"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <span className="inline-flex items-center gap-0.5 text-stone-900 dark:text-stone-100 font-semibold group-hover:translate-x-0.5 transition-transform">
                Read <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelectArticle(article)}
      className="group cursor-pointer flex flex-col justify-between h-full bg-transparent border-b border-stone-200 dark:border-stone-800 pb-6 transition-colors"
    >
      <div>
        {/* Cover image */}
        <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/60 dark:border-stone-800/80 mb-4">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>

        {/* Unboxed clean metadata kicker */}
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-sans mb-2">
          <span className="font-semibold text-stone-900 dark:text-stone-200">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedAt}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-950 dark:text-stone-50 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors leading-snug mb-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed mb-4">
          {article.excerpt}
        </p>
      </div>

      {/* Footer info: author and action */}
      <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
        <div className="flex items-center gap-2">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="font-medium text-stone-800 dark:text-stone-200 truncate max-w-[120px]">
            {article.author.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(article.id);
            }}
            className={`p-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ${
              isBookmarked ? 'text-amber-600 dark:text-amber-400' : 'text-stone-400'
            }`}
            title="Save article"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-0.5 group-hover:underline">
            Read <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  );
};
