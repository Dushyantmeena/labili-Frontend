// Authentic catalog dataset inspired by Baisa Jaipur (baisajaipur.com)
// Featuring traditional Rajputana craft: Gota Patti, Aangi Blouses, Silk Lehengas, Hand-block Cottons
// Branded for Labiii — Timeless Comfort

export const CATEGORIES = [
  {
    id: 'aangi-blouses',
    name: 'Aangi Blouses',
    slug: 'aangi-blouses',
    subtitle: 'Heritage Rajputi Cholis & Gota Blouses',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    count: 14
  },
  {
    id: 'gota-patti-lehenga',
    name: 'Lehengas & Sets',
    slug: 'gota-patti-lehenga',
    subtitle: 'Flared Silk & Handcrafted Gota Skirts',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    count: 22
  },
  {
    id: 'kurta-sets',
    name: 'Kurta Sets',
    slug: 'kurta-sets',
    subtitle: 'Regal Anarkalis & Festive Suit Sets',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85',
    count: 18
  },
  {
    id: 'cotton-kurtis',
    name: 'Cotton Kurtis',
    slug: 'cotton-kurtis',
    subtitle: 'Jaipur Hand-Block Prints & Breathable Weaves',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
    count: 26
  },
  {
    id: 'tops-tunics',
    name: 'Tops & Tunics',
    slug: 'tops-tunics',
    subtitle: 'Contemporary Peplum & Fusion Silhouettes',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=85',
    count: 12
  },
  {
    id: 'festive-edit',
    name: 'Festive Edit',
    slug: 'festive-edit',
    subtitle: 'Navratri, Diwali & Royal Wedding Ensembles',
    image: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=1200&q=85',
    count: 30
  }
];

