import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Copy, Check } from 'lucide-react';
import './EditorialCampaignBanner.scss';

const EditorialCampaignBanner = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (code, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="labiii-editorial-campaign-banner" aria-label="The Limited Edit">
      {/* Full-width Large Campaign Image (Quinces Style) */}
      <div className="campaign-media-wrapper">
        <img
          src="https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-front.jpg?v=1793113046&width=2000"
          alt="The Limited Edit — Handcrafted Royal Rajasthani Poshak"
          className="campaign-full-img"
          loading="lazy"
        />
        <div className="campaign-subtle-scrim" />
      </div>

      {/* Floating Bottom-Left Anchored Card (Quinces Style) */}
      <div className="campaign-floating-container">
        <div className="campaign-card-box">
          <div className="card-badge-pill">
            <Sparkles size={11} className="badge-spark" />
            <span>AUTUMN / WINTER TROUSSEAU</span>
          </div>

          <h2 className="card-title">
            The Limited <em>Edit</em>
          </h2>

          <p className="card-description">
            Heirloom poshak ensembles and Rajputi aangis hand-embroidered with archival Gota Patti, produced in limited seasonal batches in Jaipur.
          </p>

          <div className="card-offer-line">
            <span className="offer-note">Curated Privilege:</span>
            <button
              className={`code-copy-btn ${copied ? 'is-copied' : ''}`}
              onClick={(e) => handleCopyCode('FESTIVEPAIR', e)}
              title="Copy code for ₹1,000 off paired orders"
              type="button"
            >
              <span>FESTIVEPAIR</span>
              {copied ? <Check size={12} /> : <Copy size={12} />}
            </button>
          </div>

          <Link to="/collections/festive-edit" className="card-italic-cta">
            <span>Explore The Edit</span>
            <ArrowRight size={14} className="arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EditorialCampaignBanner;