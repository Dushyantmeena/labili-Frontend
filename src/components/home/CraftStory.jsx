import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pause, Play, Sparkles, ArrowRight } from 'lucide-react';
import './CraftStory.scss';

const CraftStory = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="labiii-craft-journal" aria-label="The Labiii Craft Journal">
      <div className="container">
        <div className="journal-editorial-grid">
          {/* Left Narrative Column */}
          <div className="journal-copy-col">
            <div className="journal-chapter-tag">
              <Sparkles size={12} className="tag-spark" />
              <span>THE ATELIER JOURNAL · CHAPTER I</span>
            </div>

            <h2 className="journal-title">
              Conceived in the <em>Pink City</em>
            </h2>

            <p className="journal-lede">
              Every Labiii silhouette begins as a conversation between Mewar heritage and modern life. Ideas sketched in our Sanganer atelier reflect the architecture, desert light, and celebratory soul of Rajasthan.
            </p>

            <div className="journal-craft-pillars">
              <div className="pillar-row">
                <span className="pillar-num">01</span>
                <div>
                  <strong className="pillar-name">Archival Jaipur Sketching</strong>
                  <p className="pillar-desc">
                    Silhouettes drafted on handmade paper, capturing royal court cholis and royal wedding poshak cuts.
                  </p>
                </div>
              </div>

              <div className="pillar-row">
                <span className="pillar-num">02</span>
                <div>
                  <strong className="pillar-name">Heirloom Gota Patti &amp; Zari</strong>
                  <p className="pillar-desc">
                    Genuine gold and silver ribbons pressed, folded, and stitched petal by petal by generations of karigars.
                  </p>
                </div>
              </div>

              <div className="pillar-row">
                <span className="pillar-num">03</span>
                <div>
                  <strong className="pillar-name">Tailored for Modern Comfort</strong>
                  <p className="pillar-desc">
                    Soft breathable cotton inner linings and generous 2-inch interior margins for a bespoke fit.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about" className="journal-explore-link">
              <span>READ THE COMPLETE ATELIER STORY</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Photographic Essay */}
          <div className="journal-visual-col">
            <div className="journal-photo-stage">
              {/* Main Visual: City Gate Illuminated */}
              <div className="photo-card main-city-card">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-pink-city-gate.jpg?v=1793113054&width=1400"
                  alt="Jaipur illuminated royal gate at night"
                  loading="lazy"
                />
                <button
                  className="photo-play-toggle"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause ambient clip' : 'Play ambient clip'}
                  type="button"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                </button>
                <div className="photo-bottom-caption">
                  <span>Jaipur Royal Gates · Architectural Inspiration</span>
                </div>
              </div>

              {/* Offset Visual: Designer Sketching at Studio */}
              <div className="photo-card offset-studio-card">
                <img
                  src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-unit-sketch.jpg?v=1793113055&width=1400"
                  alt="Designer sketching Rajputi silhouettes at Labiii Studio"
                  loading="lazy"
                />
                <div className="photo-studio-tag">
                  <span>Studio Sketching &amp; Moodboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftStory;
