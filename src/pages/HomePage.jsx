import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedCollection from '../components/home/FeaturedCollection';
import EditorialShowcase from '../components/home/EditorialShowcase';
import EditorialCampaignBanner from '../components/home/EditorialCampaignBanner';
import MotionVideoSection from '../components/home/MotionVideoSection';
import RajasthaniCraftSection from '../components/home/RajasthaniCraftSection';
import CraftStory from '../components/home/CraftStory';
import ShoppingSupportStrip from '../components/home/ShoppingSupportStrip';
import TestimonialsSection from '../components/home/TestimonialsSection';
import InstagramLookbook from '../components/home/InstagramLookbook';
import FaqSection from '../components/home/FaqSection';
import StudioVisit from '../components/home/StudioVisit';

const HomePage = ({ onQuickView }) => {
  return (
    <main className="home-page-main">
      {/* 01. Fresh Feminine Editorial Hero Section */}
      <HeroBanner />

      {/* 02. ✨ Shop By Category ✨ — 8 Circular Cards (Auranic.co Style) */}
      <CategoryGrid />

      {/* 03. The Labiii Bestsellers & New Arrivals — Tabbed Archive */}
      <FeaturedCollection onQuickView={onQuickView} />

      {/* 04. Featured Collections — Split Editorial Showcase */}
      <EditorialShowcase onQuickView={onQuickView} />

      {/* 05. Promotional Campaign Banner — The Festive Trousseau Edit */}
      <EditorialCampaignBanner />

      {/* 06. Fashion Video Reels — Watch Labiii in Motion (9:16 Vertical Video) */}
      <MotionVideoSection onQuickView={onQuickView} />

      {/* 07. Rajasthani Craftsmanship — Bandhani, Leheriya, Gota Patti & Handblock */}
      <RajasthaniCraftSection />

      {/* 08. Brand Story — Our Story: Magazine-Style 2-Column Spread */}
      <CraftStory />

      {/* 09. Shopping Support & Fit Consultation */}
      <ShoppingSupportStrip />

      {/* 10. Customer Reviews — Voices of Royal Patronage */}
      <TestimonialsSection />

      {/* 11. Instagram Community Lookbook — @labiii.official */}
      <InstagramLookbook />

      {/* 12. Questions, Answered — FAQ Accordion */}
      <FaqSection />

      {/* 13. Flagship Atelier Visit — Jaipur, Rajasthan */}
      <StudioVisit />
    </main>
  );
};

export default HomePage;
