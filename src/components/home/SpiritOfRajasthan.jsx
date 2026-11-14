import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import './SpiritOfRajasthan.scss';

const SpiritOfRajasthan = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="v3 v3-spirit" aria-label="The Spirit of Rajasthan">
      <div className="v3-wrap">
        {/* Top Header matching Screenshot 4 */}
        <div className="v3-head v3-head--center">
          <div className="v3-ornament" aria-hidden="true">
            <span className="v3-line-left" />
            <span className="v3-star">✦</span>
            <span className="v3-line-right" />
          </div>
          <p className="v3-eyebrow">Real Labiii footage</p>
          <h2 className="v3-h2">The Spirit of Rajasthan</h2>
          <p className="v3-lede">
            Tradition in every silhouette. A new story in every style.
          </p>
        </div>

        {/* 3-Column Stage matching Screenshot 5 */}
        <div className="v3-spirit__stage">
          {/* Left Column */}
          <div className="v3-spirit__col v3-spirit__col--l">
            <figure className="v3-tile">
              <div className="v3-media">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-pink-city-gate.jpg?v=1793113054&width=1400"
                  alt="A lit city gate in Jaipur at night"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <b>Pink City nights</b>
                <span>Jaipur's gates and lights, filmed by our team.</span>
              </figcaption>
            </figure>

            <figure className="v3-tile">
              <div className="v3-media">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-sun-motif.jpg?v=1793113049&width=1400"
                  alt="Gota-patti sun motif on aangi"
                  loading="lazy"
                />
              </div>
            </figure>
          </div>

          {/* Center Jharokha Arch with Portrait */}
          <div className="v3-spirit__center">
            <div className="v3-spirit__arch-wrapper">
              <div className="v3-arch v3-arch--270">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-odhni-portrait.jpg?v=1793113048&width=1400"
                  alt="Portrait in a red odhni with gota border, styled by The Baisa"
                  className="v3-center-portrait"
                />
              </div>
              {/* Gold Arch Outline */}
              <div className="v3-outline" aria-hidden="true">
                <svg viewBox="0 0 200 270" preserveAspectRatio="none" focusable="false">
                  <path d="M0,270 L0,112 L10,112 C0.90,107.95 5.57,77.92 15.19,78.63 C8.03,71.58 21.61,44.39 30.28,48.42 C25.85,39.35 47.05,17.57 53.83,24.22 C52.48,14.20 79.29,-0.10 83.63,8.33 C85.27,-1.04 114.73,-1.04 116.37,8.33 C120.71,-0.10 147.52,14.20 146.17,24.22 C152.95,17.57 174.15,39.35 169.72,48.42 C178.39,44.39 191.97,71.58 184.81,78.63 C194.43,77.92 199.10,107.95 190,112 L200,112 L200,270 Z" />
                </svg>
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
          </div>

          {/* Right Column */}
          <div className="v3-spirit__col v3-spirit__col--r">
            <figure className="v3-tile">
              <div className="v3-media">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-gota-handwork-v2.jpg?v=1793114321&width=1400"
                  alt="Gota-patti being placed by hand on bandhani fabric"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <b>Gota, by hand</b>
                <span>Gota-patti placed by hand on bandhani during a Labiii production sprint.</span>
              </figcaption>
            </figure>

            <figure className="v3-tile">
              <div className="v3-media">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-set.jpg?v=1793113052&width=1400"
                  alt="Teal lehenga with pink aangi in studio"
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
