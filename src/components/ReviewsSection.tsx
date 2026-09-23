import React, { useState } from 'react';
import { Star, ExternalLink, PlusCircle, CheckCircle } from 'lucide-react';
import { restaurantInfo, guestReviews, ReviewItem } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(guestReviews);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor.trim(),
      rating: newRating,
      date: 'Recent Google Review',
      text: newText.trim(),
      verifiedVisit: true,
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewAuthor('');
    setNewText('');
    setShowAddModal(false);
  };

  return (
    <section id="reviews" className="py-24 bg-[#0D0D0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-[#E8D7B5]/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium mb-3">
              <Star className="w-3.5 h-3.5 fill-[#C9A45C]" />
              <span>Verified Feedback</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight leading-tight">
              WHAT OUR GUESTS SAY
            </h2>
          </div>

          {/* Google Business Summary Scorecard */}
          <div className="mt-6 lg:mt-0 flex items-center space-x-4 bg-[#15130F] p-4 border border-[#E8D7B5]/15 rounded-sm">
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5 text-[#C9A45C]">
                <span className="font-editorial text-3xl font-semibold tabular-nums">
                  {restaurantInfo.socialProof.googleRating}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < 4
                          ? 'fill-[#C9A45C] text-[#C9A45C]'
                          : 'fill-[#C9A45C]/30 text-[#C9A45C]'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-[11px] text-[#E8D7B5]/70 tracking-wider">
                Google Rating ({restaurantInfo.socialProof.reviewCount} Reviews)
              </span>
            </div>

            <div className="h-10 w-[1px] bg-white/10" />

            <a
              href={restaurantInfo.socialProof.allReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C9A45C] hover:text-[#D8B56F] flex items-center space-x-1 tracking-wider"
            >
              <span>Verify on Google</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((review) => (
            <article
              key={review.id}
              className="p-8 bg-[#15130F] border border-[#E8D7B5]/10 hover:border-[#C9A45C]/30 rounded-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Author & Verification Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-editorial text-xl font-normal text-[#F5F1E8]">
                      {review.author}
                    </h3>
                    <div className="flex items-center space-x-1 text-[11px] text-[#C9A45C] mt-0.5">
                      <CheckCircle className="w-3 h-3" />
                      <span>{review.date}</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-3.5 h-3.5 ${
                          idx < review.rating
                            ? 'fill-[#C9A45C] text-[#C9A45C]'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#E8D7B5]/80 font-sans leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-wider text-[#E8D7B5]/50">
                <span>Dine-in / Parcel Guest</span>
                <span>Tirurkad, Perinthalmanna</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={restaurantInfo.socialProof.allReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-transparent hover:bg-white/[0.04] text-[#E8D7B5] hover:text-white border border-[#E8D7B5]/30 hover:border-[#C9A45C] px-6 py-3 rounded-sm text-xs uppercase tracking-[0.2em] font-medium transition-all"
          >
            <span>READ ALL GOOGLE REVIEWS</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C]" />
          </a>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center space-x-1.5 text-xs text-[#E8D7B5]/70 hover:text-[#C9A45C] px-4 py-3 tracking-wider transition-colors cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Add Verified Guest Entry</span>
          </button>
        </div>
      </div>

      {/* Add Review Dialog for Owner / Guest */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#15130F] border border-[#C9A45C]/30 max-w-lg w-full p-6 sm:p-8 rounded-sm shadow-2xl relative">
            <h3 className="font-editorial text-2xl text-[#F5F1E8] mb-2">
              Add Verified Guest Review
            </h3>
            <p className="text-xs text-[#E8D7B5]/70 mb-6">
              Enter customer feedback from Google Business or verified dining receipt.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E8D7B5] mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rashid K."
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full bg-[#0D0D0B] border border-[#E8D7B5]/20 text-xs text-white p-3 rounded-sm focus:outline-none focus:border-[#C9A45C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E8D7B5] mb-1">
                  Star Rating (1–5)
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setNewRating(num)}
                      className={`p-2 border rounded-sm cursor-pointer ${
                        newRating >= num
                          ? 'border-[#C9A45C] bg-[#C9A45C]/10 text-[#C9A45C]'
                          : 'border-white/10 text-white/40'
                      }`}
                    >
                      <Star className={`w-4 h-4 ${newRating >= num ? 'fill-[#C9A45C]' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E8D7B5] mb-1">
                  Review Text
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write customer comment on food taste, tenderness, service..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full bg-[#0D0D0B] border border-[#E8D7B5]/20 text-xs text-white p-3 rounded-sm focus:outline-none focus:border-[#C9A45C]"
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs text-[#E8D7B5] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#C9A45C] text-[#0D0D0B] text-xs font-semibold tracking-wider rounded-sm hover:bg-[#D8B56F]"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
