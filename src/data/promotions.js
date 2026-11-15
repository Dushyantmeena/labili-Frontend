// ==========================================================================
// LABIII · PROMOTIONAL MARKETING CAMPAIGN CONFIGURATION
// Configurable discount campaigns, dates, codes, and announcement tickers
// ==========================================================================

export const PROMOTIONAL_CAMPAIGNS = [
  {
    id: 'promo-first-order',
    active: true,
    badge: 'NEW PATRON WELCOME',
    title: 'Extra 10% OFF on First Purchase',
    highlight: '10% OFF',
    code: 'ROYAL10',
    description: 'Welcome to the royal circle. Enjoy 10% off your maiden order of handcrafted Rajputi Aangi cholis and festive lehengas.',
    terms: 'Valid on orders above ₹2,999 · Single use per patron',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    ctaText: 'Shop New Arrivals',
    ctaLink: '/collections/new-in',
    accentColor: '#C06345', // Terracotta
    bgGradient: 'linear-gradient(135deg, #FAF7F2 0%, #F4EFE6 100%)'
  },
  {
    id: 'promo-festive-pair',
    active: true,
    badge: 'FESTIVE TROUSSEAU',
    title: 'Buy 2 Pieces & Save ₹1,000 Flat',
    highlight: 'FLAT ₹1,000 OFF',
    code: 'FESTIVEPAIR',
    description: 'Curate your celebratory wardrobe. Purchase any 2 heirloom sets or aangis and receive an instant ₹1,000 deduction.',
    terms: 'Applicable automatically or with code at checkout',
    startDate: '2026-10-01',
    endDate: '2026-12-31',
    ctaText: 'Explore Festive Edit',
    ctaLink: '/collections/festive-edit',
    accentColor: '#541421', // Deep Wine
    bgGradient: 'linear-gradient(135deg, #3E0E18 0%, #541421 100%)',
    isDark: true
  },
  {
    id: 'promo-free-shipping',
    active: true,
    badge: 'WORLDWIDE & DOMESTIC',
    title: 'Complimentary Express Delivery',
    highlight: 'FREE EXPRESS SHIPPING',
    code: 'FREESHIP',
    description: 'All domestic prepaid orders above ₹4,999 qualify for complimentary white-glove express courier dispatch.',
    terms: 'No coupon needed · Applied automatically in bag',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    ctaText: 'View Collections',
    ctaLink: '/collections/all',
    accentColor: '#C29B46', // Champagne Gold
    bgGradient: 'linear-gradient(135deg, #FFFFFF 0%, #FAF7F2 100%)'
  }
];

// Helper to filter currently active campaigns by date and active flag
export const getActivePromotions = () => {
  const now = new Date();
  return PROMOTIONAL_CAMPAIGNS.filter((promo) => {
    if (!promo.active) return false;
    const start = new Date(promo.startDate);
    const end = new Date(promo.endDate);
    return now >= start && now <= end;
  });
};