export const PRODUCTS = [
  {
    id: 'prod-001',
    slug: 'dark-teal-gota-patti-lehenga-skirt',
    name: 'Dark Teal Green Flared Lehenga Skirt with Gold Gota Patti',
    subtitle: 'Handcrafted raw silk kalis with antique golden waistband border',
    category: 'gota-patti-lehenga',
    categoryName: 'Lehengas & Sets',
    price: 9899,
    originalPrice: 12499,
    discount: '21% OFF',
    rating: 4.9,
    reviewsCount: 42,
    badge: 'BESTSELLER',
    isBestseller: true,
    isFestive: true,
    isNew: false,
    inStock: true,
    primaryImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Fit'],
    colors: [
      { name: 'Teal Green', hex: '#144547' },
      { name: 'Rani Pink', hex: '#B2184B' },
      { name: 'Royal Wine', hex: '#521422' }
    ],
    fabric: 'Pure Raw Silk with butter crepe inner lining & can-can layer',
    craft: 'Authentic Jaipur Gota Patti ribbons hand-stitched by generational artisans',
    care: 'Dry clean only. Preserve in cotton muslin bag.',
    description: 'A regal silhouette drawn from Rajputana court attire. Styled in deep peacock teal, this full-flare lehenga skirt features sequential rows of radiant gold gota patti and a wide zari-embroidered waistband. Features side tassels and adjustable drawstring closure.',
    details: [
      'Voluminous 6-meter flare with structural can-can inner net',
      'Heavy hand-worked gota lace borders',
      'Customizable waist & length options upon request',
      'Concealed zipper and handmade latkan tie-ups'
    ]
  },
  {
    id: 'prod-002',
    slug: 'multiclour-gota-patti-rajputi-aangi-blouse',
    name: 'Rajasthani Aangi Blouse — Multicolour Designer Gota Patti Work',
    subtitle: 'V-neck elbow length traditional ethnic choli for weddings',
    category: 'aangi-blouses',
    categoryName: 'Aangi Blouses',
    price: 4499,
    originalPrice: 5299,
    discount: '15% OFF',
    rating: 4.8,
    reviewsCount: 38,
    badge: 'HANDCRAFTED',
    isBestseller: true,
    isFestive: true,
    isNew: false,
    inStock: true,
    primaryImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: ['32', '34', '36', '38', '40', '42', 'Custom Fit'],
    colors: [
      { name: 'Ivory & Crimson', hex: '#EDE4D8' },
      { name: 'Mustard Yellow', hex: '#CBA135' }
    ],
    fabric: 'Pure Chanderi Silk with pure cotton breathable lining',
    craft: 'Traditional Rajputi sun-motif gota applique with back dori ties',
    care: 'Dry clean only.',
    description: 'The iconic Rajasthani Aangi redesigned for the contemporary connoisseur. Embellished with radiant sunburst gota motifs, elbow-length sleeves, and delicate zari scallops along the neckline.',
    details: [
      'Padded bust cups with dual seam reinforcement',
      'Signature Rajasthani back dori with antique potli bells',
      '2-inch inner margin for easy alteration'
    ]
  },
  {
    id: 'prod-003',
    slug: 'rani-pink-gota-lehenga-set',
    name: 'Womens Rani Pink Lehenga with Heavy Gota Patti Blouse & Odhni',
    subtitle: 'Signature 3-piece wedding royal set with pure organza dupatta',
    category: 'gota-patti-lehenga',
    categoryName: 'Lehengas & Sets',
    price: 16499,
    originalPrice: 19999,
    discount: '18% OFF',
    rating: 5.0,
    reviewsCount: 57,
    badge: 'ROYAL EDIT',
    isBestseller: true,
    isFestive: true,
    isNew: true,
    inStock: true,
    primaryImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Fit'],
    colors: [
      { name: 'Rani Pink', hex: '#BE185D' },
      { name: 'Gulabi Rose', hex: '#E11D48' }
    ],
    fabric: 'Pure Georgette & Organza with Banarasi border accents',
    craft: 'Zardozi and hand-applied metallic foil ribbons',
    care: 'Dry clean only.',
    description: 'A showstopping bridal and sangeet ensemble in radiant Rajasthani Rani Pink. Features intricate floral jaal gota patti embellishment across all 18 kalis and a sheer scalloped organza dupatta.',
    details: [
      'Includes stitched choli, flared lehenga skirt, and scalloped dupatta',
      'Reinforced waist dori with custom handmade hangings',
      'Can-can and double lining inside skirt'
    ]
  },
  {
    id: 'prod-004',
    slug: 'red-flatlay-gota-sunburst-aangi',
    name: 'Red Heritage Aangi Blouse with Gold Gota-Patti Sun Motifs',
    subtitle: 'Classic Rajputana bridal choli with handmade dori latkans',
    category: 'aangi-blouses',
    categoryName: 'Aangi Blouses',
    price: 3999,
    originalPrice: 4799,
    discount: '17% OFF',
    rating: 4.9,
    reviewsCount: 31,
    badge: 'NEW ARRIVAL',
    isBestseller: true,
    isFestive: true,
    isNew: true,
    inStock: true,
    primaryImage: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: ['32', '34', '36', '38', '40', '42'],
    colors: [
      { name: 'Royal Crimson Red', hex: '#9B1B30' }
    ],
    fabric: 'Pure Cotton Silk with soft cambric lining',
    craft: 'Suraj-patti antique gota medallions hand stitched in Sanganer',
    care: 'Dry clean only.',
    description: 'An iconic silhouette honoring the sun gods of Rajasthan. Features handcrafted gold ribbons sewn into miniature sunbursts, piped armholes, and delicate thread tassels.',
    details: [
      'Signature front sunburst motif',
      'Back tie dori with metallic thread tassels',
      'Generous 2-inch alteration margins'
    ]
  },
  {
    id: 'prod-005',
    slug: 'jaipur-handblock-cambric-peplum-top',
    name: 'Sanganer Floral Hand-Block Cotton Peplum Top',
    subtitle: 'Breathable flared waist summer top with handcrafted tie-ups',
    category: 'tops-tunics',
    categoryName: 'Tops & Tunics',
    price: 599,
    originalPrice: 999,
    discount: '40% OFF',
    rating: 4.7,
    reviewsCount: 68,
    badge: 'UNDER ₹1000',
    isBestseller: true,
    isFestive: false,
    isNew: true,
    inStock: true,
    primaryImage: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Indigo Floral', hex: '#264653' },
      { name: 'Marigold Yellow', hex: '#E9C46A' }
    ],
    fabric: '100% Breathable Jaipur Cambric Cotton',
    craft: 'Authentic carved wooden block printing with natural vegetable dyes',
    care: 'Machine wash gentle cold.',
    description: 'Light, effortless, and timelessly comfortable. Tailored from premium 60s cambric cotton with a gathered peplum flare, scalloped neck, and handcrafted pom-pom tassels.',
    details: [
      'Pure airy cotton for daily wear',
      'Hand-block stamped in Jaipur',
      'Flattering fit-and-flare peplum silhouette'
    ]
  },
  {
    id: 'prod-006',
    slug: 'mustard-yellow-jaipur-cotton-kurti',
    name: 'Mustard Floral Bagru Block-Print Straight Cotton Kurti',
    subtitle: 'Daily wear breathable tunic with delicate gota kinari sleeves',
    category: 'cotton-kurtis',
    categoryName: 'Cotton Kurtis',
    price: 899,
    originalPrice: 1499,
    discount: '40% OFF',
    rating: 4.8,
    reviewsCount: 54,
    badge: 'UNDER ₹1000',
    isBestseller: true,
    isFestive: false,
    isNew: false,
    inStock: true,
    primaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=85'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Mustard Gold', hex: '#E5A93B' },
      { name: 'Sage Green', hex: '#87A987' }
    ],
    fabric: '100% Pure Sanganeri Cotton',
    craft: 'Hand carved wooden block floral impression with thin gold gota patti piping',
    care: 'Hand wash cold separately.',
    description: 'An ode to everyday Jaipur elegance. Straight-cut silhouette with side slits, breathable cotton texture, and subtle zari piping on the cuffs.',
    details: [
      'Calf-length straight cut with comfort side slits',
      'Pre-washed and shrink-tested fabric',
      'Perfect for office, college, and casual outings'
    ]
  },
  {
    id: 'prod-007',
    slug: 'jaipur-handblock-tier-angrakha-top',
    name: 'Angrakha Style Jaipur Cotton Short Kurti with Tassels',
    subtitle: 'Overlapping front panel with contrast border and potli latkans',
    category: 'tops-tunics',
    categoryName: 'Tops & Tunics',
    price: 999,
    originalPrice: 1599,
    discount: '38% OFF',
    rating: 4.6,
    reviewsCount: 39,
    badge: 'UNDER ₹1000',
    isBestseller: false,
    isFestive: false,
    isNew: true,
    inStock: true,
    primaryImage: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85',
    images: [
      'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Crimson Red', hex: '#A8201A' },
      { name: 'Midnight Navy', hex: '#14213D' }
    ],
    fabric: '100% Cotton Malmal with hand block print',
    craft: 'Traditional Angrakha tie-up cut with Rajasthani wooden latkans',
    care: 'Gentle hand wash.',
    description: 'The beloved Angrakha silhouette cut to a modern short length. Features a diagonal wrap-around neckline, side tie tassels, and contrast border trims.',
    details: [
      'Authentic side Angrakha tie closure',
      'Soft breathable malmal cotton',
      'Pairs beautifully with denims or dhoti pants'
    ]
  },
  {
    id: 'prod-008',
    slug: 'royal-ivory-anarkali-suit-set',
    name: 'Royal Ivory & Crimson Gota Embroidered Anarkali Suit Set',
    subtitle: '3-Piece floor length anarkali kurta, churidar and organza odhni',
    category: 'kurta-sets',
    categoryName: 'Kurta Sets',
    price: 11299,
    originalPrice: 13999,
    discount: '19% OFF',
    rating: 4.9,
    reviewsCount: 46,
    badge: 'BESTSELLER',
    isBestseller: true,
    isFestive: true,
    isNew: false,
    inStock: true,
    primaryImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=1200&q=85',
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'Custom Fit'],
    colors: [
      { name: 'Royal Ivory', hex: '#F9F6F0' },
      { name: 'Pastel Blush', hex: '#E8D3C8' }
    ],
    fabric: 'Pure Chanderi Silk Kurta with pure mulmul lining',
    craft: 'Hand embroidery with gota ribbons and mirror accents',
    care: 'Dry clean only.',
    description: 'Fit for a royal reception. This ivory anarkali cascades gracefully with twenty-four kalis lined with gold gota patti and paired with an ethereal hand-scalloped organza dupatta.',
    details: [
      'Heavy flare anarkali kurta',
      'Pure silk churidar pants with drawstring',
      '2.5m scalloped organza odhni included'
    ]
  }
];

