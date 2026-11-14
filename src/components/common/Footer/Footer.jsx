import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles, Truck, RefreshCw } from 'lucide-react';
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
    <footer className="site-footer">
      {/* Guarantees & Values Strip */}
      <div className="footer-values-strip">
        <div className="container">
          <div className="values-grid">
            <div className="value-item">
              <Sparkles className="value-icon" size={24} />
              <div className="value-text">
                <h4>Heirloom Craftsmanship</h4>
                <p>Authentic Jaipur Gota Patti & Hand-block prints</p>
              </div>
            </div>
            <div className="value-item">
              <Truck className="value-icon" size={24} />
              <div className="value-text">
                <h4>Complimentary Delivery</h4>
                <p>Express dispatch on all domestic prepaid orders</p>
              </div>
            </div>
            <div className="value-item">
              <RefreshCw className="value-icon" size={24} />
              <div className="value-text">
                <h4>Custom Alterations</h4>
                <p>2-inch internal margins & custom-fit options</p>
              </div>
            </div>
            <div className="value-item">
              <ShieldCheck className="value-icon" size={24} />
              <div className="value-text">
                <h4>Secure Payments</h4>
                <p>100% verified gateway: UPI, Cards & COD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Strip */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-info">
              <span className="brand-eyebrow">The Royal Circle</span>
              <h3>Receive Invitations & Private Previews</h3>
              <p>Be the first to explore limited festive edits, runway releases, and studio trunk shows in Jaipur.</p>
            </div>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              {subscribed ? (
                <div className="newsletter-success">
                  <CheckCircle2 size={20} color="#2E7D32" />
                  <span>Welcome to the Labiii circle. Kindly check your inbox.</span>
                </div>
              ) : (
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    aria-label="Email Address for newsletter"
                  />
                  <button type="submit" className="subscribe-btn" aria-label="Subscribe">
                    Subscribe <Send size={15} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-col brand-col">
              <div className="footer-brand-heading">
                <img
                  src="/labiii-logo.png"
                  alt="Labiii - Timeless Comfort"
                  className="footer-logo-img"
                />
              </div>
              <p className="brand-desc">
                From the heart of Jaipur, traditional elegance meets the way you dress today. Heirloom Rajputi Aangi cholis, flowing Gota Patti lehengas, and handcrafted cotton silhouettes with timeless comfort.
              </p>
              <div className="studio-contact-list">
                <div className="contact-item">
                  <MapPin size={18} className="contact-icon" />
                  <span>46 Sachivalaya Vihar, New Sanganer Road, Jaipur, Rajasthan 302020</span>
                </div>
                <div className="contact-item">
                  <Phone size={18} className="contact-icon" />
                  <a href="tel:+917665022710">+91 76650 22710</a>
                </div>
                <div className="contact-item">
                  <Mail size={18} className="contact-icon" />
                  <a href="mailto:concierge@labiii.com">concierge@labiii.com</a>
                </div>
              </div>
            </div>

            {/* Collections Column */}
            <div className="footer-col">
              <h4 className="footer-heading">Collections</h4>
              <ul className="footer-nav">
                <li><Link to="/collections/aangi-blouses">Rajputi Aangi Blouses</Link></li>
                <li><Link to="/collections/gota-patti-lehenga">Gota Patti Lehengas</Link></li>
                <li><Link to="/collections/kurta-sets">Royal Kurta Sets</Link></li>
                <li><Link to="/collections/cotton-kurtis">Jaipur Cotton Kurtis</Link></li>
                <li><Link to="/collections/tops-tunics">Peplum & Fusion Tops</Link></li>
                <li><Link to="/collections/festive-edit">Festive & Wedding Edit</Link></li>
                <li><Link to="/rent-custom">Custom Couture & Rental</Link></li>
              </ul>
            </div>

            {/* Customer Care Column */}
            <div className="footer-col">
              <h4 className="footer-heading">Customer Care</h4>
              <ul className="footer-nav">
                <li><Link to="/about">Our Story & Craft</Link></li>
                <li><Link to="/contact">Visit Jaipur Studio</Link></li>
                <li><Link to="/rent-custom">Book Rental Appointment</Link></li>
                <li><Link to="/collections/all">Explore Full Catalog</Link></li>
                <li><a href="https://wa.me/917665022710" target="_blank" rel="noreferrer">WhatsApp Concierge</a></li>
                <li><Link to="/account">My Royal Account</Link></li>
                <li><Link to="/wishlist">Saved Wishlist</Link></li>
              </ul>
            </div>

            {/* Jaipur Studio Hours */}
            <div className="footer-col">
              <h4 className="footer-heading">Studio Visit</h4>
              <p className="studio-note">
                Experience our textiles in person at our Jaipur flagship boutique. Try on bespoke bridal pieces and speak with our master drapers.
              </p>
              <div className="hours-card">
                <div className="hours-row">
                  <span>Monday – Saturday:</span>
                  <span>10:30 AM – 8:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Sunday:</span>
                  <span>11:30 AM – 6:00 PM</span>
                </div>
              </div>
              <Link to="/contact" className="btn-secondary visit-btn">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Payment Badges */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="copyright-text">
              © {new Date().getFullYear()} LABIII · Timeless Comfort · Jaipur, Rajasthan · All rights reserved.
            </p>
            <div className="payment-badges">
              <span className="pay-pill">UPI</span>
              <span className="pay-pill">Visa</span>
              <span className="pay-pill">Mastercard</span>
              <span className="pay-pill">RuPay</span>
              <span className="pay-pill">Net Banking</span>
              <span className="pay-pill">Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

