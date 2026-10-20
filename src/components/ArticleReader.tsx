import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Heart,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Type,
  Clock,
  MessageSquare,
  Check,
  Send
} from 'lucide-react';
import { Article, Comment } from '../types';

interface ArticleReaderProps {
  article: Article;
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  comments: Comment[];
  onAddComment: (articleId: string, author: string, text: string) => void;
  onLikeArticle: (articleId: string) => void;
  hasLiked: boolean;
  relatedArticles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  onBack,
  isBookmarked,
  onToggleBookmark,
  comments,
  onAddComment,
  onLikeArticle,
  hasLiked,
  relatedArticles,
  onSelectArticle,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  // Audio speech synthesis state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Audio Speech Synthesis cleanup
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [article.id]);

  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text to speech is not supported in this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel(); // reset any ongoing
      const textToRead = `${article.title}. By ${article.author.name}. ${article.subtitle}. ${article.content.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentAuthor.trim() || !commentText.trim()) return;
    onAddComment(article.id, commentAuthor.trim(), commentText.trim());
    setCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 3000);
  };

  const articleComments = comments.filter((c) => c.articleId === article.id);

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg sm:text-xl leading-relaxed sm:leading-loose';
      case 'xlarge':
        return 'text-xl sm:text-2xl leading-loose';
      case 'normal':
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  return (
    <div className="min-h-screen bg-stone-50/50 dark:bg-stone-950 transition-colors">
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-stone-200 dark:bg-stone-800 z-50">
        <div
          className="h-full bg-stone-950 dark:bg-amber-400 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Secondary Toolbar */}
      <div className="sticky top-[73px] sm:top-[77px] z-30 bg-white/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 px-4 sm:px-8 py-2.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </button>

          {/* Reader controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Audio narration button */}
            <button
              onClick={toggleAudio}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs uppercase tracking-wider font-medium border transition-colors cursor-pointer ${
                isPlayingAudio
                  ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200'
                  : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
              title="Listen to narrated article"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                  <span className="hidden sm:inline">Pause Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Listen</span>
                </>
              )}
            </button>

            {/* Font size toggler */}
            <div className="hidden sm:flex items-center border border-stone-200 dark:border-stone-800 divide-x divide-stone-200 dark:divide-stone-800 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 font-serif ${fontSize === 'normal' ? 'bg-stone-200 dark:bg-stone-800 text-stone-950 dark:text-white font-bold' : 'text-stone-500'}`}
                title="Normal text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 font-serif text-sm ${fontSize === 'large' ? 'bg-stone-200 dark:bg-stone-800 text-stone-950 dark:text-white font-bold' : 'text-stone-500'}`}
                title="Large text"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 font-serif text-base ${fontSize === 'xlarge' ? 'bg-stone-200 dark:bg-stone-800 text-stone-950 dark:text-white font-bold' : 'text-stone-500'}`}
                title="Extra large text"
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded transition-colors ${
                isBookmarked
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
              }`}
              title="Bookmark article"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="relative p-1.5 text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
              title="Copy share link"
            >
              {copiedLink ? (
                <span className="flex items-center text-xs text-emerald-600 font-semibold gap-1">
                  <Check className="w-3.5 h-3.5" /> Copied
                </span>
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Unboxed Metadata & Category Kicker */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 font-sans mb-4">
          <span className="font-semibold text-stone-950 dark:text-stone-100">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedAt}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold tracking-tight text-stone-950 dark:text-stone-50 leading-[1.12] mb-6">
          {article.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-300 font-serif italic leading-relaxed mb-8 border-b border-stone-200 dark:border-stone-800 pb-8">
          {article.subtitle}
        </p>

        {/* Author Byline */}
        <div className="flex items-center justify-between py-4 mb-8">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover border border-stone-300 dark:border-stone-700"
            />
            <div>
              <div className="text-sm font-semibold text-stone-950 dark:text-stone-100">
                {article.author.name}
              </div>
              <div className="text-xs text-stone-500 dark:text-stone-400">
                {article.author.role} · London Atelier
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onLikeArticle(article.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded border transition-colors cursor-pointer ${
                hasLiked
                  ? 'border-rose-300 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                  : 'border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:border-stone-400'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current' : ''}`} />
              <span>{article.likes + (hasLiked ? 1 : 0)}</span>
            </button>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="mb-10">
          <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          {article.imageCaption && (
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-2.5 font-sans italic">
              {article.imageCaption}
            </p>
          )}
        </div>

        {/* Audio Player Strip (if active) */}
        {isPlayingAudio && (
          <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-3">
              <div className="flex gap-1 items-end h-4">
                <span className="w-1 bg-amber-600 h-3 animate-bounce" />
                <span className="w-1 bg-amber-600 h-4 animate-bounce [animation-delay:0.15s]" />
                <span className="w-1 bg-amber-600 h-2 animate-bounce [animation-delay:0.3s]" />
              </div>
              <span className="text-xs font-medium text-amber-900 dark:text-amber-200 font-sans">
                Now narrating: {article.title}
              </span>
            </div>
            <button
              onClick={toggleAudio}
              className="text-xs uppercase tracking-wider font-semibold text-amber-800 dark:text-amber-300 hover:underline cursor-pointer"
            >
              Stop
            </button>
          </div>
        )}

        {/* Key Takeaways Box (if present) */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="my-8 p-6 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
            <div className="text-xs font-bold uppercase tracking-widest text-stone-900 dark:text-stone-100 mb-3 font-sans">
              Editorial Takeaways
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans">
              {article.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber-700 dark:text-amber-400 font-serif font-bold text-base leading-none">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div className={`space-y-6 text-stone-800 dark:text-stone-200 font-sans ${getFontSizeClass()}`}>
          {article.content.map((paragraph, index) => {
            // First paragraph gets editorial drop cap styling
            if (index === 0) {
              return (
                <p key={index} className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-stone-950 dark:first-letter:text-stone-50">
                  {paragraph}
                </p>
              );
            }

            // After second paragraph, insert pull quote if available
            if (index === 2 && article.pullQuote) {
              return (
                <React.Fragment key={index}>
                  <figure className="my-10 py-6 border-y border-stone-200 dark:border-stone-800 text-center">
                    <blockquote className="text-2xl sm:text-3xl font-serif font-normal italic text-stone-900 dark:text-stone-100 leading-snug">
                      "{article.pullQuote.quote}"
                    </blockquote>
                    <figcaption className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-3 font-sans">
                      — {article.pullQuote.attribution}
                    </figcaption>
                  </figure>
                  <p>{paragraph}</p>
                </React.Fragment>
              );
            }

            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* Tags footer */}
        <div className="mt-12 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-sans">
          <span className="uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-200 mr-2">
            Archived Under:
          </span>
          {article.tags.map((tag, idx) => (
            <span key={tag}>
              #{tag}{idx < article.tags.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="mt-10 p-6 border border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-16 h-16 rounded-full object-cover shrink-0 border border-stone-300 dark:border-stone-700"
          />
          <div className="text-center sm:text-left space-y-1.5">
            <div className="text-sm font-serif font-bold text-stone-950 dark:text-stone-100">
              Written by {article.author.name}
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
              {article.author.role}
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed pt-1">
              {article.author.bio}
            </p>
          </div>
        </div>

        {/* Comments Section */}
        <section className="mt-16 pt-10 border-t border-stone-200 dark:border-stone-800">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 dark:text-stone-50 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-stone-400" />
              <span>Reader Dialogue ({articleComments.length})</span>
            </h3>
            <span className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Moderated Discussion
            </span>
          </div>

          {/* New Comment Form */}
          <form onSubmit={handleSubmitComment} className="mb-10 p-5 bg-stone-100/70 dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-800 dark:text-stone-200">
              Add Your Perspective
            </div>
            <input
              type="text"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              placeholder="Your Name / Studio (e.g. Maya Chen, London)"
              className="w-full px-3 py-2 text-xs bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none"
              required
            />
            <textarea
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your thoughts on computational tailoring, materials, or style..."
              className="w-full px-3 py-2 text-xs bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none"
              required
            />
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-stone-400 font-sans">
                Aidas.uk maintains respectful, thoughtful discourse standards.
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 text-xs uppercase tracking-wider font-semibold hover:bg-stone-800 dark:hover:bg-white transition-colors cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span>Submit Response</span>
              </button>
            </div>
            {commentSubmitted && (
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Thank you. Your comment has been posted to the journal.
              </div>
            )}
          </form>

          {/* Comment List */}
          <div className="space-y-4">
            {articleComments.length === 0 ? (
              <div className="text-xs text-stone-500 italic py-4">
                Be the first reader to contribute a perspective on this piece.
              </div>
            ) : (
              articleComments.map((comment) => (
                <div
                  key={comment.id}
                  className="p-4 border-b border-stone-200 dark:border-stone-800 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-stone-900 dark:text-stone-100">
                        {comment.author}
                      </span>
                      <span className="text-stone-400">·</span>
                      <span className="text-stone-500 dark:text-stone-400">{comment.date}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Next Recommended Stories */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-10 border-t border-stone-200 dark:border-stone-800">
            <h3 className="text-lg font-serif font-bold text-stone-950 dark:text-stone-50 mb-6 uppercase tracking-wider">
              Further Reading in Contemporary Style
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.slice(0, 2).map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectArticle(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer border border-stone-200 dark:border-stone-800 p-4 bg-white dark:bg-stone-900 hover:border-stone-400 transition-colors"
                >
                  <div className="aspect-[16/9] overflow-hidden mb-3 bg-stone-100 dark:bg-stone-950">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-1">
                    {rel.category} · {rel.readTime}
                  </div>
                  <h4 className="text-sm font-serif font-bold text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
