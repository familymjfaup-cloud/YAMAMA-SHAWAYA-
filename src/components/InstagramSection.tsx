import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { restaurantInfo, photoGallery } from '../data/restaurantData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#15130F] relative border-b border-[#E8D7B5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#E8D7B5]/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>Social Journal</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight leading-tight">
              FROM OUR KITCHEN TO YOUR FEED
            </h2>
          </div>

          <a
            href={restaurantInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#C9A45C] hover:text-[#D8B56F] transition-colors"
          >
            <span>FOLLOW {restaurantInfo.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {photoGallery.map((item, idx) => (
            <a
              key={item.id}
              href={restaurantInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#0D0D0B] rounded-xs block border border-white/5 hover:border-[#C9A45C]/50 transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Hover Dark Overlay with Icon & Title */}
              <div className="absolute inset-0 bg-[#0D0D0B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <Instagram className="w-6 h-6 text-[#C9A45C] mb-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                <span className="text-[11px] font-editorial text-[#F5F1E8] line-clamp-1 mb-1">
                  {item.title}
                </span>
                <span className="text-[9px] tracking-widest uppercase text-[#C9A45C]">
                  View Post
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Verification Note */}
        <div className="mt-8 text-center text-[11px] tracking-wider text-[#E8D7B5]/60 font-sans">
          Tag <span className="text-[#C9A45C]">#YamamaShawaya</span> during your visit to be featured in our culinary stories.
        </div>
      </div>
    </section>
  );
};
