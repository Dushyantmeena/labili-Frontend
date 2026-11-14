import React, { useState } from 'react';
import { X, Ruler, Sparkles, Check } from 'lucide-react';
import './SizeGuideModal.scss';

const SIZE_CHART = {
  inches: [
    { size: 'XS / 32', bust: '32 - 33', waist: '26 - 27', hips: '35 - 36', length: '42' },
    { size: 'S / 34', bust: '34 - 35', waist: '28 - 29', hips: '37 - 38', length: '42' },
    { size: 'M / 36', bust: '36 - 37', waist: '30 - 31', hips: '39 - 40', length: '42.5' },
    { size: 'L / 38', bust: '38 - 39', waist: '32 - 33', hips: '41 - 42', length: '43' },
    { size: 'XL / 40', bust: '40 - 41', waist: '34 - 35', hips: '43 - 44', length: '43' },
    { size: 'XXL / 42', bust: '42 - 43', waist: '36 - 37', hips: '45 - 46', length: '43.5' },
  ],
  cm: [
    { size: 'XS / 32', bust: '81 - 84', waist: '66 - 69', hips: '89 - 91', length: '107' },
    { size: 'S / 34', bust: '86 - 89', waist: '71 - 74', hips: '94 - 97', length: '107' },
    { size: 'M / 36', bust: '91 - 94', waist: '76 - 79', hips: '99 - 102', length: '108' },
    { size: 'L / 38', bust: '97 - 99', waist: '81 - 84', hips: '104 - 107', length: '109' },
    { size: 'XL / 40', bust: '102 - 104', waist: '86 - 89', hips: '109 - 112', length: '109' },
    { size: 'XXL / 42', bust: '107 - 109', waist: '91 - 94', hips: '114 - 117', length: '110' },
  ],
};

const SizeGuideModal = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'

  if (!isOpen) return null;

  return (
    <div className="size-guide-overlay" onClick={onClose}>
      <div className="size-guide-container" onClick={(e) => e.stopPropagation()}>
        <div className="size-guide-header">
          <div className="title-box">
            <Ruler size={22} className="ruler-icon" />
            <h3>Labiii Fit & Measurement Guide</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close size guide">
            <X size={22} />
          </button>
        </div>

        {/* Unit Switcher */}
        <div className="unit-switcher-row">
          <span className="guide-subtitle">Standard Garment Dimensions</span>
          <div className="unit-toggle">
            <button
              className={`unit-btn ${unit === 'inches' ? 'active' : ''}`}
              onClick={() => setUnit('inches')}
            >
              Inches (&rdquo;)
            </button>
            <button
              className={`unit-btn ${unit === 'cm' ? 'active' : ''}`}
              onClick={() => setUnit('cm')}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Measurement Table */}
        <div className="table-responsive">
          <table className="size-table">
            <thead>
              <tr>
                <th>Standard Size</th>
                <th>Bust ({unit === 'inches' ? 'in' : 'cm'})</th>
                <th>Waist ({unit === 'inches' ? 'in' : 'cm'})</th>
                <th>Hips ({unit === 'inches' ? 'in' : 'cm'})</th>
                <th>Skirt Length</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_CHART[unit].map((row) => (
                <tr key={row.size}>
                  <td><strong>{row.size}</strong></td>
                  <td>{row.bust}</td>
                  <td>{row.waist}</td>
                  <td>{row.hips}</td>
                  <td>{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tailoring & Custom Fit Notes */}
        <div className="guide-tips-grid">
          <div className="tip-card">
            <Sparkles size={18} className="tip-icon" />
            <div>
              <h4>2-Inch Alteration Margins</h4>
              <p>Every stitched Labiii Aangi blouse and lehenga skirt comes with 2 inches of generous inner side seam margins so you can tailor it easily.</p>
            </div>
          </div>
          <div className="tip-card">
            <Check size={18} className="tip-icon" />
            <div>
              <h4>Need Custom Sizing?</h4>
              <p>Select &ldquo;Custom Fit&rdquo; when placing your order or send your shoulder, bust, and height measurements to our Jaipur master tailor on WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;

