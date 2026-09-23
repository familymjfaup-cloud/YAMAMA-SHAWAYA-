import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'MENU', href: '#menu' },
    { label: 'OUR STORY', href: '#story' },
    { label: 'SIGNATURES', href: '#signatures' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'LOCATION', href: '#location' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0B]/95 backdrop-blur-md border-b border-[#E8D7B5]/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0D0D0B]/80 via-[#0D0D0B]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark in display serif */}
          <a
            href="#hero"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A45C]"
            aria-label="Yamama Shawaya Home"
          >
            <span className="font-editorial text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F5F1E8] group-hover:text-[#E8D7B5] transition-colors whitespace-nowrap">
              YAMAMA SHAWAYA
            </span>
            <span className="text-[9px] tracking-[0.3em] text-[#C9A45C] uppercase font-sans -mt-0.5">
              Arabian Kitchen & Grills
            </span>
          </a>

          {/* Zone 2: Clean nav links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-7 text-xs font-medium tracking-[0.15em] text-[#E8D7B5]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C9A45C] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A45C] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button & Call shortcut */}
          <div className="flex items-center space-x-3">
            <a
              href={restaurantInfo.contact.telHref}
              className="hidden sm:inline-flex items-center space-x-2 text-xs text-[#E8D7B5] hover:text-[#C9A45C] px-3 py-2 border border-[#E8D7B5]/20 hover:border-[#C9A45C]/50 transition-all rounded-sm tracking-wider"
              title="Call restaurant"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="tabular-nums font-sans text-xs">97473 62102</span>
            </a>

            <button
              onClick={onOpenOrder}
              className="inline-flex items-center space-x-2 bg-[#C9A45C] hover:bg-[#D8B56F] text-[#0D0D0B] font-medium text-xs tracking-[0.18em] px-4 sm:px-5 py-2.5 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#C9A45C]/20 active:translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>ORDER NOW</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#E8D7B5] hover:text-white border border-[#E8D7B5]/20 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A45C]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-[#0D0D0B]/98 backdrop-blur-xl border-b border-[#C9A45C]/20 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-[0.15em] text-[#E8D7B5] hover:text-[#C9A45C] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col space-y-3">
              <a
                href={restaurantInfo.contact.telHref}
                className="flex items-center justify-center space-x-2 w-full py-2.5 border border-[#C9A45C]/40 text-[#E8D7B5] text-xs tracking-wider rounded-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>CALL: {restaurantInfo.contact.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-3 bg-[#C9A45C] text-[#0D0D0B] font-semibold text-xs tracking-[0.2em] rounded-sm text-center"
              >
                START ORDER / TAKEAWAY
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
