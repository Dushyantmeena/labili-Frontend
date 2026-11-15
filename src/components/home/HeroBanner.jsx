import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <section className="labiii-heritage-hero" aria-label="Where Royal Heritage Meets Modern Grace">
      {/* Background Ambience Texture */}
      <div className="hero-sandstone-texture" aria-hidden="true" />

      <div className="hero-layout-grid">
        {/* Left Column: Editorial Headline & Narrative */}
        <div className="hero-narrative-col">
          <div className="hero-eyebrow-chip">
            <Sparkles size={12} className="chip-sparkle" />
            <span>JAIPUR ATELIER · AUTUMN / FESTIVE 2026</span>
          </div>

          <h1 className="hero-editorial-title">
            Where Royal Heritage <br />
            <em>Meets Modern Grace.</em>
          </h1>

          <p className="hero-editorial-desc">
            Born in the historic ateliers of Rajasthan. We craft architectural Rajputi Aangis, voluminous 24-kali flared silk lehengas, and breathable handblock cottons — uniting regal grandeur with contemporary ease.
          </p>

          <div className="hero-cta-group">
            <Link to="/collections/festive-edit" className="btn-hero-solid">
              <span>EXPLORE THE COLLECTION</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/about" className="btn-hero-outline">
              <span>DISCOVER OUR STORY</span>
            </Link>
          </div>

          {/* Value Hallmarks Strip */}
          <div className="hero-hallmarks-list">
            <div className="hallmark-entry">
              <span className="entry-icon">❖</span>
              <span className="entry-text">In-House Sanganer Stitching Studio</span>
            </div>
            <div className="hallmark-entry">
              <span className="entry-icon">❖</span>
              <span className="entry-text">Generational Gota Patti Karigar Craft</span>
            </div>
            <div className="hallmark-entry">
              <span className="entry-icon">❖</span>
              <span className="entry-text">Bespoke 2-Inch Alteration Margins</span>
            </div>
          </div>
        </div>

        {/* Right Column: Distinctive Layered Editorial Stage */}
        <div className="hero-visual-stage-col">
          <div className="editorial-stage-frame">
            {/* Primary Main Photograph */}
            <div className="main-editorial-canvas">
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=85"
                alt="Model in royal Rajasthani silk lehenga standing against sunlit sandstone haveli"
                className="main-hero-img"
                loading="eager"
              />
              <div className="main-canvas-scrim" />
              <div className="main-photo-caption">
                <span className="caption-tag">AUTUMN EDIT</span>
                <span className="caption-title">The Royal Rajputana Poshak</span>
              </div>
            </div>

            {/* Overlapping Secondary Lookbook Card */}
            <div className="secondary-lookbook-card">
              <div className="lookbook-thumb-frame">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85"
                  alt="Gota patti hand needlework close up"
                  className="lookbook-thumb-img"
                />
              </div>
              <div className="lookbook-meta-info">
                <span className="meta-kicker">CRAFT SPOTLIGHT</span>
                <h4 className="meta-heading">Archival Gota Patti Aangi</h4>
                <p className="meta-summary">Hand-beaten gold ribbons on pure silk with pure mulmul lining.</p>
                <Link to="/collections/aangi-blouses" className="meta-action-link">
                  <span>Explore Silhouette</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;