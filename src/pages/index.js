import React from 'react';

const WatchPreview = ({ selectedCase, selectedSize, selectedBand }) => {
  return (
    <div className="watch-preview">
      <img
        src={selectedCase.image}
        alt="Selected Case"
        className="case-image"
      />
      <p>{`Size: ${selectedSize}`}</p>
      <img
        src={selectedBand.image}
        alt="Selected Band"
        className="band-image"
      />
    </div>
  );
};

export default WatchPreview;
