import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <section className="labiii-modern-couture-hero" aria-label="Modern Contemporary Couture">
      <div className="hero-editorial-wrapper">
        <div className="hero-editorial-grid">
          {/* Main Visual Column — High-Fashion Couture Photography */}
          <div className="hero-main-visual">
            <div className="visual-media-stage">
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=85"
                alt="Modern Indian Couture Model in Emerald Silk Lehenga and Handcrafted Gota Patti"
                className="hero-main-fashion-img"
                loading="eager"
              />
              <div className="visual-scrim-ambient" />

              {/* Floating Signature Tag on Image */}
              <div className="image-couture-badge">
                <span className="badge-bullet">✦</span>
                <span>The Festive Heirloom Edit</span>
              </div>
            </div>
          </div>

          {/* Editorial Content & Story Column (Raw Mango / Anita Dongre Style) */}
          <div className="hero-editorial-content">
            <div className="content-inner-box">
              <div className="brand-hallmark-pill">
                <Sparkles size={12} className="pill-star" />
                <span>JAIPUR HAUTE COUTURE · AUTUMN FESTIVE 2026</span>
              </div>

              <h1 className="editorial-main-headline">
                Modern Soul. <br />
                <em>Royal Roots.</em>
              </h1>

              <p className="editorial-lede-text">
                From the royal courts of Rajasthan to the contemporary wardrobe. We craft celebratory Rajputi Aangis, 24-kali flared silk lehengas, and artisanal Sanganeri handblock cottons — uniting ancestral craft with effortless comfort.
              </p>

              {/* Minimal Luxury CTAs */}
              <div className="editorial-cta-row">
                <Link to="/collections/festive-edit" className="btn-modern-primary">
                  <span>EXPLORE FESTIVE COUTURE</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/collections/aangi-blouses" className="btn-modern-ghost">
                  <span>DISCOVER THE AANGI</span>
                </Link>
              </div>

              {/* Secondary Lookbook Detail Card */}
              <div className="hero-lookbook-mini-card">
                <Link to="/products/multiclour-gota-patti-rajputi-aangi-blouse" className="mini-card-thumb">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85"
                    alt="Intricate gold gota needlework blouse"
                  />
                </Link>
                <div className="mini-card-text">
                  <span className="mini-tag">ATELIER HIGHLIGHT</span>
                  <h4 className="mini-title">Archival Gota Patti Aangi</h4>
                  <p className="mini-desc">Hand-beaten gold ribbons on pure silk with 2-inch alteration margins.</p>
                  <Link to="/collections/aangi-blouses" className="mini-link">
                    <span>Explore Silhouette</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Craft Bar */}
        <div className="hero-craft-ticker">
          <div className="ticker-item">
            <span className="ticker-diamond">❖</span>
            <span>100% Pure Raw Silk &amp; Handloom Cottons</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-diamond">❖</span>
            <span>Generations of Jaipur Karigar Hand-Needlework</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-diamond">❖</span>
            <span>In-House Sanganer Stitching Studio</span>
          </div>
          <div className="ticker-item">
            <span className="ticker-diamond">❖</span>
            <span>Complimentary Custom Sizing &amp; Pan-India Express Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;