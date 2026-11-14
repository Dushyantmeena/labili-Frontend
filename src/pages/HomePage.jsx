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
import FaqSection from '../components/home/FaqSection';
import StudioVisit from '../components/home/StudioVisit';

const HomePage = ({ onQuickView }) => {
  return (
    <main className="home-page-main">
      {/* 01. Royal Festive Edit Hero Banner */}
      <HeroBanner />

      {/* 02. The Royal Wardrobe — Five Ways to Wear Labiii */}
      <CategoryGrid />

      {/* 03. The Spirit of Rajasthan — Atelier Stills & Heritage Footage */}
      <SpiritOfRajasthan />

      {/* 04. Seen on Labiii — Shoppable Video Reels */}
      <ReelShowcase />

      {/* 05. The Gota Patti Aangi — Interactive Craft Deep Dive */}
      <AangiDetailDeepDive />

      {/* 06. Fresh From The Unit & Royal Bestsellers */}
      <FeaturedCollection onQuickView={onQuickView} />

      {/* 07. Cotton for Every Day — Handblock Prints & Under ₹1,000 Edit */}
      <EverydayCottonEdit onQuickView={onQuickView} />

      {/* 08. From Jaipur, With Character — Sanganer Craftsmanship Story */}
      <CraftStory />

      {/* 09. For Your Occasion — Bespoke Couture & Rajputi Poshak Rentals */}
      <CustomRentalBanner />

      {/* 10. Shopping Support & Fit Consultation */}
      <ShoppingSupportStrip />

      {/* 11. Questions, Answered — FAQ Accordion */}
      <FaqSection />

      {/* 12. Flagship Studio Visit — 46 Sachivalaya Vihar, Jaipur */}
      <StudioVisit />
    </main>
  );
};

export default HomePage;
