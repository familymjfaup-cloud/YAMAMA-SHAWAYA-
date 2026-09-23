import React from 'react';
import { restaurantInfo, brandAssets } from '../data/restaurantData';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#0D0D0B] relative overflow-hidden">
      {/* Decorative Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A45C]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset with Arabic Geometric Frame Accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              {/* Geometric Decorative Accent Corner */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#C9A45C]/40 pointer-events-none z-20" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#C9A45C]/40 pointer-events-none z-20" />

              {/* Main Image */}
              <div className="overflow-hidden rounded-sm border border-[#E8D7B5]/15 bg-[#15130F]">
                <img
                  src={brandAssets.masalaShawaya}
                  alt="Yamama Shawaya Charcoal Culinary Craft"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Small Editorial Caption Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#0D0D0B]/90 backdrop-blur-md border border-[#E8D7B5]/15 rounded-sm">
                <div className="flex items-center justify-between text-xs text-[#E8D7B5]/80">
                  <span className="font-editorial text-sm font-semibold tracking-wider text-[#F5F1E8]">
                    Natural Hardwood Coals
                  </span>
                  <span className="text-[#C9A45C] tracking-widest text-[10px] uppercase">
                    Slow Turned Daily
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Arabic-Inspired Subtle Geometric Motif (Inline SVG) */}
            <div className="flex items-center space-x-3 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#C9A45C]">
                <path
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight leading-[1.08] mb-8 text-balance">
              {restaurantInfo.storyHeadline}
            </h2>

            <div className="space-y-6 text-[#E8D7B5]/85 font-sans text-base leading-relaxed">
              <p className="border-l border-[#C9A45C]/40 pl-5 text-lg font-light italic font-editorial text-[#F5F1E8]">
                &ldquo;{restaurantInfo.storyParagraph1}&rdquo;
              </p>
              <p>{restaurantInfo.storyParagraph2}</p>
              <p>{restaurantInfo.storyParagraph3}</p>
            </div>

            {/* Quiet Highlight Highlights */}
            <div className="mt-10 pt-8 border-t border-[#E8D7B5]/10 grid grid-cols-2 gap-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C9A45C] font-semibold block mb-1">
                  COMMUNAL GATHERING
                </span>
                <span className="text-xs text-[#E8D7B5]/70 leading-relaxed block">
                  Family-friendly Arabian seating designed for shared meals and celebrations.
                </span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C9A45C] font-semibold block mb-1">
                  CONSISTENT SPICE RUB
                </span>
                <span className="text-xs text-[#E8D7B5]/70 leading-relaxed block">
                  Every batch seasoned with our proprietary blend of Arabian aromatics.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
