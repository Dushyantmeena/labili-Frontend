import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="labiii-editorial-footer" aria-label="Site Footer">
      {/* Minimalist Newsletter Strip (Quinces Quiet Luxury Style) */}
      <div className="footer-newsletter-section">
        <div className="container-wide">
          <div className="newsletter-editorial-row">
            <div className="newsletter-copy">
              <span className="newsletter-eyebrow">THE ROYAL CIRCLE</span>
              <h3 className="newsletter-headline">
                Receive Private Previews &amp; <em>Atelier Invitations</em>
              </h3>
              <p className="newsletter-sub">
                Be the first to access limited seasonal poshak drops, studio trunk shows in Jaipur, and patron-only privileges.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="newsletter-input-form">
              {subscribed ? (
                <div className="subscribe-success-badge">
                  <CheckCircle2 size={18} color="#C29B46" />
                  <span>Welcome to the circle. Kindly check your inbox.</span>
                </div>
              ) : (
                <div className="minimal-input-wrapper">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    aria-label="Email address for private newsletter"
                  />
                  <button type="submit" className="minimal-submit-btn" aria-label="Join Circle">
                    <span>JOIN</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main 4-Column Clean Editorial Grid (Quinces Style) */}
      <div className="footer-main-columns">
        <div className="container-wide">
          <div className="footer-cols-grid">
            {/* Column 1: Brand Ethos */}
            <div className="footer-col brand-col">
              <Link to="/" className="footer-brand-title">
                Labiii
              </Link>
              <p className="brand-statement">
                Quiet essentials and regal grandeur, cut honestly in Jaipur. A boutique royal wardrobe crafted with pure silk, hand-beaten Gota Patti, and breathable comfort — built to be worn for years, not seasons.
              </p>
              <div className="brand-heritage-tag">
                <Sparkles size={12} className="tag-spark" />
                <span>Jaipur Haute Couture · In-House Atelier</span>
              </div>
            </div>

            {/* Column 2: Collections */}
            <div className="footer-col">
              <h4 className="col-heading">Collections</h4>
              <ul className="footer-links-list">
                <li><Link to="/collections/aangi-blouses">Rajputi Aangi Cholis</Link></li>
                <li><Link to="/collections/festive-edit">Festive &amp; Bridal Poshak</Link></li>
                <li><Link to="/collections/gota-patti-lehenga">Gota Patti Lehengas</Link></li>
                <li><Link to="/collections/kurta-sets">Royal Kurta Sets</Link></li>
                <li><Link to="/collections/cotton-kurtis">Jaipur Cotton Edit</Link></li>
                <li><Link to="/collections/tops-tunics">Peplum &amp; Fusion Tops</Link></li>
                <li><Link to="/collections/all">View Complete Archive</Link></li>
              </ul>
            </div>

            {/* Column 3: Patron Care */}
            <div className="footer-col">
              <h4 className="col-heading">Patron Care</h4>
              <ul className="footer-links-list">
                <li><Link to="/about">Our Story &amp; Craft</Link></li>
                <li><Link to="/rent-custom">Bespoke Fitting &amp; Rentals</Link></li>
                <li><a href="https://wa.me/917665022710" target="_blank" rel="noreferrer">WhatsApp Concierge</a></li>
                <li><Link to="/account">My Royal Account</Link></li>
                <li><Link to="/wishlist">Saved Wishlist</Link></li>
                <li><Link to="/contact">Studio Appointments</Link></li>
              </ul>
            </div>

            {/* Column 4: Visit Us (Quinces Style) */}
            <div className="footer-col visit-col">
              <h4 className="col-heading">Visit Us</h4>
              <ul className="visit-info-list">
                <li className="visit-address">
                  <MapPin size={15} className="visit-icon" />
                  <span>46 Sachivalaya Vihar, New Sanganer Road, Jaipur, Rajasthan 302020</span>
                </li>
                <li className="visit-hours">
                  <span>Monday – Saturday: 10:30 AM – 8:00 PM</span>
                  <span>Sunday: 11:30 AM – 6:00 PM</span>
                </li>
                <li className="visit-contact">
                  <Phone size={14} className="visit-icon" />
                  <a href="tel:+917665022710">+91 76650 22710</a>
                </li>
                <li className="visit-contact">
                  <Mail size={14} className="visit-icon" />
                  <a href="mailto:concierge@labiii.com">concierge@labiii.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Signature Bar (Quinces Style) */}
      <div className="footer-bottom-bar">
        <div className="container-wide">
          <div className="bottom-bar-inner">
            <span className="copyright-text">
              © {new Date().getFullYear()} Labiii. All rights reserved.
            </span>

            <div className="payment-tags-row">
              <span className="pay-chip">UPI</span>
              <span className="pay-chip">Visa</span>
              <span className="pay-chip">Mastercard</span>
              <span className="pay-chip">RuPay</span>
              <span className="pay-chip">Cash on Delivery</span>
            </div>

            <span className="brand-italic-signoff">
              Royal Roots. Modern Elegance.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;