import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../../data/initialProducts';
import './FaqSection.scss';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="container-narrow">
        <div className="section-title">
          <span className="brand-eyebrow">Assistance & Clarity</span>
          <h2>Questions, Answered</h2>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
          <p className="faq-subtitle">
            Everything you need to know about our heirloom garments, custom fitting, and rental services.
          </p>
        </div>

        <div className="accordion-wrapper">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="accordion-trigger"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`accordion-arrow ${isOpen ? 'rotated' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="accordion-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-concierge-help">
          <HelpCircle size={20} color="#C59B27" />
          <span>Have a specific question about your measurements or wedding schedule?</span>
          <a
            href="https://wa.me/917665022710?text=Hi%20Labiii,%20I%20have%20a%20question%20about%20your%20collection"
            target="_blank"
            rel="noreferrer"
            className="faq-chat-link"
          >
            <MessageCircle size={15} /> Talk to our Jaipur team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

