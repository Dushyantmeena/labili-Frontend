import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, LayoutGrid, ShoppingBag, Search, ArrowUp } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import './MobileBottomBar.scss';

const MobileBottomBar = ({ onOpenSearch }) => {
  const { cartCount, setIsCartOpen } = useCart();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Scroll to Top button matching screenshot bottom-right */}
      {showScrollTop && (
        <button
          className="mobile-scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp size={18} strokeWidth={2.2} />
        </button>
      )}

      {/* Fixed Mobile Bottom Navigation matching screenshot */}
      <nav className="mobile-bottom-nav-bar" aria-label="Mobile Navigation">
        <NavLink
          to="/"
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
          aria-label="Home"
        >
          <Home size={21} strokeWidth={1.6} />
        </NavLink>

        <NavLink
          to="/collections/all"
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
          aria-label="Categories"
        >
          <LayoutGrid size={21} strokeWidth={1.6} />
        </NavLink>

        <button
          className="bottom-nav-item cart-item"
          onClick={() => setIsCartOpen(true)}
          aria-label="Shopping Bag"
          type="button"
        >
          <div className="cart-icon-wrapper">
            <ShoppingBag size={21} strokeWidth={1.6} />
            <span className="bottom-cart-badge">{cartCount}</span>
          </div>
        </button>

        <button
          className="bottom-nav-item"
          onClick={onOpenSearch}
          aria-label="Search"
          type="button"
        >
          <Search size={21} strokeWidth={1.6} />
        </button>
      </nav>
    </>
  );
};

export default MobileBottomBar;
