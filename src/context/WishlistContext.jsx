import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('lavili_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistNotice, setWishlistNotice] = useState(null);

  useEffect(() => {
    localStorage.setItem('lavili_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        setWishlistNotice(`Removed "${product.name.slice(0, 24)}..." from wishlist`);
        setTimeout(() => setWishlistNotice(null), 2500);
        return prev.filter((item) => item.id !== product.id);
      } else {
        setWishlistNotice(`Saved "${product.name.slice(0, 24)}..." to your wishlist`);
        setTimeout(() => setWishlistNotice(null), 2500);
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        wishlistCount: wishlist.length,
        wishlistNotice,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

