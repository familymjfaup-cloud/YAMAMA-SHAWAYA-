import React from 'react';
import { X, Flame, Check, Phone, MessageSquare } from 'lucide-react';
import { MenuItem, restaurantInfo } from '../data/restaurantData';

interface DishDetailsModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onSelectForOrder: (dish: MenuItem) => void;
}

export const DishDetailsModal: React.FC<DishDetailsModalProps> = ({
  dish,
  onClose,
  onSelectForOrder,
}) => {
  if (!dish) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      className="fixed inset-0 z-50 bg-[#0D0D0B]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#15130F] border border-[#C9A45C]/30 max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Dish Details"
          className="absolute top-4 right-4 z-20 p-2 bg-[#0D0D0B]/80 hover:bg-[#0D0D0B] text-[#E8D7B5] hover:text-[#C9A45C] border border-white/10 rounded-sm transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image Box */}
        <div className="md:w-1/2 relative bg-[#0D0D0B] min-h-[220px] md:min-h-full">
          <img
            src={dish.image}
            alt={dish.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#15130F] via-transparent to-transparent md:hidden" />

          {dish.arabicName && (
            <div className="absolute top-4 left-4 bg-[#0D0D0B]/85 backdrop-blur-sm px-3 py-1 border border-[#E8D7B5]/20 text-xs font-serif text-[#C9A45C]">
              {dish.arabicName}
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#C9A45C] mb-2 font-medium">
              <Flame className="w-3.5 h-3.5" />
              <span>{dish.category}</span>
            </div>

            <h3
              id="dish-modal-title"
              className="font-editorial text-2xl sm:text-3xl font-normal text-[#F5F1E8] mb-1"
            >
              {dish.name}
            </h3>

            <div className="text-sm font-semibold text-[#C9A45C] mb-4 font-sans">
              {dish.priceFormatted}
            </div>

            <p className="text-xs sm:text-sm text-[#E8D7B5]/80 font-sans leading-relaxed mb-6">
              {dish.description}
            </p>

            {/* Portion Options Breakdown if applicable */}
            {dish.portionOptions && dish.portionOptions.length > 0 && (
              <div className="mb-6 pt-4 border-t border-white/5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#E8D7B5]/70 block mb-2 font-medium">
                  Portion Sizes & Pricing
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {dish.portionOptions.map((opt) => (
                    <div
                      key={opt.size}
                      className="p-2 bg-[#0D0D0B] border border-white/10 rounded-xs text-center"
                    >
                      <span className="text-[10px] text-[#E8D7B5]/80 block">{opt.size}</span>
                      <span className="text-xs font-semibold text-[#C9A45C]">{opt.priceFormatted}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {dish.tags && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {dish.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider text-[#E8D7B5]/60 bg-white/5 px-2 py-0.5 rounded-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
            <button
              onClick={() => {
                onSelectForOrder(dish);
                onClose();
              }}
              className="w-full py-3 bg-[#C9A45C] hover:bg-[#D8B56F] text-[#0D0D0B] text-xs font-semibold tracking-[0.18em] rounded-sm transition-all text-center flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
            >
              <Check className="w-4 h-4" />
              <span>ADD TO ORDER REQUEST</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={restaurantInfo.contact.telHref}
                className="py-2.5 bg-[#0D0D0B] hover:bg-black text-[#E8D7B5] hover:text-[#C9A45C] border border-[#E8D7B5]/20 text-[11px] font-medium tracking-wider rounded-sm transition-colors text-center flex items-center justify-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Call Kitchen</span>
              </a>

              <a
                href={`https://wa.me/${restaurantInfo.contact.whatsappRaw}?text=${encodeURIComponent(
                  `Hello Yamama Shawaya, I would like to order: ${dish.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 bg-[#0D0D0B] hover:bg-black text-[#E8D7B5] hover:text-[#C9A45C] border border-[#E8D7B5]/20 text-[11px] font-medium tracking-wider rounded-sm transition-colors text-center flex items-center justify-center space-x-1"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
