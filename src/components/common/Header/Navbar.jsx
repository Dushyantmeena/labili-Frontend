import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown, ArrowRight, Globe, Sparkles } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import { useAuth } from '../../../context/AuthContext';
import { useCurrency } from '../../../context/CurrencyContext';
import './Navbar.scss';

const Navbar = ({ onOpenSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, openAuthModal, isAuthenticated } = useAuth();
  const { currency, setCurrency, currencies } = useCurrency();
  const navigate = useNavigate();
  const currencyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setIsCurrencyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleAccountClick = () => {
    if (isAuthenticated) {
      navigate('/account');
    } else {
      openAuthModal('login');
    }
  };

  return (
    <header className={`labiii-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Primary Brand & Navigation Bar */}
      <div className="labiii-nav-main">
        <div className="labiii-nav-container">
          {/* Mobile Menu Trigger */}
          <button
            className="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            type="button"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          {/* Left Navigation Links */}
          <nav className="desktop-navigation" aria-label="Main Navigation">
            {/* Mega Dropdown for Collections */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <NavLink
                to="/collections/all"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <span>COLLECTIONS</span>
                <ChevronDown size={12} className={`nav-chevron ${isShopDropdownOpen ? 'rotated' : ''}`} />
              </NavLink>

              {isShopDropdownOpen && (
                <div className="mega-dropdown-menu">
                  <div className="mega-dropdown-inner">
                    <div className="mega-col">
                      <span className="mega-col-title">Silhouettes</span>
                      <Link to="/collections/all" className="mega-link highlight">All Heirlooms</Link>
                      <Link to="/collections/aangi-blouses" className="mega-link">Rajputi Aangi Blouses</Link>
                      <Link to="/collections/gota-patti-lehenga" className="mega-link">Gota Patti Lehengas</Link>
                      <Link to="/collections/kurta-sets" className="mega-link">Royal Kurta Sets</Link>
                      <Link to="/collections/cotton-kurtis" className="mega-link">Handblock Cotton Kurtis</Link>
                      <Link to="/collections/tops-tunics" className="mega-link">Peplum & Fusion Tops</Link>
                    </div>

                    <div className="mega-col">
                      <span className="mega-col-title">Curated Edits</span>
                      <Link to="/collections/festive-edit" className="mega-link">
                        <span className="spark-bullet">✦</span> Navratri & Diwali Edit
                      </Link>
                      <Link to="/collections/new-in" className="mega-link">Fresh From The Atelier</Link>
                      <Link to="/rent-custom?service=rental" className="mega-link">Bridal & Poshak Rental</Link>
                      <Link to="/rent-custom?service=custom" className="mega-link">Made-to-Measure Couture</Link>
                      <Link to="/about" className="mega-link">The Jaipur Heritage Story</Link>
                    </div>

                    <div className="mega-col mega-featured-card">
                      <div className="featured-card-image">
                        <img
                          src="https://www.baisajaipur.com/cdn/shop/files/Embroidered_Ivory_and_Red_Choli.png?v=1791808189&width=800"
                          alt="Gota Patti Aangi Masterpiece"
                        />
                        <div className="featured-overlay">
                          <span className="featured-tag">Craft Spotlight</span>
                          <span className="featured-name">The Heirloom Aangi</span>
                          <Link to="/collections/aangi-blouses" className="featured-cta">
                            Explore Masterpiece &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/collections/aangi-blouses"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              AANGI ATELIER
            </NavLink>

            <NavLink
              to="/collections/festive-edit"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              ROYAL FESTIVE
            </NavLink>

            <NavLink
              to="/collections/cotton-kurtis"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              EVERYDAY LUXE
            </NavLink>

            <NavLink
              to="/rent-custom"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              CUSTOM & RENTAL
            </NavLink>
          </nav>

          {/* Center Brand Identity */}
          <div className="nav-brand-center">
            <Link to="/" className="brand-link" aria-label="Labiii Timeless Comfort Homepage">
              <img
                src="/labiii-logo.png"
                alt="Labiii — Royal Roots. Modern Elegance."
                className="brand-logo-img"
              />
            </Link>
          </div>

          {/* Right Action Icons & Controls */}
          <div className="nav-right-actions">
            {/* Currency Selector */}
            <div className="currency-selector-wrapper" ref={currencyRef}>
              <button
                className="currency-toggle-btn"
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                aria-label="Select currency"
                type="button"
              >
                <Globe size={15} />
                <span className="currency-code">{currency}</span>
                <ChevronDown size={11} className={`curr-arrow ${isCurrencyOpen ? 'open' : ''}`} />
              </button>

              {isCurrencyOpen && (
                <div className="currency-dropdown">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      className={`curr-option ${currency === curr ? 'selected' : ''}`}
                      onClick={() => {
                        setCurrency(curr);
                        setIsCurrencyOpen(false);
                      }}
                      type="button"
                    >
                      <span>{curr}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Trigger */}
            <button
              className="action-icon-btn search-trigger"
              onClick={onOpenSearch}
              aria-label="Search collection"
              title="Search"
              type="button"
            >
              <Search size={19} strokeWidth={1.5} />
            </button>

            {/* Account Trigger */}
            <button
              className="action-icon-btn account-trigger"
              onClick={handleAccountClick}
              aria-label="Account"
              title={isAuthenticated ? `Profile (${user?.name})` : 'Sign in'}
              type="button"
            >
              <User size={19} strokeWidth={1.5} />
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="action-icon-btn wishlist-trigger"
              aria-label="Wishlist"
              title="Saved items"
            >
              <Heart size={19} strokeWidth={1.5} />
              {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
            </Link>

            {/* Cart Bag Trigger */}
            <button
              className="action-icon-btn cart-bag-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              title="Shopping Bag"
              type="button"
            >
              <ShoppingBag size={19} strokeWidth={1.5} />
              <span className="cart-badge-pill">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Refined Secondary Editorial Sub-Strip */}
      <div className="labiii-sub-strip">
        <div className="sub-strip-inner">
          <Link to="/collections/festive-edit" className="sub-strip-link highlight">
            <Sparkles size={11} className="link-spark" />
            <span>NAVRATRI & DIWALI EDIT</span>
          </Link>
          <span className="sub-separator" aria-hidden="true">•</span>
          <Link to="/rent-custom?service=rental" className="sub-strip-link">
            RENT AN OUTFIT
          </Link>
          <span className="sub-separator" aria-hidden="true">•</span>
          <Link to="/rent-custom?service=custom" className="sub-strip-link">
            BESPOKE TAILORING
          </Link>
          <span className="sub-separator" aria-hidden="true">•</span>
          <Link to="/contact" className="sub-strip-link">
            VISIT JAIPUR ATELIER
          </Link>
          <span className="sub-separator" aria-hidden="true">•</span>
          <a
            href="https://wa.me/917665022710?text=Hello+Labiii%2C+I+would+like+styling+advice"
            target="_blank"
            rel="noreferrer"
            className="sub-strip-link whatsapp-pill"
          >
            WHATSAPP CONCIERGE ↗
          </a>
        </div>
      </div>

      {/* Mobile Off-Canvas Navigation Drawer */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      >
        <aside className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-top-bar">
            <div className="drawer-brand-wrap">
              <img
                src="/labiii-logo.png"
                alt="Labiii - Timeless Comfort"
                className="drawer-brand-logo"
              />
            </div>
            <button
              className="drawer-close-btn"
              onClick={closeMobileMenu}
              aria-label="Close menu"
              type="button"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="drawer-content-scroll">
            <div className="drawer-section">
              <span className="drawer-section-label">Heirloom Collections</span>
              <Link to="/collections/festive-edit" onClick={closeMobileMenu} className="drawer-nav-item featured">
                <span>✦ Festive & Diwali Edit</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/collections/aangi-blouses" onClick={closeMobileMenu} className="drawer-nav-item">
                <span>Rajputi Aangi Blouses</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/collections/gota-patti-lehenga" onClick={closeMobileMenu} className="drawer-nav-item">
                <span>Gota Patti Lehengas</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/collections/cotton-kurtis" onClick={closeMobileMenu} className="drawer-nav-item">
                <span>Everyday Jaipur Cotton</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/collections/all" onClick={closeMobileMenu} className="drawer-nav-item">
                <span>Explore All Silhouettes</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="drawer-section">
              <span className="drawer-section-label">Bespoke Services</span>
              <Link to="/rent-custom?service=rental" onClick={closeMobileMenu} className="drawer-nav-item">
                <span>Rent a Bridal Poshak</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/rent-custom?service=custom" onClick={closeMobileMenu} className="drawer-nav-item">
                <span>Custom Made Orders</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/about" onClick={closeMobileMenu} className="drawer-nav-item">
                <span>Our Heritage & Atelier</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/contact" onClick={closeMobileMenu} className="drawer-nav-item">
                <span>Jaipur Studio Visit</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Currency selector inside mobile drawer */}
            <div className="drawer-section drawer-currency-section">
              <span className="drawer-section-label">Select Currency</span>
              <div className="drawer-currency-pills">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    className={`drawer-curr-btn ${currency === curr ? 'active' : ''}`}
                    onClick={() => setCurrency(curr)}
                    type="button"
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="drawer-footer-cta">
            <a
              href="https://wa.me/917665022710?text=Hi+Labiii%2C+I+have+a+question"
              target="_blank"
              rel="noreferrer"
              className="drawer-whatsapp-btn"
            >
              Ask Stylist on WhatsApp ↗
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;
