import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <section className="labiii-editorial-hero" aria-label="Labiii Editorial Hero">
      {/* Background Editorial Photography */}
      <div className="hero-media-backdrop">
        <img
          src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-steps.jpg?v=1793113045&width=1800"
          alt="Royal Rajasthani poshak ensemble handcrafted by Labiii on sandstone steps"
          className="hero-backdrop-img"
          loading="eager"
        />
        {/* Cinematic Scrim Gradient Overlay */}
        <div className="hero-scrim-gradient" />
      </div>

      {/* Bottom-Anchored Editorial Content (Quinces Style) */}
      <div className="hero-stage-container">
        {/* Left Headline & Quiet Story */}
        <div className="hero-headline-block">
          <div className="hero-eyebrow-line">
            <Sparkles size={13} className="eyebrow-star" />
            <span>JAIPUR ATELIER · HEIRLOOM SILHOUETTES</span>
          </div>

          <h1 className="hero-title">
            Royal Roots, <br />
            <em>Distilled.</em>
          </h1>

          <p className="hero-subtitle">
            Considered heirloom silhouettes in pure silks and hand-beaten Gota Patti — handcrafted in our Sanganer atelier to be worn and cherished for generations.
          </p>

          <div className="hero-actions-row">
            <Link to="/collections/festive-edit" className="btn-hero-outline">
              <span>EXPLORE THE EDIT</span>
            </Link>
            <Link to="/collections/aangi-blouses" className="btn-hero-textlink">
              <span>The Rajputi Aangi</span>
              <ArrowRight size={14} className="arrow-icon" />
            </Link>
          </div>
        </div>

        {/* Right Floating Campaign Card (Quinces Mid-Season Edit Style) */}
        <div className="hero-floating-card">
          <div className="floating-card-inner">
            <Link to="/products/handcrafted-gota-patti-aangi-blouse-ivory" className="card-thumb-link">
              <img
                src="https://www.baisajaipur.com/cdn/shop/files/Embroidered_Ivory_and_Red_Choli.png?v=1791808189&width=300"
                alt="Ivory Gota Patti Rajputi Aangi Choli"
                className="card-thumb-img"
              />
            </Link>

            <div className="card-info-pane">
              <span className="card-eyebrow">NEW SEASON PREVIEW</span>
              <h3 className="card-heading">
                The Festive Edit is On
              </h3>
              <p className="card-subnote">
                Bespoke sizing · Extra 10% off with <strong>ROYAL10</strong>
              </p>
              <Link to="/collections/aangi-blouses" className="card-italic-link">
                <span>Shop This Look</span>
                <ArrowRight size={13} className="arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;