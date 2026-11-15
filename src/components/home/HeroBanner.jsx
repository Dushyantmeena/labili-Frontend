import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <section className="labiii-fresh-hero" aria-label="Where Royal Roots Bloom Into Modern Elegance">
      <div className="hero-container">
        <div className="hero-editorial-grid">
          {/* Left Column: Fresh Feminine Narrative */}
          <div className="hero-narrative-col">
            <div className="hero-eyebrow-pill">
              <Sparkles size={12} className="pill-spark" />
              <span>JAIPUR ATELIER · SPRING / FESTIVE '26</span>
            </div>

            <h1 className="hero-editorial-title">
              Where Royal Roots Bloom <br />
              <em>Into Modern Elegance.</em>
            </h1>

            <p className="hero-editorial-desc">
              Born in the sunlit courtyards of Rajasthan. We create vibrant floral suit sets, graceful kalidar Anarkalis, and handcrafted Gota Patti aangis — uniting heirloom artisanal craft with breezy, contemporary femininity.
            </p>

            <div className="hero-cta-group">
              <Link to="/collections/kurta-sets" className="btn-hero-primary">
                <span>EXPLORE SPRING EDIT</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/collections/all" className="btn-hero-secondary">
                <span>VIEW THE LOOKBOOK</span>
              </Link>
            </div>

            {/* Hallmarks Row */}
            <div className="hero-hallmarks-strip">
              <div className="hallmark-pill">
                <span className="dot-sage" />
                <span>Pure Breathable Silks &amp; Cottons</span>
              </div>
              <div className="hallmark-pill">
                <span className="dot-sage" />
                <span>Hand-Stitched Gota Patti Needlework</span>
              </div>
              <div className="hallmark-pill">
                <span className="dot-sage" />
                <span>Tailored With 2" Alteration Margins</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Fashion Visual */}
          <div className="hero-visual-stage-col">
            <div className="editorial-stage-wrapper">
              {/* Main Campaign Canvas */}
              <div className="main-editorial-frame">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=85"
                  alt="Model in vibrant floral ethnic suit set walking in sunlit courtyard"
                  className="main-hero-img"
                  loading="eager"
                />
                <div className="main-frame-scrim" />
                <div className="main-frame-badge">
                  <span className="badge-kicker">SPRING ARRIVALS</span>
                  <span className="badge-title">The Floral Kalidar Edit</span>
                </div>
              </div>

              {/* Overlapping Inset Card: Craft Spotlight */}
              <div className="floating-craft-card">
                <div className="craft-card-thumb">
                  <img
                    src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=85"
                    alt="Hand-embroidered blush peach suit set"
                    className="craft-thumb-img"
                  />
                </div>
                <div className="craft-card-info">
                  <span className="craft-kicker">SIGNATURE CRAFT</span>
                  <h4 className="craft-heading">Blush Zari &amp; Gota Suit</h4>
                  <p className="craft-desc">Pure georgette with scalloped organza dupatta.</p>
                  <Link to="/collections/kurta-sets" className="craft-link">
                    <span>Shop Look</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
