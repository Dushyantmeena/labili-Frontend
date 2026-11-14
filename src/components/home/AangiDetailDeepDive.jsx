import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AangiDetailDeepDive.scss';

const AANGI_VIEWS = [
  {
    id: 'full-piece',
    label: 'Full piece',
    image: 'https://www.baisajaipur.com/cdn/shop/files/Embroidered_Ivory_and_Red_Choli.png?v=1791808189&width=1400',
    alt: 'Off-white, red and gold aangi blouse on a hanger'
  },
  {
    id: 'gota-closeup',
    label: 'Gota close-up',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-sun-motif.jpg?v=1793113049&width=1400',
    alt: 'Gota-patti sun motif on a multicolour aangi'
  },
  {
    id: 'patchwork',
    label: 'Patchwork & texture',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-gota-texture.jpg?v=1793113050&width=1400',
    alt: 'Patchwork panels with gota diamonds'
  },
  {
    id: 'dori',
    label: 'Dori & tassels',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-dori.jpg?v=1793113051&width=1400',
    alt: 'Hem with dori tie and tassels'
  },
  {
    id: 'red-gold',
    label: 'Red with gold work',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-red-flatlay.jpg?v=1793120643&width=1400',
    alt: 'Red aangi blouse with gold gota-patti sun motifs laid flat'
  },
  {
    id: 'styled-with',
    label: 'Styled with',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-set.jpg?v=1793113052&width=1400',
    alt: 'Pink aangi with the dark teal gota-patti lehenga skirt'
  }
];

const AangiDetailDeepDive = () => {
  const [activeTab, setActiveTab] = useState('full-piece');
  const currentView = AANGI_VIEWS.find((v) => v.id === activeTab) || AANGI_VIEWS[0];

  return (
    <section className="v3 v3-explore" aria-label="The Gota Patti Aangi">
      <div className="v3-wrap v3-explore__grid">
        {/* Left Visual: Stacked Cards Effect */}
        <div className="v3-explore__stack">
          <div className="v3-stack-card back-card" aria-hidden="true">
            <img
              src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-sun-motif.jpg?v=1793113049&width=1400"
              alt=""
            />
          </div>
          <div className="v3-stack-card main-card">
            <img
              src={currentView.image}
              alt={currentView.alt}
              className="v3-explore__img"
              key={currentView.id}
            />
          </div>
        </div>

        {/* Right Details Info matching Screenshot 7 */}
        <div className="v3-explore__info">
          <p className="v3-eyebrow">Look closer</p>
          <h2 className="v3-h2">The Gota Patti Aangi</h2>
          <p className="v3-explore__price">
            From <b>Rs. 2,999.00</b> · price varies by option
          </p>

          <p className="v3-explore__desc">
            Switch views to see the garment itself: full piece, gota work, patchwork, ties and the red colourway.
          </p>

          {/* 6 View Buttons */}
          <div className="v3-view-buttons-grid">
            {AANGI_VIEWS.map((item) => (
              <button
                key={item.id}
                className={`v3-view-pill ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="v3-explore__actions">
            <Link to="/collections/aangi-blouses" className="v3-btn v3-btn--solid">
              VIEW THIS PIECE
            </Link>
            <a
              href="https://wa.me/917665022710?text=Hi+Labiii%2C+I+am+interested+in+The+Gota+Patti+Aangi"
              target="_blank"
              rel="noreferrer"
              className="v3-btn v3-btn--ghost"
            >
              ASK ON WHATSAPP
            </a>
          </div>

          <p className="v3-explore__fine">
            Blouse only unless your selected option says set. Colour may vary slightly on screen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AangiDetailDeepDive;
