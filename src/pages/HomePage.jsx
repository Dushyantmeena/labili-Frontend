import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CampaignVideoHero from '../components/home/CampaignVideoHero';
import CategoryGrid from '../components/home/CategoryGrid';
import EditorialShowcase from '../components/home/EditorialShowcase';
import EditorialCampaignBanner from '../components/home/EditorialCampaignBanner';
import MotionVideoSection from '../components/home/MotionVideoSection';
import FeaturedCollection from '../components/home/FeaturedCollection';
import SpiritOfRajasthan from '../components/home/SpiritOfRajasthan';
import AangiDetailDeepDive from '../components/home/AangiDetailDeepDive';
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
      {/* 01. Minimalist Editorial Fashion Hero (Quinces Style) */}
      <HeroBanner />

      {/* 02. Cinematic Campaign Film Advertisement (2nd Position) */}
      <CampaignVideoHero />

      {/* 03. The Collections — 3-Column Large Image Minimalist Grid (Quinces Style) */}
      <CategoryGrid />

      {/* 04. Craft Your Signature — Split Editorial Showcase (Quinces Style) */}
      <EditorialShowcase onQuickView={onQuickView} />

      {/* 05. The Limited Edit — Full-Width Large Campaign Image Banner (Quinces Style) */}
      <EditorialCampaignBanner />

      {/* 06. Watch Labiii in Motion — 9:16 Shoppable Video Experience */}
      <MotionVideoSection onQuickView={onQuickView} />

      {/* 07. The Labiii Bestsellers — Curated Archive with Tabs */}
      <FeaturedCollection onQuickView={onQuickView} />

      {/* 08. The Spirit of Rajasthan — Atelier Stills & Heritage Archive */}
      <SpiritOfRajasthan />

      {/* 09. The Gota Patti Aangi — Interactive Craft Deep Dive */}
      <AangiDetailDeepDive />

      {/* 10. Cotton for Every Day — Handblock Prints & Daily Luxe */}
      <EverydayCottonEdit onQuickView={onQuickView} />

      {/* 11. Our Story — Magazine-Style 2-Column Editorial Spread (Quinces Style) */}
      <CraftStory />

      {/* 12. Bespoke Couture & Rajputi Poshak Rentals */}
      <CustomRentalBanner />

      {/* 13. Shopping Support & Fit Consultation */}
      <ShoppingSupportStrip />

      {/* 14. Voices of Royal Patronage — Client Testimonials */}
      <TestimonialsSection />

      {/* 15. Questions, Answered — FAQ Accordion */}
      <FaqSection />

      {/* 16. Flagship Atelier Visit — 46 Sachivalaya Vihar, Jaipur */}
      <StudioVisit />
    </main>
  );
};

export default HomePage;