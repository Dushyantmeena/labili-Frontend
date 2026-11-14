import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard/ProductCard';
import { PRODUCTS } from '../../data/initialProducts';
import { ArrowRight, Sparkles } from 'lucide-react';
import './FeaturedCollection.scss';

const TABS = [
  { id: 'all', label: 'All Heirlooms' },
  { id: 'gota-patti-lehenga', label: 'Gota Patti Lehengas' },
  { id: 'aangi-blouses', label: 'Rajputi Aangis' },
  { id: 'cotton-kurtis', label: 'Everyday Cottons' },
  { id: 'kurta-sets', label: 'Kurta Sets' },
];

const FeaturedCollection = ({ onQuickView }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts =
    activeTab === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section className="featured-collection-section">
      <div className="container">
        <div className="section-title">
          <span className="brand-eyebrow">Handcrafted in Rajasthan</span>
          <h2>The Labiii Bestsellers</h2>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
          <p className="section-subtitle">
            Most adored silhouettes celebrated by women across India and around the globe.
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
          <Link to="/collections/all" className="btn-secondary explore-all-btn">
            Explore All 80+ Pieces <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

