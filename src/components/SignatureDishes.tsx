import React from 'react';
import { Sparkles, Eye, Plus } from 'lucide-react';
import { signatureDishes, MenuItem } from '../data/restaurantData';

interface SignatureDishesProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenOrder: () => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectDish, onOpenOrder }) => {
  return (
    <section id="signatures" className="py-24 bg-[#15130F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8D7B5]/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight leading-tight">
              THE YAMAMA SIGNATURES
            </h2>
          </div>
          <p className="font-editorial italic text-xl text-[#E8D7B5]/80 mt-4 md:mt-0 font-light">
            Made for cravings. Crafted for sharing.
          </p>
        </div>

        {/* Signature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish) => (
            <article
              key={dish.id}
              className="group bg-[#0D0D0B] border border-[#E8D7B5]/10 hover:border-[#C9A45C]/40 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#15130F]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0B] via-transparent to-transparent opacity-80" />

                {/* Quiet Tag */}
                {dish.arabicName && (
                  <div className="absolute top-4 right-4 bg-[#0D0D0B]/85 backdrop-blur-sm px-2.5 py-1 border border-[#E8D7B5]/10 text-xs font-serif text-[#C9A45C] tracking-wide">
                    {dish.arabicName}
                  </div>
                )}
              </div>

              {/* Content Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-editorial text-2xl font-normal text-[#F5F1E8] group-hover:text-[#E8D7B5] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-[#C9A45C] shrink-0 tabular-nums pt-1">
                      {dish.priceFormatted}
                    </span>
                  </div>

                  <p className="text-xs text-[#E8D7B5]/75 font-sans leading-relaxed line-clamp-3 mb-6">
                    {dish.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectDish(dish)}
                    className="inline-flex items-center space-x-1.5 text-xs text-[#E8D7B5] hover:text-[#C9A45C] transition-colors font-medium tracking-wider focus:outline-none focus-visible:underline cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>VIEW DETAILS</span>
                  </button>

                  <button
                    onClick={onOpenOrder}
                    className="inline-flex items-center space-x-1 text-xs text-[#C9A45C] hover:text-white bg-[#C9A45C]/10 hover:bg-[#C9A45C] hover:text-[#0D0D0B] px-3 py-1.5 rounded-sm transition-all font-medium tracking-wider cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>ORDER</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
