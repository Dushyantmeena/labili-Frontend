import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../common/ProductCard/ProductCard';
import { PRODUCTS } from '../../data/initialProducts';
import './EditorialShowcase.scss';

const EditorialShowcase = ({ onQuickView }) => {
  // Select 4 showcase hero products
  const showcaseProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="labiii-editorial-craft-style" aria-label="Craft Your Style">
      <div className="container-wide">
        <div className="craft-style-grid">
          {/* Left Column: Full-Height Massive Editorial Photograph (Contemporary Indian Couture) */}
          <div className="craft-lead-stage">
            <img
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1400&q=85"
              alt="Model in Royal Rajputi Poshak"
              className="craft-lead-img"
              loading="lazy"
            />
            <div className="craft-lead-scrim" />

            <div className="craft-lead-overlay">
              <span className="craft-eyebrow">THE ATELIER CURATION</span>
              <h2 className="craft-title">
                Craft Your <em>Signature</em>
              </h2>
              <p className="craft-description">
                Quiet essentials and celebratory statements — engineered with 2-inch bespoke margins and pure breathable linings.
              </p>
              <Link to="/collections/all" className="craft-explore-link">
                <span>View Full Catalog</span>
                <ArrowRight size={14} className="arrow-icon" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Minimal Product Cards Grid (Quinces Style) */}
          <div className="craft-products-stage">
            <div className="craft-products-grid">
              {showcaseProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialShowcase;