import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Globe,
  Sparkles
} from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import { useAuth } from '../../../context/AuthContext';
import { useCurrency } from '../../../context/CurrencyContext';
import './Navbar.scss';

const MEGA_COLLECTIONS = [
  {
    title: 'Festive & Bridal',
    items: [
      { name: 'Royal Rajputi Poshaks', path: '/collections/festive-edit' },
      { name: 'Gota Patti Lehengas', path: '/collections/gota-patti-lehenga' },
      { name: 'Celebratory Anarkalis', path: '/collections/kurta-sets' },
      { name: 'Pure Silk Odhnis & Dupattas', path: '/collections/festive-edit' },
      { name: 'Bespoke Wedding Commissions', path: '/rent-custom' }
    ]
  },
  {
    title: 'Heirloom Aangis',
    items: [
      { name: 'Archival Sunburst Cholis', path: '/collections/aangi-blouses' },
      { name: 'Velvet & Zari Blouses', path: '/collections/aangi-blouses' },
      { name: 'Back Dori & Latkan Aangis', path: '/collections/aangi-blouses' },
      { name: 'Sweetheart Rajputi Cuts', path: '/collections/aangi-blouses' },
      { name: 'Custom Sizing Margins', path: '/rent-custom' }
    ]
  },
  {
    title: 'Everyday Luxury',
    items: [
      { name: 'Sanganer Handblock Kurtis', path: '/collections/cotton-kurtis' },
      { name: 'Bagru Floral Peplum Tops', path: '/collections/tops-tunics' },
      { name: 'Breathable Cambric Sets', path: '/collections/cotton-kurtis' },
      { name: 'Easy Angrakha Tunics', path: '/collections/tops-tunics' },
      { name: 'Heirlooms Under ₹1,500', path: '/collections/all' }
    ]
  }
];

