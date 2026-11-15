import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard/ProductCard';
import { PRODUCTS } from '../../data/initialProducts';
import { ArrowRight, Sparkles } from 'lucide-react';
import './FeaturedCollection.scss';

const TABS = [
  { id: 'all', label: 'All Silhouettes' },
  { id: 'kurta-sets', label: 'Suit Sets & Anarkalis' },
  { id: 'aangi-blouses', label: 'Rajputi Aangis' },
  { id: 'cotton-kurtis', label: 'Handblock Cottons' },
  { id: 'gota-patti-lehenga', label: 'Festive Lehengas' }
];

const FeaturedCollection = ({ onQuickView }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts =
    activeTab === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section className="featured-collection-section" aria-label="The Labiii Bestsellers">
      <div className="container">
        <div className="section-title">
          <div className="collection-eyebrow-pill">
            <Sparkles size={11} className="pill-spark" />
            <span>HEIRLOOM ARCHIVE</span>
          </div>
          <h2>The Labiii Bestsellers</h2>
          <p className="section-subtitle">
            Most adored Rajasthani silhouettes celebrated for their fluid movement, breathable hand-spun fabrics, and timeless Jaipuri grace.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="tabs-wrapper">
          <div className="tabs-container">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="collection-bottom-cta">
          <Link to="/collections/all" className="explore-all-btn">
            <span>Explore Complete Collection</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
