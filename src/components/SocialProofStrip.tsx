import React, { useState, useEffect } from 'react';
import { Star, Clock } from 'lucide-react';
import { restaurantInfo, getRestaurantOpenStatus } from '../data/restaurantData';

export const SocialProofStrip: React.FC = () => {
  const [status, setStatus] = useState(getRestaurantOpenStatus());

  useEffect(() => {
    // Update live open status every 60 seconds
    const interval = setInterval(() => {
      setStatus(getRestaurantOpenStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#15130F] border-y border-[#E8D7B5]/10 py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-between text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
          {/* Stat 1: Google Rating */}
          <div className="pt-2 md:pt-0 flex flex-col items-center">
            <div className="flex items-center space-x-1.5 text-[#C9A45C] mb-1">
              <span className="font-editorial text-3xl sm:text-4xl font-semibold tabular-nums">
                {restaurantInfo.socialProof.googleRating}
              </span>
              <Star className="w-4 h-4 fill-[#C9A45C] text-[#C9A45C]" />
            </div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#E8D7B5]/70 font-sans">
              Google Verified Rating
            </span>
          </div>

          {/* Stat 2: Review Count */}
          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <span className="font-editorial text-3xl sm:text-4xl font-semibold text-[#F5F1E8] mb-1 tabular-nums">
              {restaurantInfo.socialProof.reviewCount}
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#E8D7B5]/70 font-sans">
              Guest Reviews
            </span>
          </div>

          {/* Stat 3: Fresh Preparation Standard */}
          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <span className="font-editorial text-2xl sm:text-3xl font-normal text-[#E8D7B5] mb-1.5 uppercase tracking-wide">
              Slow-Fired
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#E8D7B5]/70 font-sans">
              Fresh Hardwood Charcoal
            </span>
          </div>

          {/* Stat 4: Live Kitchen Status */}
          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-1">
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'
                }`}
              />
              <span className="font-editorial text-xl sm:text-2xl font-semibold text-[#F5F1E8] tracking-wide">
                {status.statusText}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-[11px] tracking-wider text-[#E8D7B5]/70 font-sans">
              <Clock className="w-3 h-3 text-[#C9A45C]" />
              <span>{status.subText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
