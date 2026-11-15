import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import './RajasthaniCraftSection.scss';

const RAJASTHANI_CRAFTS = [
  {
    id: 'gota-patti',
    tag: 'ROYAL HEIRLOOM',
    title: 'Gota Patti Needlework',
    subtitle: 'Hand-beaten gold and silver ribbons appliqué-stitched onto pure raw silk by Jaipur master artisans.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85',
    link: '/collections/aangi-blouses',
    accentColor: '#AD6655' // Terracotta
  },
  {
    id: 'bandhani-art',
    tag: 'TRADITIONAL KNOTTING',
    title: 'Authentic Bandhani',
    subtitle: 'Thousands of micro-knots meticulously tied by hand to yield delicate speckled geometric patterns.',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=85',
    link: '/collections/festive-edit',
    accentColor: '#C98289' // Dusty Rose
  },
  {
    id: 'leheriya-waves',
    tag: 'FESTIVE RHYTHM',
    title: 'Leheriya Ripples',
    subtitle: 'Iconic diagonal wave tie-dye technique capturing the fluid dance of Rajasthan monsoons and celebrations.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=85',
    link: '/collections/kurta-sets',
    accentColor: '#E9B99F' // Muted Peach
  },
  {
    id: 'handblock-print',
    tag: 'NATURAL BOTANICALS',
    title: 'Sanganeri Hand Block',
    subtitle: 'Intricately carved teakwood blocks hand-stamped onto breathable 60s cambric cotton in Jaipur.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85',
    link: '/collections/cotton-kurtis',
    accentColor: '#A6B59A' // Sage Green
  }
];

const RajasthaniCraftSection = () => {
  return (
    <section className="labiii-rajasthani-crafts-section" aria-label="Authentic Rajasthani Craftsmanship">
      <div className="container">
        {/* Section Header */}
        <div className="craft-section-header">
          <div className="header-pill">
            <Sparkles size={11} className="spark-icon" />
            <span>HEIRLOOM HERITAGE</span>
          </div>
          <h2 className="header-title">
            The Living Crafts of <em>Rajasthan</em>
          </h2>
          <p className="header-desc">
            Centuries of royal textile traditions reinterpreted for the modern wardrobe. Every garment honors the generational karigars of Jaipur.
          </p>
        </div>

        {/* 4-Card Craft Grid */}
        <div className="craft-pillars-grid">
          {RAJASTHANI_CRAFTS.map((craft) => (
            <article key={craft.id} className="craft-pillar-card">
              <Link to={craft.link} className="craft-card-link">
                <div className="craft-image-frame">
                  <img
                    src={craft.image}
                    alt={craft.title}
                    className="craft-media-img"
                    loading="lazy"
                  />
                  <div className="craft-image-scrim" />
                  <span className="craft-badge-tag" style={{ borderColor: craft.accentColor }}>
                    {craft.tag}
                  </span>
                </div>

                <div className="craft-card-body">
                  <h3 className="craft-card-title">{craft.title}</h3>
                  <p className="craft-card-desc">{craft.subtitle}</p>
                  <span className="craft-explore-cta">
                    <span>Explore Silhouettes</span>
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

export default RajasthaniCraftSection;
