import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import { useCurrency } from '../../../context/CurrencyContext';
import './ProductCard.scss';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice } = useCurrency();
  const [selectedSize] = useState(product.sizes?.[0] || 'Free Size');
  const [isHovered, setIsHovered] = useState(false);

  const isSaved = isInWishlist(product.id);

  const handleAddDirect = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedSize, product.colors?.[0]?.name, 1);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickViewClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) onQuickView(product);
  };

  return (
    <article
      className="labiii-editorial-product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Editorial Image Container (3:4 ratio - Quinces Style) */}
      <div className="card-media-stage">
        <Link to={`/products/${product.slug || product.id}`} className="card-media-anchor">
          <img
            src={isHovered && product.secondaryImage ? product.secondaryImage : product.primaryImage}
            alt={product.name}
            className={`card-product-img ${isHovered && product.secondaryImage ? 'is-secondary' : 'is-primary'}`}
            loading="lazy"
          />
        </Link>

        {/* Minimal Luxury Badge */}
        {product.badge && (
          <div className="card-badge-wrap">
            <span className="minimal-badge">{product.badge}</span>
          </div>
        )}

        {/* Floating Heart / Wishlist Button */}
        <button
          className={`card-wishlist-pill ${isSaved ? 'is-saved' : ''}`}
          onClick={handleWishlistToggle}
          aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          title={isSaved ? 'Saved to wishlist' : 'Save to wishlist'}
          type="button"
        >
          <Heart
            size={15}
            fill={isSaved ? '#541421' : 'none'}
            color={isSaved ? '#541421' : '#2D2621'}
            strokeWidth={1.5}
          />
        </button>

        {/* Subtle Slide-Up Quick Actions (Hover Only) */}
        <div className="card-hover-actions">
          <button
            className="action-btn quick-view-btn"
            onClick={handleQuickViewClick}
            type="button"
            title="Quick preview silhouette"
          >
            <Eye size={13} />
            <span>Quick View</span>
          </button>
          <button
            className="action-btn quick-bag-btn"
            onClick={handleAddDirect}
            type="button"
            title="Quick add to bag"
          >
            <ShoppingBag size={13} />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Quinces-Style Editorial Info: Italic title on left, price on right */}
      <div className="card-editorial-info">
        <span className="card-category-meta">{product.category || 'Atelier Signature'}</span>
        <div className="card-title-price-row">
          <h3 className="card-product-title">
            <Link to={`/products/${product.slug || product.id}`}>
              {product.name}
            </Link>
          </h3>
          <div className="card-price-block">
            <span className="current-price">{formatPrice(product.price)}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;