import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import productService from '../services/productService';
import { PRODUCTS } from '../data/initialProducts';
import ProductCard from '../components/common/ProductCard/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import {
  Star,
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  Ruler,
  Truck,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Share2,
  CheckCircle2,
} from 'lucide-react';
import './ProductDetailPage.scss';

const ProductDetailPage = ({ onOpenSizeGuide, onQuickView }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPrice } = useCurrency();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null);

  // Accordion open tabs
  const [openAccordion, setOpenAccordion] = useState('details');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await productService.getProductById(productId);
      if (res.success && res.data) {
        setProduct(res.data);
        setActiveImage(res.data.primaryImage);
        setSelectedSize(res.data.sizes?.[0] || 'M');
        setSelectedColor(res.data.colors?.[0]?.name || 'Standard');
      }
      setLoading(false);
    };

    fetchProduct();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  if (loading) {
    return (
      <div className="product-loading-container">
        <div className="spinner" />
        <p>Retrieving royal piece from Jaipur atelier...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found-container">
        <h2>Piece Not Found</h2>
        <p>The royal garment you are seeking is either sold out or no longer in catalog.</p>
        <Link to="/collections/all" className="btn-primary">
          Explore All Collections
        </Link>
      </div>
    );
  }

  const isSaved = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    navigate('/checkout');
  };

  const checkPincode = (e) => {
    e.preventDefault();
    if (pincode.length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus({
        valid: true,
        message: 'Express Delivery available in 3-5 business days across Jaipur & India.',
      });
    } else {
      setPincodeStatus({
        valid: false,
        message: 'Please enter a valid 6-digit Indian postal code.',
      });
    }
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <main className="product-detail-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <Link to="/collections/all">Collections</Link>
          <span className="separator">/</span>
          <Link to={`/collections/${product.category}`}>{product.categoryName}</Link>
          <span className="separator">/</span>
          <span className="current">{product.name}</span>
        </nav>
      </div>

      <div className="container product-main-container">
        <div className="product-layout-grid">
          {/* Left Column: Gallery */}
          <div className="product-gallery-column">
            <div className="gallery-sticky-wrapper">
              {/* Thumbnails List */}
              {product.images && product.images.length > 1 && (
                <div className="thumbnails-strip">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`thumb-btn ${activeImage === img ? 'active' : ''}`}
                      onClick={() => setActiveImage(img)}
                    >
                      <img src={img} alt={`${product.name} view ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Stage Image */}
              <div className="main-stage-image">
                <img src={activeImage} alt={product.name} />
                {product.badge && (
                  <span className="badge badge-bestseller gallery-badge">{product.badge}</span>
                )}
                <button
                  className={`wishlist-float-btn ${isSaved ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product)}
                  aria-label="Wishlist toggle"
                >
                  <Heart size={20} fill={isSaved ? '#6B1E2A' : 'none'} color={isSaved ? '#6B1E2A' : '#2A1A14'} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="product-info-column">
            <span className="brand-eyebrow">{product.categoryName}</span>
            <h1 className="pdp-title">{product.name}</h1>
            <p className="pdp-subtitle">{product.subtitle}</p>

            {/* Ratings Bar */}
            <div className="pdp-rating-row">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill={i < Math.floor(product.rating || 5) ? '#C59B27' : 'none'}
                    color="#C59B27"
                  />
                ))}
              </div>
              <span className="rating-num">{product.rating}</span>
              <span className="rating-divider">·</span>
              <span className="rating-count">{product.reviewsCount} Verified Jaipur Atelier Reviews</span>
            </div>

            {/* Pricing */}
            <div className="pdp-price-box">
              <div className="price-main-row">
                <span className="current-price">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="original-price">{formatPrice(product.originalPrice)}</span>
                )}
                {product.discount && (
                  <span className="discount-tag">{product.discount}</span>
                )}
              </div>
              <p className="tax-inclusive-tag">Price inclusive of all taxes. Free Express Domestic Shipping.</p>
            </div>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="pdp-option-group">
                <span className="option-title">
                  Color: <strong>{selectedColor}</strong>
                </span>
                <div className="color-swatches-grid">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      className={`color-swatch-circle ${selectedColor === c.name ? 'active' : ''}`}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="pdp-option-group">
                <div className="option-title-row">
                  <span className="option-title">
                    Size: <strong>{selectedSize}</strong>
                  </span>
                  <button
                    type="button"
                    className="size-guide-link"
                    onClick={onOpenSizeGuide}
                  >
                    <Ruler size={14} /> Size & Measurement Guide
                  </button>
                </div>
                <div className="size-buttons-grid">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`size-select-btn ${selectedSize === s ? 'active' : ''}`}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="margin-reminder">
                  <Sparkles size={13} color="#C59B27" />
                  <span>Includes 2-inch inner side margins for effortless custom tailoring.</span>
                </div>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="pdp-actions-row">
              <div className="qty-picker">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                type="button"
                className="btn-primary pdp-add-cart-btn"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={17} /> Add to Bag
              </button>

              <button
                type="button"
                className="btn-gold pdp-buy-now-btn"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>

            {/* Pincode checker */}
            <div className="pincode-check-card">
              <div className="pincode-header">
                <Truck size={17} className="truck-icon" />
                <span>Delivery Estimator</span>
              </div>
              <form onSubmit={checkPincode} className="pincode-form">
                <input
                  type="text"
                  placeholder="Enter 6-digit postal code"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button type="submit">Check</button>
              </form>
              {pincodeStatus && (
                <p className={`pincode-status ${pincodeStatus.valid ? 'success' : 'error'}`}>
                  {pincodeStatus.message}
                </p>
              )}
            </div>

            {/* Accordion Specs */}
            <div className="pdp-accordions">
              {/* Product Details */}
              <div className={`pdp-accordion-item ${openAccordion === 'details' ? 'open' : ''}`}>
                <button
                  className="accordion-header"
                  onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
                >
                  <span>Product Details & Handcrafted Artistry</span>
                  <ChevronDown size={18} className="arrow" />
                </button>
                {openAccordion === 'details' && (
                  <div className="accordion-body">
                    <p>{product.description}</p>
                    {product.details && (
                      <ul className="details-bullets">
                        {product.details.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Fabric & Craft */}
              <div className={`pdp-accordion-item ${openAccordion === 'craft' ? 'open' : ''}`}>
                <button
                  className="accordion-header"
                  onClick={() => setOpenAccordion(openAccordion === 'craft' ? null : 'craft')}
                >
                  <span>Fabric & Care Instructions</span>
                  <ChevronDown size={18} className="arrow" />
                </button>
                {openAccordion === 'craft' && (
                  <div className="accordion-body">
                    <div className="spec-row">
                      <strong>Fabric:</strong> <span>{product.fabric}</span>
                    </div>
                    <div className="spec-row">
                      <strong>Craft:</strong> <span>{product.craft}</span>
                    </div>
                    <div className="spec-row">
                      <strong>Care:</strong> <span>{product.care}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Custom Orders & Rental */}
              <div className={`pdp-accordion-item ${openAccordion === 'custom' ? 'open' : ''}`}>
                <button
                  className="accordion-header"
                  onClick={() => setOpenAccordion(openAccordion === 'custom' ? null : 'custom')}
                >
                  <span>Custom Stitching & Outfit Rental</span>
                  <ChevronDown size={18} className="arrow" />
                </button>
                {openAccordion === 'custom' && (
                  <div className="accordion-body">
                    <p>
                      Want this piece customized with your exact blouse cup depth, sleeve length, or lehenga skirt height?
                      Our Jaipur studio welcomes bespoke orders. You can also rent this piece for weddings.
                    </p>
                    <Link to="/rent-custom" className="btn-secondary pdp-custom-btn">
                      Inquire on Custom / Rental Page <ArrowRight size={15} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className={`pdp-accordion-item ${openAccordion === 'shipping' ? 'open' : ''}`}>
                <button
                  className="accordion-header"
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                >
                  <span>Shipping & Returns</span>
                  <ChevronDown size={18} className="arrow" />
                </button>
                {openAccordion === 'shipping' && (
                  <div className="accordion-body">
                    <p>
                      Orders dispatched within 48–72 hours from our Jaipur workshop. Domestic orders arrive within 3–5 business days via Bluedart/Delhivery.
                      International express orders via DHL take 5–8 days.
                    </p>
                    <p>7-day hassle-free exchange and alteration assistance available.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-products-section">
            <div className="section-title">
              <span className="brand-eyebrow">Harmonious Silhouettes</span>
              <h2>Complete The Royal Look</h2>
              <div className="title-divider">
                <span className="divider-gem" />
              </div>
            </div>
            <div className="related-grid">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetailPage;