const Navbar = ({ onOpenSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
      setIsScrolled(window.scrollY > 20);
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

  const handleAccountClick = () => {
    if (isAuthenticated) {
      navigate('/account');
    } else {
      openAuthModal('login');
    }
  };

  return (
    <header className={`labiii-luxury-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Mobile Menu Hamburger */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile navigation"
          type="button"
        >
          <Menu size={22} />
        </button>

        {/* Left Desktop Navigation Links */}
        <nav className="desktop-nav-menu" aria-label="Main Navigation">
          <NavLink to="/collections?filter=new" className="nav-item-link">
            <span>NEW IN</span>
          </NavLink>

          {/* Shop Mega Menu Trigger */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('shop')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <NavLink to="/collections/all" className="nav-item-link dropdown-link">
              <span>SHOP</span>
              <ChevronDown size={11} className={`chevron-icon ${activeDropdown === 'shop' ? 'open' : ''}`} />
            </NavLink>

            {/* Shop Mega Menu Overlay */}
            {activeDropdown === 'shop' && (
              <div className="mega-menu-overlay">
                <div className="mega-menu-inner">
                  <div className="mega-links-columns">
                    {MEGA_COLLECTIONS.map((col, idx) => (
                      <div key={idx} className="mega-col">
                        <h4 className="mega-col-title">{col.title}</h4>
                        <ul className="mega-links-list">
                          {col.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                to={item.path}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Featured Campaign Look Card */}
                  <div className="mega-featured-card">
                    <div className="featured-media-frame">
                      <img
                        src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=85"
                        alt="Royal Rajputi Poshak"
                        className="featured-card-img"
                      />
                      <div className="featured-scrim" />
                      <div className="featured-caption">
                        <span className="caption-tag">AUTUMN EDIT</span>
                        <h5 className="caption-title">The Royal Rajputana Poshak</h5>
                        <Link
                          to="/collections/festive-edit"
                          className="caption-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span>Explore Collection</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/collections/festive-edit" className="nav-item-link">
            <span>FESTIVE WEAR</span>
          </NavLink>

          <NavLink to="/collections/cotton-kurtis" className="nav-item-link">
            <span>EVERYDAY WEAR</span>
          </NavLink>

          <NavLink to="/about" className="nav-item-link">
            <span>OUR STORY</span>
          </NavLink>
        </nav>

        {/* Center Luxury Brand Wordmark */}
        <div className="navbar-brand-center">
          <Link to="/" className="brand-wordmark-anchor" aria-label="LABIII Home">
            <span className="brand-name-serif">LABIII</span>
            <span className="brand-subtext">ROYAL ROOTS · MODERN ELEGANCE</span>
          </Link>
        </div>

        {/* Right Action Icons */}
        <div className="navbar-actions-right">
          {/* Currency Switcher */}
          <div className="currency-selector-wrap" ref={currencyRef}>
            <button
              className="currency-btn"
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              type="button"
              aria-label="Select currency"
            >
              <Globe size={14} className="globe-icon" />
              <span>{currency}</span>
              <ChevronDown size={11} className={`chevron-icon ${isCurrencyOpen ? 'open' : ''}`} />
            </button>

            {isCurrencyOpen && (
              <div className="currency-dropdown-pane">
                {currencies &&
                  Object.keys(currencies).map((currCode) => (
                    <button
                      key={currCode}
                      className={`currency-option-item ${currency === currCode ? 'active' : ''}`}
                      onClick={() => {
                        setCurrency(currCode);
                        setIsCurrencyOpen(false);
                      }}
                      type="button"
                    >
                      <span className="curr-symbol">{currencies[currCode]?.symbol}</span>
                      <span className="curr-code">{currCode}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>

          {/* Search Trigger */}
          <button
            className="action-icon-btn"
            onClick={onOpenSearch}
            aria-label="Open search"
            type="button"
            title="Search collections"
          >
            <Search size={19} />
          </button>

          {/* Account Icon */}
          <button
            className="action-icon-btn"
            onClick={handleAccountClick}
            aria-label="Customer account"
            type="button"
            title={isAuthenticated ? `Patron Account (${user?.name || 'Logged in'})` : 'Sign In'}
          >
            <User size={19} />
            {isAuthenticated && <span className="auth-status-dot" />}
          </button>

          {/* Wishlist Icon */}
          <Link
            to="/wishlist"
            className="action-icon-btn wishlist-icon-link"
            aria-label="Saved wishlist"
            title="Saved wishlist"
          >
            <Heart size={19} />
            {wishlistCount > 0 && <span className="badge-counter">{wishlistCount}</span>}
          </Link>

          {/* Shopping Bag Trigger */}
          <button
            className="action-icon-btn bag-trigger-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open shopping bag"
            type="button"
            title="Shopping bag"
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && <span className="badge-counter bag-counter">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer-backdrop" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <span className="drawer-brand">LABIII</span>
              <button
                className="drawer-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                type="button"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="drawer-nav-list">
              <Link to="/collections?filter=new" onClick={() => setIsMobileMenuOpen(false)}>
                New Arrivals
              </Link>
              <Link to="/collections/festive-edit" onClick={() => setIsMobileMenuOpen(false)}>
                Festive Wear &amp; Lehengas
              </Link>
              <Link to="/collections/aangi-blouses" onClick={() => setIsMobileMenuOpen(false)}>
                Rajputi Aangi Cholis
              </Link>
              <Link to="/collections/kurta-sets" onClick={() => setIsMobileMenuOpen(false)}>
                Regal Kurta Sets
              </Link>
              <Link to="/collections/cotton-kurtis" onClick={() => setIsMobileMenuOpen(false)}>
                Daily Handblock Cottons
              </Link>
              <Link to="/collections/all" onClick={() => setIsMobileMenuOpen(false)}>
                View Complete Archive
              </Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                Our Story &amp; Atelier
              </Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Jaipur Flagship Studio
              </Link>
            </nav>

            <div className="drawer-footer">
              <div className="drawer-phone">
                <span>Direct Concierge: </span>
                <a href="tel:+917665022710">+91 76650 22710</a>
              </div>
              <span className="drawer-signoff">Royal Roots. Modern Elegance.</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;