import React from 'react';
import { X, Trash2, ArrowRight, Bookmark } from 'lucide-react';
import { Article } from '../types';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white dark:bg-stone-950 shadow-2xl border-l border-stone-200 dark:border-stone-800 flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-6 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <h2 className="text-base font-serif font-bold text-stone-950 dark:text-stone-50">
              Saved Reading List
            </h2>
            <span className="text-xs text-stone-500 font-sans">
              ({bookmarkedArticles.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {bookmarkedArticles.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Bookmark className="w-8 h-8 text-stone-300 dark:text-stone-700 mx-auto" />
              <p className="text-sm font-serif text-stone-600 dark:text-stone-400">
                Your reading list is empty.
              </p>
              <p className="text-xs text-stone-400 font-sans max-w-xs mx-auto">
                Click the bookmark icon on any article to save it for offline or later reading.
              </p>
            </div>
          ) : (
            bookmarkedArticles.map((article) => (
              <div
                key={article.id}
                className="group flex gap-3 p-3 border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/40 hover:border-stone-400 transition-colors"
              >
                <div
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="w-20 h-16 shrink-0 bg-stone-200 dark:bg-stone-800 overflow-hidden cursor-pointer"
                >
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-0.5">
                    {article.category} · {article.readTime}
                  </div>
                  <h4
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="text-xs font-serif font-bold text-stone-900 dark:text-stone-100 line-clamp-2 cursor-pointer group-hover:underline"
                  >
                    {article.title}
                  </h4>
                  <div className="flex items-center justify-between mt-2">
                    <button
                      onClick={() => onRemoveBookmark(article.id)}
                      className="text-[11px] text-stone-400 hover:text-rose-600 flex items-center gap-1 cursor-pointer"
                      title="Remove from saved list"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Remove</span>
                    </button>
                    <button
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="text-[11px] font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-0.5"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {bookmarkedArticles.length > 0 && (
          <div className="p-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs">
            <button
              onClick={onClearAll}
              className="text-stone-500 hover:text-rose-600 font-medium"
            >
              Clear All ({bookmarkedArticles.length})
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-stone-950 dark:bg-stone-100 text-stone-50 dark:text-stone-950 font-semibold uppercase tracking-wider text-[11px]"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
