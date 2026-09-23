import React from 'react';
import { Flame, Sparkles, Users } from 'lucide-react';
import { brandAssets } from '../data/restaurantData';

export const FoodExperience: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#0D0D0B] overflow-hidden border-y border-[#E8D7B5]/10">
      {/* Background Graphic Asset with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={brandAssets.alfaham}
          alt="Charcoal Ember Grilling at Yamama Shawaya"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0B] via-[#0D0D0B]/90 to-[#0D0D0B]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0B] via-transparent to-[#0D0D0B]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.28em] text-[#C9A45C] font-medium mb-4">
            <Flame className="w-4 h-4" />
            <span>The Kitchen Craft</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight leading-tight mb-6">
            THE FLAVOUR STARTS WITH FIRE
          </h2>
          <p className="text-sm sm:text-base text-[#E8D7B5]/80 font-sans leading-relaxed max-w-xl mx-auto">
            From the heat of hardwood coals to aromatic steam pits, our cooking techniques honour traditional Arabian culinary heritage.
          </p>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Block 1: FIRE */}
          <div className="p-8 bg-[#15130F]/80 backdrop-blur-sm border border-[#E8D7B5]/10 rounded-sm hover:border-[#C9A45C]/40 transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center border border-[#C9A45C]/30 text-[#C9A45C] mb-6 rounded-sm bg-[#0D0D0B]">
              <Flame className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-editorial text-3xl font-normal text-[#F5F1E8] mb-3 tracking-wide">
              FIRE
            </h3>
            <p className="text-sm text-[#E8D7B5]/80 font-sans leading-relaxed">
              Carefully grilled for deep, smoky flavour. We use live embers that caramelize the exterior while locking natural juices within.
            </p>
          </div>

          {/* Block 2: FLAVOUR */}
          <div className="p-8 bg-[#15130F]/80 backdrop-blur-sm border border-[#E8D7B5]/10 rounded-sm hover:border-[#C9A45C]/40 transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center border border-[#C9A45C]/30 text-[#C9A45C] mb-6 rounded-sm bg-[#0D0D0B]">
              <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-editorial text-3xl font-normal text-[#F5F1E8] mb-3 tracking-wide">
              FLAVOUR
            </h3>
            <p className="text-sm text-[#E8D7B5]/80 font-sans leading-relaxed">
              Bold Arabian-inspired seasoning in every bite. Black lime, toasted coriander, crushed peppercorn, and fragrant garlic create our trademark profile.
            </p>
          </div>

          {/* Block 3: SHARING */}
          <div className="p-8 bg-[#15130F]/80 backdrop-blur-sm border border-[#E8D7B5]/10 rounded-sm hover:border-[#C9A45C]/40 transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center border border-[#C9A45C]/30 text-[#C9A45C] mb-6 rounded-sm bg-[#0D0D0B]">
              <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-editorial text-3xl font-normal text-[#F5F1E8] mb-3 tracking-wide">
              SHARING
            </h3>
            <p className="text-sm text-[#E8D7B5]/80 font-sans leading-relaxed">
              Food made to bring people together. Designed for family platters, communal feasts, and long conversations over warm kuboos and rice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
