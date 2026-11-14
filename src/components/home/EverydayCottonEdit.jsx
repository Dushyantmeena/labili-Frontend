import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard/ProductCard';
import { PRODUCTS } from '../../data/initialProducts';
import { ArrowRight, Feather, Wind, HeartHandshake } from 'lucide-react';
import './EverydayCottonEdit.scss';

const EverydayCottonEdit = ({ onQuickView }) => {
  // Filter products for everyday cotton and under 1000
  const everydayProducts = PRODUCTS.filter(
    (p) => p.price <= 1500 || p.category === 'cotton-kurtis' || p.category === 'tops-tunics'
  );

  return (
    <section className="everyday-cotton-section">
      <div className="container">
        <div className="section-title">
          <span className="brand-eyebrow">Pure Breathable Jaipur Weaves</span>
          <h2>Cotton for Every Day</h2>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
          <p className="section-subtitle">
            Artisanal hand-block printed Sanganeri cottons, airy peplum tops, and easy fusion layers — starting from ₹599.
          </p>
        </div>

        {/* Feature Badges Strip */}
        <div className="cotton-perks-strip">
          <div className="perk-pill">
            <Wind size={15} color="#8A1528" />
            <span>100% Breathable 60s Cambric Cotton</span>
          </div>
          <div className="perk-pill">
            <Feather size={15} color="#8A1528" />
            <span>Pre-washed & Preshrunk Fabric</span>
          </div>
          <div className="perk-pill">
            <HeartHandshake size={15} color="#8A1528" />
            <span>Bagru & Sanganer Hand-Block Craft</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="everyday-products-grid">
          {everydayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom Banner Card */}
        <div className="under-thousand-banner">
          <div className="banner-text">
            <span className="banner-eyebrow">Special Daily Edit</span>
            <h3>Handcrafted Tops & Kurtis Under ₹1,000</h3>
            <p>Heirloom craftsmanship made accessible for your everyday work, college, and weekend outings.</p>
          </div>
          <Link to="/collections/tops-tunics" className="btn-primary banner-btn">
            Explore All Everyday Cottons <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EverydayCottonEdit;

