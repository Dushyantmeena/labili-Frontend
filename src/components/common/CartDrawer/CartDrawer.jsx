import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import { useCurrency } from '../../../context/CurrencyContext';
import './CartDrawer.scss';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    discountAmount,
    shippingFee,
    cartTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    isFreeShipping,
    amountNeededForFreeShipping,
    freeShippingProgress,
  } = useCart();

  const { formatPrice } = useCurrency();
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (res.success) {
      setCouponInput('');
      setCouponError('');
    } else {
      setCouponError(res.message);
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="header-title-box">
            <ShoppingBag size={20} className="bag-icon" />
            <h3>Your Shopping Bag</h3>
            <span className="items-count">({cart.length})</span>
          </div>
          <button
            className="drawer-close"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Shopping Bag"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="free-shipping-meter">
          <div className="shipping-text">
            {isFreeShipping ? (
              <span className="unlocked">
                <Sparkles size={14} /> Congratulations! You unlocked Free Express Shipping!
              </span>
            ) : (
              <span>
                Add <strong>{formatPrice(amountNeededForFreeShipping)}</strong> more to get <strong>Free Express Shipping</strong>
              </span>
            )}
          </div>
          <div className="progress-bar-track">
            <div
              className={`progress-bar-fill ${isFreeShipping ? 'complete' : ''}`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        {cart.length === 0 ? (
          <div className="empty-cart-view">
            <div className="empty-icon-ring">
              <ShoppingBag size={42} strokeWidth={1.3} />
            </div>
            <h4>Your Bag is Waiting</h4>
            <p>Explore our handcrafted Gota Patti lehengas, Rajputi Aangi cholis, and royal festive edits.</p>
            <Link
              to="/collections/all"
              className="btn-primary start-shopping-btn"
              onClick={() => setIsCartOpen(false)}
            >
              Explore Royal Collections
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items-container">
              {cart.map((item) => (
                <div key={item.cartItemId} className="cart-item-row">
                  <div className="item-thumb-wrapper">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-info">
                    <div className="item-title-row">
                      <Link
                        to={`/products/${item.slug || item.productId}`}
                        onClick={() => setIsCartOpen(false)}
                        className="item-name"
                      >
                        {item.name}
                      </Link>
                      <button
                        className="item-remove-btn"
                        onClick={() => removeFromCart(item.cartItemId)}
                        aria-label="Remove item"
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="item-meta">
                      <span className="meta-pill">Size: {item.size}</span>
                      {item.color && <span className="meta-pill">Color: {item.color}</span>}
                    </div>

                    <div className="item-bottom-row">
                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <div className="item-price">
                        <span className="total-item-price">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Drawer Footer & Checkout */}
            <div className="drawer-footer">
              {/* Coupon Section */}
              <div className="drawer-coupon-box">
                {appliedCoupon ? (
                  <div className="applied-coupon-row">
                    <div className="coupon-tag">
                      <Tag size={14} />
                      <span>{appliedCoupon.code} applied ({appliedCoupon.label})</span>
                    </div>
                    <button className="remove-coupon-btn" onClick={removeCoupon}>
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="coupon-form">
                    <input
                      type="text"
                      placeholder="Coupon Code (try ROYAL10)"
                      value={couponInput}
                      onChange={(e) => {
                        setCouponInput(e.target.value);
                        setCouponError('');
                      }}
                    />
                    <button type="submit">Apply</button>
                  </form>
                )}
                {couponError && <p className="coupon-err">{couponError}</p>}
              </div>

              {/* Order Calculations */}
              <div className="summary-breakdown">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartSubtotal)}</span>
                </div>
                {appliedCoupon && (
                  <div className="summary-row discount">
                    <span>Royal Discount ({appliedCoupon.discountPercent}%)</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span>Express Shipping</span>
                  <span>{isFreeShipping ? 'FREE' : formatPrice(shippingFee)}</span>
                </div>
                <div className="summary-row total">
                  <span>Estimated Total</span>
                  <span className="total-highlight">{formatPrice(cartTotal)}</span>
                </div>
                <p className="taxes-note">Inclusive of all taxes & duties across India.</p>
              </div>

              {/* Checkout CTA */}
              <button className="btn-primary checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout <ArrowRight size={17} />
              </button>

              <button
                className="continue-btn"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Exploring
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;

