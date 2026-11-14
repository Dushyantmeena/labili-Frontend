import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { enquiryService } from '../services/orderService';
import './ContactPage.scss';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Styling Consultation',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await enquiryService.submitContact(formData);
    setSubmitting(false);
    if (res.success) {
      setSubmitted(true);
      setFeedback(res.message);
    }
  };

  return (
    <main className="contact-page-main">
      <section className="contact-hero">
        <div className="container">
          <span className="brand-eyebrow">Connect With Us</span>
          <h1>Visit Our Jaipur Atelier & Concierge</h1>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
          <p className="hero-lead">
            Whether you wish to schedule a private bridal styling consultation in Jaipur or enquire about a custom creation, our team is at your royal service.
          </p>
        </div>
      </section>

      <div className="container contact-content-container">
        <div className="contact-grid">
          {/* Studio Details Column */}
          <div className="studio-details-card">
            <span className="brand-eyebrow">The Flagship Destination</span>
            <h2>The Labiii Studio</h2>
            <div className="accent-bar" />

            <div className="info-items-list">
              <div className="info-item">
                <MapPin className="info-icon" size={22} />
                <div>
                  <h4>Studio Location</h4>
                  <p>46 Sachivalaya Vihar, New Sanganer Road, Jaipur, Rajasthan 302020</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Labiii%2C+46+Sachivalaya+Vihar%2C+New+Sanganer+Road%2C+Jaipur%2C+Rajasthan+302020"
                    target="_blank"
                    rel="noreferrer"
                    className="maps-link"
                  >
                    Open in Google Maps <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" size={22} />
                <div>
                  <h4>Visiting Hours</h4>
                  <p>Monday – Saturday: 10:30 AM – 8:00 PM</p>
                  <p>Sunday: 11:30 AM – 6:00 PM (Prior Appointment Preferred)</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" size={22} />
                <div>
                  <h4>Call & WhatsApp</h4>
                  <p><a href="tel:+917665022710">+91 76650 22710</a></p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" size={22} />
                <div>
                  <h4>Email Concierge</h4>
                  <p><a href="mailto:concierge@labiii.com">concierge@labiii.com</a></p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917665022710?text=Hello%20Labiii,%20I%20would%20like%20to%20visit%20your%20Jaipur%20studio"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-concierge-card-btn"
            >
              <MessageCircle size={18} /> WhatsApp Concierge Before You Visit
            </a>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={48} color="#2E7D32" />
                <h3>Message Received</h3>
                <p>{feedback}</p>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'Styling Consultation',
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="direct-contact-form">
                <span className="brand-eyebrow">Write to Us</span>
                <h3>Send an Inquiry</h3>
                <p className="form-sub">We answer all inquiries with utmost care and attention.</p>

                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Maharani Meera"
                    required
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="meera@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Inquiry Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="Styling Consultation">Studio Fitting & Styling Consultation</option>
                    <option value="Custom Bridal Couture">Bespoke Bridal Lehengas & Sets</option>
                    <option value="Outfit Rental Inquiry">Wedding Outfit Rental</option>
                    <option value="Order Tracking">Existing Order Tracking</option>
                    <option value="International Delivery">International Shipping & Customs</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How may our Jaipur atelier assist you today? Mention your occasion date or questions..."
                    required
                  />
                </div>

                <button type="submit" className="btn-primary submit-btn" disabled={submitting}>
                  {submitting ? 'Delivering Message...' : 'Send Message to Concierge'} <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

