import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, Tag, Gift, Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { getActivePromotions } from '../../../data/promotions';
import './AnnouncementBar.scss';

const EVERGREEN_ANNOUNCEMENTS = [
  {
    id: 'ann-roots',
    icon: Sparkles,
    badge: 'ATELIER',
    text: 'Royal Roots. Modern Elegance — Jaipur Haute Couture & Heirloom Rajputi Craft',
    code: null
  },
  {
    id: 'ann-rental',
    icon: Gift,
    badge: 'BESPOKE',
    text: 'Bespoke Sizing, Alteration Margins & Bridal Poshak Rentals Available on Request',
    code: null
  }
];

const AnnouncementBar = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    // Build announcements list from active marketing promotions + evergreen messages
    const activePromos = getActivePromotions();
    const promoMessages = activePromos.map((p) => ({
      id: p.id,
      icon: p.id.includes('first-order') ? Tag : p.id.includes('free-shipping') ? Truck : Gift,
      badge: p.badge || 'OFFER',
      text: `${p.title} · ${p.terms}`,
      code: p.code || null
    }));

    const combined = [...promoMessages, ...EVERGREEN_ANNOUNCEMENTS];
    setMessages(combined.length > 0 ? combined : EVERGREEN_ANNOUNCEMENTS);
  }, []);

  useEffect(() => {
    if (messages.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [messages.length, isPaused]);

  const handleCopyCode = (code, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2200);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  if (!messages.length) return null;

  const current = messages[currentIndex] || messages[0];
  const IconComponent = current.icon || Sparkles;

  return (
    <aside
      className="labiii-announcement-bar"
      aria-label="Promotional ticker"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="labiii-announcement-inner">
        {/* Previous Message Chevron */}
        <button
          className="ticker-nav-btn prev-ticker"
          onClick={handlePrev}
          aria-label="Previous announcement"
          type="button"
        >
          <ChevronLeft size={13} />
        </button>

        {/* Dynamic Announcement Pill */}
        <div className="announcement-pill" key={current.id || currentIndex}>
          <div className="announcement-badge-wrap">
            <IconComponent size={12} className="announcement-icon" />
            {current.badge && <span className="announcement-badge">{current.badge}</span>}
          </div>

          <span className="announcement-text">
            {current.text}
          </span>

          {current.code && (
            <button
              className={`announcement-code-chip ${copiedCode === current.code ? 'is-copied' : ''}`}
              onClick={(e) => handleCopyCode(current.code, e)}
              title="Click to copy coupon code"
              type="button"
              aria-label={`Copy discount code ${current.code}`}
            >
              <span className="chip-prefix">CODE:</span>
              <strong className="chip-code">{current.code}</strong>
              {copiedCode === current.code ? (
                <span className="chip-copied-tag">
                  <Check size={11} /> COPIED
                </span>
              ) : (
                <Copy size={11} className="chip-copy-icon" />
              )}
            </button>
          )}
        </div>

        {/* Next Message Chevron */}
        <button
          className="ticker-nav-btn next-ticker"
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