export const REELS_DATA = [
  {
    id: 'reel-1',
    title: 'Gota Patti Lehenga Skirts — Teal, Pink & Wine',
    handle: '@labiii.official',
    views: '148K',
    thumbnail: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    caption: 'Twirling through the sandstone courtyards of Jaipur in our 6-meter flared gota patti lehenga skirt. Handcrafted in our studio.',
    productId: 'prod-001',
    productName: 'Dark Teal Green Flared Lehenga Skirt',
    price: '₹9,899'
  },
  {
    id: 'reel-2',
    title: 'Gota Patti Rajasthani Aangi',
    handle: '@labiii.official',
    views: '112K',
    thumbnail: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    caption: 'From traditional poshak styling to pairing with high-waist silk skirts and organza sarees — the iconic Aangi reimagined.',
    productId: 'prod-002',
    productName: 'Rajasthani Aangi Blouse — Multicolour',
    price: '₹4,499'
  },
  {
    id: 'reel-3',
    title: 'Dark Teal Gota Patti Skirt',
    handle: '@labiii.official',
    views: '88K',
    thumbnail: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
    caption: 'Our signature dark teal skirt in natural sunlight. Every single gota ribbon placed by master artisans.',
    productId: 'prod-001',
    productName: 'Dark Teal Flared Gota Skirt',
    price: '₹9,899'
  },
  {
    id: 'reel-4',
    title: 'Rani Pink Lehenga, on the Mannequin',
    handle: '@labiii.official',
    views: '240K',
    thumbnail: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
    caption: 'Our bride wearing custom Rani Pink gota patti for her mehendi evening. Pure joy and royal Rajasthani charm.',
    productId: 'prod-003',
    productName: 'Rani Pink Lehenga with Gota Blouse',
    price: '₹16,499'
  },
  {
    id: 'reel-5',
    title: 'Wine Magenta Lehenga Set',
    handle: '@labiii.official',
    views: '96K',
    thumbnail: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=600&q=80',
    caption: 'Deep royal jewel tones paired with beaten antique gold zari. Tailored with 24 sweeping kalis.',
    productId: 'prod-001',
    productName: 'Royal Wine Flared Gota Skirt',
    price: '₹9,899'
  },
  {
    id: 'reel-6',
    title: 'Festive Poshak Look',
    handle: '@labiii.official',
    views: '175K',
    thumbnail: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80',
    caption: 'Traditional Rajputi Poshak styling captured at a sandstone palace in Jaipur. Timeless, regal and sublime.',
    productId: 'prod-003',
    productName: 'Royal Rajputi Poshak Bridal Set',
    price: '₹16,499'
  }
];

