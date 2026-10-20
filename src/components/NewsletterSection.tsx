import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section className="border-t border-b border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/60 py-12 sm:py-16 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 font-sans">
          The Weekly London Gazette
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-950 dark:text-stone-50">
          The Aidas.uk Weekly Dispatch
        </h2>

        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans max-w-xl mx-auto leading-relaxed">
          Curated intelligence on responsive tailoring, ambient wearables, and modern lifestyle philosophy. Delivered every Friday morning without algorithmic spam.
        </p>

        {subscribed ? (
          <div className="pt-4 flex items-center justify-center gap-2 text-emerald-700 dark:text-emerald-400 font-medium text-xs sm:text-sm">
            <CheckCircle className="w-4 h-4" />
            <span>You have been subscribed to the Aidas.uk Weekly Dispatch. Welcome.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-4 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-9 pr-3 py-3 text-xs bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 dark:hover:bg-white transition-colors cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <div className="text-[10px] text-stone-400 dark:text-stone-500 pt-2 font-sans">
          Unsubscribe with a single click at any time. We respect your attention and privacy.
        </div>
      </div>
    </section>
  );
};
