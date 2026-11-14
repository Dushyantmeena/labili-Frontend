import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import './HeroBanner.scss';

const HeroBanner = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="labiii-hero-section" aria-label="Royal Roots. Modern Elegance.">
      <div className="hero-background-ambience" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-editorial-grid">
          {/* Left Editorial Copy & Story */}
          <div className="hero-copy-column">
            <div className="hero-hallmark-pill">
              <Sparkles size={12} className="pill-spark" />
              <span>JAIPUR ATELIER · HEIRLOOM SILHOUETTES</span>
            </div>

            <h1 className="hero-editorial-title">
              Royal Heritage, <br />
              <em>Reimagined</em> for Today.
            </h1>

            <p className="hero-tagline">
              Labiii — Royal Roots. Modern Elegance.
            </p>

            <p className="hero-editorial-desc">
              From the pink corridors of Jaipur to the world. We craft authentic Rajputi Aangi cholis, flowing Gota Patti lehengas, and artisanal handblock cottons — uniting regal grandeur with effortless comfort.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <Link to="/collections/festive-edit" className="btn-hero-primary">
                <span>EXPLORE FESTIVE EDIT</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/collections/aangi-blouses" className="btn-hero-secondary">
                <span>DISCOVER THE AANGI</span>
              </Link>
            </div>

            {/* Value Hallmarks */}
            <div className="hero-proof-bar">
              <div className="proof-item">
                <span className="proof-dot">✦</span>
                <span className="proof-text">In-House Sanganer Stitching Studio</span>
              </div>
              <div className="proof-item">
                <span className="proof-dot">✦</span>
                <span className="proof-text">Bespoke Fitting & 2" Alteration Margins</span>
              </div>
              <div className="proof-item">
                <span className="proof-dot">✦</span>
                <span className="proof-text">Bridal & Festive Poshak Rentals</span>
              </div>
            </div>
          </div>

          {/* Right Haute Couture Editorial Stage */}
          <div className="hero-visual-column">
            <div className="hero-stage-wrapper">
              {/* Decorative Subtle Gold Frame Accent */}
              <div className="stage-gold-frame" aria-hidden="true" />

              {/* Main Fashion Photograph */}
              <div className="main-editorial-card">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-steps.jpg?v=1793113045&width=1400"
                  alt="A majestic Rajasthani poshak ensemble handcrafted by Labiii, set against sandstone architecture"
                  className="editorial-main-img"
                  loading="eager"
                />

                {/* Subtle Ambient Vignette */}
                <div className="card-gradient-vignette" />

                {/* Live Reel Pause/Play Toggle */}
                <button
                  className="ambient-play-toggle"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause ambient view' : 'Play ambient view'}
                  type="button"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>

                {/* Bottom Caption Pill inside Card */}
                <div className="stage-bottom-pill">
                  <span className="pill-brand">Labiii Haute Couture</span>
                  <span className="pill-caption">The Royal Rajputana Poshak Edit</span>
                </div>
              </div>

              {/* Floating Craft Swatch Card (Asymmetric Composition) */}
              <div className="floating-craft-card">
                <div className="swatch-image-wrap">
                  <img
                    src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-sun-motif.jpg?v=1793113049&width=800"
                    alt="Authentic Gota Patti Sun Medallion Handwork"
                  />
                </div>
                <div className="swatch-info">
                  <span className="swatch-tag">Artisanal Detail</span>
                  <span className="swatch-title">Pure Zari Gota Patti</span>
                  <span className="swatch-artisan">Handcrafted by master karigars</span>
                </div>
              </div>

              {/* Coordinates Badge */}
              <div className="hero-coordinates-tag">
                <span>26.8504° N, 75.7667° E · JAIPUR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
