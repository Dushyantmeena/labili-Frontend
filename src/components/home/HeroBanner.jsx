import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play } from 'lucide-react';
import './HeroBanner.scss';

const HeroBanner = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="v3 v3-hero" aria-label="Royal Roots. Modern Elegance.">
      <span className="v3-hero__frame" aria-hidden="true" />

      <div className="v3-wrap v3-hero__grid">
        {/* Left Copy */}
        <div className="v3-hero__copy">
          <p className="v3-eyebrow">Jaipur · Rajasthan</p>
          <h1 className="v3-hero__title">LABIII</h1>
          <p className="v3-hero__sub">Royal Roots. Modern Elegance.</p>
          <p className="v3-hero__msg">
            From the heart of Jaipur, traditional elegance meets the way you dress today.
          </p>

          <div className="v3-hero__ctas">
            <Link to="/collections/festive-edit" className="v3-btn v3-btn--solid">
              EXPLORE THE ROYAL COLLECTION <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to="/collections/cotton-kurtis" className="v3-btn v3-btn--ghost">
              SHOP EVERYDAY ELEGANCE
            </Link>
          </div>

          <ul className="v3-hero__proof">
            <li>Own studio &amp; stitching unit in Sanganer, Jaipur</li>
            <li>Rental &amp; custom orders on request</li>
            <li>Styling help on WhatsApp</li>
          </ul>
        </div>

        {/* Right 3D Arch Visual */}
        <div className="v3-hero__visual">
          {/* Back Drop Shadow Arch */}
          <div className="v3-hero__layer v3-hero__back" aria-hidden="true" />

          {/* Gold Outline SVG Arch */}
          <div className="v3-hero__layer v3-hero__outline" aria-hidden="true">
            <svg
              className="v3-hero__o v3-hero__o--tall"
              viewBox="0 0 200 340"
              preserveAspectRatio="none"
              focusable="false"
            >
              <path d="M0,340 L0,112 L10,112 C0.90,107.95 5.57,77.92 15.19,78.63 C8.03,71.58 21.61,44.39 30.28,48.42 C25.85,39.35 47.05,17.57 53.83,24.22 C52.48,14.20 79.29,-0.10 83.63,8.33 C85.27,-1.04 114.73,-1.04 116.37,8.33 C120.71,-0.10 147.52,14.20 146.17,24.22 C152.95,17.57 174.15,39.35 169.72,48.42 C178.39,44.39 191.97,71.58 184.81,78.63 C194.43,77.92 199.10,107.95 190,112 L200,112 L200,340 Z" />
            </svg>
          </div>

          {/* Main Arched Window with Poshak Model */}
          <div className="v3-hero__window">
            <div className="v3-arch v3-arch--tall">
              <img
                src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-steps.jpg?v=1793113045&width=1400"
                alt="A festive Rajasthani poshak by The Baisa, worn at a sandstone temple"
                className="v3-hero__img"
              />
            </div>
            <button
              className="v3-play"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              type="button"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>

          {/* Overlapping Small Arch Medallion */}
          <div className="v3-hero__medallion">
            <div className="v3-arch">
              <img
                src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-sun-motif.jpg?v=1793113049&width=1400"
                alt="Gota-patti sun motif detail"
                className="v3-medallion__img"
              />
            </div>
          </div>

          {/* Caption Box */}
          <div className="v3-hero__caption">
            <div>
              <b>Festive poshak by Labiii</b>
              <span>Real footage from our Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
