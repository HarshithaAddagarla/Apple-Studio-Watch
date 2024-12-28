import React from 'react';
import './SizeToggle.css';

const SizeToggle = ({ sizes, selectedSize, onToggleSize }) => {
  return (
    <div className="size-toggle">
      {sizes.map((size) => (
        <button
          key={size}
          className={`size-button ${selectedSize === size ? 'active' : ''}`}
          onClick={() => onToggleSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeToggle;
