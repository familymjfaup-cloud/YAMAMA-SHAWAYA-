import React from 'react';
import { Phone, BookOpen, Navigation, UtensilsCrossed } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface MobileActionBarProps {
  onOpenOrder: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenOrder }) => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0D0D0B]/95 backdrop-blur-lg border-t border-[#C9A45C]/25 shadow-2xl px-2 py-2 max-h-[64px]"
    >
      <div className="grid grid-cols-4 gap-1 items-center h-full">
        {/* Call Action */}
        <a
          href={restaurantInfo.contact.telHref}
          className="flex flex-col items-center justify-center py-1 text-[#E8D7B5] hover:text-[#C9A45C] transition-colors focus:outline-none"
        >
          <Phone className="w-4 h-4 text-[#C9A45C] mb-1" />
          <span className="text-[10px] tracking-wider uppercase font-medium">CALL</span>
        </a>

        {/* Menu Action */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-1 text-[#E8D7B5] hover:text-[#C9A45C] transition-colors focus:outline-none"
        >
          <BookOpen className="w-4 h-4 text-[#C9A45C] mb-1" />
          <span className="text-[10px] tracking-wider uppercase font-medium">MENU</span>
        </a>

        {/* Directions Action */}
        <a
          href={restaurantInfo.address.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#E8D7B5] hover:text-[#C9A45C] transition-colors focus:outline-none"
        >
          <Navigation className="w-4 h-4 text-[#C9A45C] mb-1" />
          <span className="text-[10px] tracking-wider uppercase font-medium">DIRECTIONS</span>
        </a>

        {/* Order Action */}
        <button
          onClick={onOpenOrder}
          className="flex flex-col items-center justify-center py-1 bg-[#C9A45C] text-[#0D0D0B] rounded-xs font-semibold hover:bg-[#D8B56F] transition-colors focus:outline-none cursor-pointer"
        >
          <UtensilsCrossed className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase">ORDER</span>
        </button>
      </div>
    </aside>
  );
};
