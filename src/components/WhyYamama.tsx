import React from 'react';
import { Award, ShieldCheck, Flame, Users } from 'lucide-react';
import { whyYamamaPillars } from '../data/restaurantData';

export const WhyYamama: React.FC = () => {
  const getIcon = (idx: string) => {
    switch (idx) {
      case '01':
        return <Award className="w-5 h-5 text-[#C9A45C]" />;
      case '02':
        return <ShieldCheck className="w-5 h-5 text-[#C9A45C]" />;
      case '03':
        return <Flame className="w-5 h-5 text-[#C9A45C]" />;
      case '04':
        return <Users className="w-5 h-5 text-[#C9A45C]" />;
      default:
        return <Award className="w-5 h-5 text-[#C9A45C]" />;
    }
  };

  return (
    <section className="py-24 bg-[#15130F] relative border-b border-[#E8D7B5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium mb-3">
            <span>Our Commitment</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight leading-tight">
            WHY PEOPLE COME BACK
          </h2>
          <p className="text-sm text-[#E8D7B5]/80 font-sans mt-4 max-w-lg mx-auto">
            Grounded in consistency, fresh preparation, and honest Arabian hospitality in Perinthalmanna.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyYamamaPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 bg-[#0D0D0B] border border-[#E8D7B5]/10 hover:border-[#C9A45C]/40 rounded-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-[#15130F] border border-[#C9A45C]/20 rounded-sm">
                    {getIcon(pillar.index)}
                  </div>
                  <span className="font-editorial text-2xl font-light text-[#E8D7B5]/30">
                    {pillar.index}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-normal text-[#F5F1E8] mb-3 tracking-wide">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#E8D7B5]/75 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-[#C9A45C]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                <span>Yamama Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
