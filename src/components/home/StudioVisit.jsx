import React from 'react';
import { MapPin, Clock, Phone, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import './StudioVisit.scss';

const StudioVisit = () => {
  return (
    <section className="studio-visit-section">
      <div className="container">
        <div className="studio-card-grid">
          <div className="studio-info-side">
            <span className="brand-eyebrow">Jaipur Flagship Studio</span>
            <h2 className="studio-title">Experience the Textiles in Person</h2>
            <div className="title-divider left-align">
              <span className="divider-gem" />
            </div>

            <p className="studio-text">
              We warmly invite you to our serene atelier in Jaipur. Feel the rich drape of pure raw silk, inspect our meticulous gota patti work under natural light, and work directly with our master drapers to craft your bespoke ensemble.
            </p>

            <div className="studio-meta-details">
              <div className="meta-row">
                <MapPin className="meta-icon" size={20} />
                <div>
                  <strong>Address</strong>
                  <p>46 Sachivalaya Vihar, New Sanganer Road, Jaipur, Rajasthan 302020</p>
                </div>
              </div>

              <div className="meta-row">
                <Clock className="meta-icon" size={20} />
                <div>
                  <strong>Visiting Hours</strong>
                  <p>Monday to Saturday: 10:30 AM – 8:00 PM | Sunday: 11:30 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="meta-row">
                <Phone className="meta-icon" size={20} />
                <div>
                  <strong>Direct Concierge</strong>
                  <p><a href="tel:+917665022710">+91 76650 22710</a></p>
                </div>
              </div>
            </div>

            <div className="studio-buttons-row">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Labiii%2C+46+Sachivalaya+Vihar%2C+New+Sanganer+Road%2C+Jaipur%2C+Rajasthan+302020"
                target="_blank"
                rel="noreferrer"
                className="btn-primary maps-btn"
              >
                Open in Google Maps <ExternalLink size={15} />
              </a>

              <a
                href="https://wa.me/917665022710?text=Hello%20Labiii,%20I%20would%20like%20to%20book%20a%20private%20styling%20appointment%20at%20your%20Jaipur%20studio"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary appointment-btn"
              >
                <Calendar size={15} /> Book Appointment
              </a>
            </div>
          </div>

          <div className="studio-image-side">
            <div className="studio-image-frame">
              <img
                src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=85"
                alt="Labiii Studio Jaipur Fitting Lounge"
              />
              <div className="studio-tag-overlay">
                <span>Labiii Atelier · Jaipur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioVisit;