export const FAQS = [
  {
    q: 'What sizes do you offer?',
    a: 'Available sizes vary by style from XS (32) to XXL (44), plus custom made-to-measure stitching. Check the size selector on each product page. Not sure? Send us your bust, waist, and height measurements on WhatsApp.'
  },
  {
    q: 'How do delivery and returns work?',
    a: 'Complimentary express shipping across India on prepaid orders. Dispatch takes 24–48 hours for ready stock and 7–10 days for custom couture. For exchanges and returns, contact us within 7 days of delivery or message us on WhatsApp.'
  },
  {
    q: 'Can I rent an outfit for weddings or events?',
    a: 'Yes! Labiii offers a curated Rental Service for our signature gota patti lehengas and Rajputi aangis for 3, 5, or 7 days across India. Outfits are dry-cleaned, steamed, and custom-tailored to your measurements before dispatch.'
  },
  {
    q: 'Do you offer worldwide shipping?',
    a: 'Yes, we ship globally including USA, UK, Canada, UAE, Australia, and Singapore via DHL Express (5–8 business days). Free express shipping is available across all Indian pin codes for orders over ₹1,999.'
  },
  {
    q: 'Can I customize colors, sleeve lengths, or necklines?',
    a: 'Absolutely. Because every heirloom garment is cut and finished in our Jaipur workshop, we can customize sleeve length, blouse pads, lehenga length, and color combinations. Simply select "Custom Fit" or message our WhatsApp concierge at +91 76650 22710.'
  },
  {
    q: 'Can I visit The Labiii Studio in Jaipur in person?',
    a: 'We would love to welcome you! Visit our flagship studio at 46 Sachivalaya Vihar, New Sanganer Road, Jaipur, Rajasthan 302020. Open all 7 days from 9:00 AM to 8:00 PM.'
  }
];
