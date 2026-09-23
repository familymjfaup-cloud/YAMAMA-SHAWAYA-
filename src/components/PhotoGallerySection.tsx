import React, { useState, useEffect, useCallback } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { photoGallery, GalleryItem } from '../data/restaurantData';

export const PhotoGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Food', 'Grill & Flame', 'Ambiance', 'Plating'];

  const filteredPhotos = selectedCategory === 'All'
    ? photoGallery
    : photoGallery.filter((p) => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! + 1) % filteredPhotos.length));
  }, [activeLightboxIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! - 1 + filteredPhotos.length) % filteredPhotos.length));
  }, [activeLightboxIndex, filteredPhotos.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 bg-[#0D0D0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E8D7B5]/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Editorial Archive</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight leading-tight">
              THE VISUAL GALLERY
            </h2>
          </div>

          {/* Filter Pills / Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors rounded-xs border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C9A45C] text-[#0D0D0B] border-[#C9A45C] font-medium'
                    : 'bg-[#15130F] text-[#E8D7B5]/70 border-[#E8D7B5]/15 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-sm border border-[#E8D7B5]/10 hover:border-[#C9A45C]/50 transition-all duration-300 bg-[#15130F]"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Editorial Frame Overlay */}
              <div className="p-4 bg-[#15130F] border-t border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="font-editorial text-lg text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors">
                    {photo.title}
                  </h3>
                  <span className="text-[10px] tracking-widest uppercase text-[#E8D7B5]/60 font-sans">
                    {photo.category}
                  </span>
                </div>
                <Maximize2 className="w-4 h-4 text-[#C9A45C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Keyboard Navigation */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-50 bg-[#0D0D0B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-3 text-[#E8D7B5] hover:text-[#C9A45C] border border-white/10 hover:border-[#C9A45C] rounded-sm transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#E8D7B5] hover:text-[#C9A45C] border border-white/10 hover:border-[#C9A45C] rounded-sm transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#E8D7B5] hover:text-[#C9A45C] border border-white/10 hover:border-[#C9A45C] rounded-sm transition-colors z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-sm border border-[#E8D7B5]/20 shadow-2xl bg-black">
              <img
                src={filteredPhotos[activeLightboxIndex].image}
                alt={filteredPhotos[activeLightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="font-editorial text-2xl text-[#F5F1E8]">
                {filteredPhotos[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-[#E8D7B5]/75 font-sans mt-1 max-w-md mx-auto">
                {filteredPhotos[activeLightboxIndex].description}
              </p>
              <span className="text-[10px] tracking-widest uppercase text-[#C9A45C] block mt-2">
                Use ESC or Arrow Keys to navigate · {activeLightboxIndex + 1} of {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
