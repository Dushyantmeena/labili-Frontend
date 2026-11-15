// ==========================================================================
// LABIII · PROMOTIONAL MARKETING CAMPAIGN CONFIGURATION (AURANIC AESTHETIC)
// Fresh, feminine, colourful discount campaigns, tickers & motion cinema
// ==========================================================================

export const PROMOTIONAL_CAMPAIGNS = [
  {
    id: 'promo-first-order',
    active: true,
    badge: 'NEW PATRON WELCOME',
    title: 'Extra 10% OFF on First Purchase',
    highlight: '10% OFF',
    code: 'ROYAL10',
    description: 'Welcome to LABIII. Enjoy 10% off your maiden order of handcrafted A-line suit sets, Anarkalis & Rajputi Aangi cholis.',
    terms: 'Valid on orders above ₹2,999 · Single use per patron',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    ctaText: 'Shop New In',
    ctaLink: '/collections/new-in',
    accentColor: '#AD6655', // Terracotta
    bgGradient: 'linear-gradient(135deg, #FFFDF8 0%, #F8F1E9 100%)',
    isDark: false
  },
  {
    id: 'promo-festive-pair',
    active: true,
    badge: 'CELEBRATORY PAIR',
    title: 'Buy 2 Ensembles & Save ₹1,000 Flat',
    highlight: 'FLAT ₹1,000 OFF',
    code: 'FESTIVEPAIR',
    description: 'Curate your celebratory wardrobe. Purchase any 2 suit sets or aangis and receive an instant ₹1,000 deduction.',
    terms: 'Applicable automatically or with code at checkout',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    ctaText: 'Explore Suit Sets',
    ctaLink: '/collections/kurta-sets',
    accentColor: '#C98289', // Dusty Rose
    bgGradient: 'linear-gradient(135deg, #FDF7F8 0%, #F6EAEB 100%)',
    isDark: false
  },
  {
    id: 'promo-free-shipping',
    active: true,
    badge: 'DOMESTIC & WORLDWIDE',
    title: 'Complimentary Express Dispatch',
    highlight: 'FREE EXPRESS SHIPPING',
    code: 'FREESHIP',
    description: 'All domestic prepaid orders above ₹2,999 qualify for complimentary white-glove express courier dispatch.',
    terms: 'No coupon needed · Applied automatically in bag',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    ctaText: 'View Collections',
    ctaLink: '/collections/all',
    accentColor: '#A6B59A', // Sage Green
    bgGradient: 'linear-gradient(135deg, #F8FAF7 0%, #EFF4EC 100%)',
    isDark: false
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

// Video Advertisements & Shoppable Reels Dataset (9:16 Vertical Runway Cinema)
export const MOTION_VIDEOS = [
  {
    id: 'motion-1',
    title: 'Pastel Flora Kalidar Twirl',
    subtitle: 'Pure Georgette & Scalloped Dupatta',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/78fe3a9a98544df098407a2094ba4ed0/78fe3a9a98544df098407a2094ba4ed0.HD-720p-1.6Mbps-99084444.mp4?v=0',
    poster: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=85',
    productId: 'prod-003',
    productSlug: 'royal-peacock-teal-lehenga-poshak-set',
    productName: 'Rose Pink Hand-Embroidered Kalidar Anarkali Set',
    productPrice: 6899,
    originalPrice: 8499,
    productImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=85',
    category: 'Anarkali Set',
    badge: 'NEW LAUNCH'
  },
  {
    id: 'motion-2',
    title: 'Suraj-Patti Gota Needlework',
    subtitle: 'Artisanal Hand-Stitched Gold Patti',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/9d6ff909242a435d8b6a33f6ee95f0a4/9d6ff909242a435d8b6a33f6ee95f0a4.HD-720p-1.6Mbps-99069417.mp4?v=0',
    poster: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85',
    productId: 'prod-002',
    productSlug: 'handcrafted-gota-patti-aangi-blouse-ivory',
    productName: 'Handcrafted Rajputi Aangi Blouse in Ivory & Terracotta',
    productPrice: 3299,
    originalPrice: 4200,
    productImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85',
    category: 'Rajputi Aangi',
    badge: 'BESTSELLER'
  },
  {
    id: 'motion-3',
    title: 'Sage Green Handblock Kurta Twirl',
    subtitle: 'Breathable 60s Cambric Cotton',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/431be25e508e4256b54d361900f83af8/431be25e508e4256b54d361900f83af8.HD-720p-1.6Mbps-99069423.mp4?v=0',
    poster: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85',
    productId: 'prod-005',
    productSlug: 'sanganeri-handblock-cambric-cotton-kurta-mustard',
    productName: 'Sage Green Floral Sanganeri Handblock Cotton Suit Set',
    productPrice: 2899,
    originalPrice: 3600,
    productImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=85',
    category: 'Daily Luxury',
    badge: 'PURE COTTON'
  },
  {
    id: 'motion-4',
    title: 'Blush Terracotta Straight Silhouette',
    subtitle: 'Jaipur Atelier Fitting Stills',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/c236a3a0be90462caf1a24af1fb28040/c236a3a0be90462caf1a24af1fb28040.HD-720p-1.6Mbps-99069434.mp4?v=0',
    poster: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=85',
    productId: 'prod-007',
    productSlug: 'festive-rajasthani-poshak-set-crimson',
    productName: 'Muted Peach & Rose Scalloped Yoke Suit Set',
    productPrice: 5499,
    originalPrice: 6999,
    productImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=85',
    category: 'Suit Set',
    badge: 'HANDCRAFTED'
  },
  {
    id: 'motion-5',
    title: 'Heritage Flared Royal Poshak',
    subtitle: 'Pure Silk & Authentic Lappe Borders',
    videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/da7945c521b645ff9b1757a5325603fd/da7945c521b645ff9b1757a5325603fd.HD-720p-1.6Mbps-99070897.mp4?v=0',
    poster: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=85',
    productId: 'prod-001',
    productSlug: 'dark-teal-gota-patti-lehenga-skirt',
    productName: 'Emerald Silk 24-Kali Flared Celebratory Lehenga Set',
    productPrice: 12499,
    originalPrice: 15999,
    productImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=85',
    category: 'Festive Poshak',
    badge: 'ROYAL HEIRLOOM'
  }
];

// Hero Campaign Video Config
export const HERO_CAMPAIGN_VIDEO = {
  videoUrl: 'https://www.baisajaipur.com/cdn/shop/videos/c/vp/78fe3a9a98544df098407a2094ba4ed0/78fe3a9a98544df098407a2094ba4ed0.HD-720p-1.6Mbps-99084444.mp4?v=0',
  poster: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=85',
  badge: 'SPRING / FESTIVE COUTURE FILM',
  title: 'Fresh Grace. Royal Motion.',
  subtitle: 'Experience Jaipur ethnic fashion in its fluid rhythm: pure handblock cottons, delicate Gota Patti borders, and breezy pastel silhouettes.',
  primaryCtaText: 'EXPLORE SPRING COUTURE',
  primaryCtaLink: '/collections/kurta-sets',
  secondaryCtaText: 'VIEW LOOKBOOK',
  targetCategory: 'kurta-sets'
};
