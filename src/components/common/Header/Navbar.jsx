import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import { useAuth } from '../../../context/AuthContext';
import './Navbar.scss';

const Navbar = ({ onOpenSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, openAuthModal, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    <header className={`v3-header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Main Navbar */}
      <div className="v3-main-navbar">
        <div className="v3-nav-container">
          {/* Mobile Menu Toggle */}
          <button
            className="v3-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          {/* Left Desktop Nav Links */}
          <nav className="v3-left-nav">
            <div
              className="v3-nav-dropdown-wrapper"
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <NavLink
                to="/collections/all"
                className={({ isActive }) => `v3-nav-item ${isActive ? 'active' : ''}`}
              >
                SHOP <ChevronDown size={12} className="v3-chevron" />
              </NavLink>
              {isShopDropdownOpen && (
                <div className="v3-dropdown-menu">
                  <Link to="/collections/all" className="dropdown-link">Shop All Collections</Link>
                  <Link to="/collections/aangi-blouses" className="dropdown-link">Rajputi Aangi Blouses</Link>
                  <Link to="/collections/gota-patti-lehenga" className="dropdown-link">Gota Patti Lehengas</Link>
                  <Link to="/collections/kurta-sets" className="dropdown-link">Kurta Sets & Anarkalis</Link>
                  <Link to="/collections/cotton-kurtis" className="dropdown-link">Jaipur Cotton Kurtis</Link>
                  <Link to="/collections/tops-tunics" className="dropdown-link">Peplum & Fusion Tops</Link>
                </div>
              )}
            </div>

            <NavLink
              to="/collections/new-in"
              className={({ isActive }) => `v3-nav-item ${isActive ? 'active' : ''}`}
            >
              NEW ARRIVALS
            </NavLink>

            <NavLink
              to="/collections/aangi-blouses"
              className={({ isActive }) => `v3-nav-item ${isActive ? 'active' : ''}`}
            >
              RAJPUTI AANGI
            </NavLink>

            <NavLink
              to="/collections/festive-edit"
              className={({ isActive }) => `v3-nav-item ${isActive ? 'active' : ''}`}
            >
              FESTIVE EDIT
            </NavLink>

            <NavLink
              to="/collections/kurtis"
              className={({ isActive }) => `v3-nav-item ${isActive ? 'active' : ''}`}
            >
              KURTIS
            </NavLink>
          </nav>

          {/* Center Brand Logo (Labiii - Timeless Comfort) */}
          <div className="v3-brand-center">
            <Link to="/" className="v3-brand-link" onClick={closeMobileMenu}>
              <img
                src="/labiii-logo.png"
                alt="Labiii - Timeless Comfort"
                className="v3-brand-logo-img"
              />
            </Link>
          </div>

          {/* Right Action Icons */}
          <div className="v3-right-actions">
            <button
              className="v3-icon-btn"
              onClick={onOpenSearch}
              aria-label="Search"
              title="Search collection"
            >
              <Search size={20} strokeWidth={1.4} />
            </button>

            <button
              className="v3-icon-btn"
              onClick={handleAccountClick}
              aria-label="Account"
              title={isAuthenticated ? `Profile (${user?.name})` : 'Sign in'}
            >
              <User size={20} strokeWidth={1.4} />
            </button>

            <Link
              to="/wishlist"
              className="v3-icon-btn wishlist-icon-btn"
              aria-label="Wishlist"
              title="Saved items"
            >
              <Heart size={20} strokeWidth={1.4} />
              {wishlistCount > 0 && <span className="v3-badge">{wishlistCount}</span>}
            </Link>

            <button
              className="v3-icon-btn bag-icon-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              title="Shopping Bag"
            >
              <ShoppingBag size={20} strokeWidth={1.4} />
              <span className="v3-cart-badge">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Sub-strip from Screenshot 1 */}
      <div className="v3-sub-strip">
        <div className="v3-sub-container">
          <Link to="/collections/festive-edit" className="v3-sub-link">
            NAVRATRI & DIWALI EDIT
          </Link>
          <Link to="/rent-custom?service=rental" className="v3-sub-link">
            RENT AN OUTFIT
          </Link>
          <Link to="/rent-custom?service=custom" className="v3-sub-link">
            CUSTOM MADE
          </Link>
        </div>
      </div>

      {/* Mobile Off-Canvas Drawer */}
      <div className={`v3-mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
          <div className="drawer-header">
            <div className="drawer-brand">
              <img
                src="/labiii-logo.png"
                alt="Labiii - Timeless Comfort"
                className="drawer-logo-img"
              />
            </div>
            <button className="drawer-close" onClick={closeMobileMenu} aria-label="Close menu">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="drawer-links-list">
            <Link to="/collections/festive-edit" onClick={closeMobileMenu} className="drawer-link highlight">
              Navratri & Diwali Edit <ArrowRight size={14} />
            </Link>
            <Link to="/collections/new-in" onClick={closeMobileMenu} className="drawer-link">
              New Arrivals <ArrowRight size={14} />
            </Link>
            <Link to="/collections/aangi-blouses" onClick={closeMobileMenu} className="drawer-link">
              Rajputi Aangi <ArrowRight size={14} />
            </Link>
            <Link to="/collections/gota-patti-lehenga" onClick={closeMobileMenu} className="drawer-link">
              Gota Patti Lehengas <ArrowRight size={14} />
            </Link>
            <Link to="/collections/kurtis" onClick={closeMobileMenu} className="drawer-link">
              Kurtis & Everyday Cotton <ArrowRight size={14} />
            </Link>
            <Link to="/collections/all" onClick={closeMobileMenu} className="drawer-link">
              Shop All Pieces <ArrowRight size={14} />
            </Link>
            <Link to="/rent-custom?service=rental" onClick={closeMobileMenu} className="drawer-link">
              Rent an Outfit <ArrowRight size={14} />
            </Link>
            <Link to="/rent-custom?service=custom" onClick={closeMobileMenu} className="drawer-link">
              Custom Made Orders <ArrowRight size={14} />
            </Link>
            <Link to="/about" onClick={closeMobileMenu} className="drawer-link">
              Our Story & Atelier <ArrowRight size={14} />
            </Link>
            <Link to="/contact" onClick={closeMobileMenu} className="drawer-link">
              Visit Jaipur Studio <ArrowRight size={14} />
            </Link>
          </div>

          <div className="drawer-footer">
            <a
              href="https://wa.me/917665022710?text=Hi+The+Baisa%2C+I+have+a+question"
              target="_blank"
              rel="noreferrer"
              className="drawer-wa-btn"
            >
              Ask on WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
