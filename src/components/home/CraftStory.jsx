import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import './CraftStory.scss';

const CraftStory = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="v3 v3-making" aria-label="Chapter 1 · The Inspiration">
      <div className="v3-wrap">
        <div className="v3-making__grid">
          {/* Left Column: Roman Numeral I & Text matching Screenshot 8 */}
          <div className="v3-making__copy">
            <span className="v3-chapter-num">I</span>
            <p className="v3-eyebrow">Chapter 1 · The Inspiration</p>
            <h2 className="v3-h2">Ideas start in Jaipur</h2>
            <p className="v3-making__lede">
              Our designs start with Jaipur itself: its gates, lights and festive colour. Ideas are sketched in our studio.
            </p>

            <ul className="v3-making__bullets">
              <li>
                <span className="diamond-bullet">◇</span>
                <span>Sketching in our own studio</span>
              </li>
              <li>
                <span className="diamond-bullet">◇</span>
                <span>Reference boards for silhouette and colour</span>
              </li>
            </ul>
          </div>

          {/* Center Arch Visual: Pink City Gate */}
          <div className="v3-making__center">
            <figure className="v3-making-figure">
              <div className="v3-making__arch-media">
                <div className="v3-arch v3-arch--270">
                  <img
                    src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-pink-city-gate.jpg?v=1793113054&width=1400"
                    alt="Pink City gates illuminated at night, filmed by The Baisa team in Jaipur"
                    className="v3-making__img"
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
              <figcaption className="v3-caption-below">
                Filmed by the Labiii team in Jaipur.
              </figcaption>
            </figure>
          </div>

          {/* Right Visual: Designer Studio Sketching */}
          <div className="v3-making__right">
            <figure className="v3-making-figure">
              <div className="v3-making__rect-media">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-unit-sketch.jpg?v=1793113055&width=1400"
                  alt="Design sketching in the studio with moodboard"
                  className="v3-making__img"
                />
              </div>
              <figcaption className="v3-caption-below">
                Design sketching in the studio.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftStory;
