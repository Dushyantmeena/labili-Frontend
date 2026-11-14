import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Compass, Scissors, Users, ArrowRight } from 'lucide-react';
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <main className="about-page-main">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <span className="brand-eyebrow">Our Jaipur Heritage</span>
          <h1>The Story of Labiii</h1>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
          <p className="hero-lead">
            Preserving Rajputana royal sartorial traditions through timeless Gota Patti embroidery, artisanal aangis, and handcrafted elegance.
          </p>
        </div>
      </section>

      {/* Narrative Section 1: The Origin */}
      <section className="container story-chapter-container">
        <div className="chapter-split">
          <div className="chapter-media">
            <img
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85"
              alt="Rajputana Royal Heritage Attire"
            />
            <div className="media-caption">
              <span>Amer Fort & Sandstone Courtyards · The Labiii Inspiration</span>
            </div>
          </div>
          <div className="chapter-text">
            <span className="brand-eyebrow">Chapter I</span>
            <h2>Born in the Pink City</h2>
            <div className="accent-bar" />
            <p>
              Rooted in the artistic soul of Rajasthan, <em>Labiii</em> embodies the harmony of regal craftsmanship and timeless comfort. Founded in the cultural capital of Jaipur, Labiii was created with a singularly sacred vision: to preserve, revitalize, and celebrate the heirloom aesthetic that once graced royal courtyards, tailored for the graceful modern woman.
            </p>
            <p>
              In an era dominated by transient fast fashion, we sought to return to heirloom permanence. Every piece we make is designed not for one quick photograph, but to become an enduring heirloom passed from mother to daughter with stories woven into its seams.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: The Gota Patti Artistry */}
      <section className="craft-spotlight-section">
        <div className="container">
          <div className="chapter-split reverse">
            <div className="chapter-media">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85"
                alt="Gota Patti Handwork"
              />
            </div>
            <div className="chapter-text">
              <span className="brand-eyebrow">Chapter II</span>
              <h2>The Alchemy of Gota Patti</h2>
              <div className="accent-bar" />
              <p>
                Gota Patti is a signature embroidery technique native to Rajasthan, originating hundreds of years ago. Narrow ribbons of real gold or silver wire are shaped into delicate floral, leaf (patti), and sunburst motifs, then hand-appliquéd onto silks and bandhanis.
              </p>
              <p>
                Unlike machine sequins or printed imitations, authentic Gota Patti reflects light with a subtle, antique warmth that deepens with age. Our master artisans in Jaipur spend up to 40 hours placing individual petals on a single lehenga skirt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="container about-values-section">
        <div className="section-title">
          <span className="brand-eyebrow">Guiding Principles</span>
          <h2>The Labiii Commitments</h2>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
        </div>

        <div className="values-cards-grid">
          <div className="value-box">
            <Users size={28} className="box-icon" />
            <h3>Artisan-First Atelier</h3>
            <p>We work directly with generational Jaipur craftsmen without intermediaries, ensuring fair living wages, creative autonomy, and pride in their craft.</p>
          </div>

          <div className="value-box">
            <Scissors size={28} className="box-icon" />
            <h3>Slow & Small-Batch</h3>
            <p>We do not keep mass inventory. Pieces are cut, finished, and tailored in small thoughtful batches, minimizing textile waste and preserving rarity.</p>
          </div>

          <div className="value-box">
            <Sparkles size={28} className="box-icon" />
            <h3>2-Inch Sizing Margin</h3>
            <p>Because women’s bodies naturally evolve, every Labiii stitched garment includes 2 inches of inner alteration margins so it fits you through every chapter of life.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta-box">
          <h3>Explore Our Handcrafted Creations</h3>
          <p>Discover pieces imbued with the spirit of Rajasthan.</p>
          <div className="cta-btns">
            <Link to="/collections/all" className="btn-primary">
              Shop Collections <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Visit Jaipur Studio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

