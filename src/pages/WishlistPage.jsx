import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/common/ProductCard/ProductCard';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import './WishlistPage.scss';

const WishlistPage = ({ onQuickView }) => {
  const { wishlist, wishlistCount } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveAllToBag = () => {
    wishlist.forEach((item) => {
      addToCart(item, item.sizes?.[0] || 'M', item.colors?.[0]?.name, 1);
    });
  };

  if (wishlistCount === 0) {
    return (
      <main className="wishlist-page-empty">
        <div className="container">
          <div className="empty-wishlist-card">
            <div className="empty-heart-ring">
              <Heart size={48} strokeWidth={1.3} color="#6B1E2A" />
            </div>
            <h1>Your Wishlist is Empty</h1>
            <p>
              Save pieces as you browse to keep track of your favorite Gota Patti lehengas, Rajputi Aangis, and festive ensembles.
            </p>
            <Link to="/collections/all" className="btn-primary">
              Explore Collections <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="wishlist-page-main">
      <div className="container">
        <div className="wishlist-header">
          <span className="brand-eyebrow">Personal Curation</span>
          <h1>Your Saved Royal Pieces</h1>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
          <div className="wishlist-actions-bar">
            <span>
              You have <strong>{wishlistCount}</strong> heirloom pieces saved.
            </span>
            <button className="btn-secondary move-all-btn" onClick={handleMoveAllToBag}>
              <ShoppingBag size={15} /> Move All to Bag
            </button>
          </div>
        </div>

        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default WishlistPage;

