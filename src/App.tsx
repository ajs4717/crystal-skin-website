import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { FeaturedCategories } from './components/FeaturedCategories';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AppointmentBanner } from './components/AppointmentBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';
import { FadeInSection } from './components/FadeInSection';
import { ServiceCategory, ServiceItem } from './types';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const handleOpenBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setSelectedTreatment(treatmentName);
    } else {
      setSelectedTreatment('');
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleSelectCategoryFromFeatured = (category: 'skin' | 'hair' | 'aesthetic') => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800 selection:bg-teal-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking('Initial Consultation')} />

        {/* Trust Section */}
        <FadeInSection delay={0.1}>
          <TrustSection />
        </FadeInSection>

        {/* Featured Treatment Pillars */}
        <FadeInSection delay={0.1}>
          <FeaturedCategories
            onSelectCategory={handleSelectCategoryFromFeatured}
            onOpenBooking={handleOpenBooking}
          />
        </FadeInSection>

        {/* Complete Services & Treatments Grid */}
        <FadeInSection delay={0.1}>
          <ServicesSection
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            onOpenBooking={handleOpenBooking}
            onSelectServiceDetail={(service: ServiceItem) => {
              // Optional callback
            }}
          />
        </FadeInSection>

        {/* Real Treatment Journeys: Before & After */}
        <FadeInSection delay={0.1}>
          <BeforeAfterSection onOpenBooking={handleOpenBooking} />
        </FadeInSection>

        {/* Patient Testimonials & Google 4.9★ Reviews */}
        <FadeInSection delay={0.1}>
          <ReviewsSection />
        </FadeInSection>

        {/* About Dr. Misha's Crystal Skin */}
        <FadeInSection delay={0.1}>
          <AboutSection onOpenBooking={() => handleOpenBooking('Personalized Assessment')} />
        </FadeInSection>

        {/* Why Choose Us */}
        <FadeInSection delay={0.1}>
          <WhyChooseUs onOpenBooking={() => handleOpenBooking('Consultation')} />
        </FadeInSection>

        {/* High-Converting CTA Banner */}
        <FadeInSection delay={0.1}>
          <AppointmentBanner onOpenBooking={() => handleOpenBooking('General Consultation')} />
        </FadeInSection>

        {/* Contact, Working Hours & Embedded Map */}
        <FadeInSection delay={0.1}>
          <ContactSection preselectedTreatment={selectedTreatment} />
        </FadeInSection>
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp & Sticky Mobile Action Bar */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking('Quick Mobile Booking')} />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialTreatment={selectedTreatment}
      />
    </div>
  );
}

