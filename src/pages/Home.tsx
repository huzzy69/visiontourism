import React from 'react';
import { Hero } from '../sections/Hero';
import { BookingBar } from '../sections/BookingBar';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { PopularRoutes } from '../sections/PopularRoutes';
import { FeaturedDestinations } from '../sections/FeaturedDestinations';
import { JourneySection } from '../sections/JourneySection';
import { StatsSection } from '../sections/StatsSection';
import { VehicleShowcase } from '../sections/VehicleShowcase';
import { AboutSection } from '../sections/AboutSection';
import { Testimonials } from '../sections/Testimonials';
import { CTASection } from '../sections/CTASection';

export const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* 1. Hero / Cinematic Entry */}
      <Hero />

      {/* 2. Booking / Quick Search Panel */}
      <BookingBar />

      {/* 3. Value Proposition */}
      <WhyChooseUs />

      {/* 4. Handpicked Road Trip Routes */}
      <PopularRoutes />

      {/* 5. UK Landmark Sights */}
      <FeaturedDestinations />

      {/* 6. Interactive 3D Journey Canvas Map & Timeline */}
      <JourneySection />

      {/* 7. Statistics and Safety Record */}
      <StatsSection />

      {/* 8. Charter Fleet Specs */}
      <VehicleShowcase />

      {/* 9. About Our Brand */}
      <AboutSection />

      {/* 10. Customer Experiences */}
      <Testimonials />

      {/* 11. Final Conversion call */}
      <CTASection />
    </div>
  );
};
