import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CategoryGrid.scss';

const EDITORIAL_COLLECTIONS = [
  {
    id: 'rajputi-aangi',
    title: 'The Rajputi Aangi',
    subtitle: 'Archival cholis & hand-beaten gold gota',
    link: '/collections/aangi-blouses',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
    ctaText: 'Shop Aangi Blouses'
  },
  {
    id: 'festive-poshak',
    title: 'Festive Poshak & Sets',
    subtitle: 'Flared kalis, pure silks & celebratory odhnis',
    link: '/collections/festive-edit',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-steps.jpg?v=1793113045&width=1200',
    ctaText: 'Shop Festive Edit'
  },
  {
    id: 'daily-cotton',
    title: 'Daily Cotton Luxe',
    subtitle: 'Breathable handblock prints & easy tunics',
    link: '/collections/cotton-kurtis',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    ctaText: 'Shop Daily Cottons'
  }
];

const CategoryGrid = () => {
  return (
    <section className="labiii-editorial-collections" aria-label="The Collections">
      <div className="container-wide">
        {/* Editorial Section Header (Quinces Style) */}
        <div className="collections-header-block">
          <h2 className="collections-main-title">
            The <em>Collections</em>
          </h2>
          <p className="collections-subtitle">
            Considered Jaipur silhouettes — from celebratory Rajputi aangis to breathable everyday cottons, cut honestly and made to be cherished for years.
          </p>
        </div>

        {/* 3-Column Large Editorial Image Grid (Quinces Style) */}
        <div className="editorial-cards-grid">
          {EDITORIAL_COLLECTIONS.map((col) => (
            <div key={col.id} className="editorial-col-card">
              <Link to={col.link} className="editorial-card-anchor" aria-label={col.title}>
                {/* 3:4 Large Image with Hover Zoom */}
                <div className="media-frame">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="editorial-card-img"
                    loading="lazy"
                  />
                  {/* Subtle Top & Bottom Scrims for Text Readability */}
                  <div className="scrim-overlay" />
                </div>

                {/* Overlaid Title & Italic Link */}
                <div className="card-floating-label">
                  <span className="card-category-heading">
                    {col.title}
                  </span>
                  <p className="card-category-sub">{col.subtitle}</p>
                  <span className="card-action-link">
                    <span>{col.ctaText}</span>
                    <ArrowRight size={14} className="arrow-icon" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;