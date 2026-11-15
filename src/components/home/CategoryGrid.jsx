import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.scss';

// Curated Ethnic Silhouette Categories matching the Auranic.co visual direction
export const CIRCULAR_CATEGORIES = [
  {
    id: 'farsi-salwar-suit',
    title: 'FARSI SALWAR SUIT',
    subtitle: 'Graceful flared hem salwar suit sets in artisanal prints',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=85',
    link: '/collections/kurta-sets',
    tag: 'Farsi Salwar'
  },
  {
    id: 'pleated-suit-sets',
    title: 'PLEATED SUIT SETS',
    subtitle: 'Intricately pleated silhouettes in rich Jaipur hues',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85',
    link: '/collections/kurta-sets',
    tag: 'Pleated Suit'
  },
  {
    id: 'a-line-suit-sets',
    title: 'A LINE SUIT SETS',
    subtitle: 'Flattering contoured A-line cuts with intricate yoke embroidery',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=85',
    link: '/collections/kurta-sets',
    tag: 'A-Line'
  },
  {
    id: 'straight-suit-sets',
    title: 'STRAIGHT SUIT SETS',
    subtitle: 'Classic regal straight kurtis paired with tailored trousers',
    image: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=700&q=85',
    link: '/collections/kurta-sets',
    tag: 'Straight Suit'
  },
  {
    id: 'anarkali-suit-sets',
    title: 'ANARKALI SUIT SETS',
    subtitle: 'Dramatic 24-kali flared kalidar anarkalis in royal georgettes',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=700&q=85',
    link: '/collections/kurta-sets',
    tag: 'Anarkali'
  },
  {
    id: 'sharara-suit-sets',
    title: 'SHARARA & GHARARA',
    subtitle: 'Flared celebratory bottoms with scalloped organza dupattas',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=85',
    link: '/collections/gota-patti-lehenga',
    tag: 'Sharara'
  },
  {
    id: 'rajputi-poshak',
    title: 'RAJPUTI POSHAKS',
    subtitle: 'Archival 4-piece royal poshak with authentic Gota Patti border',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=85',
    link: '/collections/festive-edit',
    tag: 'Poshak'
  },
  {
    id: 'royal-aangi-blouses',
    title: 'AANGI CHOLI SETS',
    subtitle: 'Jaipur court sweetheart necklines & hand-stitched suraj-patti',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85',
    link: '/collections/aangi-blouses',
    tag: 'Aangi'
  }
];

const CategoryGrid = () => {
  return (
    <section className="labiii-circular-categories-section" aria-label="Shop By Category">
      <div className="container circular-categories-container">
        {/* Section Header with Golden Sparkles matching Auranic reference */}
        <div className="circular-cat-header">
          <h2 className="circular-cat-title">
            <span className="sparkle-accent" aria-hidden="true">✨</span>
            <span className="title-text">Shop By Category</span>
            <span className="sparkle-accent" aria-hidden="true">✨</span>
          </h2>
          <p className="circular-cat-subtitle">
            Explore authentic Rajasthani silhouettes, handcrafted gota embellishments &amp; breathable everyday suit sets
          </p>
        </div>

        {/* Circular Categories Grid (2 Columns on Mobile, 4 Columns on Tablet & Desktop) */}
        <div className="circular-cards-grid">
          {CIRCULAR_CATEGORIES.map((item) => (
            <article key={item.id} className="circular-card-item">
              <Link
                to={item.link}
                className="circle-link"
                aria-label={`Shop ${item.title}`}
              >
                {/* 1:1 Circular Media Frame with Terracotta Border Ring */}
                <div className="circle-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="circle-image"
                    loading="lazy"
                  />
                  {/* Subtle Dark Gradient Overlay for Crisp Text Readability */}
                  <div className="circle-scrim" />

                  {/* Centered Uppercase Category Label inside Circle Bottom */}
                  <div className="circle-label-box">
                    <span className="circle-label-text">{item.title}</span>
                  </div>
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