// Video Advertisements & Shoppable Reels Dataset
export const MOTION_VIDEOS = [
  {
    id: 'motion-1',
    title: 'Crimson Heritage Poshak Twirl',
    subtitle: 'Pure Silk & Lappe Gota Borders',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/78fe3a9a98544df098407a2094ba4ed0/78fe3a9a98544df098407a2094ba4ed0.HD-720p-1.6Mbps-99084444.mp4?v=0',
    poster: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-steps.jpg?v=1793113045&width=800',
    productId: 'prod-007',
    productSlug: 'festive-rajasthani-poshak-set-crimson',
    productName: 'Festive Rajasthani Poshak Ensemble in Crimson Red',
    productPrice: 18999,
    originalPrice: 22500,
    productImage: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-steps.jpg?v=1793113045&width=400',
    category: 'Festive Poshak',
    badge: 'HERITAGE COUTURE'
  },
  {
    id: 'motion-2',
    title: 'Gota Patti Needlework on Silk',
    subtitle: 'Artisanal Hand-Beaten Gold Patti',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/9d6ff909242a435d8b6a33f6ee95f0a4/9d6ff909242a435d8b6a33f6ee95f0a4.HD-720p-1.6Mbps-99069417.mp4?v=0',
    poster: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-sun-motif.jpg?v=1793113049&width=800',
    productId: 'prod-002',
    productSlug: 'handcrafted-gota-patti-aangi-blouse-ivory',
    productName: 'Handcrafted Rajputi Aangi Blouse in Ivory & Red',
    productPrice: 2999,
    originalPrice: 3800,
    productImage: 'https://www.baisajaipur.com/cdn/shop/files/Embroidered_Ivory_and_Red_Choli.png?v=1791808189&width=400',
    category: 'Rajputi Aangi',
    badge: 'BESTSELLER'
  },
  {
    id: 'motion-3',
    title: '24-Kali Flared Peacock Lehenga',
    subtitle: 'Fluid Movement in Pure Raw Silk',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/431be25e508e4256b54d361900f83af8/431be25e508e4256b54d361900f83af8.HD-720p-1.6Mbps-99069423.mp4?v=0',
    poster: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-skirt.jpg?v=1793113061&width=800',
    productId: 'prod-001',
    productSlug: 'dark-teal-gota-patti-lehenga-skirt',
    productName: 'Dark Teal Green Flared Lehenga Skirt with Gold Gota Patti',
    productPrice: 8499,
    originalPrice: 10500,
    productImage: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-skirt.jpg?v=1793113061&width=400',
    category: 'Gota Lehenga',
    badge: 'LIMITED EDITION'
  },
  {
    id: 'motion-4',
    title: 'Bridal Atelier Poshak Twirl',
    subtitle: 'Sanganer Studio Fitting Session',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/c236a3a0be90462caf1a24af1fb28040/c236a3a0be90462caf1a24af1fb28040.HD-720p-1.6Mbps-99069434.mp4?v=0',
    poster: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-front.jpg?v=1793113046&width=800',
    productId: 'prod-003',
    productSlug: 'royal-peacock-teal-lehenga-poshak-set',
    productName: 'Royal Peacock Teal Silk Lehenga & Rani Pink Aangi Set',
    productPrice: 14500,
    originalPrice: 17200,
    productImage: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-lehenga-set-neon.jpg?v=1793113052&width=400',
    category: 'Bridal Set',
    badge: 'HANDCRAFTED'
  },
  {
    id: 'motion-5',
    title: 'Jaipur Flagship Studio Lounge',
    subtitle: 'Sachivalaya Vihar Fitting Experience',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/da7945c521b645ff9b1757a5325603fd/da7945c521b645ff9b1757a5325603fd.HD-720p-1.6Mbps-99070897.mp4?v=0',
    poster: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-odhni-portrait.jpg?v=1793113048&width=800',
    productId: 'prod-004',
    productSlug: 'crimson-red-royal-aangi-blouse-gold-dori',
    productName: 'Crimson Red Royal Aangi Blouse with Gold Dori Tassels',
    productPrice: 3299,
    originalPrice: 4200,
    productImage: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-red-flatlay.jpg?v=1793120643&width=400',
    category: 'Rajputi Aangi',
    badge: 'SIGNATURE'
  }
];

// Hero Campaign Video Config
export const HERO_CAMPAIGN_VIDEO = {
  videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/78fe3a9a98544df098407a2094ba4ed0/78fe3a9a98544df098407a2094ba4ed0.HD-1080p-2.5Mbps-99084444.mp4?v=0',
  poster: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-steps.jpg?v=1793113045&width=1400',
  badge: 'AUTUMN / FESTIVE CINEMATIC CAMPAIGN',
  title: 'Royal Roots. Motion Elegance.',
  subtitle: 'Experience Jaipur couture in its true movement: handcrafted Gota Patti poshak, fluid silks, and heirloom silhouettes.',
  primaryCtaText: 'EXPLORE CAMPAIGN SILHOUETTES',
  primaryCtaLink: '/collections/festive-edit',
  secondaryCtaText: 'WATCH ATELIER FILM',
  targetCategory: 'festive-edit'
};
