import React from 'react';

const WatchPreview = ({ selectedCase, selectedSize, selectedBand }) => {
  if (!selectedCase || !selectedBand) {
    return <div>Loading preview...</div>; // Handle undefined case and band
  }

  return (
    <div className="watch-preview">
      <h2>Watch Preview</h2>
      <div>
        <img
          src={selectedCase.image}
          alt={`${selectedCase.name} case`}
          style={{ width: '200px', height: '200px' }}
        />
        <p>Size: {selectedSize}</p>
        <img
          src={selectedBand.image}
          alt={`${selectedBand.name} band`}
          style={{ width: '100px', height: '100px' }}
        />
        <p>Band: {selectedBand.name}</p>
      </div>
    </div>
  );
};

export default WatchPreview;
