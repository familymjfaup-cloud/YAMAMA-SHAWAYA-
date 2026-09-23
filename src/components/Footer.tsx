import React from 'react';
import { Phone, MapPin, Instagram, Globe, ArrowUp } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A09] text-[#E8D7B5] pt-16 pb-24 lg:pb-16 border-t border-[#E8D7B5]/10 relative">
      {/* Decorative Arabic Geometric Border Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C9A45C]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          {/* Brand Identity Column */}
          <div className="lg:col-span-5">
            <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#F5F1E8] block mb-2">
              YAMAMA SHAWAYA
            </span>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] mb-4">
              Authentic Arabian Kitchen · Fire · Flavour · Tradition
            </p>
            <p className="text-xs text-[#E8D7B5]/75 font-sans leading-relaxed max-w-sm mb-6">
              Crafted with authentic wood charcoal, aromatic slow-turned rotisseries, and fragrant rice platters in the heart of Angadippuram, Perinthalmanna.
            </p>

            <div className="flex items-center space-x-3 text-xs text-[#E8D7B5]">
              <a
                href={restaurantInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#E8D7B5]/20 hover:border-[#C9A45C] flex items-center justify-center rounded-sm transition-colors text-[#C9A45C]"
                aria-label="Yamama Shawaya Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.socialProof.allReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#E8D7B5]/20 hover:border-[#C9A45C] flex items-center justify-center rounded-sm transition-colors text-[#C9A45C]"
                aria-label="Yamama Shawaya Google Profile"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.contact.telHref}
                className="w-9 h-9 border border-[#E8D7B5]/20 hover:border-[#C9A45C] flex items-center justify-center rounded-sm transition-colors text-[#C9A45C]"
                aria-label="Call Yamama Shawaya"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs tracking-wider font-sans">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Full Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Where Fire Meets Flavour
                </a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-white transition-colors">
                  Signatures & Platters
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Guest Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Timings */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold mb-4">
              Visit Us
            </h4>
            <div className="space-y-3 text-xs font-sans text-[#E8D7B5]/80">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <span>
                  Oradampalam–Valiyavitilpadi, Tirurkad,<br />
                  Perinthalmanna, Kerala 679321, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C9A45C] shrink-0" />
                <a href={restaurantInfo.contact.telHref} className="hover:text-white tabular-nums">
                  {restaurantInfo.contact.phoneDisplay}
                </a>
              </div>
              <p className="pt-2 text-[11px] text-[#C9A45C] tracking-wider uppercase">
                Service: 12:00 PM – 11:30 PM Daily (IST)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#E8D7B5]/50 font-sans gap-4">
          <div className="flex items-center space-x-3">
            {/* Small Arabic Star Motif */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#C9A45C]">
              <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                fill="currentColor"
              />
            </svg>
            <span>&copy; 2026 Yamama Shawaya. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <span>Perinthalmanna, Malappuram, Kerala</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#E8D7B5] hover:text-[#C9A45C] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
