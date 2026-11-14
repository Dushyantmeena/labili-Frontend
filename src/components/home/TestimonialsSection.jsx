import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import './TestimonialsSection.scss';

const REVIEWS = [
  {
    id: 1,
    quote:
      'The Rajputi Aangi is an absolute work of art. The gold lappe gota is hand-stitched with such precision, and the 2-inch internal margins allowed my tailor to give me a glove-like fit for my sister\'s wedding in Udaipur.',
    author: 'Radhika Rathore',
    location: 'Jaipur, Rajasthan',
    occasion: 'Rajput Wedding Poshak',
    rating: 5
  },
  {
    id: 2,
    quote:
      'I rented a royal crimson Gota Patti lehenga for a 5-day destination wedding in Jodhpur. The concierge team handled measurements over WhatsApp, and the ensemble arrived steam-pressed and pristine.',
    author: 'Meera Singhania',
    location: 'Mumbai',
    occasion: 'Bridal Rental Client',
    rating: 5
  },
  {
    id: 3,
    quote:
      'Labiii makes traditional elegance feel wearable. Their everyday handblock cotton kurtis are soft, pre-shrunk, and possess the genuine warmth of Sanganer printing. Timeless comfort is truly the right phrase.',
    author: 'Dr. Ananya Bhati',
    location: 'New Delhi',
    occasion: 'Everyday Luxe Patron',
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="labiii-testimonials-section" aria-label="Customer Testimonials & Royal Patronage">
      <div className="container">
        <div className="testimonials-header">
          <span className="brand-eyebrow">Acclaim &amp; Royal Patronage</span>
          <h2 className="testimonials-heading">
            Worn for Life's Most <em>Cherished</em> Moments
          </h2>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
          <p className="testimonials-subtext">
            Celebrated by discerning women across India and around the globe for authenticity, bespoke tailoring, and heirloom longevity.
          </p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="testimonial-card">
              <div className="card-top-row">
                <div className="star-rating">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#C29B46" color="#C29B46" />
                  ))}
                </div>
                <Quote size={24} className="quote-icon" />
              </div>

              <blockquote className="testimonial-quote">
                "{rev.quote}"
              </blockquote>

              <div className="testimonial-patron-info">
                <div className="patron-details">
                  <strong className="patron-name">{rev.author}</strong>
                  <span className="patron-loc">{rev.location}</span>
                </div>
                <div className="patron-occasion-badge">
                  <CheckCircle2 size={12} className="check-icon" />
                  <span>{rev.occasion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
