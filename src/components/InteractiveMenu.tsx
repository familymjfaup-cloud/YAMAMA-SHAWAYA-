import React, { useState, useMemo } from 'react';
import { Search, Eye, Plus, Check } from 'lucide-react';
import { allMenuItems, MenuItem } from '../data/restaurantData';

interface InteractiveMenuProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenOrder: () => void;
}

type CategoryType = 'ALL' | MenuItem['category'];

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ onSelectDish, onOpenOrder }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'ALL' | 'NON_VEG' | 'VEG'>('ALL');
  const [showAllItems, setShowAllItems] = useState(false);

  const categories: CategoryType[] = [
    'ALL',
    'SHAWAYA',
    'MANDI',
    'AL FAHAM',
    'GRILLS',
    'RICE',
    'COMBOS',
    'SIDES',
    'DRINKS',
    'DESSERTS',
  ];

  const filteredItems = useMemo(() => {
    return allMenuItems.filter((item) => {
      // Category match
      const categoryMatch = activeCategory === 'ALL' || item.category === activeCategory;

      // Dietary match
      let dietaryMatch = true;
      if (dietaryFilter === 'VEG') dietaryMatch = item.isVegetarian;
      if (dietaryFilter === 'NON_VEG') dietaryMatch = !item.isVegetarian;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const searchMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.arabicName && item.arabicName.toLowerCase().includes(query)) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return categoryMatch && dietaryMatch && searchMatch;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section id="menu" className="py-24 bg-[#0D0D0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium mb-3">
            <span>The Kitchen Collection</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight mb-4">
            OUR COMPLETE MENU
          </h2>
          <p className="text-sm text-[#E8D7B5]/80 font-sans max-w-xl mx-auto">
            From slow-fired chicken to aromatic mandi platters and house-whipped toum. All poultry prepared fresh daily.
          </p>
        </div>

        {/* Filter Bar: Category Tabs & Search & Veg Toggle */}
        <div className="space-y-6 mb-12">
          {/* Category Tabs (Scrollable on Mobile) */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAllItems(false);
                }}
                className={`px-4 py-2 text-xs tracking-[0.16em] uppercase whitespace-nowrap transition-all rounded-sm cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-[#C9A45C] text-[#0D0D0B] border-[#C9A45C] font-semibold shadow-md'
                    : 'bg-[#15130F] text-[#E8D7B5]/80 hover:text-white border-[#E8D7B5]/15 hover:border-[#C9A45C]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input & Veg/Non-Veg Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            {/* Search Field */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#C9A45C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search dishes (e.g. Shawaya, Mandi, Toum)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#15130F] text-xs text-[#F5F1E8] placeholder-[#E8D7B5]/40 pl-10 pr-4 py-2.5 rounded-sm border border-[#E8D7B5]/15 focus:outline-none focus:border-[#C9A45C] transition-colors"
              />
            </div>

            {/* Dietary Preference Segmented Control */}
            <div className="flex items-center space-x-1 bg-[#15130F] p-1 border border-[#E8D7B5]/15 rounded-sm w-full sm:w-auto justify-center">
              <button
                onClick={() => setDietaryFilter('ALL')}
                className={`px-3 py-1.5 text-xs tracking-wider transition-colors rounded-xs cursor-pointer ${
                  dietaryFilter === 'ALL'
                    ? 'bg-[#C9A45C] text-[#0D0D0B] font-medium'
                    : 'text-[#E8D7B5]/70 hover:text-white'
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setDietaryFilter('NON_VEG')}
                className={`px-3 py-1.5 text-xs tracking-wider transition-colors rounded-xs cursor-pointer ${
                  dietaryFilter === 'NON_VEG'
                    ? 'bg-[#C9A45C] text-[#0D0D0B] font-medium'
                    : 'text-[#E8D7B5]/70 hover:text-white'
                }`}
              >
                NON-VEG
              </button>
              <button
                onClick={() => setDietaryFilter('VEG')}
                className={`px-3 py-1.5 text-xs tracking-wider transition-colors rounded-xs cursor-pointer ${
                  dietaryFilter === 'VEG'
                    ? 'bg-[#C9A45C] text-[#0D0D0B] font-medium'
                    : 'text-[#E8D7B5]/70 hover:text-white'
                }`}
              >
                VEGETARIAN
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-[#E8D7B5]/20 rounded-sm">
            <p className="text-base text-[#E8D7B5] font-editorial mb-2">No matching dishes found</p>
            <p className="text-xs text-[#E8D7B5]/60 mb-4">Try clearing your search query or adjusting filters.</p>
            <button
              onClick={() => {
                setActiveCategory('ALL');
                setSearchQuery('');
                setDietaryFilter('ALL');
              }}
              className="text-xs text-[#C9A45C] underline underline-offset-4"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#15130F] border border-[#E8D7B5]/10 hover:border-[#C9A45C]/40 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0D0D0B]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Veg / Non-Veg Indicator Icon */}
                    <div className="absolute top-3 left-3 bg-[#0D0D0B]/85 backdrop-blur-xs p-1 border border-white/10 rounded-xs flex items-center justify-center">
                      <div
                        className={`w-3 h-3 border flex items-center justify-center ${
                          item.isVegetarian
                            ? 'border-emerald-500'
                            : 'border-red-600'
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVegetarian ? 'bg-emerald-500' : 'bg-red-600'
                          }`}
                        />
                      </div>
                    </div>

                    {item.arabicName && (
                      <span className="absolute bottom-2 right-2 text-[10px] text-[#C9A45C] bg-[#0D0D0B]/85 px-1.5 py-0.5 rounded-xs font-serif">
                        {item.arabicName}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-editorial text-xl font-normal text-[#F5F1E8] group-hover:text-[#E8D7B5] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-sans text-xs font-semibold text-[#C9A45C] shrink-0 tabular-nums pt-1">
                        {item.priceFormatted}
                      </span>
                    </div>

                    <p className="text-xs text-[#E8D7B5]/75 font-sans leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Controls */}
                <div className="p-4 pt-0 border-t border-white/5 flex items-center justify-between text-xs mt-auto">
                  <button
                    onClick={() => onSelectDish(item)}
                    className="inline-flex items-center space-x-1 text-[#E8D7B5] hover:text-[#C9A45C] transition-colors font-medium tracking-wider focus:outline-none cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>DETAILS</span>
                  </button>

                  <button
                    onClick={onOpenOrder}
                    className="inline-flex items-center space-x-1 text-[#C9A45C] hover:text-white hover:bg-[#C9A45C] hover:text-[#0D0D0B] px-2.5 py-1 rounded-xs transition-colors cursor-pointer border border-[#C9A45C]/30"
                  >
                    <Plus className="w-3 h-3" />
                    <span>ADD</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Menu Expansion Button */}
        {filteredItems.length > 8 && !showAllItems && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAllItems(true)}
              className="inline-flex items-center space-x-2 bg-transparent hover:bg-[#C9A45C]/10 text-[#E8D7B5] hover:text-white border border-[#C9A45C]/40 px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all cursor-pointer"
            >
              <span>VIEW FULL MENU ({filteredItems.length} ITEMS)</span>
            </button>
          </div>
        )}

        {/* Menu Transparency Note */}
        <div className="mt-12 text-center text-xs text-[#E8D7B5]/60 font-sans flex items-center justify-center space-x-2">
          <Check className="w-3.5 h-3.5 text-[#C9A45C]" />
          <span>
            Portions and prices correspond to in-house kitchen preparations. Takeaway & parcel service available.
          </span>
        </div>
      </div>
    </section>
  );
};
