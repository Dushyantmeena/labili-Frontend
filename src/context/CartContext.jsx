import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const FREE_SHIPPING_THRESHOLD = 1999;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('lavili_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('lavili_cart', JSON.stringify(cart));
  }, [cart]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (product, size = 'M', color = null, quantity = 1) => {
    const chosenColor = color || (product.colors && product.colors[0]?.name) || 'Standard';
    const chosenSize = size || (product.sizes && product.sizes[0]) || 'Free Size';
    const cartItemId = `${product.id}-${chosenSize}-${chosenColor}`;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prevCart.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            cartItemId,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.primaryImage,
            size: chosenSize,
            color: chosenColor,
            quantity,
          },
        ];
      }
    });

    showToast(`Added "${product.name.slice(0, 28)}..." to your royal bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    showToast('Item removed from your cart');
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === 'ROYAL10') {
      setAppliedCoupon({ code: 'ROYAL10', discountPercent: 10, label: '10% Royal Heritage Courtesy' });
      showToast('Coupon ROYAL10 applied (10% OFF)');
      return { success: true };
    }
    if (trimmed === 'JAIPUR15') {
      setAppliedCoupon({ code: 'JAIPUR15', discountPercent: 15, label: '15% First Order Welcome' });
      showToast('Coupon JAIPUR15 applied (15% OFF)');
      return { success: true };
    }
    return { success: false, message: 'Invalid coupon code. Try ROYAL10 or JAIPUR15' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed');
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = appliedCoupon
    ? Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100)
    : 0;
  const isFreeShipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0;
  const shippingFee = isFreeShipping ? 0 : 150;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const freeShippingProgress = Math.min(100, Math.round((cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        discountAmount,
        shippingFee,
        cartTotal,
        cartCount,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        isFreeShipping,
        amountNeededForFreeShipping,
        freeShippingProgress,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

