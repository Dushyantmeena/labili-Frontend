import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Tag,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import './CartPage.scss';

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
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
  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    const res = applyCoupon(couponCode);
    if (res.success) {
      setCouponCode('');
      setCouponMsg('');
    } else {
      setCouponMsg(res.message);
    }
  };

  if (cart.length === 0) {
    return (
      <main className="cart-page-empty">
        <div className="container">
          <div className="empty-cart-card">
            <div className="empty-icon-circle">
              <ShoppingBag size={52} strokeWidth={1.3} color="#6B1E2A" />
            </div>
            <h1>Your Royal Bag is Empty</h1>
            <p>
              Explore our handcrafted Gota Patti lehenga skirts, Rajputi Aangi cholis, and royal festive ensembles from Jaipur.
            </p>
            <Link to="/collections/all" className="btn-primary start-shopping-btn">
              Explore Collections <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page-main">
      <div className="container">
        {/* Header */}
        <div className="cart-page-header">
          <span className="brand-eyebrow">Shopping Bag</span>
          <h1>Review Your Royal Selection</h1>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
        </div>

        {/* Free Shipping Progress Strip */}
        <div className="free-shipping-card">
          <div className="progress-info">
            {isFreeShipping ? (
              <span className="shipping-unlocked">
                <Sparkles size={16} /> You have unlocked Complimentary Express Delivery across India!
              </span>
            ) : (
              <span>
                Add <strong>{formatPrice(amountNeededForFreeShipping)}</strong> more to receive <strong>Complimentary Express Delivery</strong>
              </span>
            )}
          </div>
          <div className="progress-bar-bg">
            <div
              className={`progress-fill ${isFreeShipping ? 'complete' : ''}`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="cart-content-grid">
          {/* Items Table */}
          <div className="cart-items-column">
            <div className="cart-table-card">
              <div className="cart-table-header">
                <span className="col-prod">Garment</span>
                <span className="col-price">Price</span>
                <span className="col-qty">Quantity</span>
                <span className="col-total">Subtotal</span>
              </div>

              <div className="cart-table-body">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="cart-table-row">
                    <div className="col-prod product-info-cell">
                      <div className="item-img-box">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-text-box">
                        <Link to={`/products/${item.slug || item.productId}`} className="item-name">
                          {item.name}
                        </Link>
                        <div className="item-options">
                          <span className="opt-tag">Size: {item.size}</span>
                          {item.color && <span className="opt-tag">Color: {item.color}</span>}
                        </div>
                        <button
                          className="item-remove-link"
                          onClick={() => removeFromCart(item.cartItemId)}
                        >
                          <Trash2 size={13} /> Remove
                        </button>
                      </div>
                    </div>

                    <div className="col-price price-cell">
                      <span>{formatPrice(item.price)}</span>
                    </div>

                    <div className="col-qty qty-cell">
                      <div className="qty-counter">
                        <button onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}>
                          <Minus size={13} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}>
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    <div className="col-total total-cell">
                      <span className="subtotal-val">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-table-footer">
                <button className="clear-cart-btn" onClick={clearCart}>
                  <RotateCcw size={14} /> Clear Entire Bag
                </button>
                <Link to="/collections/all" className="continue-shopping-link">
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Summary Column */}
          <div className="cart-summary-column">
            <div className="order-summary-card">
              <h3>Order Summary</h3>
              <div className="accent-line" />

              <div className="summary-lines">
                <div className="line-row">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>{formatPrice(cartSubtotal)}</span>
                </div>

                {appliedCoupon && (
                  <div className="line-row discount">
                    <span>Discount ({appliedCoupon.code})</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}

                <div className="line-row">
                  <span>Express Domestic Delivery</span>
                  <span>{isFreeShipping ? 'FREE' : formatPrice(shippingFee)}</span>
                </div>

                <div className="line-row total">
                  <span>Grand Total</span>
                  <span className="total-num">{formatPrice(cartTotal)}</span>
                </div>

                <p className="taxes-clarification">
                  All taxes, GST & luxury packaging included.
                </p>
              </div>

              {/* Coupon Form */}
              <div className="coupon-widget">
                {appliedCoupon ? (
                  <div className="applied-banner">
                    <Tag size={15} color="#2E7D32" />
                    <span>Coupon <strong>{appliedCoupon.code}</strong> applied ({appliedCoupon.label})</span>
                    <button onClick={removeCoupon}>Remove</button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="coupon-entry-form">
                    <input
                      type="text"
                      placeholder="Coupon (try ROYAL10 or JAIPUR15)"
                      value={couponCode}
                      onChange={(e) => {
                        setCouponCode(e.target.value);
                        setCouponMsg('');
                      }}
                    />
                    <button type="submit">Apply</button>
                  </form>
                )}
                {couponMsg && <p className="coupon-error">{couponMsg}</p>}
              </div>

              {/* Checkout CTA */}
              <button
                className="btn-primary proceed-btn"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Royal Checkout <ArrowRight size={17} />
              </button>

              <div className="summary-security-badge">
                <ShieldCheck size={18} color="#C59B27" />
                <span>100% Encrypted & Verified Checkout Gateway</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;

