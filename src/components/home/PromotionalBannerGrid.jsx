import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Sparkles, Tag, Gift, Truck, ArrowRight } from 'lucide-react';
import { getActivePromotions } from '../../data/promotions';
import './PromotionalBannerGrid.scss';

const PromotionalCard = ({ promo }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (promo.code) {
      navigator.clipboard.writeText(promo.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const getPromoIcon = (id) => {
    if (id.includes('first-order')) return <Tag size={16} />;
    if (id.includes('festive-pair')) return <Gift size={16} />;
    return <Truck size={16} />;
  };

  return (
    <article
      className={`promo-campaign-card ${promo.isDark ? 'is-dark-theme' : 'is-light-theme'}`}
      style={{
        '--promo-accent': promo.accentColor,
        background: promo.bgGradient
      }}
    >
      <div className="promo-card-inner">
        {/* Top Meta Header */}
        <div className="promo-card-top">
          <span className="promo-badge-tag">
            <span className="badge-icon">{getPromoIcon(promo.id)}</span>
            <span>{promo.badge}</span>
          </span>
          {promo.code && (
            <div className="promo-code-container">
              <button
                className={`copy-code-pill ${copied ? 'is-copied' : ''}`}
                onClick={handleCopyCode}
                title="Click to copy coupon code"
                type="button"
                aria-label={`Copy coupon code ${promo.code}`}
              >
                <span className="code-label">USE CODE:</span>
                <strong className="code-string">{promo.code}</strong>
                {copied ? (
                  <Check size={13} className="copy-icon check-icon" />
                ) : (
                  <Copy size={13} className="copy-icon" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Promo Body Content */}
        <div className="promo-card-body">
          <span className="promo-highlight-ribbon">{promo.highlight}</span>
          <h3 className="promo-title">{promo.title}</h3>
          <p className="promo-description">{promo.description}</p>
        </div>

        {/* Footer with CTA and Terms */}
        <div className="promo-card-footer">
          <span className="promo-terms-note">{promo.terms}</span>
          <Link to={promo.ctaLink} className="promo-cta-link">
            <span>{promo.ctaText}</span>
            <ArrowRight size={14} className="arrow-icon" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const PromotionalBannerGrid = () => {
  const activePromos = getActivePromotions();

  if (!activePromos || activePromos.length === 0) {
    return null;
  }

  return (
    <section className="labiii-promotional-section" aria-label="Special Offers and Privileges">
      <div className="container">
        {/* Section Header */}
        <div className="promo-section-header">
          <div className="promo-header-pill">
            <Sparkles size={13} className="sparkle-icon" />
            <span>FESTIVE PRIVILEGES &amp; OFFERS</span>
          </div>
          <h2 className="promo-section-title">
            Curated Privileges for <em>The Royal Patron</em>
          </h2>
          <p className="promo-section-subtitle">
            Celebrate this season with complimentary bespoke fittings, paired trousseau savings, and white-glove express dispatch across India.
          </p>
        </div>

        {/* Promotional Campaign Cards Grid */}
        <div className="promo-cards-grid">
          {activePromos.map((promo) => (
            <PromotionalCard key={promo.id} promo={promo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalBannerGrid;