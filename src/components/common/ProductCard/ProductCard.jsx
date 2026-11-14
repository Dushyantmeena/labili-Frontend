import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import { useCurrency } from '../../../context/CurrencyContext';
import './ProductCard.scss';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice } = useCurrency();
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Free Size');
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
      className="labiii-product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Editorial Image Container (3:4 ratio) */}
      <div className="card-media-stage">
        <Link to={`/products/${product.slug || product.id}`} className="card-link-wrapper">
          <img
            src={isHovered && product.secondaryImage ? product.secondaryImage : product.primaryImage}
            alt={product.name}
            className={`card-product-img ${isHovered && product.secondaryImage ? 'is-secondary' : 'is-primary'}`}
            loading="lazy"
          />
        </Link>

        {/* Refined Luxury Badges */}
        <div className="card-badges-stack">
          {product.badge && (
            <span
              className={`editorial-badge ${
                product.badge.toLowerCase().includes('best')
                  ? 'badge-bestseller'
                  : 'badge-handcrafted'
              }`}
            >
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="editorial-badge badge-discount">{product.discount}</span>
          )}
        </div>

        {/* Floating Wishlist Button */}
        <button
          className={`card-wishlist-btn ${isSaved ? 'is-active' : ''}`}
          onClick={handleWishlistToggle}
          aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          title={isSaved ? 'Saved to wishlist' : 'Save to wishlist'}
          type="button"
        >
          <Heart
            size={16}
            fill={isSaved ? '#541421' : 'none'}
            color={isSaved ? '#541421' : '#1C1815'}
            strokeWidth={1.6}
          />
        </button>

        {/* Slide-Up Hover Quick Action Toolbar */}
        <div className="card-quick-actions">
          <button
            className="quick-view-action"
            onClick={handleQuickViewClick}
            type="button"
          >
            <Eye size={14} />
            <span>Quick View</span>
          </button>
          <button
            className="quick-add-action"
            onClick={handleAddDirect}
            type="button"
            title="Add directly to bag"
          >
            <ShoppingBag size={14} />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="card-info-content">
        <div className="card-category-row">
          <span className="card-category-name">{product.categoryName || 'Jaipur Couture'}</span>
          {/* Subtle star score */}
          <div className="card-mini-rating">
            <Star size={11} fill="#C29B46" color="#C29B46" />
            <span className="rating-num">{product.rating || '4.9'}</span>
          </div>
        </div>

        <h3 className="card-product-title">
          <Link to={`/products/${product.slug || product.id}`} title={product.name}>
            {product.name}
          </Link>
        </h3>

        {/* Price Row */}
        <div className="card-pricing-row">
          <span className="current-price">{formatPrice(product.price)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Minimal Size Selector Pills */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="card-sizes-row" onClick={(e) => e.stopPropagation()}>
            <span className="size-label-text">Sizes:</span>
            <div className="size-pills-list">
              {product.sizes.slice(0, 4).map((size) => (
                <button
                  key={size}
                  className={`size-mini-pill ${selectedSize === size ? 'is-selected' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedSize(size);
                  }}
                  type="button"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
