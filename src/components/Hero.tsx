import React from 'react';
import { ArrowDown, Flame, ChevronRight } from 'lucide-react';
import { restaurantInfo, brandAssets } from '../data/restaurantData';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0B] pt-20 pb-16 lg:py-0"
    >
      {/* Background Image Layer with Cinematic Zoom & Warm Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={brandAssets.hero}
          alt="Yamama Shawaya Slow-Fired Charcoal Chicken"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_12s_ease-in-out_infinite] opacity-60 brightness-90 transition-transform duration-1000 ease-out"
        />

        {/* Gradient Scrims & Vignettes for WCAG Legibility and Dark Luxury Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0B] via-[#0D0D0B]/60 to-[#0D0D0B]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0B] via-[#0D0D0B]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,164,92,0.12),transparent_70%)]" />

        {/* Delicate subtle warm ember particle glow overlay */}
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24">
        <div className="max-w-3xl">
          {/* Small Premium Label */}
          <div className="inline-flex items-center space-x-2.5 text-[#C9A45C] text-xs sm:text-sm tracking-[0.28em] font-medium uppercase mb-6 border-b border-[#C9A45C]/30 pb-1.5">
            <Flame className="w-4 h-4 text-[#C9A45C] shrink-0" />
            <span>{restaurantInfo.brandKicker}</span>
          </div>

          {/* Large Headline */}
          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F5F1E8] tracking-tight leading-[0.95] mb-6">
            <span className="block hover:text-[#E8D7B5] transition-colors">FIRE.</span>
            <span className="block text-[#E8D7B5] hover:text-[#C9A45C] transition-colors">FLAVOUR.</span>
            <span className="block hover:text-[#E8D7B5] transition-colors">TRADITION.</span>
          </h1>

          {/* Supporting Headline */}
          <p className="font-editorial italic text-xl sm:text-2xl text-[#E8D7B5]/90 mb-4 tracking-wide font-light">
            {restaurantInfo.tagline}
          </p>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-[#F5F1E8]/80 font-sans font-normal leading-relaxed max-w-2xl mb-10 text-balance">
            {restaurantInfo.heroDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onOpenOrder}
              className="inline-flex items-center justify-center space-x-2 bg-[#C9A45C] hover:bg-[#D8B56F] text-[#0D0D0B] font-semibold text-xs sm:text-sm tracking-[0.2em] px-8 py-4 rounded-sm transition-all duration-200 shadow-xl hover:shadow-[#C9A45C]/30 cursor-pointer text-center"
            >
              <span>ORDER NOW</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#menu"
              className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/[0.04] text-[#E8D7B5] hover:text-white border border-[#E8D7B5]/30 hover:border-[#C9A45C] font-medium text-xs sm:text-sm tracking-[0.2em] px-8 py-4 rounded-sm transition-all duration-200 text-center"
            >
              <span>EXPLORE MENU</span>
            </a>
          </div>

          {/* Regional Trust Marker */}
          <div className="mt-12 flex items-center space-x-3 text-xs text-[#E8D7B5]/70 tracking-widest uppercase">
            <span>Tirurkad</span>
            <span className="text-[#C9A45C]">·</span>
            <span>Perinthalmanna</span>
            <span className="text-[#C9A45C]">·</span>
            <span>Kerala 679321</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#signatures"
        aria-label="Scroll to discover Yamama Shawaya"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#E8D7B5]/60 hover:text-[#C9A45C] transition-colors group cursor-pointer focus:outline-none"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans mb-2 group-hover:tracking-[0.3em] transition-all">
          SCROLL TO DISCOVER
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C9A45C]" />
      </a>
    </section>
  );
};
