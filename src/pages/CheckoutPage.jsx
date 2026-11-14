import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { useAuth } from '../context/AuthContext';
import { orderService } from '../services/orderService';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  MapPin,
  Smartphone,
  Banknote,
} from 'lucide-react';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const { cart, cartSubtotal, discountAmount, shippingFee, cartTotal, appliedCoupon, clearCart } =
    useCart();
  const { formatPrice } = useCurrency();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    firstName: user?.name ? user.name.split(' ')[0] : '',
    lastName: user?.name ? user.name.split(' ').slice(1).join(' ') : '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    apartment: '',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '',
    deliveryNotes: '',
  });

  const [deliveryMethod, setDeliveryMethod] = useState('express'); // 'express' | 'studio'
  const [paymentMethod, setPaymentMethod] = useState('upi'); // 'upi' | 'card' | 'netbanking' | 'cod'
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const [placingOrder, setPlacingOrder] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  if (cart.length === 0 && !confirmedOrder) {
    return (
      <main className="checkout-page-empty">
        <div className="container">
          <div className="empty-box">
            <h2>No items in checkout</h2>
            <p>Your bag is empty. Please select garments before checkout.</p>
            <Link to="/collections/all" className="btn-primary">
              Return to Catalog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setPlacingOrder(true);

    const orderPayload = {
      items: cart,
      shippingInfo,
      deliveryMethod,
      paymentMethod,
      subtotal: cartSubtotal,
      discount: discountAmount,
      shippingFee,
      total: cartTotal,
      coupon: appliedCoupon ? appliedCoupon.code : null,
      customerEmail: shippingInfo.email,
    };

    const res = await orderService.createOrder(orderPayload);
    setPlacingOrder(false);

    if (res.success) {
      setConfirmedOrder(res.order);
      clearCart();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (confirmedOrder) {
    return (
      <main className="checkout-success-view">
        <div className="container">
          <div className="success-receipt-card">
            <div className="success-badge-icon">
              <CheckCircle2 size={58} color="#2E7D32" />
            </div>

            <span className="brand-eyebrow">Order Successfully Placed</span>
            <h1>Thank You for Choosing Labiii</h1>
            <p className="order-id-label">
              Order Reference: <strong>#{confirmedOrder.id}</strong>
            </p>

            <div className="receipt-timeline">
              <div className="timeline-node active">
                <span className="node-dot" />
                <span>Order Confirmed</span>
              </div>
              <div className="timeline-node">
                <span className="node-dot" />
                <span>Tailored in Jaipur</span>
              </div>
              <div className="timeline-node">
                <span className="node-dot" />
                <span>Express Dispatched</span>
              </div>
              <div className="timeline-node">
                <span className="node-dot" />
                <span>Delivered</span>
              </div>
            </div>

            <div className="receipt-details-box">
              <div className="receipt-row">
                <span>Recipient:</span>
                <strong>
                  {confirmedOrder.shippingInfo.firstName} {confirmedOrder.shippingInfo.lastName}
                </strong>
              </div>
              <div className="receipt-row">
                <span>Shipping Address:</span>
                <span>
                  {confirmedOrder.shippingInfo.address}, {confirmedOrder.shippingInfo.city},{' '}
                  {confirmedOrder.shippingInfo.state} - {confirmedOrder.shippingInfo.pincode}
                </span>
              </div>
              <div className="receipt-row">
                <span>Payment Mode:</span>
                <strong className="payment-tag">{confirmedOrder.paymentMethod.toUpperCase()}</strong>
              </div>
              <div className="receipt-row total">
                <span>Total Amount Paid:</span>
                <strong className="price-tag">{formatPrice(confirmedOrder.total)}</strong>
              </div>
            </div>

            <div className="receipt-help-text">
              <Sparkles size={16} color="#C59B27" />
              <span>
                A confirmation SMS and email have been dispatched to {confirmedOrder.shippingInfo.email}.
                Our Jaipur concierge will oversee your order personally.
              </span>
            </div>

            <div className="success-actions">
              <Link to="/collections/all" className="btn-primary">
                Continue Exploring <ArrowRight size={16} />
              </Link>
              <Link to="/account" className="btn-secondary">
                View Past Orders in Profile
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page-main">
      <div className="container">
        <div className="checkout-top-header">
          <span className="brand-eyebrow">Secure Concierge Checkout</span>
          <h1>Finalize Your Royal Order</h1>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
        </div>

        <form onSubmit={handlePlaceOrder} className="checkout-form-grid">
          {/* Left Column: Form Details */}
          <div className="checkout-forms-column">
            {/* 1. Contact & Shipping Address */}
            <div className="checkout-section-card">
              <div className="section-title-box">
                <div className="step-badge">1</div>
                <div>
                  <h3>Delivery Address & Contact</h3>
                  <p>Where shall our royal courier deliver your garments?</p>
                </div>
              </div>

              <div className="fields-grid-2">
                <div className="field-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={shippingInfo.firstName}
                    onChange={handleInputChange}
                    placeholder="e.g. Maharani"
                    required
                  />
                </div>
                <div className="field-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={shippingInfo.lastName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rathore"
                    required
                  />
                </div>
              </div>

              <div className="fields-grid-2">
                <div className="field-group">
                  <label>Email Address for Tracking *</label>
                  <input
                    type="email"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleInputChange}
                    placeholder="yourname@domain.com"
                    required
                  />
                </div>
                <div className="field-group">
                  <label>Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="field-group">
                <label>Street Address / Flat / Building *</label>
                <input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  placeholder="e.g. 14 Rajputana Enclave, Civil Lines"
                  required
                />
              </div>

              <div className="fields-grid-3">
                <div className="field-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleInputChange}
                    placeholder="Jaipur"
                    required
                  />
                </div>
                <div className="field-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={shippingInfo.state}
                    onChange={handleInputChange}
                    placeholder="Rajasthan"
                    required
                  />
                </div>
                <div className="field-group">
                  <label>Postal Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={shippingInfo.pincode}
                    onChange={handleInputChange}
                    placeholder="302001"
                    maxLength={6}
                    required
                  />
                </div>
              </div>
            </div>

            {/* 2. Delivery Method */}
            <div className="checkout-section-card">
              <div className="section-title-box">
                <div className="step-badge">2</div>
                <div>
                  <h3>Delivery Method</h3>
                  <p>Choose your preferred fulfillment option</p>
                </div>
              </div>

              <div className="delivery-options-grid">
                <label className={`delivery-option ${deliveryMethod === 'express' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="del-method"
                    checked={deliveryMethod === 'express'}
                    onChange={() => setDeliveryMethod('express')}
                  />
                  <div className="option-content">
                    <div className="option-name-row">
                      <Truck size={18} className="option-icon" />
                      <strong>Complimentary Express Courier</strong>
                      <span className="price-tag">FREE</span>
                    </div>
                    <p>Direct doorstep dispatch via Bluedart/Delhivery in 3–5 business days.</p>
                  </div>
                </label>

                <label className={`delivery-option ${deliveryMethod === 'studio' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="del-method"
                    checked={deliveryMethod === 'studio'}
                    onChange={() => setDeliveryMethod('studio')}
                  />
                  <div className="option-content">
                    <div className="option-name-row">
                      <MapPin size={18} className="option-icon" />
                      <strong>Flagship Studio Pickup</strong>
                      <span className="price-tag">FREE</span>
                    </div>
                    <p>Collect in person with complimentary fitting at 46 Sachivalaya Vihar, Jaipur.</p>
                  </div>
                </label>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="checkout-section-card">
              <div className="section-title-box">
                <div className="step-badge">3</div>
                <div>
                  <h3>Payment Gateway</h3>
                  <p>100% Encrypted 256-bit SSL transaction</p>
                </div>
              </div>

              <div className="payment-options-grid">
                <label className={`payment-pill ${paymentMethod === 'upi' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="pay-method"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                  />
                  <Smartphone size={18} />
                  <span>UPI Instant (GPay / PhonePe / Paytm)</span>
                </label>

                <label className={`payment-pill ${paymentMethod === 'card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="pay-method"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <CreditCard size={18} />
                  <span>Credit / Debit Cards (Visa / MC / RuPay)</span>
                </label>

                <label className={`payment-pill ${paymentMethod === 'cod' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="pay-method"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <Banknote size={18} />
                  <span>Cash on Delivery (COD)</span>
                </label>
              </div>

              {/* Dynamic Payment Details Input */}
              {paymentMethod === 'upi' && (
                <div className="payment-subform">
                  <label>Enter your UPI ID / VPA</label>
                  <input
                    type="text"
                    placeholder="e.g. mobile@okhdfcbank or user@paytm"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                  <span className="subform-note">A payment prompt will open on your UPI app upon ordering.</span>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="payment-subform card-inputs">
                  <div className="field-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 8821"
                      maxLength={19}
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="fields-grid-2">
                    <div className="field-group">
                      <label>Expiry (MM/YY)</label>
                      <input
                        type="text"
                        placeholder="12/28"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                      />
                    </div>
                    <div className="field-group">
                      <label>CVV</label>
                      <input
                        type="password"
                        placeholder="•••"
                        maxLength={4}
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="payment-subform cod-note">
                  <p>Cash on Delivery is enabled for verified Indian mobile numbers. Please keep exact cash ready at delivery.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="checkout-summary-column">
            <div className="checkout-summary-card">
              <h3>Royal Order Summary</h3>
              <div className="accent-bar" />

              {/* Items List */}
              <div className="summary-items-list">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="summary-item-row">
                    <div className="item-thumbnail">
                      <img src={item.image} alt={item.name} />
                      <span className="item-badge-qty">{item.quantity}</span>
                    </div>
                    <div className="item-details">
                      <span className="item-title">{item.name}</span>
                      <span className="item-size-tag">
                        Size: {item.size} {item.color ? `· ${item.color}` : ''}
                      </span>
                    </div>
                    <span className="item-price">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              {/* Price Calculation */}
              <div className="summary-calc-box">
                <div className="calc-row">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartSubtotal)}</span>
                </div>
                {appliedCoupon && (
                  <div className="calc-row discount">
                    <span>Discount ({appliedCoupon.code})</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="calc-row">
                  <span>Express Delivery</span>
                  <span>{shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}</span>
                </div>
                <div className="calc-row grand-total">
                  <span>Grand Total</span>
                  <span className="total-highlight">{formatPrice(cartTotal)}</span>
                </div>
                <span className="all-taxes-tag">Includes GST and luxury keepsake box.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary place-order-btn"
                disabled={placingOrder}
              >
                {placingOrder ? (
                  'Securing Your Royal Order...'
                ) : (
                  <>
                    <Lock size={16} /> Confirm & Pay {formatPrice(cartTotal)}
                  </>
                )}
              </button>

              <div className="security-assurances">
                <div className="assurance-item">
                  <ShieldCheck size={16} color="#C59B27" />
                  <span>256-Bit SSL Bank Encrypted</span>
                </div>
                <div className="assurance-item">
                  <Sparkles size={16} color="#C59B27" />
                  <span>Direct from Jaipur Artisans</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CheckoutPage;

