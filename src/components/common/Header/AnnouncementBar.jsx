import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, Tag, ShieldCheck, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';
import './AnnouncementBar.scss';

const ANNOUNCEMENT_ITEMS = [
  {
    id: 'ann-1',
    badge: 'AUTUMN / FESTIVE 2026',
    text: 'Where Royal Heritage Meets Modern Grace — The New Collection is Live',
    linkText: 'Explore New In',
    linkUrl: '/collections/festive-edit',
    code: null
  },
  {
    id: 'ann-2',
    badge: 'COMPLIMENTARY SHIPPING',
    text: 'White-Glove Express Courier Across India on Orders Above ₹4,999',
    linkText: 'Shop All',
    linkUrl: '/collections/all',
    code: 'FREESHIP'
  },
  {
    id: 'ann-3',
    badge: 'BESPOKE TAILORING',
    text: 'Every Ensemble Crafted with Pure Cotton Linings & 2" Alteration Margins',
    linkText: 'Our Atelier',
    linkUrl: '/about',
    code: null
  },
  {
    id: 'ann-4',
    badge: 'NEW PATRON PRIVILEGE',
    text: 'Enjoy Flat 10% Off on Your Maiden Heirloom Commission',
    linkText: 'Use Code',
    linkUrl: '/collections/all',
    code: 'ROYAL10'
  }
];

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_ITEMS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleCopy = (code, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2200);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENT_ITEMS.length) % ANNOUNCEMENT_ITEMS.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_ITEMS.length);
  };

  const item = ANNOUNCEMENT_ITEMS[currentIndex];

  return (
    <aside
      className="labiii-announcement-bar"
      aria-label="Promotions and Announcements"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="announcement-track-container">
        <button
          className="ticker-arrow-btn prev-btn"
          onClick={handlePrev}
          aria-label="Previous announcement"
          type="button"
        >
          <ChevronLeft size={13} />
        </button>

        <div className="announcement-content-slide" key={item.id}>
          <div className="badge-tag">
            <Sparkles size={11} className="badge-star" />
            <span>{item.badge}</span>
          </div>

          <span className="announcement-message">
            {item.text}
          </span>

          {item.code && (
            <button
              className={`promo-code-pill ${copiedCode === item.code ? 'is-copied' : ''}`}
              onClick={(e) => handleCopy(item.code, e)}
              type="button"
              title="Click to copy coupon code"
            >
              <span className="code-label">CODE:</span>
              <strong className="code-value">{item.code}</strong>
              {copiedCode === item.code ? (
                <span className="copied-note"><Check size={11} /> COPIED</span>
              ) : (
                <Copy size={11} className="copy-icon" />
              )}
            </button>
          )}
        </div>

        <button
          className="ticker-arrow-btn next-btn"
          onClick={handleNext}
          aria-label="Next announcement"
          type="button"
        >
          <ChevronRight size={13} />
        </button>
      </div>
    </aside>
  );
};

export default AnnouncementBar;