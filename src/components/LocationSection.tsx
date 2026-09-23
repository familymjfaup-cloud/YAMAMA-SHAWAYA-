import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Phone, Clock, Calendar } from 'lucide-react';
import { restaurantInfo, openingHours, getRestaurantOpenStatus } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [openStatus, setOpenStatus] = useState(getRestaurantOpenStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setOpenStatus(getRestaurantOpenStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="location" className="py-24 bg-[#15130F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Destination</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight leading-tight">
            FIND THE FLAME
          </h2>
          <p className="text-sm text-[#E8D7B5]/80 font-sans mt-3 max-w-lg mx-auto">
            Conveniently situated along the Tirurkad–Perinthalmanna road with dedicated guest parking and family dining.
          </p>
        </div>

        {/* Content Layout: Details & Opening Hours + Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location & Schedule Card */}
          <div className="lg:col-span-5 bg-[#0D0D0B] p-8 border border-[#E8D7B5]/15 rounded-sm flex flex-col justify-between">
            <div>
              {/* Live Status Badge */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                <div className="flex items-center space-x-2.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'
                    }`}
                  />
                  <span className="font-editorial text-xl font-medium text-[#F5F1E8]">
                    {openStatus.statusText}
                  </span>
                </div>
                <span className="text-xs text-[#E8D7B5]/60 font-sans">
                  {openStatus.subText}
                </span>
              </div>

              {/* Exact Address */}
              <div className="mb-8">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A45C] font-semibold block mb-2">
                  RESTAURANT ADDRESS
                </span>
                <p className="font-editorial text-2xl text-[#F5F1E8] leading-snug mb-2">
                  Yamama Shawaya
                </p>
                <p className="text-xs sm:text-sm text-[#E8D7B5]/80 font-sans leading-relaxed">
                  Oradampalam–Valiyavitilpadi, Tirurkad,<br />
                  Perinthalmanna, Kerala 679321, India
                </p>
              </div>

              {/* Phone Line */}
              <div className="mb-8 pb-6 border-b border-white/5">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A45C] font-semibold block mb-2">
                  DIRECT TABLE & TAKEAWAY
                </span>
                <a
                  href={restaurantInfo.contact.telHref}
                  className="font-editorial text-2xl text-[#E8D7B5] hover:text-[#C9A45C] transition-colors tabular-nums flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-[#C9A45C]" />
                  <span>{restaurantInfo.contact.phoneDisplay}</span>
                </a>
              </div>

              {/* Weekly Opening Hours Table */}
              <div>
                <div className="flex items-center space-x-2 mb-3 text-xs uppercase tracking-wider text-[#C9A45C]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Kitchen Timings (IST)</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#E8D7B5]/80 font-sans">
                  {openingHours.days.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between py-1 border-b border-white/5"
                    >
                      <span className="text-[#F5F1E8]">{item.day}</span>
                      <span className="tabular-nums font-mono text-[#E8D7B5]/70">
                        {item.formatted}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direction CTA */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href={restaurantInfo.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#C9A45C] hover:bg-[#D8B56F] text-[#0D0D0B] font-semibold text-xs tracking-[0.2em] py-3.5 rounded-sm transition-all shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Box */}
          <div className="lg:col-span-7 bg-[#0D0D0B] border border-[#E8D7B5]/15 rounded-sm overflow-hidden relative min-h-[420px] flex flex-col">
            {/* Embedded Google Map */}
            <div className="w-full h-full min-h-[380px] flex-1 relative">
              <iframe
                title="Yamama Shawaya Google Map Location"
                src="https://maps.google.com/maps?q=Yamama%20Shawaya,%20Tirurkad,%20Perinthalmanna,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              />

              {/* Floating Custom Map Pin Overlay Card */}
              <div className="absolute top-4 left-4 bg-[#0D0D0B]/90 backdrop-blur-md p-3.5 border border-[#C9A45C]/30 rounded-sm shadow-xl max-w-xs">
                <div className="flex items-center space-x-2 text-[#C9A45C] text-xs font-semibold tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>YAMAMA SHAWAYA</span>
                </div>
                <p className="text-[11px] text-[#E8D7B5]/80 mt-1 font-sans">
                  Oradampalam–Valiyavitilpadi, Tirurkad
                </p>
              </div>
            </div>

            {/* Map Action Banner */}
            <div className="p-4 bg-[#0D0D0B] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#E8D7B5]/70 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Walk-ins welcome & family dining rooms available</span>
              </span>
              <a
                href={restaurantInfo.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A45C] hover:text-[#D8B56F] font-medium tracking-wider flex items-center space-x-1"
              >
                <span>Open in Map App</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
