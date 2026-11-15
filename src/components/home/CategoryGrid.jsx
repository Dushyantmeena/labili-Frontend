import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.scss';

const CATEGORIES_DATA = [
  {
    id: 'farsi-salwar-suit',
    title: 'FARSI SALWAR\nSUIT',
    link: '/collections/aangi-blouses',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    alt: 'Farsi Salwar Suit'
  },
  {
    id: 'pleated-suit-sets',
    title: 'PLEATED\nSUIT SETS',
    link: '/collections/gota-patti-lehenga',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-set.jpg?v=1793113052&width=1400',
    alt: 'Pleated Suit Sets'
  },
  {
    id: 'a-line-suit-sets',
    title: 'A LINE\nSUIT SETS',
    link: '/collections/kurta-sets',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    alt: 'A Line Suit Sets'
  },
  {
    id: 'straight-suit-sets',
    title: 'STRAIGHT\nSUIT SETS',
    link: '/collections/cotton-kurtis',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    alt: 'Straight Suit Sets'
  },
  {
    id: 'peplum-suit-sets',
    title: 'PEPLUM &\nFUSION SETS',
    link: '/collections/tops-tunics',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
    alt: 'Peplum and Fusion Tops'
  },
  {
    id: 'festive-poshak-sets',
    title: 'ROYAL FESTIVE\nPOSHAK',
    link: '/collections/festive-edit',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-steps.jpg?v=1793113045&width=1400',
    alt: 'Royal Festive Poshaks'
  }
];

const CategoryGrid = () => {
  return (
    <section className="shop-by-category-section" aria-label="Shop By Category">
      <div className="container">
        {/* Title matching screenshot: ✨ Shop By Category ✨ */}
        <div className="category-section-header">
          <h2 className="category-sparkle-title">
            <span className="sparkle-star">✨</span>
            <span className="title-text">Shop By Category</span>
            <span className="sparkle-star">✨</span>
          </h2>
          <p className="category-subtext">
            Handcrafted Jaipur ethnic silhouettes — from celebratory farsi suits to everyday cottons
          </p>
        </div>

        {/* 2-Column (Mobile) / 3-Column (Tablet/Desktop) Circular Category Grid */}
        <div className="category-circles-grid">
          {CATEGORIES_DATA.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="category-circle-card"
              aria-label={item.title.replace('\n', ' ')}
            >
              <div className="circle-media-wrapper">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="circle-img"
                  loading="lazy"
                />
                {/* Bottom dark gradient overlay */}
                <div className="circle-gradient-scrim" />

                {/* Centered label inside circle bottom */}
                <div className="circle-label-container">
                  <span className="circle-category-name">
                    {item.title}
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
