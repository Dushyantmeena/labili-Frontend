import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, Sparkles } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import './AuthModal.scss';

const AuthModal = () => {
  const {
    isAuthModalOpen,
    authModalMode,
    setAuthModalMode,
    closeAuthModal,
    login,
    register,
    loading,
    error,
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    await register({ name, email, phone, password });
  };

  const handleQuickDemo = async () => {
    await login('client@labiii.com', 'royal_jaipur_pass');
  };

  return (
    <div className="auth-modal-overlay" onClick={closeAuthModal}>
      <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close-btn" onClick={closeAuthModal} aria-label="Close dialog">
          <X size={20} />
        </button>

        <div className="auth-header">
          <span className="brand-eyebrow">Labiii · Timeless Comfort</span>
          <h2>{authModalMode === 'login' ? 'Sign In to Your Account' : 'Join The Royal Circle'}</h2>
          <p>
            {authModalMode === 'login'
              ? 'Access saved wishlist, bespoke orders, and order history.'
              : 'Create an account for personalized styling consultations and private previews.'}
          </p>
        </div>

        {/* Tab switchers */}
        <div className="auth-tabs">
          <button
            className={`auth-tab ${authModalMode === 'login' ? 'active' : ''}`}
            onClick={() => setAuthModalMode('login')}
          >
            Sign In
          </button>
          <button
            className={`auth-tab ${authModalMode === 'register' ? 'active' : ''}`}
            onClick={() => setAuthModalMode('register')}
          >
            Register
          </button>
        </div>

        {error && <div className="auth-error-banner">{error}</div>}

        {authModalMode === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="auth-form">
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-with-icon">
                <Mail size={16} className="input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary auth-submit-btn" disabled={loading}>
              {loading ? 'Authenticating...' : 'Sign In to Labiii'}
            </button>

            <div className="demo-login-divider">
              <span>or instant demo</span>
            </div>

            <button type="button" className="btn-secondary demo-btn" onClick={handleQuickDemo}>
              <Sparkles size={16} color="#C59B27" /> Continue as Royal Guest
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-with-icon">
                <User size={16} className="input-icon" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maharani Gayatri Devi"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-with-icon">
                <Mail size={16} className="input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@domain.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Phone / WhatsApp Number</label>
              <div className="input-with-icon">
                <Phone size={16} className="input-icon" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Create Password</label>
              <div className="input-with-icon">
                <Lock size={16} className="input-icon" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary auth-submit-btn" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Royal Account'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

