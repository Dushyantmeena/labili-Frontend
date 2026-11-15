import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import './CraftStory.scss';

const CraftStory = () => {
  return (
    <section className="labiii-editorial-our-story" aria-label="Our Story & Atelier">
      <div className="container-wide">
        <div className="story-split-grid">
          {/* Left Column: Natural-Light Atelier Photography (Quinces Style) */}
          <div className="story-media-stage">
            <div className="story-image-wrap">
              <img
                src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-pink-city-gate.jpg?v=1793113054&width=1400"
                alt="Inside the Labiii Jaipur Atelier — Handcrafted textiles and royal Rajputana heritage"
                className="story-main-img"
                loading="lazy"
              />
            </div>
            {/* Ambient Caption Tag */}
            <div className="story-caption-pill">
              <Sparkles size={11} className="caption-spark" />
              <span>Sanganer Atelier · Jaipur, Rajasthan</span>
            </div>
          </div>

          {/* Right Column: Magazine-Style Editorial Narrative (Quinces Style) */}
          <div className="story-editorial-copy">
            <span className="story-eyebrow">THE LABIII DEVOTION</span>

            <h2 className="story-title">
              Our <em>Story</em>
            </h2>

            <p className="story-lead-p">
              Labiii began in a quiet Jaipur atelier with a single conviction: fewer pieces, crafted with royal reverence. We design the heirloom silhouettes that anchor an ethnic wardrobe — cut honestly, sourced responsibly, and made to be worn and cherished for decades.
            </p>

            <p className="story-secondary-p">
              From our signature Rajputi Aangi cholis with architectural necklines to flowing 24-kali Gota Patti lehengas, each garment is tailored in our Sanganer workshop with breathable cotton linings and 2-inch alteration margins — uniting timeless regal grace with modern ease.
            </p>

            {/* Atelier Hallmark Strip */}
            <div className="story-hallmarks-row">
              <div className="hallmark-cell">
                <span className="cell-num">40+</span>
                <span className="cell-label">Hours of Gota Needlework</span>
              </div>
              <div className="hallmark-cell">
                <span className="cell-num">100%</span>
                <span className="cell-label">Pure Silk &amp; Handloom Cottons</span>
              </div>
              <div className="hallmark-cell">
                <span className="cell-num">2"</span>
                <span className="cell-label">Bespoke Fitting Margins</span>
              </div>
            </div>

            <Link to="/about" className="story-italic-link">
              <span>Discover Our Heritage &amp; Craft</span>
              <ArrowRight size={14} className="arrow-icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftStory;