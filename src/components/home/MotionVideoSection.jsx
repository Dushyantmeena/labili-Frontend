import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { MOTION_VIDEOS } from '../../data/promotions';
import { useCurrency } from '../../context/CurrencyContext';
import './MotionVideoSection.scss';

// Single 9:16 Video Card Component with IntersectionObserver
const VideoCard = ({ item, isMutedGlobal, onToggleMute, onQuickView }) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  // IntersectionObserver for performance: Only play when card is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check for prefers-reduced-motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (!prefersReducedMotion && videoRef.current) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => setIsPlaying(true))
                  .catch(() => {
                    // Autoplay prevented by browser policy (user must interact)
                    setIsPlaying(false);
                  });
              }
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.45 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleShopLook = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView({
        id: item.productId,
        slug: item.productSlug,
        name: item.productName,
        price: item.productPrice,
        originalPrice: item.originalPrice,
        primaryImage: item.productImage,
        category: item.category,
        badge: item.badge
      });
    } else {
      navigate(`/products/${item.productSlug}`);
    }
  };

  return (
    <div className="motion-video-card" ref={cardRef}>
      {/* 9:16 Video Container */}
      <div className="video-media-stage" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={item.videoUrl}
          poster={item.poster}
          loop
          muted={isMutedGlobal}
          playsInline
          preload="none"
          onLoadedData={() => setIsLoaded(true)}
          className={`video-element ${isLoaded ? 'is-ready' : ''}`}
          aria-label={item.title}
        />

        {/* Video Scrim Gradient */}
        <div className="video-scrim" />

        {/* Top Badges & Sound Control */}
        <div className="video-top-bar" onClick={(e) => e.stopPropagation()}>
          <div className="video-category-tag">
            <span className="live-pulse-dot" />
            <span>{item.badge || 'IN MOTION'}</span>
          </div>

          <div className="top-action-buttons">
            {/* Audio Toggle */}
            <button
              className="video-ctrl-btn sound-btn"
              onClick={onToggleMute}
              aria-label={isMutedGlobal ? 'Unmute video audio' : 'Mute video audio'}
              title={isMutedGlobal ? 'Unmute' : 'Mute'}
              type="button"
            >
              {isMutedGlobal ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            {/* Play/Pause Button */}
            <button
              className="video-ctrl-btn play-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              title={isPlaying ? 'Pause' : 'Play'}
              type="button"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} fill="#FFFFFF" />}
            </button>
          </div>
        </div>

        {/* Shoppable Product Floating Drawer at Bottom */}
        <div className="video-shoppable-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="shoppable-product-card">
            <Link to={`/products/${item.productSlug}`} className="product-thumb-link">
              <img
                src={item.productImage}
                alt={item.productName}
                className="product-thumb-img"
              />
            </Link>

            <div className="product-info-column">
              <span className="product-category-meta">{item.category}</span>
              <h4 className="product-title-text">
                <Link to={`/products/${item.productSlug}`}>{item.productName}</Link>
              </h4>
              <div className="product-price-row">
                <span className="price-current">{formatPrice(item.productPrice)}</span>
                {item.originalPrice && (
                  <span className="price-original">{formatPrice(item.originalPrice)}</span>
                )}
              </div>
            </div>

            <button
              className="shop-look-cta"
              onClick={handleShopLook}
              aria-label={`Shop ${item.productName}`}
              title="Quick view & shop this silhouette"
              type="button"
            >
              <ShoppingBag size={14} />
              <span>Shop Look</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MotionVideoSection = ({ onQuickView }) => {
  const trackRef = useRef(null);
  const [isMutedGlobal, setIsMutedGlobal] = useState(true);

  const toggleGlobalMute = () => {
    setIsMutedGlobal((prev) => !prev);
  };

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="labiii-motion-section" aria-label="Watch Labiii in Motion">
      <div className="container">
        {/* Section Header */}
        <div className="motion-header-row">
          <div className="header-text-column">
            <div className="brand-eyebrow-pill">
              <Sparkles size={12} className="eyebrow-spark" />
              <span>FASHION CINEMA &amp; RUNWAY</span>
            </div>
            <h2 className="motion-section-title">
              Watch <em>Labiii</em> in Motion
            </h2>
            <p className="motion-section-sub">
              Experience the fluid movement of raw silk, swirling Gota Patti borders, and authentic Rajasthani bridal poshak twirls.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="motion-controls-group">
            <button
              className="carousel-nav-btn prev-btn"
              onClick={scrollLeft}
              aria-label="Previous videos"
              type="button"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="carousel-nav-btn next-btn"
              onClick={scrollRight}
              aria-label="Next videos"
              type="button"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 9:16 Video Cards Carousel Track */}
        <div className="motion-carousel-track" ref={trackRef}>
          {MOTION_VIDEOS.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              isMutedGlobal={isMutedGlobal}
              onToggleMute={toggleGlobalMute}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotionVideoSection;
