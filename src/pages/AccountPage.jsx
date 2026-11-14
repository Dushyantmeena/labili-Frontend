import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCurrency } from '../context/CurrencyContext';
import { orderService } from '../services/orderService';
import {
  User,
  Package,
  Ruler,
  Calendar,
  LogOut,
  ShoppingBag,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import './AccountPage.scss';

const AccountPage = () => {
  const { user, isAuthenticated, logout, openAuthModal } = useAuth();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('orders'); // 'orders' | 'measurements' | 'rentals'
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // Mock measurements state
  const [measurements, setMeasurements] = useState({
    bust: '36 in',
    waist: '30 in',
    hips: '40 in',
    blouseLength: '14.5 in',
    skirtLength: '42 in',
    height: '5 ft 5 in',
  });

  useEffect(() => {
    const fetchOrders = async () => {
      setLoadingOrders(true);
      const res = await orderService.getMyOrders();
      if (res.success) {
        setOrders(res.orders);
      }
      setLoadingOrders(false);
    };

    if (isAuthenticated) {
      fetchOrders();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <main className="account-unauth-page">
        <div className="container">
          <div className="unauth-card">
            <div className="user-icon-ring">
              <User size={46} color="#6B1E2A" />
            </div>
            <h1>Royal Account Sign In</h1>
            <p>Please sign in to view past orders, saved measurements, and rental schedules.</p>
            <button className="btn-primary" onClick={() => openAuthModal('login')}>
              Sign In to Your Account
            </button>
          </div>
        </div>
      </main>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <main className="account-page-main">
      <div className="container">
        {/* Profile Card Header */}
        <div className="profile-banner-card">
          <div className="profile-avatar-circle">
            <User size={38} color="#C59B27" />
          </div>
          <div className="profile-info">
            <span className="brand-eyebrow">The Royal Patron</span>
            <h1>{user?.name || 'Valued Guest'}</h1>
            <p className="user-email">{user?.email}</p>
          </div>
          <button className="btn-secondary logout-btn" onClick={handleLogout}>
            <LogOut size={15} /> Sign Out
          </button>
        </div>

        {/* Account Tabs */}
        <div className="account-layout">
          <aside className="account-sidebar-nav">
            <button
              className={`nav-tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <Package size={18} /> My Orders ({orders.length})
            </button>
            <button
              className={`nav-tab-btn ${activeTab === 'measurements' ? 'active' : ''}`}
              onClick={() => setActiveTab('measurements')}
            >
              <Ruler size={18} /> Saved Measurements
            </button>
            <button
              className={`nav-tab-btn ${activeTab === 'rentals' ? 'active' : ''}`}
              onClick={() => setActiveTab('rentals')}
            >
              <Calendar size={18} /> Studio & Rental Bookings
            </button>
          </aside>

          {/* Main Tab Panel */}
          <div className="account-tab-panel">
            {activeTab === 'orders' && (
              <div className="orders-panel">
                <div className="panel-header">
                  <h2>Past Royal Orders</h2>
                  <p>Track delivery status and review your handcrafted garments.</p>
                </div>

                {loadingOrders ? (
                  <div className="spinner" />
                ) : orders.length === 0 ? (
                  <div className="empty-panel-box">
                    <ShoppingBag size={38} color="#8E7A70" />
                    <h4>No orders recorded yet</h4>
                    <p>Your commissioned pieces and purchases will appear here.</p>
                    <Link to="/collections/all" className="btn-primary">
                      Explore Collections
                    </Link>
                  </div>
                ) : (
                  <div className="orders-list">
                    {orders.map((ord) => (
                      <div key={ord.id} className="order-history-card">
                        <div className="order-card-header">
                          <div>
                            <span className="order-num">Order #{ord.id}</span>
                            <span className="order-date">
                              Placed on {new Date(ord.date).toLocaleDateString()}
                            </span>
                          </div>
                          <span className="order-status-badge">
                            {ord.status || 'Confirmed'}
                          </span>
                        </div>

                        <div className="order-items-preview">
                          {ord.items &&
                            ord.items.map((item, idx) => (
                              <div key={idx} className="order-item-chip">
                                <img src={item.image} alt={item.name} />
                                <div>
                                  <strong>{item.name}</strong>
                                  <span>
                                    Qty: {item.quantity} · Size: {item.size}
                                  </span>
                                </div>
                              </div>
                            ))}
                        </div>

                        <div className="order-card-footer">
                          <span>
                            Total: <strong>{formatPrice(ord.total)}</strong> ({ord.paymentMethod?.toUpperCase()})
                          </span>
                          <span className="dispatch-text">
                            Dispatch via Bluedart Express
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'measurements' && (
              <div className="measurements-panel">
                <div className="panel-header">
                  <h2>Saved Measurements Profile</h2>
                  <p>Our master tailors reference these values when stitching your custom orders.</p>
                </div>

                <div className="measurements-grid">
                  {Object.entries(measurements).map(([key, val]) => (
                    <div key={key} className="measure-card">
                      <span className="measure-label">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <strong className="measure-val">{val}</strong>
                    </div>
                  ))}
                </div>

                <div className="alteration-policy-note">
                  <Sparkles size={18} color="#C59B27" />
                  <p>
                    All stitched Labiii Aangi blouses and lehenga skirts arrive with 2-inch inner side margins.
                    Need to update your measurements? Simply message our Jaipur atelier.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'rentals' && (
              <div className="rentals-panel">
                <div className="panel-header">
                  <h2>Studio Appointments & Rental Enquiries</h2>
                  <p>Manage your upcoming wedding outfit rentals and Jaipur studio visits.</p>
                </div>

                <div className="empty-panel-box">
                  <Calendar size={38} color="#8E7A70" />
                  <h4>No Active Rental Bookings</h4>
                  <p>Reserve an heirloom Gota Patti lehenga or poshak for your next special occasion.</p>
                  <Link to="/rent-custom" className="btn-primary">
                    Book Outfit Rental or Atelier Visit
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountPage;

