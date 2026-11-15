import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategoryGrid from '../components/home/CategoryGrid';
import FeaturedCollection from '../components/home/FeaturedCollection';
import EditorialShowcase from '../components/home/EditorialShowcase';
import EditorialCampaignBanner from '../components/home/EditorialCampaignBanner';
import MotionVideoSection from '../components/home/MotionVideoSection';
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
      {/* 01. Minimalist Editorial Fashion Hero */}
      <HeroBanner />

      {/* 02. ✨ Shop By Category ✨ — Circular Silhouette Showcase (Auranic.co Style) */}
      <CategoryGrid />

      {/* 03. The Labiii Bestsellers — Curated Archive with Tabs */}
      <FeaturedCollection onQuickView={onQuickView} />

      {/* 04. Craft Your Signature — Split Editorial Showcase */}
      <EditorialShowcase onQuickView={onQuickView} />

      {/* 05. The Limited Edit — Full-Width Large Campaign Image Banner */}
      <EditorialCampaignBanner />

      {/* 06. Watch Labiii in Motion — 9:16 Shoppable Video Experience */}
      <MotionVideoSection onQuickView={onQuickView} />

      {/* 07. The Spirit of Rajasthan — Atelier Stills & Heritage Archive */}
      <SpiritOfRajasthan />

      {/* 08. The Gota Patti Aangi — Interactive Craft Deep Dive */}
      <AangiDetailDeepDive />

      {/* 09. Cotton for Every Day — Handblock Prints & Daily Luxe */}
      <EverydayCottonEdit onQuickView={onQuickView} />

      {/* 10. Our Story — Magazine-Style 2-Column Editorial Spread */}
      <CraftStory />

      {/* 11. Bespoke Couture & Rajputi Poshak Rentals */}
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
