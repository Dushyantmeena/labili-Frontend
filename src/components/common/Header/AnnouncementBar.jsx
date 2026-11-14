import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, Clock } from 'lucide-react';
import './AnnouncementBar.scss';

const ANNOUNCEMENTS = [
  {
    icon: Sparkles,
    text: 'Royal Roots. Modern Elegance — Jaipur Haute Couture & Heirloom Craft'
  },
  {
    icon: Truck,
    text: 'Complimentary Express Shipping Across India on Orders Above ₹4,999'
  },
  {
    icon: Clock,
    text: 'Bespoke Sizing, Alteration Margins & Poshak Rentals Available'
  }
];

const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = ANNOUNCEMENTS[currentIndex];
  const IconComponent = current.icon;

  return (
    <aside className="labiii-announcement-bar" aria-label="Announcement banner">
      <div className="labiii-announcement-inner">
        <div className="announcement-pill">
          <IconComponent size={12} className="announcement-icon" />
          <span className="announcement-text" key={currentIndex}>
            {current.text}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default AnnouncementBar;
