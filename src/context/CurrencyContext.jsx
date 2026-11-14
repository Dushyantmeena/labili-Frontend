import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

const RATES = {
  INR: { symbol: '₹', rate: 1, name: 'Indian Rupee' },
  USD: { symbol: '$', rate: 0.012, name: 'US Dollar' },
  GBP: { symbol: '£', rate: 0.0095, name: 'British Pound' },
  EUR: { symbol: '€', rate: 0.011, name: 'Euro' },
  AED: { symbol: 'AED ', rate: 0.044, name: 'UAE Dirham' },
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrencyState] = useState(() => {
    return localStorage.getItem('lavili_currency') || 'INR';
  });

  const setCurrency = (curr) => {
    if (RATES[curr]) {
      setCurrencyState(curr);
      localStorage.setItem('lavili_currency', curr);
    }
  };

  const formatPrice = (priceInInr) => {
    if (typeof priceInInr !== 'number') return '';
    const config = RATES[currency] || RATES.INR;
    const converted = Math.round(priceInInr * config.rate);

    if (currency === 'INR') {
      return `₹${priceInInr.toLocaleString('en-IN')}`;
    }
    return `${config.symbol}${converted.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, currencies: Object.keys(RATES), rates: RATES }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);

