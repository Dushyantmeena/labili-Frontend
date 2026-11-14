import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Sparkles, MessageCircle } from 'lucide-react';
import './ShoppingSupportStrip.scss';

const ShoppingSupportStrip = () => {
  return (
    <section className="shopping-support-strip-section">
      <div className="container">
        <div className="support-strip-grid">
          <div className="support-item-card">
            <div className="card-top-icon">
              <Ruler size={22} color="#8A1528" />
            </div>
            <h3>Find your fit</h3>
            <p>Check the size guide and each product’s available options and 2-inch alteration margins before choosing a piece.</p>
            <Link to="/about" className="support-action-link">
              Size guide & alterations ↗
            </Link>
          </div>

          <div className="support-item-card">
            <div className="card-top-icon">
              <Sparkles size={22} color="#8A1528" />
            </div>
            <h3>Your occasion, your way</h3>
            <p>Ask about bridal rental availability, custom colorways, or made-to-measure tailoring before booking.</p>
            <Link to="/rent-custom" className="support-action-link">
              Rent or customize ↗
            </Link>
          </div>

          <div className="support-item-card">
            <div className="card-top-icon">
              <MessageCircle size={22} color="#8A1528" />
            </div>
            <h3>Need a hand?</h3>
            <p>Speak directly with the Labiii stylist team in Jaipur about a style, sizing, or order assistance.</p>
            <a
              href="https://wa.me/917665022710?text=Hello%20Labiii,%20I%20need%20styling%20assistance"
              target="_blank"
              rel="noreferrer"
              className="support-action-link"
            >
              WhatsApp the team ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingSupportStrip;

