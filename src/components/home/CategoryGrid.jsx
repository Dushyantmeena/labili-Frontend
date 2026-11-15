import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './CategoryGrid.scss';

const MODERN_CATEGORIES = [
  {
    id: 'bridal-poshaks',
    number: '01',
    eyebrow: 'ROYAL HEIRLOOM',
    title: 'Festive Poshaks & Lehengas',
    subtitle: 'Pure raw silk kalis, hand-beaten gold gota & celebratory odhnis',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
    link: '/collections/festive-edit',
    ctaText: 'Explore Poshaks'
  },
  {
    id: 'rajputi-aangi',
    number: '02',
    eyebrow: 'ARCHIVAL CRAFT',
    title: 'Rajputi Aangi Blouses',
    subtitle: 'Architectural sweetheart necklines & suraj-patti gold gota',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
    link: '/collections/aangi-blouses',
    ctaText: 'Explore Aangis'
  },
  {
    id: 'festive-kurta-sets',
    number: '03',
    eyebrow: 'CONTEMPORARY SILK',
    title: 'Regal Kurta Sets & Anarkalis',
    subtitle: 'Vibrant Rani Pink & Peacock Georgette with scalloped dupattas',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=85',
    link: '/collections/kurta-sets',
    ctaText: 'Explore Kurta Sets'
  },
  {
    id: 'daily-jaipur-cotton',
    number: '04',
    eyebrow: 'DAILY LUXURY',
    title: 'Handblock Jaipur Cottons',
    subtitle: 'Breathable 60s cambric cotton stamped with natural vegetable dyes',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85',
    link: '/collections/cotton-kurtis',
    ctaText: 'Explore Daily Cottons'
  }
];

const CategoryGrid = () => {
  return (
    <section className="labiii-modern-categories-section" aria-label="Collections Lookbook">
      <div className="container-fluid-couture">
        {/* Section Header */}
        <div className="modern-cat-header">
          <div className="header-eyebrow-pill">
            <Sparkles size={11} className="eyebrow-sparkle" />
            <span>THE LABIII ARCHIVE</span>
          </div>
          <h2 className="header-title">
            Signatures of the <em>Royal Wardrobe</em>
          </h2>
          <p className="header-sub">
            From regal bridal trousseau to breathable handblock cottons — each silhouette is cut honestly and tailored for life.
          </p>
        </div>

        {/* 4-Column Modern Lookbook Grid */}
        <div className="modern-cards-row">
          {MODERN_CATEGORIES.map((item) => (
            <article key={item.id} className="category-couture-card">
              <Link to={item.link} className="card-link-wrapper" aria-label={item.title}>
                {/* 3:4 High-Fashion Photo Stage */}
                <div className="card-photo-viewport">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-media-img"
                    loading="lazy"
                  />
                  <div className="card-photo-scrim" />

                  {/* Top Category Index Tag */}
                  <div className="card-index-tag">
                    <span className="index-num">{item.number}</span>
                    <span className="index-eyebrow">{item.eyebrow}</span>
                  </div>
                </div>

                {/* Bottom Modern Typography Information */}
                <div className="card-caption-container">
                  <h3 className="card-headline">{item.title}</h3>
                  <p className="card-subheadline">{item.subtitle}</p>

                  <span className="card-action-trigger">
                    <span>{item.ctaText}</span>
                    <ArrowRight size={13} className="arrow-icon" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;