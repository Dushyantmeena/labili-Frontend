import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Ruler, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import './CustomRentalBanner.scss';

const CustomRentalBanner = () => {
  return (
    <section className="custom-rental-section">
      <div className="container">
        <div className="rental-banner-card">
          <div className="card-decoration-border" />
          <div className="rental-content">
            <span className="brand-eyebrow">The Royal Concierge</span>
            <h2>Custom Made or Rented for Your Special Occasion</h2>
            <div className="title-divider">
              <span className="divider-gem" />
            </div>
            <p className="rental-desc">
              Whether you wish to commission a bridal heirloom crafted to your exact proportions, or rent an opulent Gota Patti lehenga for a 3-day destination wedding, our Jaipur atelier brings royal Rajasthani couture to your doorstep.
            </p>

            <div className="rental-perks">
              <div className="perk">
                <Calendar size={18} className="perk-icon" />
                <span>3, 5, or 7-day wedding rental delivery across India</span>
              </div>
              <div className="perk">
                <Ruler size={18} className="perk-icon" />
                <span>Complimentary custom fitting & length alterations</span>
              </div>
              <div className="perk">
                <Sparkles size={18} className="perk-icon" />
                <span>Pristine dry-cleaned & steam pressed delivery</span>
              </div>
            </div>

            <div className="rental-actions">
              <Link to="/rent-custom" className="btn-primary">
                Book Rental or Custom Enquiry <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917665022710?text=Hi%20Labiii,%20I%20would%20like%20to%20enquire%20about%20custom%20stitching%20and%20rentals"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-atelier-btn"
              >
                <MessageCircle size={17} /> Direct WhatsApp Stylist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomRentalBanner;

