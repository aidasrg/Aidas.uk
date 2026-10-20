import React from 'react';
import { ShieldCheck, Compass, Sparkles, Feather } from 'lucide-react';

export const AboutView: React.FC = () => {
  const masthead = [
    {
      name: 'Aidas K.',
      role: 'Founder & Editor-in-Chief',
      bio: 'Directing editorial vision at the intersection of British tailoring traditions, responsive textiles, and algorithmic garment engineering.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      name: 'Clara Sterling',
      role: 'Senior Fashion Editor',
      bio: 'Covering European runway presentations, circular textile development, and contemporary women’s tailoring from London.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      name: 'Oliver Thorne',
      role: 'Menswear & Horology Lead',
      bio: 'Investigating Savile Row heritage, weatherproof technical suiting, and independent British mechanical watchmaking.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      name: 'Maya Lin',
      role: 'Design & Accessories Critic',
      bio: 'Specializing in ambient wearables, biometric fine jewellery, and artisanal leathercraft in London’s historic workshops.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    },
  ];

  const pillars = [
    {
      icon: Feather,
      title: 'Artisanal Integrity',
      description: 'We believe clothing should outlast seasonal cycles. We prioritize slow manufacturing, repairable hardware, and time-honoured British weaving traditions.',
    },
    {
      icon: Sparkles,
      title: 'Intelligent Materials',
      description: 'Technology in dress must never be gimmicky. We champion unobtrusive, screenless biometrics and responsive fibres that elevate human wellbeing in silence.',
    },
    {
      icon: Compass,
      title: 'Rigorous Independence',
      description: 'Aidas.uk accepts no paid product reviews or sponsored placement bias. Our criticism and wardrobe evaluations are completely autonomous.',
    },
    {
      icon: ShieldCheck,
      title: 'Circular Stewardship',
      description: 'From zero-waste generative pattern calculation to plant-based tanning, we spotlight innovators actively reducing industry textile surplus.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="text-xs uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 font-sans">
          The Manifesto · Established in London
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-950 dark:text-stone-50 tracking-tight leading-tight">
          Aidas.uk
        </h1>
        <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-serif italic leading-relaxed">
          "Documenting the delicate equilibrium between British sartorial heritage and the vanguard of ambient technology."
        </p>
      </div>

      {/* Main Philosophy Story */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 border-y border-stone-200 dark:border-stone-800 py-12">
        <div className="md:col-span-6 space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
          <p>
            Founded in Marylebone, London, <strong>Aidas.uk</strong> was created out of a desire for considered, intelligent reflection in a fashion ecosystem overrun by disposable trends and hyperactive marketing.
          </p>
          <p>
            We examine what we wear not merely as surface adornment, but as the physical interface through which human beings navigate climate, architecture, and technology.
          </p>
          <p>
            Whether uncovering how computational looms in Yorkshire are eliminating textile waste, or testing how water-shedding nanofiber suiting holds up under torrential London rain, our journalism is dedicated to pieces of permanent worth.
          </p>
        </div>

        <div className="md:col-span-6 aspect-[4/3] bg-stone-900 overflow-hidden border border-stone-200 dark:border-stone-800">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
            alt="London Atelier and tailoring studio"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Core Editorial Pillars */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-serif font-bold text-stone-950 dark:text-stone-50">
            Our Editorial Standards
          </h2>
          <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-1">
            The principles governing our reporting
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3"
              >
                <div className="w-8 h-8 rounded bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-900 dark:text-stone-100">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-serif font-bold text-stone-950 dark:text-stone-50">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* The Masthead */}
      <div>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-serif font-bold text-stone-950 dark:text-stone-50">
            The Editorial Masthead
          </h2>
          <div className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-1">
            Writers, critics, and researchers behind Aidas.uk
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {masthead.map((member) => (
            <div
              key={member.name}
              className="p-5 border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/40 flex items-start gap-4"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-14 h-14 rounded-full object-cover shrink-0 border border-stone-300 dark:border-stone-700"
              />
              <div className="space-y-1">
                <div className="text-sm font-serif font-bold text-stone-950 dark:text-stone-100">
                  {member.name}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-amber-800 dark:text-amber-400 font-sans font-medium">
                  {member.role}
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans pt-1">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
