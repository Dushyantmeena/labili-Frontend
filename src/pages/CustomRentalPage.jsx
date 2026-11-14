import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { enquiryService } from '../services/orderService';
import {
  Sparkles,
  Calendar,
  Ruler,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Clock,
  Send,
  HeartHandshake
} from 'lucide-react';
import './CustomRentalPage.scss';

const CustomRentalPage = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [serviceType, setServiceType] = useState(
    serviceParam === 'rental' ? 'rental' : serviceParam === 'custom' ? 'custom' : 'both'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    eventDate: '',
    eventType: 'Wedding',
    outfitChoice: 'Gota Patti Lehenga',
    duration: '3 Days',
    bust: '',
    waist: '',
    height: '',
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (serviceParam === 'rental' || serviceParam === 'custom') {
      setServiceType(serviceParam);
    }
  }, [serviceParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await enquiryService.submitRentalCustom({
      ...formData,
      serviceType,
    });
    setSubmitting(false);
    if (res.success) {
      setSubmitted(true);
      setMessage(res.message);
    }
  };

  return (
    <main className="custom-rental-page">
      {/* Editorial Header */}
      <section className="page-hero">
        <div className="container">
          <span className="brand-eyebrow">The Labiii Atelier Concierge</span>
          <h1>Royal Custom Couture & Outfit Rentals</h1>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
          <p className="hero-description">
            Experience the splendor of Rajputana heritage. Commission a bespoke bridal poshak tailored to your unique silhouette, or rent our iconic Gota Patti lehengas for celebrations across India.
          </p>
        </div>
      </section>

      <div className="container content-container">
        {/* Service Type Switcher */}
        <div className="service-tabs-wrapper">
          <button
            className={`service-tab-btn ${serviceType === 'rental' ? 'active' : ''}`}
            onClick={() => setServiceType('rental')}
          >
            <Calendar size={18} /> Outfit Rental Service
          </button>
          <button
            className={`service-tab-btn ${serviceType === 'custom' ? 'active' : ''}`}
            onClick={() => setServiceType('custom')}
          >
            <Sparkles size={18} /> Bespoke Custom Couture
          </button>
        </div>

        {/* Informational Cards */}
        <div className="service-process-grid">
          {serviceType === 'rental' ? (
            <>
              <div className="process-card">
                <div className="step-num">01</div>
                <h4>Select Your Piece & Event Date</h4>
                <p>Browse our catalog of signature Gota Patti lehenga skirts and Rajputi aangis. Reserve for 3, 5, or 7 days.</p>
              </div>
              <div className="process-card">
                <div className="step-num">02</div>
                <h4>Custom Tailored to Your Measure</h4>
                <p>Send us your bust, waist, and height. Our master tailors adjust the waist and hooks before dispatch.</p>
              </div>
              <div className="process-card">
                <div className="step-num">03</div>
                <h4>Pre-Event Delivery & Easy Return</h4>
                <p>Arrives 48 hours before your function in pristine condition. Pack in the original box for hassle-free doorstep pickup.</p>
              </div>
            </>
          ) : (
            <>
              <div className="process-card">
                <div className="step-num">01</div>
                <h4>Design Consultation</h4>
                <p>Connect with our Jaipur master stylist on WhatsApp or in-studio to choose fabrics, colors, and gota motifs.</p>
              </div>
              <div className="process-card">
                <div className="step-num">02</div>
                <h4>Handcrafted by Artisans</h4>
                <p>Generational artisans cut, dye, and hand-embroider every panel in our dedicated Jaipur production unit.</p>
              </div>
              <div className="process-card">
                <div className="step-num">03</div>
                <h4>Trial & Worldwide Delivery</h4>
                <p>Video fitting review with 2-inch alteration margins included, followed by express doorstep delivery anywhere in the world.</p>
              </div>
            </>
          )}
        </div>

        {/* Enquiry Form Card */}
        <div className="enquiry-card-wrapper">
          <div className="enquiry-card">
            {submitted ? (
              <div className="submission-success-view">
                <div className="success-icon-box">
                  <CheckCircle2 size={54} color="#2E7D32" />
                </div>
                <h2>Royal Request Recorded</h2>
                <p>{message}</p>
                <div className="success-meta">
                  <p>Our senior draper will review your date ({formData.eventDate || 'Upcoming'}) and contact your WhatsApp shortly.</p>
                </div>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      city: '',
                      eventDate: '',
                      eventType: 'Wedding',
                      outfitChoice: 'Gota Patti Lehenga',
                      duration: '3 Days',
                      bust: '',
                      waist: '',
                      height: '',
                      notes: '',
                    });
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rental-custom-form">
                <div className="form-heading">
                  <span className="brand-eyebrow">Direct Atelier Booking</span>
                  <h3>
                    {serviceType === 'rental'
                      ? 'Reserve Your Royal Outfit'
                      : 'Commission Your Custom Ensemble'}
                  </h3>
                  <p>Kindly furnish your details below. We reply within 2 to 4 business hours.</p>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Radhika Sharma"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="radhika@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>City & State / Country *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai, Maharashtra"
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-3">
                  <div className="form-group">
                    <label>Event Date *</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Occasion Type</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                    >
                      <option value="Wedding / Bride">Wedding / Bride</option>
                      <option value="Sangeet / Mehendi">Sangeet / Mehendi</option>
                      <option value="Wedding Guest">Wedding Guest</option>
                      <option value="Navratri / Festive">Navratri / Festive</option>
                      <option value="Engagement / Reception">Engagement / Reception</option>
                    </select>
                  </div>

                  {serviceType === 'rental' ? (
                    <div className="form-group">
                      <label>Rental Duration</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                      >
                        <option value="3 Days">3 Days Rental</option>
                        <option value="5 Days">5 Days Rental</option>
                        <option value="7 Days">7 Days Destination Wedding</option>
                      </select>
                    </div>
                  ) : (
                    <div className="form-group">
                      <label>Budget Range</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                      >
                        <option value="₹10,000 - ₹20,000">₹10,000 – ₹20,000</option>
                        <option value="₹20,000 - ₹40,000">₹20,000 – ₹40,000</option>
                        <option value="₹40,000+ Luxury Bridal">₹40,000+ Luxury Bridal</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Sizing Details */}
                <div className="measurements-subform">
                  <h4>Approximate Measurements (Optional for initial enquiry)</h4>
                  <div className="form-grid-3">
                    <div className="form-group">
                      <label>Bust (inches)</label>
                      <input
                        type="text"
                        name="bust"
                        value={formData.bust}
                        onChange={handleChange}
                        placeholder="e.g. 36 in"
                      />
                    </div>
                    <div className="form-group">
                      <label>Waist (inches)</label>
                      <input
                        type="text"
                        name="waist"
                        value={formData.waist}
                        onChange={handleChange}
                        placeholder="e.g. 30 in"
                      />
                    </div>
                    <div className="form-group">
                      <label>Your Height (ft/in)</label>
                      <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        placeholder="e.g. 5 ft 5 in"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Specific Outfit Code or Design Ideas</label>
                  <textarea
                    rows={4}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us which Labiii look you love, preferred sleeve length, neckline, or fabric notes..."
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-primary submit-btn" disabled={submitting}>
                    {submitting ? 'Submitting to Atelier...' : 'Submit Royal Enquiry'} <Send size={16} />
                  </button>

                  <a
                    href="https://wa.me/917665022710?text=Hello%20Labiii,%20I%20would%20like%20to%20discuss%20a%20rental%20or%20custom%20order"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-fast-btn"
                  >
                    <MessageCircle size={18} /> Or WhatsApp Concierge (+91 76650 22710)
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomRentalPage;

