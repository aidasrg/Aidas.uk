import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, HelpCircle } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Editorial Pitch & Story Submission',
    subject: '',
    message: '',
    referenceUrl: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const generatedId = `AIDAS-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      category: 'Editorial Pitch & Story Submission',
      subject: '',
      message: '',
      referenceUrl: '',
    });
    setSubmitted(false);
  };

  const faqs = [
    {
      q: 'How do I pitch a story or interview to Aidas.uk?',
      a: 'We welcome pitches from journalists, materials scientists, and designers. Please summarize your angle in 200 words, explain why it matters to contemporary British style or wearable technology, and link to any relevant work.',
    },
    {
      q: 'Do you accept physical review samples of clothing or accessories?',
      a: 'We evaluate select garments, horological pieces, and smart wearables. Sending an item does not guarantee editorial coverage, as all evaluations are independent and unsponsored.',
    },
    {
      q: 'Where is the Aidas.uk editorial bureau located?',
      a: 'Our main editorial bureau is in Marylebone, London, with contributing correspondents across Milan, Tokyo, and Edinburgh.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
        <div className="text-xs uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 font-sans">
          Editorial Desk & Correspondence
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-950 dark:text-stone-50 tracking-tight">
          Contact Aidas.uk
        </h1>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
          Reach our editors, submit an investigation pitch, or contact our London bureau regarding collaborations and letters to the editor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left: Bureau Information & Direct Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="border border-stone-200 dark:border-stone-800 p-6 bg-white dark:bg-stone-900 space-y-6">
            <h2 className="text-lg font-serif font-bold text-stone-950 dark:text-stone-50">
              London Editorial Office
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100">
                    Aidas.uk Publishing Bureau
                  </div>
                  <div>42 Marylebone High Street</div>
                  <div>London W1U 5JT, United Kingdom</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100">Direct Inquiries</div>
                  <div>Editorial: editorial@aidas.uk</div>
                  <div>Press & Media: press@aidas.uk</div>
                  <div>General Desk: contact@aidas.uk</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100">Response Window</div>
                  <div>We review every reader letter within 24 to 48 business hours.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Accordion */}
          <div className="border border-stone-200 dark:border-stone-800 p-6 bg-stone-50 dark:bg-stone-900/40 space-y-4">
            <h3 className="text-sm font-serif font-bold text-stone-950 dark:text-stone-50 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-stone-400" />
              <span>Editorial Guidelines FAQ</span>
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="text-xs space-y-1">
                  <div className="font-semibold text-stone-900 dark:text-stone-200">
                    {faq.q}
                  </div>
                  <div className="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="border border-stone-200 dark:border-stone-800 p-6 sm:p-8 bg-white dark:bg-stone-900">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-950 dark:text-stone-50">
                  Message Dispatched to Editors
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your correspondence has been logged under docket reference <span className="font-mono font-bold text-stone-900 dark:text-stone-100">{ticketId}</span>. A senior editor will review your submission shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 dark:hover:bg-white transition-colors cursor-pointer"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl font-serif font-bold text-stone-950 dark:text-stone-50 mb-1">
                    Send a Message to the Bureau
                  </h2>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-sans">
                    All correspondence is held in strict journalistic confidentiality.
                  </p>
                </div>

                {/* Inquiry Department */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1.5 font-sans">
                    Department / Inquiry Type
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900"
                  >
                    <option>Editorial Pitch & Story Submission</option>
                    <option>Press / Review Copy Inquiries</option>
                    <option>Brand Collaboration / Commercial Partnerships</option>
                    <option>Letter to the Editor</option>
                    <option>General Journal Inquiry</option>
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1.5 font-sans">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Helena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1.5 font-sans">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1.5 font-sans">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    placeholder="Brief summary of your inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900"
                  />
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1.5 font-sans">
                    Your Message / Dispatch *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Please include full details, article angles, timeline, or feedback..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900"
                  />
                </div>

                {/* Reference URL */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1.5 font-sans">
                    Supporting Link / Portfolio URL (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={formData.referenceUrl}
                    onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-950 text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 dark:hover:bg-white transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Correspondence</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
