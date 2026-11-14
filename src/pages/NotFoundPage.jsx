import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <div className="container">
        <div className="not-found-card">
          <div className="compass-ring">
            <Compass size={54} color="#C59B27" />
          </div>
          <span className="brand-eyebrow">404 · Page Not Found</span>
          <h1>A Corridor Yet Unexplored</h1>
          <div className="title-divider">
            <span className="divider-gem" />
          </div>
          <p>
            The page or royal silhouette you are searching for does not reside at this location.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              Return to Grand Courtyard <ArrowRight size={16} />
            </Link>
            <Link to="/collections/all" className="btn-secondary">
              Browse All Collections
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

