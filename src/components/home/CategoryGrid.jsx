import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './CategoryGrid.scss';

const WARDROBE_ITEMS = [
  {
    num: '01',
    category: 'Heirloom',
    title: 'Rajputi Aangi',
    subtitle: 'Structured Choli with Gota Zari',
    link: '/collections/aangi-blouses',
    image: 'https://www.baisajaipur.com/cdn/shop/files/Embroidered_Ivory_and_Red_Choli.png?v=1791808189&width=1400',
    alt: 'Off-white, red and gold Rajputi aangi blouse'
  },
  {
    num: '02',
    category: 'Celebration',
    title: 'Gota Patti Lehenga',
    subtitle: 'Flowing Silk & Gold Borders',
    link: '/collections/gota-patti-lehenga',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-set.jpg?v=1793113052&width=1400',
    alt: 'Teal gota-patti lehenga with pink aangi'
  },
  {
    num: '03',
    category: 'Occasion',
    title: 'Festive & Bridal',
    subtitle: 'Royal Rajputana Poshaks',
    link: '/collections/festive-edit',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-front.jpg?v=1793113046&width=1400',
    alt: 'Festive Rajasthani poshak ensemble'
  },
  {
    num: '04',
    category: 'Daily Luxe',
    title: 'Everyday Cottons',
    subtitle: 'Breathable Sanganeri Prints',
    link: '/collections/cotton-kurtis',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    alt: 'Handcrafted Jaipur Cotton Kurti'
  },
  {
    num: '05',
    category: 'New In',
    title: 'Fresh From Atelier',
    subtitle: 'Limited Seasonal Silhouettes',
    link: '/collections/new-in',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-skirt.jpg?v=1793113061&width=1400',
    alt: 'Dark teal gota-patti lehenga skirt'
  }
];

const CategoryGrid = () => {
  return (
    <section className="labiii-wardrobe-section" aria-label="Five Signatures of Labiii">
      <div className="container">
        {/* Section Header */}
        <div className="wardrobe-section-header">
          <div className="header-left">
            <span className="brand-eyebrow">The Royal Wardrobe</span>
            <h2 className="section-main-heading">
              Five Signatures of <em>Labiii</em>
            </h2>
            <p className="section-subtext">
              Heirloom Aangi cholis and Gota Patti lehengas for momentous occasions; effortless hand-block cottons for everyday grace.
            </p>
          </div>
          <Link className="view-all-link" to="/collections/all">
            <span>VIEW COMPLETE ATELIER</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 5-Column Editorial Cards Grid */}
        <div className="wardrobe-cards-grid">
          {WARDROBE_ITEMS.map((item, idx) => (
            <Link
              key={item.num}
              to={item.link}
              className={`wardrobe-editorial-card card-index-${idx}`}
              aria-label={`${item.num} ${item.title}`}
            >
              <div className="card-media-wrapper">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="card-bg-image"
                  loading="lazy"
                />
                <div className="card-shade-vignette" />

                {/* Top Number Tag */}
                <div className="card-top-tag">
                  <span className="card-num-text">{item.num}</span>
                  <span className="card-category-text">{item.category}</span>
                </div>

                {/* Bottom Title & Subtitle */}
                <div className="card-caption-block">
                  <h3 className="card-silhouette-title">{item.title}</h3>
                  <p className="card-silhouette-sub">{item.subtitle}</p>
                  <span className="card-explore-arrow">
                    Explore Silhouettes &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
