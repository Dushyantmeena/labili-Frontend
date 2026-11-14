import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Sparkles } from 'lucide-react';
import './ReelShowcase.scss';

const InstagramIcon = ({ size = 13 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const REELS = [
  {
    id: 'reel-1',
    image: 'https://www.baisajaipur.com/cdn/shop/files/preview_images/c236a3a0be90462caf1a24af1fb28040.thumbnail.0000000000.jpg?v=1730030238&width=600',
    title: 'Festive Poshak Twirl',
    caption: 'Heritage crimson silk with lappe gota border',
    handle: '@labiii.official',
    link: '/collections/festive-edit'
  },
  {
    id: 'reel-2',
    image: 'https://www.baisajaipur.com/cdn/shop/files/preview_images/9d6ff909242a435d8b6a33f6ee95f0a4.thumbnail.0000000000.jpg?v=1730030172&width=600',
    title: 'Gota-Patti Sleeve Work',
    caption: 'Sanganer atelier karigar detail close-up',
    handle: '@labiii.official',
    link: '/collections/aangi-blouses'
  },
  {
    id: 'reel-3',
    image: 'https://www.baisajaipur.com/cdn/shop/files/preview_images/431be25e508e4256b54d361900f83af8.thumbnail.0000000000.jpg?v=1730030188&width=600',
    title: 'Flared Peacock Skirt',
    caption: 'Pure chanderi silk with 24-kali flare',
    handle: '@labiii.official',
    link: '/collections/gota-patti-lehenga'
  },
  {
    id: 'reel-4',
    image: 'https://www.baisajaipur.com/cdn/shop/files/preview_images/5f48a3076eef4b03a56eb48bc7aa674f.thumbnail.0000000000.jpg?v=1730030206&width=600',
    title: 'Rani Pink on Mannequin',
    caption: 'Festive poshak ready for bridal dispatch',
    handle: '@labiii.official',
    link: '/collections/festive-edit'
  },
  {
    id: 'reel-5',
    image: 'https://www.baisajaipur.com/cdn/shop/files/preview_images/da7945c521b645ff9b1757a5325603fd.thumbnail.0000000000.jpg?v=1730030146&width=600',
    title: 'Studio Bridal Collection',
    caption: 'Private viewing lounge at Sachivalaya Vihar',
    handle: '@labiii.official',
    link: '/collections/all'
  }
];

const ReelShowcase = () => {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="labiii-reels-section" aria-label="Seen on Labiii">
      <div className="container">
        {/* Header with Title & Navigation Controls */}
        <div className="reels-header-row">
          <div className="reels-title-wrap">
            <span className="brand-eyebrow">The Runway &amp; Reels</span>
            <h2 className="reels-heading">Seen on <em>Labiii</em></h2>
            <p className="reels-subtext">
              Real movement, fluid silks, and authentic bridal twirls captured in our Jaipur atelier.
            </p>
          </div>

          <div className="reels-nav-buttons">
            <button
              className="reels-arrow-btn"
              onClick={scrollLeft}
              aria-label="Scroll reels left"
              type="button"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="reels-arrow-btn"
              onClick={scrollRight}
              aria-label="Scroll reels right"
              type="button"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Reels Track */}
        <div className="reels-scroll-track" ref={trackRef}>
          {REELS.map((reel) => (
            <div key={reel.id} className="editorial-reel-card">
              <div className="reel-media-box">
                <img src={reel.image} alt={reel.title} loading="lazy" />
                <div className="reel-gradient-scrim" />

                {/* Top Instagram Handle Pill */}
                <div className="reel-top-handle">
                  <InstagramIcon size={12} />
                  <span>{reel.handle}</span>
                </div>

                {/* Center Hover Play Icon */}
                <div className="reel-center-play">
                  <Play size={18} fill="#FFFFFF" color="#FFFFFF" />
                </div>

                {/* Bottom Story & Shop Link */}
                <div className="reel-bottom-info">
                  <h3 className="reel-title">{reel.title}</h3>
                  <p className="reel-caption">{reel.caption}</p>
                  <Link to={reel.link} className="reel-shop-link">
                    <span>Shop This Look</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelShowcase;
