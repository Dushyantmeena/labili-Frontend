import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, ArrowRight, Check } from 'lucide-react';
import './AangiDetailDeepDive.scss';

const AANGI_VIEWS = [
  {
    id: 'full-piece',
    label: 'Full Silhouette',
    image: 'https://www.baisajaipur.com/cdn/shop/files/Embroidered_Ivory_and_Red_Choli.png?v=1791808189&width=1400',
    alt: 'Off-white, red and gold Rajputi Aangi blouse silhouette'
  },
  {
    id: 'gota-closeup',
    label: 'Gota Zari Close-up',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-sun-motif.jpg?v=1793113049&width=1400',
    alt: 'Gota-patti sun medallion embroidery detail'
  },
  {
    id: 'patchwork',
    label: 'Patchwork & Texture',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-gota-texture.jpg?v=1793113050&width=1400',
    alt: 'Hand-stitched silk patchwork panels with gold trim'
  },
  {
    id: 'dori',
    label: 'Dori & Tassels',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-dori.jpg?v=1793113051&width=1400',
    alt: 'Hem with braided silk dori and hand-twisted tassels'
  },
  {
    id: 'red-gold',
    label: 'Crimson & Gold',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-aangi-red-flatlay.jpg?v=1793120643&width=1400',
    alt: 'Crimson red aangi blouse with gold gota embroidery flatlay'
  },
  {
    id: 'styled-with',
    label: 'Styled Ensemble',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-set.jpg?v=1793113052&width=1400',
    alt: 'Aangi paired with flared peacock teal gota lehenga'
  }
];

const AangiDetailDeepDive = () => {
  const [activeTab, setActiveTab] = useState('full-piece');
  const currentView = AANGI_VIEWS.find((v) => v.id === activeTab) || AANGI_VIEWS[0];

  return (
    <section className="labiii-aangi-spotlight" aria-label="The Gota Patti Aangi Spotlight">
      <div className="container">
        <div className="spotlight-grid">
          {/* Left Media Stage */}
          <div className="spotlight-visual-stage">
            <div className="visual-frame-container">
              <img
                src={currentView.image}
                alt={currentView.alt}
                className="main-view-image"
                key={currentView.id}
              />
              <div className="visual-detail-badge">
                <Sparkles size={13} className="badge-spark" />
                <span>Active View: {currentView.label}</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Info */}
          <div className="spotlight-content-info">
            <div className="spotlight-eyebrow-pill">
              <span>ATELIER MASTERPIECE · GOTA PATTI COUTURE</span>
            </div>

            <h2 className="spotlight-heading">The Heirloom Rajputi Aangi</h2>

            <div className="spotlight-price-row">
              <span className="price-tag">From ₹2,999</span>
              <span className="price-note">· Tailored to measure or ready-to-wear</span>
            </div>

            <p className="spotlight-description">
              The soul of royal Rajputana dressing. Featuring a structured sweetheart bodice, hand-appliqued lappe gota flowers, and artisanal silk dori ties. Designed with 2-inch interior margins for effortless alteration.
            </p>

            {/* View Selector Pills */}
            <div className="spotlight-tabs-section">
              <span className="tabs-label">Inspect Garment Angles:</span>
              <div className="tabs-pills-wrap">
                {AANGI_VIEWS.map((item) => (
                  <button
                    key={item.id}
                    className={`view-selector-pill ${activeTab === item.id ? 'is-active' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                    type="button"
                  >
                    {activeTab === item.id && <Check size={12} className="check-icon" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="spotlight-actions-row">
              <Link to="/collections/aangi-blouses" className="btn-spotlight-primary">
                <span>VIEW THIS SILHOUETTE</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="https://wa.me/917665022710?text=Hi+Labiii%2C+I+am+interested+in+The+Gota+Patti+Aangi+bespoke+order"
                target="_blank"
                rel="noreferrer"
                className="btn-spotlight-whatsapp"
              >
                <MessageCircle size={15} />
                <span>BESPOKE STYLING</span>
              </a>
            </div>

            <div className="spotlight-guarantee-list">
              <span>✦ Pure Mulberry Silk &amp; Hand-Loomed Cotton Lining</span>
              <span>✦ 2-Inch Internal Margins for Custom Alterations</span>
              <span>✦ Authentic Jaipur Lappe Gota Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AangiDetailDeepDive;
