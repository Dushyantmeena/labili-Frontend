import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    title: 'Festive poshak twirl',
    handle: '@labiii.official'
  },
  {
    id: 'reel-2',
    image: 'https://www.baisajaipur.com/cdn/shop/files/preview_images/9d6ff909242a435d8b6a33f6ee95f0a4.thumbnail.0000000000.jpg?v=1730030172&width=600',
    title: 'Gota-patti sleeve handwork',
    handle: '@labiii.official'
  },
  {
    id: 'reel-3',
    image: 'https://www.baisajaipur.com/cdn/shop/files/preview_images/431be25e508e4256b54d361900f83af8.thumbnail.0000000000.jpg?v=1730030188&width=600',
    title: 'Dark teal flared skirt',
    handle: '@labiii.official'
  },
  {
    id: 'reel-4',
    image: 'https://www.baisajaipur.com/cdn/shop/files/preview_images/5f48a3076eef4b03a56eb48bc7aa674f.thumbnail.0000000000.jpg?v=1730030206&width=600',
    title: 'Rani pink on mannequin',
    handle: '@labiii.official'
  },
  {
    id: 'reel-5',
    image: 'https://www.baisajaipur.com/cdn/shop/files/preview_images/da7945c521b645ff9b1757a5325603fd.thumbnail.0000000000.jpg?v=1730030146&width=600',
    title: 'Studio lehenga collection',
    handle: '@labiii.official'
  }
];

const ReelShowcase = () => {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="v3 v3-reels" aria-label="Seen on The Baisa">
      <div className="v3-wrap">
        {/* Header with Title and Nav Buttons */}
        <div className="v3-head">
          <div>
            <p className="v3-eyebrow">Shoppable Reels</p>
            <h2 className="v3-h2">Seen on Labiii</h2>
            <p className="v3-lede">
              Real styles. Real movement. Made to be worn.
            </p>
          </div>

          <div className="v3-reels__nav">
            <button
              className="v3-reels__btn"
              onClick={scrollLeft}
              aria-label="Previous reels"
              type="button"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="v3-reels__btn"
              onClick={scrollRight}
              aria-label="Next reels"
              type="button"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Reels Track matching Screenshot 6 */}
        <div className="v3-reels__track" ref={trackRef}>
          {REELS.map((reel) => (
            <div key={reel.id} className="v3-reel-card">
              <div className="v3-reel-media">
                <img src={reel.image} alt={reel.title} loading="lazy" />
                <div className="v3-reel-handle">
                  <InstagramIcon size={13} />
                  <span>{reel.handle}</span>
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
