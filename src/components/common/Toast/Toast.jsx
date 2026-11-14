import React from 'react';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';
import { CheckCircle2, Heart } from 'lucide-react';
import './Toast.scss';

const Toast = () => {
  const { toastMessage } = useCart();
  const { wishlistNotice } = useWishlist();

  if (!toastMessage && !wishlistNotice) return null;

  return (
    <div className="royal-toast-container">
      {toastMessage && (
        <div className="royal-toast cart-toast">
          <CheckCircle2 size={18} className="toast-icon cart" />
          <span>{toastMessage}</span>
        </div>
      )}
      {wishlistNotice && (
        <div className="royal-toast wishlist-toast">
          <Heart size={18} className="toast-icon heart" fill="#6B1E2A" />
          <span>{wishlistNotice}</span>
        </div>
      )}
    </div>
  );
};

export default Toast;

