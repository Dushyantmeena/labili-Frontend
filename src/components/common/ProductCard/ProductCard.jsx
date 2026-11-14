import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
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
    <div
      className="royal-product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="card-media-wrapper">
        <Link to={`/products/${product.slug || product.id}`} className="card-image-link">
          <img
            src={isHovered && product.secondaryImage ? product.secondaryImage : product.primaryImage}
            alt={product.name}
            className={`product-img ${isHovered && product.secondaryImage ? 'secondary' : 'primary'}`}
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="card-badges">
          {product.badge && (
            <span className={`badge ${product.badge.toLowerCase().includes('best') ? 'badge-bestseller' : 'badge-handcrafted'}`}>
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="badge badge-sale">{product.discount}</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className={`wishlist-toggle-btn ${isSaved ? 'active' : ''}`}
          onClick={handleWishlistToggle}
          aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
          title={isSaved ? 'In your wishlist' : 'Save to wishlist'}
        >
          <Heart size={18} fill={isSaved ? '#6B1E2A' : 'none'} color={isSaved ? '#6B1E2A' : '#2A1A14'} />
        </button>

        {/* Quick View Button */}
        <button
          className="quick-view-btn"
          onClick={handleQuickViewClick}
          aria-label="Quick View"
        >
          <Eye size={15} /> Quick View
        </button>
      </div>

      {/* Product Content Details */}
      <div className="card-details">
        <span className="card-category">{product.categoryName || 'Jaipur Couture'}</span>

        <h3 className="card-title">
          <Link to={`/products/${product.slug || product.id}`} title={product.name}>
            {product.name}
          </Link>
        </h3>

        {/* Star Ratings */}
        <div className="card-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating || 5) ? '#C59B27' : 'none'}
                color="#C59B27"
              />
            ))}
          </div>
          <span className="rating-score">{product.rating || '4.9'}</span>
          <span className="reviews-count">({product.reviewsCount || 24})</span>
        </div>

        {/* Price Row */}
        <div className="card-pricing">
          <span className="current-price">{formatPrice(product.price)}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Size Selection Pills */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="card-sizes" onClick={(e) => e.stopPropagation()}>
            <span className="size-label">Size:</span>
            <div className="size-pills">
              {product.sizes.slice(0, 5).map((size) => (
                <button
                  key={size}
                  className={`size-pill ${selectedSize === size ? 'active' : ''}`}
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

        {/* Action Button: Choose Options */}
        <div className="card-actions-row">
          <button
            className="choose-options-btn"
            onClick={handleQuickViewClick}
            type="button"
          >
            Choose Options
          </button>
          <button
            className="quick-add-btn"
            onClick={handleAddDirect}
            type="button"
            title="Quick add to bag"
            aria-label="Add to bag"
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

