import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../../data/initialProducts';
import { useCurrency } from '../../../context/CurrencyContext';
import './SearchModal.scss';

const POPULAR_SEARCHES = [
  'Gota Patti Lehenga',
  'Rajputi Aangi',
  'Rani Pink',
  'Cotton Kurti',
  'Anarkali Suit Set',
  'Peplum Top',
  'Festive Edit'
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const matched = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    setResults(matched);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <div className="search-input-wrapper">
            <Search size={22} className="search-icon" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for lehengas, aangis, gota patti, pure cottons..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search"
            />
            {query && (
              <button
                className="clear-query-btn"
                onClick={() => setQuery('')}
                aria-label="Clear query"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <button className="close-modal-btn" onClick={onClose} aria-label="Close search">
            <X size={24} />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="search-suggestions">
          <span className="suggestions-label">Popular Royal Edits:</span>
          <div className="tags-list">
            {POPULAR_SEARCHES.map((tag) => (
              <button
                key={tag}
                className="search-tag"
                onClick={() => setQuery(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="search-results-area">
          {query.trim() && (
            <div className="results-header">
              <span>{results.length} royal pieces found for &ldquo;{query}&rdquo;</span>
            </div>
          )}

          {results.length > 0 ? (
            <div className="search-results-grid">
              {results.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug || product.id}`}
                  onClick={onClose}
                  className="search-result-item"
                >
                  <div className="result-thumb">
                    <img src={product.primaryImage} alt={product.name} />
                  </div>
                  <div className="result-info">
                    <span className="result-cat">{product.categoryName}</span>
                    <h4 className="result-name">{product.name}</h4>
                    <span className="result-price">{formatPrice(product.price)}</span>
                  </div>
                  <ArrowRight size={16} className="arrow-icon" />
                </Link>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="no-results-view">
              <p>No pieces found matching &ldquo;{query}&rdquo;.</p>
              <span>Try searching for &ldquo;Lehenga&rdquo;, &ldquo;Aangi&rdquo;, or &ldquo;Cotton&rdquo;.</span>
            </div>
          ) : (
            <div className="search-placeholder-view">
              <p>Type above to search our royal Rajasthani collection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

