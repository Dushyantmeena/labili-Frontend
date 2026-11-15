import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import './InstagramLookbook.scss';

const InstagramIcon = ({ size = 13, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const INSTAGRAM_SHOTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=85',
    handle: '@ishita.sharma',
    caption: 'Sunlit mornings in Jaipur in my favourite @labiii.official floral kalidar set 🌸',
    likes: '1.4k'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=85',
    handle: '@ananya_singh',
    caption: 'Nothing compares to authentic Gota Patti needlework for Diwali celebrations ✨',
    likes: '2.1k'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=85',
    handle: '@priyanka_rathore',
    caption: 'Everyday elegance: 60s cambric cotton that breathes with you throughout the day 🌿',
    likes: '980'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=600&q=85',
    handle: '@divya.mehta',
    caption: 'Regal roots in modern hues. Wearing bespoke @labiii.official crimson poshak ❤️',
    likes: '3.2k'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85',
    handle: '@tanya_kapoor',
    caption: 'That iconic Rajputi Aangi choli cut with sweetheart neckline and gold tassels 💫',
    likes: '1.8k'
  }
];

const InstagramLookbook = () => {
  return (
    <section className="labiii-instagram-lookbook" aria-label="Instagram Community Lookbook">
      <div className="container">
        {/* Header */}
        <div className="lookbook-header">
          <div className="lookbook-eyebrow">
            <InstagramIcon size={13} className="insta-icon" />
            <span>@LABIII.OFFICIAL</span>
          </div>
          <h2 className="lookbook-title">
            Follow the <em>Journey</em>
          </h2>
          <p className="lookbook-subtitle">
            Tag #LabiiiWomen &amp; #RoyalRoots to be featured in our seasonal styling gallery.
          </p>
        </div>

        {/* 5-Column Photo Stream */}
        <div className="lookbook-photos-grid">
          {INSTAGRAM_SHOTS.map((shot) => (
            <a
              key={shot.id}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="lookbook-item-anchor"
              aria-label={`View Instagram post by ${shot.handle}`}
            >
              <div className="lookbook-image-stage">
                <img
                  src={shot.image}
                  alt={shot.caption}
                  className="lookbook-img"
                  loading="lazy"
                />
                <div className="lookbook-hover-scrim" />

                <div className="lookbook-overlay-info">
                  <div className="likes-pill">
                    <Heart size={12} fill="#FFFFFF" />
                    <span>{shot.likes}</span>
                  </div>
                  <span className="user-handle">{shot.handle}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramLookbook;
