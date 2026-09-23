import React, { useState } from 'react';
import { Phone, Navigation, UtensilsCrossed, MessageSquare, Check, Calendar, Users, Clock } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface ContactReservationProps {
  onOpenOrder: () => void;
}

export const ContactReservation: React.FC<ContactReservationProps> = ({ onOpenOrder }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '4 Guests',
    date: '',
    time: '19:30',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setFormSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Yamama Shawaya, I would like to inquire about reserving a table:\nName: ${formData.name || 'Guest'}\nPhone: ${formData.phone || 'Provided upon call'}\nGuests: ${formData.guests}\nDate: ${formData.date || 'Today'}\nTime: ${formData.time}\nNotes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/${restaurantInfo.contact.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium mb-3">
            <span>Hospitality & Reservations</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F1E8] tracking-tight leading-tight">
            YOUR TABLE IS WAITING
          </h2>
          <p className="text-sm text-[#E8D7B5]/80 font-sans mt-3 max-w-lg mx-auto">
            Whether dining with family or preparing an evening takeaway feast, our team is ready to welcome you.
          </p>
        </div>

        {/* Quick Action Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {/* Action 1: Call Now */}
          <a
            href={restaurantInfo.contact.telHref}
            className="p-6 bg-[#15130F] border border-[#E8D7B5]/15 hover:border-[#C9A45C] rounded-sm flex flex-col items-center justify-center text-center transition-all group"
          >
            <div className="w-12 h-12 rounded-sm bg-[#0D0D0B] border border-[#C9A45C]/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 text-[#C9A45C]" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-1">
              CALL NOW
            </span>
            <span className="text-[11px] text-[#E8D7B5]/70 tabular-nums">
              {restaurantInfo.contact.phoneDisplay}
            </span>
          </a>

          {/* Action 2: Get Directions */}
          <a
            href={restaurantInfo.address.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#15130F] border border-[#E8D7B5]/15 hover:border-[#C9A45C] rounded-sm flex flex-col items-center justify-center text-center transition-all group"
          >
            <div className="w-12 h-12 rounded-sm bg-[#0D0D0B] border border-[#C9A45C]/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Navigation className="w-5 h-5 text-[#C9A45C]" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-1">
              GET DIRECTIONS
            </span>
            <span className="text-[11px] text-[#E8D7B5]/70">
              Tirurkad, Perinthalmanna
            </span>
          </a>

          {/* Action 3: Order Now */}
          <button
            onClick={onOpenOrder}
            className="p-6 bg-[#15130F] border border-[#E8D7B5]/15 hover:border-[#C9A45C] rounded-sm flex flex-col items-center justify-center text-center transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-sm bg-[#0D0D0B] border border-[#C9A45C]/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5 text-[#C9A45C]" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-1">
              ORDER NOW
            </span>
            <span className="text-[11px] text-[#E8D7B5]/70">
              Takeaway & Pre-orders
            </span>
          </button>

          {/* Action 4: WhatsApp Message */}
          <a
            href={restaurantInfo.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-[#15130F] border border-[#E8D7B5]/15 hover:border-[#C9A45C] rounded-sm flex flex-col items-center justify-center text-center transition-all group"
          >
            <div className="w-12 h-12 rounded-sm bg-[#0D0D0B] border border-[#C9A45C]/30 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 text-[#C9A45C]" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-1">
              WHATSAPP US
            </span>
            <span className="text-[11px] text-[#E8D7B5]/70">
              Instant Kitchen Chat
            </span>
          </a>
        </div>

        {/* Reservation / Table Inquiry Form Container */}
        <div className="max-w-2xl mx-auto bg-[#15130F] border border-[#E8D7B5]/15 p-8 sm:p-10 rounded-sm">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#C9A45C] mb-2 font-medium">
            <Calendar className="w-4 h-4" />
            <span>Table Booking / Catering Inquiry</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#F5F1E8] mb-6">
            Reserve Your Experience
          </h3>

          {formSubmitted ? (
            <div className="p-8 bg-[#0D0D0B] border border-[#C9A45C]/40 rounded-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A45C]/20 border border-[#C9A45C] flex items-center justify-center mx-auto mb-4 text-[#C9A45C]">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-editorial text-2xl text-[#F5F1E8] mb-2">
                Inquiry Received
              </h4>
              <p className="text-xs sm:text-sm text-[#E8D7B5]/80 max-w-md mx-auto mb-6">
                Thank you, {formData.name}. Our restaurant host will confirm your seating for {formData.guests} on{' '}
                {formData.date || 'today'} at {formData.time}.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#C9A45C] text-[#0D0D0B] text-xs font-semibold tracking-wider rounded-sm hover:bg-[#D8B56F]"
                >
                  Send via WhatsApp Now
                </button>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-2.5 border border-white/20 text-[#E8D7B5] text-xs tracking-wider rounded-sm hover:text-white"
                >
                  Make Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8D7B5]/80 mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0D0D0B] border border-[#E8D7B5]/20 text-xs text-white p-3 rounded-sm focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8D7B5]/80 mb-1.5 font-medium">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 97473 62102"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0D0D0B] border border-[#E8D7B5]/20 text-xs text-white p-3 rounded-sm focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8D7B5]/80 mb-1.5 font-medium flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Party Size</span>
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#0D0D0B] border border-[#E8D7B5]/20 text-xs text-white p-3 rounded-sm focus:outline-none focus:border-[#C9A45C]"
                  >
                    <option value="1-2 Guests">1–2 Guests</option>
                    <option value="4 Guests">3–4 Guests</option>
                    <option value="5-8 Guests">5–8 Guests (Family)</option>
                    <option value="Large Group 10+">10+ Group / Celebration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8D7B5]/80 mb-1.5 font-medium flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Date</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#0D0D0B] border border-[#E8D7B5]/20 text-xs text-white p-3 rounded-sm focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#E8D7B5]/80 mb-1.5 font-medium flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#0D0D0B] border border-[#E8D7B5]/20 text-xs text-white p-3 rounded-sm focus:outline-none focus:border-[#C9A45C]"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="19:00">07:00 PM (Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Late Dinner)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#E8D7B5]/80 mb-1.5 font-medium">
                  Special Notes / Dishes Requested
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Masala Shawaya, extra garlic toum, family partition seating..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#0D0D0B] border border-[#E8D7B5]/20 text-xs text-white p-3 rounded-sm focus:outline-none focus:border-[#C9A45C]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-[#E8D7B5]/60 font-sans">
                  Direct inquiry to Yamama Shawaya reception.
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#C9A45C] hover:bg-[#D8B56F] text-[#0D0D0B] text-xs font-semibold tracking-[0.2em] rounded-sm transition-all shadow-md cursor-pointer"
                >
                  REQUEST RESERVATION
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
