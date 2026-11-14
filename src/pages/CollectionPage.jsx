import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard/ProductCard';
import productService from '../services/productService';
import { CATEGORIES } from '../data/initialProducts';
import { SlidersHorizontal, ChevronDown, X, ArrowLeft, RotateCcw } from 'lucide-react';
import './CollectionPage.scss';

const FABRICS = ['All Fabrics', 'Raw Silk', 'Chanderi Silk', 'Jaipur Cotton', 'Organza', 'Georgette'];
const SIZES = ['All Sizes', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom Fit'];

const CollectionPage = ({ onQuickView }) => {
  const { categorySlug } = useParams();
  const currentCategorySlug = categorySlug || 'all';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedFabric, setSelectedFabric] = useState('All Fabrics');
  const [selectedSize, setSelectedSize] = useState('All Sizes');
  const [priceMax, setPriceMax] = useState(25000);
  const [onlyFestive, setOnlyFestive] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      const res = await productService.getProducts({
        category: currentCategorySlug === 'all' ? undefined : currentCategorySlug,
      });
      if (res.success) {
        setProducts(res.data);
      }
      setLoading(false);
    };

    fetchCategoryProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentCategorySlug]);

  // Current category metadata
  const currentCategory = useMemo(() => {
    if (currentCategorySlug === 'all') {
      return {
        name: 'The Royal Collection',
        subtitle: 'All handcrafted Rajputana silhouettes, Gota Patti ensembles & pure Jaipur cottons',
      };
    }
    const found = CATEGORIES.find((c) => c.slug === currentCategorySlug);
    return found || { name: currentCategorySlug.replace(/-/g, ' '), subtitle: 'Authentic royal ethnic garments from Jaipur' };
  }, [currentCategorySlug]);

  // Filter & Sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (currentCategorySlug !== 'all') {
      result = result.filter((p) => p.category === currentCategorySlug);
    }

    // Fabric filter
    if (selectedFabric !== 'All Fabrics') {
      result = result.filter((p) =>
        p.fabric.toLowerCase().includes(selectedFabric.toLowerCase())
      );
    }

    // Size filter
    if (selectedSize !== 'All Sizes') {
      result = result.filter((p) => p.sizes && p.sizes.includes(selectedSize));
    }

    // Max Price
    result = result.filter((p) => p.price <= priceMax);

    // Festive only
    if (onlyFestive) {
      result = result.filter((p) => p.isFestive);
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [products, currentCategorySlug, selectedFabric, selectedSize, priceMax, onlyFestive, sortBy]);

  const resetFilters = () => {
    setSelectedFabric('All Fabrics');
    setSelectedSize('All Sizes');
    setPriceMax(25000);
    setOnlyFestive(false);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedFabric !== 'All Fabrics' ||
    selectedSize !== 'All Sizes' ||
    priceMax < 25000 ||
    onlyFestive;

  return (
    <main className="collection-page-main">
      {/* Category Banner Header */}
      <section className="collection-hero-banner">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <Link to="/collections/all">Collections</Link>
            <span className="separator">/</span>
            <span className="current">{currentCategory.name}</span>
          </nav>

          <span className="brand-eyebrow">The Labiii Atelier</span>
          <h1 className="collection-hero-title">{currentCategory.name}</h1>
          <p className="collection-hero-desc">{currentCategory.subtitle}</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container collection-content-container">
        {/* Controls Toolbar */}
        <div className="collection-toolbar">
          <div className="toolbar-left">
            <button
              className="filter-toggle-btn"
              onClick={() => setIsFilterDrawerOpen(true)}
            >
              <SlidersHorizontal size={17} /> Filters
              {hasActiveFilters && <span className="active-dot" />}
            </button>
            <span className="products-counter">
              Showing <strong>{filteredProducts.length}</strong> royal pieces
            </span>
          </div>

          <div className="toolbar-right">
            <div className="sort-box">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured Heirlooms</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="collection-layout">
          {/* Desktop Filter Sidebar */}
          <aside className="collection-sidebar">
            <div className="sidebar-header">
              <h3>Refine Collection</h3>
              {hasActiveFilters && (
                <button className="reset-filters-btn" onClick={resetFilters}>
                  <RotateCcw size={13} /> Reset
                </button>
              )}
            </div>

            {/* Category Nav Links */}
            <div className="filter-block">
              <h4 className="filter-block-title">Silhouettes</h4>
              <ul className="category-filter-links">
                <li>
                  <Link
                    to="/collections/all"
                    className={currentCategorySlug === 'all' ? 'active' : ''}
                  >
                    All Collections
                  </Link>
                </li>
                {CATEGORIES.map((c) => (
                  <li key={c.id}>
                    <Link
                      to={`/collections/${c.slug}`}
                      className={currentCategorySlug === c.slug ? 'active' : ''}
                    >
                      {c.name} ({c.count})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fabric Filter */}
            <div className="filter-block">
              <h4 className="filter-block-title">Heritage Fabric</h4>
              <div className="filter-options-list">
                {FABRICS.map((fabric) => (
                  <label key={fabric} className="filter-radio-label">
                    <input
                      type="radio"
                      name="fabric"
                      checked={selectedFabric === fabric}
                      onChange={() => setSelectedFabric(fabric)}
                    />
                    <span>{fabric}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="filter-block">
              <h4 className="filter-block-title">Garment Size</h4>
              <div className="filter-sizes-chips">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`filter-size-chip ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="filter-block">
              <h4 className="filter-block-title">Max Price: ₹{priceMax.toLocaleString('en-IN')}</h4>
              <input
                type="range"
                min="900"
                max="25000"
                step="500"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="price-slider"
              />
              <div className="price-range-limits">
                <span>₹900</span>
                <span>₹25,000</span>
              </div>
            </div>

            {/* Festive Only */}
            <div className="filter-block">
              <label className="filter-checkbox-label">
                <input
                  type="checkbox"
                  checked={onlyFestive}
                  onChange={(e) => setOnlyFestive(e.target.checked)}
                />
                <span>Festive & Bridal Only</span>
              </label>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="collection-main-grid">
            {loading ? (
              <div className="collection-loading-state">
                <div className="spinner" />
                <p>Curating royal collection from our Jaipur workshop...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="collection-empty-state">
                <h3>No pieces matched your selected filters</h3>
                <p>Try broadening your price range or resetting fabric preferences.</p>
                <button className="btn-primary reset-all-btn" onClick={resetFilters}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="collection-products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <div
        className={`mobile-filter-drawer-overlay ${isFilterDrawerOpen ? 'open' : ''}`}
        onClick={() => setIsFilterDrawerOpen(false)}
      >
        <div
          className="mobile-filter-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-drawer-top">
            <h3>Filter Collection</h3>
            <button
              onClick={() => setIsFilterDrawerOpen(false)}
              className="drawer-close-btn"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-drawer-body">
            {/* Same filters inside mobile drawer */}
            <div className="filter-block">
              <h4 className="filter-block-title">Silhouettes</h4>
              <div className="filter-sizes-chips">
                <Link
                  to="/collections/all"
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className={`filter-size-chip ${currentCategorySlug === 'all' ? 'active' : ''}`}
                >
                  All
                </Link>
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.id}
                    to={`/collections/${c.slug}`}
                    onClick={() => setIsFilterDrawerOpen(false)}
                    className={`filter-size-chip ${currentCategorySlug === c.slug ? 'active' : ''}`}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="filter-block">
              <h4 className="filter-block-title">Fabric</h4>
              <div className="filter-options-list">
                {FABRICS.map((fabric) => (
                  <label key={fabric} className="filter-radio-label">
                    <input
                      type="radio"
                      name="m-fabric"
                      checked={selectedFabric === fabric}
                      onChange={() => setSelectedFabric(fabric)}
                    />
                    <span>{fabric}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-block">
              <h4 className="filter-block-title">Garment Size</h4>
              <div className="filter-sizes-chips">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`filter-size-chip ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-block">
              <h4 className="filter-block-title">Max Price: ₹{priceMax.toLocaleString('en-IN')}</h4>
              <input
                type="range"
                min="900"
                max="25000"
                step="500"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="price-slider"
              />
            </div>
          </div>

          <div className="mobile-drawer-bottom-actions">
            <button
              className="btn-secondary clear-btn"
              onClick={resetFilters}
            >
              Reset
            </button>
            <button
              className="btn-primary apply-btn"
              onClick={() => setIsFilterDrawerOpen(false)}
            >
              Apply ({filteredProducts.length} pieces)
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollectionPage;

