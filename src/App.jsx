import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Context Providers
import { CurrencyProvider } from './context/CurrencyContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

// Common Components
import AnnouncementBar from './components/common/Header/AnnouncementBar';
import Navbar from './components/common/Header/Navbar';
import MobileBottomBar from './components/common/Header/MobileBottomBar';
import Footer from './components/common/Footer/Footer';
import CartDrawer from './components/common/CartDrawer/CartDrawer';
import SearchModal from './components/common/SearchModal/SearchModal';
import QuickViewModal from './components/common/QuickViewModal/QuickViewModal';
import SizeGuideModal from './components/common/SizeGuideModal/SizeGuideModal';
import AuthModal from './components/common/AuthModal/AuthModal';
import Toast from './components/common/Toast/Toast';
import BaisaSaheli from './components/common/BaisaSaheli/BaisaSaheli';

// Pages
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CustomRentalPage from './pages/CustomRentalPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <CurrencyProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ScrollToTop />
            <AnnouncementBar />
            <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

            <Routes>
              <Route path="/" element={<HomePage onQuickView={handleOpenQuickView} />} />
              <Route path="/collections" element={<CollectionPage onQuickView={handleOpenQuickView} />} />
              <Route path="/collections/:categorySlug" element={<CollectionPage onQuickView={handleOpenQuickView} />} />
              <Route
                path="/products/:productId"
                element={
                  <ProductDetailPage
                    onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
                    onQuickView={handleOpenQuickView}
                  />
                }
              />
              <Route path="/rent-custom" element={<CustomRentalPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/wishlist" element={<WishlistPage onQuickView={handleOpenQuickView} />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <Footer />
            <MobileBottomBar onOpenSearch={() => setIsSearchOpen(true)} />

            {/* Global Overlays */}
            <CartDrawer />
            <SearchModal
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
            />
            <QuickViewModal
              product={quickViewProduct}
              isOpen={!!quickViewProduct}
              onClose={handleCloseQuickView}
              onOpenSizeGuide={() => {
                handleCloseQuickView();
                setIsSizeGuideOpen(true);
              }}
            />
            <SizeGuideModal
              isOpen={isSizeGuideOpen}
              onClose={() => setIsSizeGuideOpen(false)}
            />
            <AuthModal />
            <Toast />
            <BaisaSaheli />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </CurrencyProvider>
  );
}

export default App;
