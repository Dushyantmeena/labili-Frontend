import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('lavili_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login'); // 'login' | 'register'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openAuthModal = (mode = 'login') => {
    setAuthModalMode(mode);
    setError(null);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setError(null);
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authService.login({ email, password });
      if (res.success) {
        setUser(res.user);
        closeAuthModal();
        return { success: true };
      } else {
        setError(res.error || 'Invalid credentials');
        return { success: false, error: res.error };
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authService.register(userData);
      if (res.success) {
        setUser(res.user);
        closeAuthModal();
        return { success: true };
      } else {
        setError(res.error || 'Registration failed');
        return { success: false, error: res.error };
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAuthModalOpen,
        authModalMode,
        setAuthModalMode,
        openAuthModal,
        closeAuthModal,
        login,
        register,
        logout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

