import React, { useState } from 'react';
import { X, Phone, MessageSquare, Plus, Minus, Trash2, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { restaurantInfo, allMenuItems, MenuItem } from '../data/restaurantData';

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDish?: MenuItem | null;
}

interface CartItem {
  dish: MenuItem;
  quantity: number;
}

export const QuickOrderModal: React.FC<QuickOrderModalProps> = ({
  isOpen,
  onClose,
  initialDish,
}) => {
  const [orderType, setOrderType] = useState<'takeaway' | 'dinein'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('In 30 Minutes');
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (initialDish) {
      return [{ dish: initialDish, quantity: 1 }];
    }
    // Default popular starter items
    return [{ dish: allMenuItems[0], quantity: 1 }];
  });

  if (!isOpen) return null;

  const updateQuantity = (dishId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const addItemToCart = (dish: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });
  };

  const generateOrderText = () => {
    const itemsList = cart.map((i) => `• ${i.quantity}x ${i.dish.name}`).join('\n');
    return (
      `*YAMAMA SHAWAYA ORDER REQUEST*\n` +
      `Order Type: ${orderType === 'takeaway' ? 'Takeaway / Parcel' : 'Dine-in Pre-order'}\n` +
      `Customer: ${customerName || 'Guest'}\n` +
      `Phone: ${customerPhone || 'Provided upon call'}\n` +
      `Time Requested: ${pickupTime}\n\n` +
      `*Items:*\n${itemsList || 'None selected yet'}\n\n` +
      `Pickup Location: Oradampalam–Valiyavitilpadi, Tirurkad, Perinthalmanna`
    );
  };

  const handleWhatsAppSend = () => {
    const encoded = encodeURIComponent(generateOrderText());
    window.open(`https://wa.me/${restaurantInfo.contact.whatsappRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 bg-[#0D0D0B]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#15130F] border border-[#C9A45C]/30 max-w-xl w-full rounded-sm overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#0D0D0B]">
          <div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C9A45C] font-medium block">
              Yamama Direct Service
            </span>
            <h3 id="order-modal-title" className="font-editorial text-2xl text-[#F5F1E8]">
              Takeaway & Dine-in Pre-Order
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Order Dialog"
            className="p-2 text-[#E8D7B5] hover:text-[#C9A45C] border border-white/10 rounded-sm cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Order Type Toggle */}
          <div className="grid grid-cols-2 gap-2 bg-[#0D0D0B] p-1 border border-white/10 rounded-sm">
            <button
              onClick={() => setOrderType('takeaway')}
              className={`py-2 text-xs font-semibold tracking-wider rounded-xs transition-colors cursor-pointer ${
                orderType === 'takeaway'
                  ? 'bg-[#C9A45C] text-[#0D0D0B]'
                  : 'text-[#E8D7B5]/70 hover:text-white'
              }`}
            >
              TAKEAWAY / PARCEL
            </button>
            <button
              onClick={() => setOrderType('dinein')}
              className={`py-2 text-xs font-semibold tracking-wider rounded-xs transition-colors cursor-pointer ${
                orderType === 'dinein'
                  ? 'bg-[#C9A45C] text-[#0D0D0B]'
                  : 'text-[#E8D7B5]/70 hover:text-white'
              }`}
            >
              DINE-IN PRE-ORDER
            </button>
          </div>

          {/* Selected Items List */}
          <div>
            <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider text-[#C9A45C] font-medium">
              <span>Your Selected Items ({cart.length})</span>
              <span className="text-[10px] text-[#E8D7B5]/60 lowercase tracking-normal">
                Slow-fired to order
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="p-6 border border-dashed border-white/15 text-center rounded-sm text-xs text-[#E8D7B5]/60">
                Your order is currently empty. Select items below.
              </div>
            ) : (
              <div className="space-y-2.5">
                {cart.map((item) => (
                  <div
                    key={item.dish.id}
                    className="p-3 bg-[#0D0D0B] border border-white/10 rounded-sm flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-editorial text-lg text-[#F5F1E8] truncate">
                        {item.dish.name}
                      </h4>
                      <span className="text-xs text-[#C9A45C] tabular-nums">
                        {item.dish.priceFormatted}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.dish.id, -1)}
                        className="w-7 h-7 flex items-center justify-center bg-[#15130F] border border-white/10 hover:border-[#C9A45C] text-white rounded-xs cursor-pointer"
                        aria-label={`Decrease ${item.dish.name} quantity`}
                      >
                        {item.quantity === 1 ? <Trash2 className="w-3 h-3 text-red-400" /> : <Minus className="w-3 h-3" />}
                      </button>
                      <span className="w-6 text-center text-xs font-semibold tabular-nums text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.dish.id, 1)}
                        className="w-7 h-7 flex items-center justify-center bg-[#15130F] border border-white/10 hover:border-[#C9A45C] text-white rounded-xs cursor-pointer"
                        aria-label={`Increase ${item.dish.name} quantity`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Add Favorites */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#E8D7B5]/70 block mb-2 font-medium">
              Add More Popular Items
            </span>
            <div className="flex flex-wrap gap-1.5">
              {allMenuItems.slice(0, 6).map((dish) => (
                <button
                  key={dish.id}
                  onClick={() => addItemToCart(dish)}
                  className="px-2.5 py-1 bg-[#0D0D0B] hover:bg-[#C9A45C]/15 border border-white/10 hover:border-[#C9A45C]/50 text-[11px] text-[#E8D7B5] rounded-xs transition-colors cursor-pointer flex items-center space-x-1"
                >
                  <Plus className="w-3 h-3 text-[#C9A45C]" />
                  <span>{dish.name.replace('Classic Slow-Fired ', '').replace('Arabian ', '')}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#E8D7B5]/80 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-[#0D0D0B] border border-white/15 text-xs text-white p-2.5 rounded-sm focus:outline-none focus:border-[#C9A45C]"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#E8D7B5]/80 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 97473 62102"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-[#0D0D0B] border border-white/15 text-xs text-white p-2.5 rounded-sm focus:outline-none focus:border-[#C9A45C]"
              />
            </div>
          </div>

          {/* Time Preference */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-[#E8D7B5]/80 mb-1 flex items-center space-x-1">
              <Clock className="w-3 h-3 text-[#C9A45C]" />
              <span>Target Pickup / Serving Time</span>
            </label>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="w-full bg-[#0D0D0B] border border-white/15 text-xs text-white p-2.5 rounded-sm focus:outline-none focus:border-[#C9A45C]"
            >
              <option value="In 20-30 Minutes">In 20–30 Minutes</option>
              <option value="In 45 Minutes">In 45 Minutes</option>
              <option value="In 1 Hour">In 1 Hour</option>
              <option value="Tonight 8:00 PM">Tonight at 08:00 PM</option>
              <option value="Tonight 9:00 PM">Tonight at 09:00 PM</option>
            </select>
          </div>

          {/* Location Reminder */}
          <div className="p-3 bg-[#0D0D0B] border border-[#E8D7B5]/10 rounded-sm text-[11px] text-[#E8D7B5]/70 flex items-start space-x-2">
            <MapPin className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 mt-0.5" />
            <span>
              Pickup counter: Yamama Shawaya, Oradampalam–Valiyavitilpadi, Tirurkad, Perinthalmanna.
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-white/10 bg-[#0D0D0B] flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleWhatsAppSend}
            className="w-full sm:flex-1 py-3 bg-[#C9A45C] hover:bg-[#D8B56F] text-[#0D0D0B] font-semibold text-xs tracking-[0.18em] rounded-sm transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>SEND VIA WHATSAPP</span>
          </button>

          <a
            href={restaurantInfo.contact.telHref}
            className="w-full sm:w-auto px-5 py-3 border border-[#C9A45C]/40 hover:border-[#C9A45C] text-[#E8D7B5] hover:text-white font-medium text-xs tracking-wider rounded-sm transition-colors flex items-center justify-center space-x-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>CALL KITCHEN</span>
          </a>
        </div>
      </div>
    </div>
  );
};
