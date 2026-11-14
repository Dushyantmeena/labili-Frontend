import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.scss';

const WARDROBE_ITEMS = [
  {
    num: '01',
    category: 'Heritage',
    title: 'Rajputi Aangi',
    link: '/collections/aangi-blouses',
    image: 'https://www.baisajaipur.com/cdn/shop/files/Embroidered_Ivory_and_Red_Choli.png?v=1791808189&width=1400',
    alt: 'Off-white, red and gold Rajputi aangi blouse on a hanger'
  },
  {
    num: '02',
    category: 'Celebration',
    title: 'Gota Patti Lehenga',
    link: '/collections/gota-patti-lehenga',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-set.jpg?v=1793113052&width=1400',
    alt: 'Teal gota-patti lehenga with pink aangi in studio'
  },
  {
    num: '03',
    category: 'Occasion',
    title: 'Festive & Occasion',
    link: '/collections/festive-edit',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-poshak-front.jpg?v=1793113046&width=1400',
    alt: 'Festive Rajasthani poshak worn at temple steps'
  },
  {
    num: '04',
    category: 'Daily',
    title: 'Kurtis',
    link: '/collections/kurtis',
    isPlaceholder: true,
    badge: 'AWAITING REAL SHOOT',
    placeholderMsg: 'Real kurti shoot coming soon'
  },
  {
    num: '05',
    category: 'Fresh',
    title: 'New In',
    link: '/collections/new-in',
    image: 'https://www.baisajaipur.com/cdn/shop/files/baisa-v3-still-teal-skirt.jpg?v=1793113061&width=1400',
    alt: 'New dark teal gota-patti lehenga skirt'
  }
];

const CategoryGrid = () => {
  return (
    <section className="v3 v3-wardrobe" aria-label="Five ways to wear The Baisa">
      <div className="v3-wrap">
        {/* Header */}
        <div className="v3-head">
          <div>
            <p className="v3-eyebrow">The Royal Wardrobe</p>
            <h2 className="v3-h2">
              Five ways to wear <em>Labiii</em>
            </h2>
            <p className="v3-lede">
              Heritage aangi and gota-patti lehengas for celebrations, easy cotton for every day.
            </p>
          </div>
          <Link className="v3-link" to="/collections/all">
            SHOP ALL PIECES <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* 5 Arch Cards Row */}
        <div className="v3-wardrobe__row">
          {WARDROBE_ITEMS.map((item) => (
            <Link
              key={item.num}
              to={item.link}
              className="v3-card"
              aria-label={`${item.num} ${item.title}`}
            >
              <div className="v3-card__arch v3-arch v3-arch--tall">
                {item.isPlaceholder ? (
                  <div className="v3-placeholder-arch">
                    <span className="v3-awaiting-badge">{item.badge}</span>
                    <p className="v3-awaiting-text">{item.placeholderMsg}</p>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="v3-card__img"
                    loading="lazy"
                  />
                )}
                <div className="v3-card__overlay">
                  <span className="v3-card__tag">
                    {item.num} / {item.category}
                  </span>
                  <h3 className="v3-card__title">{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
