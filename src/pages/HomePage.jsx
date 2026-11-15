import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import PromotionalBannerGrid from '../components/home/PromotionalBannerGrid';
import CategoryGrid from '../components/home/CategoryGrid';
import MotionVideoSection from '../components/home/MotionVideoSection';
import SpiritOfRajasthan from '../components/home/SpiritOfRajasthan';
import CampaignVideoHero from '../components/home/CampaignVideoHero';
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
      {/* 01. Royal Festive Edit Editorial Hero Banner */}
      <HeroBanner />

      {/* 02. Cinematic Campaign Film Advertisement — Full-width Fashion Video */}
      <CampaignVideoHero />

      {/* 03. The Royal Wardrobe — Shop By Category */}
      <CategoryGrid />

      {/* 04. Curated Privileges & Promotional Campaigns (10% Off First Purchase, Festive Pair, Free Express Ship) */}
      <PromotionalBannerGrid />

      {/* 05. Watch Labiii in Motion — 9:16 Vertical Shoppable Video Experience */}
      <MotionVideoSection onQuickView={onQuickView} />

      {/* 06. The Spirit of Rajasthan — Atelier Stills & Heritage Archive */}
      <SpiritOfRajasthan />

      {/* 07. The Gota Patti Aangi — Interactive Craft Deep Dive */}
      <AangiDetailDeepDive />

      {/* 08. Fresh From The Atelier & Royal Bestsellers */}
      <FeaturedCollection onQuickView={onQuickView} />

      {/* 09. Cotton for Every Day — Handblock Prints & Daily Luxe */}
      <EverydayCottonEdit onQuickView={onQuickView} />

      {/* 10. The Atelier Journal — Chapter I: Conceived in the Pink City */}
      <CraftStory />

      {/* 11. For Your Occasion — Bespoke Couture & Rajputi Poshak Rentals */}
      <CustomRentalBanner />

      {/* 12. Shopping Support & Fit Consultation */}
      <ShoppingSupportStrip />

      {/* 13. Voices of Royal Patronage — Client Testimonials */}
      <TestimonialsSection />

      {/* 14. Questions, Answered — FAQ Accordion */}
      <FaqSection />

      {/* 15. Flagship Atelier Visit — 46 Sachivalaya Vihar, Jaipur */}
      <StudioVisit />
    </main>
  );
};

export default HomePage;