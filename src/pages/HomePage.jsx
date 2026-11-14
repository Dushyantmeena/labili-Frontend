import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategoryGrid from '../components/home/CategoryGrid';
import SpiritOfRajasthan from '../components/home/SpiritOfRajasthan';
import ReelShowcase from '../components/home/ReelShowcase';
import AangiDetailDeepDive from '../components/home/AangiDetailDeepDive';
import FeaturedCollection from '../components/home/FeaturedCollection';
import EverydayCottonEdit from '../components/home/EverydayCottonEdit';
import CraftStory from '../components/home/CraftStory';
import CustomRentalBanner from '../components/home/CustomRentalBanner';
import ShoppingSupportStrip from '../components/home/ShoppingSupportStrip';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import StudioVisit from '../components/home/StudioVisit';

const HomePage = ({ onQuickView }) => {
  return (
    <main className="home-page-main">
      {/* 01. Royal Festive Edit Hero Banner */}
      <HeroBanner />

      {/* 02. The Royal Wardrobe — Five Signatures of Labiii */}
      <CategoryGrid />

      {/* 03. The Spirit of Rajasthan — Atelier Stills & Heritage Archive */}
      <SpiritOfRajasthan />

      {/* 04. Seen on Labiii — Runway & Shoppable Video Reels */}
      <ReelShowcase />

      {/* 05. The Gota Patti Aangi — Interactive Craft Deep Dive */}
      <AangiDetailDeepDive />

      {/* 06. Fresh From The Atelier & Royal Bestsellers */}
      <FeaturedCollection onQuickView={onQuickView} />

      {/* 07. Cotton for Every Day — Handblock Prints & Daily Luxe */}
      <EverydayCottonEdit onQuickView={onQuickView} />

      {/* 08. The Atelier Journal — Chapter I: Conceived in the Pink City */}
      <CraftStory />

      {/* 09. For Your Occasion — Bespoke Couture & Rajputi Poshak Rentals */}
      <CustomRentalBanner />

      {/* 10. Shopping Support & Fit Consultation */}
      <ShoppingSupportStrip />

      {/* 11. Voices of Royal Patronage — Client Testimonials */}
      <TestimonialsSection />

      {/* 12. Questions, Answered — FAQ Accordion */}
      <FaqSection />

      {/* 13. Flagship Atelier Visit — 46 Sachivalaya Vihar, Jaipur */}
      <StudioVisit />
    </main>
  );
};

export default HomePage;
