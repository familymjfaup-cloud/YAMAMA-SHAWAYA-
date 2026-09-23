import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofStrip } from './components/SocialProofStrip';
import { BrandStory } from './components/BrandStory';
import { SignatureDishes } from './components/SignatureDishes';
import { FoodExperience } from './components/FoodExperience';
import { InteractiveMenu } from './components/InteractiveMenu';
import { WhyYamama } from './components/WhyYamama';
import { ReviewsSection } from './components/ReviewsSection';
import { InstagramSection } from './components/InstagramSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactReservation } from './components/ContactReservation';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { DishDetailsModal } from './components/DishDetailsModal';
import { QuickOrderModal } from './components/QuickOrderModal';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderModalDish, setOrderModalDish] = useState<MenuItem | null>(null);

  const handleOpenOrder = (dish?: MenuItem) => {
    if (dish) {
      setOrderModalDish(dish);
    }
    setIsOrderModalOpen(true);
  };

  const handleSelectForOrder = (dish: MenuItem) => {
    setOrderModalDish(dish);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0B] text-[#F5F1E8] flex flex-col font-sans selection:bg-[#C9A45C]/30 selection:text-[#E8D7B5]">
      {/* Navigation Bar */}
      <Navbar onOpenOrder={() => handleOpenOrder()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenOrder={() => handleOpenOrder()} />

        {/* Social Proof Strip */}
        <SocialProofStrip />

        {/* Brand Story */}
        <BrandStory />

        {/* Yamama Signatures */}
        <SignatureDishes
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenOrder={() => handleOpenOrder()}
        />

        {/* Food Experience: Charcoal, Smoke & Fire */}
        <FoodExperience />

        {/* Interactive Menu Collection */}
        <InteractiveMenu
          onSelectDish={(dish) => setSelectedDish(dish)}
          onOpenOrder={() => handleOpenOrder()}
        />

        {/* Why Yamama */}
        <WhyYamama />

        {/* Google Reviews */}
        <ReviewsSection />

        {/* Instagram Visual Showcase */}
        <InstagramSection />

        {/* Full Editorial Photo Gallery & Lightbox */}
        <PhotoGallerySection />

        {/* Location & Opening Hours */}
        <LocationSection />

        {/* Contact & Table Reservations */}
        <ContactReservation onOpenOrder={() => handleOpenOrder()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar onOpenOrder={() => handleOpenOrder()} />

      {/* Dish Details Dialog Modal */}
      <DishDetailsModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onSelectForOrder={handleSelectForOrder}
      />

      {/* Quick Order & Takeaway Drawer Modal */}
      <QuickOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => {
          setIsOrderModalOpen(false);
          setOrderModalDish(null);
        }}
        initialDish={orderModalDish}
      />
    </div>
  );
}
