import React, { useState } from 'react';
import { Pause, Play, Sparkles } from 'lucide-react';
import './SpiritOfRajasthan.scss';

const SpiritOfRajasthan = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="labiii-spirit-section" aria-label="The Spirit of Rajasthan">
      <div className="spirit-radial-glow" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="spirit-section-header">
          <div className="header-ornament" aria-hidden="true">
            <span className="ornament-line" />
            <span className="ornament-star">✦</span>
            <span className="ornament-line" />
          </div>
          <span className="spirit-eyebrow">Atelier Archive · Jaipur, Rajasthan</span>
          <h2 className="spirit-heading">The Spirit of Rajasthan</h2>
          <p className="spirit-subtext">
            Centuries of royal heritage, hand-beaten gold wire, and authentic Mewar silhouettes sculpted in our Jaipur studio.
          </p>
        </div>

        {/* 3-Column Editorial Stage */}
        <div className="spirit-editorial-stage">
          {/* Left Column: Heritage City & Motif */}
          <div className="spirit-side-col col-left">
            <figure className="spirit-craft-tile">
              <div className="tile-image-frame">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-pink-city-gate.jpg?v=1793113054&width=1400"
                  alt="Jaipur illuminated royal gate at night"
                  loading="lazy"
                />
              </div>
              <figcaption className="tile-caption">
                <strong className="caption-title">Pink City Nights</strong>
                <span className="caption-desc">Jaipur's illuminated gates and heritage monuments inspire our festive palette.</span>
              </figcaption>
            </figure>

            <figure className="spirit-craft-tile compact-tile">
              <div className="tile-image-frame">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-sun-motif.jpg?v=1793113049&width=1400"
                  alt="Gota patti sun medallion embroidery detail"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>

          {/* Center Stage: Royal Rajputana Portrait */}
          <div className="spirit-center-stage">
            <div className="center-stage-wrapper">
              <div className="center-photo-frame">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-odhni-portrait.jpg?v=1793113048&width=1400"
                  alt="Editorial portrait of a Rajasthani bride in red odhni with pure gota borders"
                  className="center-portrait-img"
                  loading="lazy"
                />
                <div className="center-photo-gradient" />

                {/* Pause/Play Ambient Button */}
                <button
                  className="center-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause ambient view' : 'Play ambient view'}
                  type="button"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>

                {/* Center Badge */}
                <div className="center-craft-badge">
                  <span className="badge-hallmark">✦ Labiii Heritage</span>
                  <span className="badge-title">Pure Silk Odhni & Gota Kinari</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hand-Embroidered Zardozi & Studio Silhouette */}
          <div className="spirit-side-col col-right">
            <figure className="spirit-craft-tile">
              <div className="tile-image-frame">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-gota-handwork-v2.jpg?v=1793114321&width=1400"
                  alt="Artisan applying gota patti ribbons by hand onto bandhani silk"
                  loading="lazy"
                />
              </div>
              <figcaption className="tile-caption">
                <strong className="caption-title">Hand-Applied Gota Patti</strong>
                <span className="caption-desc">Each gold leaf and petal is pressed and stitched by hand in our Sanganer atelier.</span>
              </figcaption>
            </figure>

            <figure className="spirit-craft-tile compact-tile">
              <div className="tile-image-frame">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-set.jpg?v=1793113052&width=1400"
                  alt="Handcrafted peacock teal lehenga ensemble"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritOfRajasthan;
