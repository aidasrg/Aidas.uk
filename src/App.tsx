/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroFeatured } from './components/HeroFeatured';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReader } from './components/ArticleReader';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { ARTICLES, INITIAL_COMMENTS } from './data/articles';
import { Article, Category, Comment } from './types';
import { SlidersHorizontal, Sparkles, TrendingUp, X } from 'lucide-react';

export default function App() {
  const [currentCategory, setCurrentCategory] = useState<Category>('EVERYTHING');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'trending'>('latest');
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Local storage for bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aidas_bookmarks');
      return saved ? JSON.parse(saved) : ['art-01'];
    } catch {
      return ['art-01'];
    }
  });

  // Local storage for likes
  const [likedIds, setLikedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aidas_likes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Local storage for comments
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const saved = localStorage.getItem('aidas_comments');
      return saved ? JSON.parse(saved) : INITIAL_COMMENTS;
    } catch {
      return INITIAL_COMMENTS;
    }
  });

  // Dark mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('aidas_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Apply dark mode class to root HTML
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('aidas_theme', 'dark');
      } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('aidas_theme', 'light');
      } catch {}
    }
  }, [isDarkMode]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('aidas_bookmarks', JSON.stringify(bookmarkedIds));
    } catch {}
  }, [bookmarkedIds]);

  // Persist likes
  useEffect(() => {
    try {
      localStorage.setItem('aidas_likes', JSON.stringify(likedIds));
    } catch {}
  }, [likedIds]);

  // Persist comments
  useEffect(() => {
    try {
      localStorage.setItem('aidas_comments', JSON.stringify(comments));
    } catch {}
  }, [comments]);

  const handleToggleBookmark = (articleId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId]
    );
  };

  const handleLikeArticle = (articleId: string) => {
    setLikedIds((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId]
    );
  };

  const handleAddComment = (articleId: string, author: string, text: string) => {
    const newComment: Comment = {
      id: `c-${Date.now()}`,
      articleId,
      author,
      date: 'Just now',
      text,
      likes: 0,
    };
    setComments((prev) => [newComment, ...prev]);
  };

  const handleSelectCategory = (cat: Category) => {
    setCurrentCategory(cat);
    setSelectedArticle(null);
    setSelectedTag(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (art: Article) => {
    setSelectedArticle(art);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category match
      if (currentCategory !== 'EVERYTHING' && currentCategory !== 'ABOUT' && currentCategory !== 'CONTACT US') {
        if (article.category !== currentCategory) return false;
      }

      // Tag match
      if (selectedTag && !article.tags.includes(selectedTag)) {
        return false;
      }

      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(query);
        const matchesCategory = article.category.toLowerCase().includes(query);
        const matchesTags = article.tags.some((t) => t.toLowerCase().includes(query));
        const matchesContent = article.content.some((p) => p.toLowerCase().includes(query));
        return matchesTitle || matchesExcerpt || matchesCategory || matchesTags || matchesContent;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popular') {
        return (b.likes + b.commentsCount) - (a.likes + a.commentsCount);
      }
      if (sortBy === 'trending') {
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      }
      return 0; // Default order
    });
  }, [currentCategory, selectedTag, searchQuery, sortBy]);

  // Lead featured story (the AI piece with user's image)
  const leadStory = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  // Secondary highlights and feed
  const feedArticles = useMemo(() => {
    // If we're showing the HeroFeatured component on EVERYTHING, omit leadStory from primary feed if no active search
    if (currentCategory === 'EVERYTHING' && !searchQuery && !selectedTag) {
      return filteredArticles.filter((a) => a.id !== leadStory.id);
    }
    return filteredArticles;
  }, [filteredArticles, currentCategory, searchQuery, selectedTag, leadStory.id]);

  // All unique tags for the current category
  const availableTags = useMemo(() => {
    const relevantArticles = currentCategory === 'EVERYTHING'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === currentCategory);
    const tagsSet = new Set<string>();
    relevantArticles.forEach((art) => art.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, [currentCategory]);

  const bookmarkedArticlesList = useMemo(() => {
    return ARTICLES.filter((a) => bookmarkedIds.includes(a.id));
  }, [bookmarkedIds]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans selection:bg-amber-200 selection:text-stone-900">
      {/* Header */}
      <Header
        currentCategory={currentCategory}
        onSelectCategory={handleSelectCategory}
        bookmarksCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {selectedArticle ? (
          /* Reader View */
          <ArticleReader
            article={selectedArticle}
            onBack={() => setSelectedArticle(null)}
            isBookmarked={bookmarkedIds.includes(selectedArticle.id)}
            onToggleBookmark={handleToggleBookmark}
            comments={comments}
            onAddComment={handleAddComment}
            onLikeArticle={handleLikeArticle}
            hasLiked={likedIds.includes(selectedArticle.id)}
            relatedArticles={ARTICLES.filter((a) => a.id !== selectedArticle.id && a.category === selectedArticle.category)}
            onSelectArticle={handleSelectArticle}
          />
        ) : currentCategory === 'ABOUT' ? (
          /* About Page */
          <AboutView />
        ) : currentCategory === 'CONTACT US' ? (
          /* Contact Page */
          <ContactView />
        ) : (
          /* Editorial Feed (EVERYTHING, WOMEN, MEN, ACCESSORIES) */
          <>
            {/* Show Featured Lead cover story when in EVERYTHING or when no active search/tag query */}
            {currentCategory === 'EVERYTHING' && !searchQuery && !selectedTag && (
              <HeroFeatured
                article={leadStory}
                onSelectArticle={handleSelectArticle}
                isBookmarked={bookmarkedIds.includes(leadStory.id)}
                onToggleBookmark={handleToggleBookmark}
              />
            )}

            {/* Sub-navigation, Tag filters & sorting bar */}
            <div className="border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/20 py-4 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Active Category Title & Counts */}
                <div className="flex items-center gap-3">
                  <h2 className="text-sm font-serif font-bold uppercase tracking-widest text-stone-950 dark:text-stone-50">
                    {currentCategory}
                  </h2>
                  <span className="text-stone-400">/</span>
                  <span className="text-xs text-stone-500 font-sans">
                    {filteredArticles.length} {filteredArticles.length === 1 ? 'Dispatch' : 'Dispatches'}
                  </span>
                  {selectedTag && (
                    <span className="inline-flex items-center gap-1 text-xs text-stone-900 dark:text-stone-100 font-medium bg-stone-200 dark:bg-stone-800 px-2 py-0.5 rounded">
                      #{selectedTag}
                      <button
                        onClick={() => setSelectedTag(null)}
                        className="hover:text-rose-600 cursor-pointer"
                        title="Clear tag"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 text-xs text-stone-900 dark:text-stone-100 font-medium bg-stone-200 dark:bg-stone-800 px-2 py-0.5 rounded">
                      "{searchQuery}"
                      <button
                        onClick={() => setSearchQuery('')}
                        className="hover:text-rose-600 cursor-pointer"
                        title="Clear search"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>

                {/* Tag Pills & Sort Segmented Control */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Tag quick filters */}
                  <div className="hidden lg:flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 mr-1">
                      Topics:
                    </span>
                    {availableTags.slice(0, 5).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        className={`px-2.5 py-1 text-xs transition-colors cursor-pointer rounded-sm ${
                          selectedTag === tag
                            ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-semibold'
                            : 'hover:bg-stone-200 dark:hover:bg-stone-800'
                        }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>

                  {/* Sort buttons */}
                  <div className="flex items-center border border-stone-200 dark:border-stone-800 divide-x divide-stone-200 dark:divide-stone-800 text-[11px] uppercase tracking-wider font-medium">
                    <button
                      onClick={() => setSortBy('latest')}
                      className={`px-2.5 py-1 transition-colors cursor-pointer ${
                        sortBy === 'latest'
                          ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                          : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white'
                      }`}
                    >
                      Latest
                    </button>
                    <button
                      onClick={() => setSortBy('popular')}
                      className={`px-2.5 py-1 transition-colors cursor-pointer ${
                        sortBy === 'popular'
                          ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                          : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white'
                      }`}
                    >
                      Popular
                    </button>
                    <button
                      onClick={() => setSortBy('trending')}
                      className={`px-2.5 py-1 transition-colors cursor-pointer ${
                        sortBy === 'trending'
                          ? 'bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-bold'
                          : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white'
                      }`}
                    >
                      Trending
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Articles Grid / Feed */}
            <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
              {feedArticles.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <p className="text-xl font-serif text-stone-600 dark:text-stone-400">
                    No editorial dispatches match your query.
                  </p>
                  <p className="text-xs text-stone-400 font-sans max-w-md mx-auto">
                    Try searching for different terms like "tailoring", "merino", "rings", or "accessories", or reset active filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedTag(null);
                      setCurrentCategory('EVERYTHING');
                    }}
                    className="px-5 py-2.5 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 dark:hover:bg-white transition-colors cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-12">
                  {/* First story highlighted horizontally if in specific category or search */}
                  {feedArticles.length > 0 && (
                    <div className="border-b border-stone-200 dark:border-stone-800 pb-2">
                      <ArticleCard
                        article={feedArticles[0]}
                        onSelectArticle={handleSelectArticle}
                        isBookmarked={bookmarkedIds.includes(feedArticles[0].id)}
                        onToggleBookmark={handleToggleBookmark}
                        layout="horizontal"
                      />
                    </div>
                  )}

                  {/* Rest of the articles in standard 3-column editorial grid */}
                  {feedArticles.length > 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                      {feedArticles.slice(1).map((article) => (
                        <ArticleCard
                          key={article.id}
                          article={article}
                          onSelectArticle={handleSelectArticle}
                          isBookmarked={bookmarkedIds.includes(article.id)}
                          onToggleBookmark={handleToggleBookmark}
                          layout="grid"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </main>

            {/* Newsletter Dispatch Signup */}
            <NewsletterSection />
          </>
        )}
      </div>

      {/* Saved Bookmarks Slide-out Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedArticles={bookmarkedArticlesList}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={() => setBookmarkedIds([])}
      />

      {/* Editorial Footer */}
      <Footer onSelectCategory={handleSelectCategory} />
    </div>
  );
}
