import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import { HERO_CAMPAIGN_VIDEO } from '../../data/promotions';
import './CampaignVideoHero.scss';

const CampaignVideoHero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // IntersectionObserver to only autoplay when visible and pause when scrolled away
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (!prefersReducedMotion && videoRef.current) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
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
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="labiii-campaign-video-hero" ref={containerRef} aria-label="Campaign Video Advertisement">
      <div className="campaign-video-viewport">
        {/* Full-width HTML5 Video */}
        <video
          ref={videoRef}
          src={HERO_CAMPAIGN_VIDEO.videoUrl}
          poster={HERO_CAMPAIGN_VIDEO.poster}
          loop
          muted={isMuted}
          playsInline
          autoPlay
          preload="none"
          onLoadedData={() => setIsLoaded(true)}
          className={`campaign-video-media ${isLoaded ? 'loaded' : ''}`}
        />

        {/* Cinematic Scrim Gradient Overlay */}
        <div className="campaign-scrim-overlay" />

        {/* Video Overlay Controls (Sound & Play/Pause) */}
        <div className="campaign-controls-bar">
          <button
            className="video-action-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause campaign video' : 'Play campaign video'}
            title={isPlaying ? 'Pause' : 'Play'}
            type="button"
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} fill="#FFFFFF" />}
          </button>

          <button
            className="video-action-btn"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            title={isMuted ? 'Unmute audio' : 'Mute audio'}
            type="button"
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

        {/* Overlaid Editorial Content */}
        <div className="container campaign-content-container">
          <div className="campaign-editorial-box">
            <div className="campaign-badge-pill">
              <Sparkles size={12} className="badge-spark" />
              <span>{HERO_CAMPAIGN_VIDEO.badge}</span>
            </div>

            <h2 className="campaign-headline">
              Royal Roots. <br />
              <em>Motion</em> Elegance.
            </h2>

            <p className="campaign-subheadline">
              {HERO_CAMPAIGN_VIDEO.subtitle}
            </p>

            <div className="campaign-cta-row">
              <Link to={HERO_CAMPAIGN_VIDEO.primaryCtaLink} className="btn-campaign-primary">
                <span>{HERO_CAMPAIGN_VIDEO.primaryCtaText}</span>
                <ArrowRight size={15} />
              </Link>
              <button
                className="btn-campaign-ghost"
                onClick={togglePlay}
                type="button"
              >
                <span>{isPlaying ? 'PAUSE FILM' : 'PLAY CAMPAIGN FILM'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignVideoHero;
