import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Star, Heart, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import { useCurrency } from '../../../context/CurrencyContext';
import './QuickViewModal.scss';

const QuickViewModal = ({ product, isOpen, onClose, onOpenSizeGuide }) => {
  if (!isOpen || !product) return null;

  const [activeImage, setActiveImage] = useState(product.primaryImage);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice } = useCurrency();

  const isSaved = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    onClose();
  };

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div className="quickview-container" onClick={(e) => e.stopPropagation()}>
        <button className="quickview-close" onClick={onClose} aria-label="Close Quick View">
          <X size={22} />
        </button>

        <div className="quickview-grid">
          {/* Gallery Side */}
          <div className="quickview-gallery">
            <div className="main-image-box">
              <img src={activeImage} alt={product.name} />
              {product.badge && (
                <span className="badge badge-bestseller overlay-badge">{product.badge}</span>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="thumbs-row">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`thumb-btn ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="quickview-content">
            <span className="brand-eyebrow">{product.categoryName || 'Jaipur Heirloom'}</span>
            <h2 className="product-title">{product.name}</h2>
            <p className="product-subtitle">{product.subtitle}</p>

            {/* Ratings */}
            <div className="rating-row">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(product.rating || 5) ? '#C59B27' : 'none'}
                    color="#C59B27"
                  />
                ))}
              </div>
              <span className="rating-val">{product.rating}</span>
              <span className="reviews">({product.reviewsCount} verified reviews)</span>
            </div>

            {/* Price Row */}
            <div className="price-row">
              <span className="price-current">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="price-orig">{formatPrice(product.originalPrice)}</span>
              )}
              {product.discount && (
                <span className="discount-pill">{product.discount}</span>
              )}
            </div>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="option-group">
                <label className="option-label">Color: <strong>{selectedColor}</strong></label>
                <div className="color-swatches">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      className={`color-swatch-btn ${selectedColor === c.name ? 'active' : ''}`}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector & Guide */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="option-group">
                <div className="size-label-row">
                  <label className="option-label">Size: <strong>{selectedSize}</strong></label>
                  {onOpenSizeGuide && (
                    <button
                      type="button"
                      className="size-guide-trigger"
                      onClick={onOpenSizeGuide}
                    >
                      Size Guide ↗
                    </button>
                  )}
                </div>
                <div className="size-pills-row">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      className={`size-btn ${selectedSize === s ? 'active' : ''}`}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Actions */}
            <div className="actions-row">
              <div className="qty-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus size={14} />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <Plus size={14} />
                </button>
              </div>

              <button className="btn-primary add-bag-btn" onClick={handleAdd}>
                <ShoppingBag size={17} /> Add to Bag
              </button>

              <button
                className={`wishlist-btn ${isSaved ? 'saved' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Wishlist"
              >
                <Heart size={20} fill={isSaved ? '#6B1E2A' : 'none'} color={isSaved ? '#6B1E2A' : '#2A1A14'} />
              </button>
            </div>

            {/* Trust highlights */}
            <div className="quickview-trust">
              <div className="trust-point">
                <Sparkles size={16} color="#C59B27" />
                <span>Hand-stitched in Jaipur with 2&rdquo; alteration margin</span>
              </div>
              <div className="trust-point">
                <ShieldCheck size={16} color="#C59B27" />
                <span>100% Authentic Handloom Silk & Organic Dyes</span>
              </div>
            </div>

            <Link
              to={`/products/${product.slug || product.id}`}
              className="view-full-details-link"
              onClick={onClose}
            >
              View Complete Details & Styling Guide <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;

