import React, { useState } from 'react';
import CaseSelection from '../components/CaseSelection';
import SizeToggle from '../components/SizeToggle';
import BandCarousel from '../components/BandCarousel';
import CollectionSwitcher from '../components/CollectionSwitcher';
import PriceDisplay from '../components/PriceDisplay';
import WatchPreview from '../components/WatchPreview';

const CustomizationPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState('default');
  const [price, setPrice] = useState(399);

  const cases = []; // Populate with case data
  const bands = []; // Populate with band data
  const collections = []; // Populate with collection data

  const calculatePrice = () => {
    // Add logic to calculate price
    return 399;
  };

  return (
    <div className="customization-page">
      <CollectionSwitcher
        collections={collections}
        selectedCollection={selectedCollection}
        onSwitchCollection={setSelectedCollection}
      />
      <CaseSelection
        cases={cases}
        selectedCase={selectedCase}
        onSelectCase={setSelectedCase}
      />
      <SizeToggle
        sizes={['42mm', '46mm']}
        selectedSize={selectedSize}
        onToggleSize={setSelectedSize}
      />
      <BandCarousel
        bands={bands}
        selectedBand={selectedBand}
        onSelectBand={setSelectedBand}
      />
      <PriceDisplay price={price} />
      <WatchPreview
        selectedCase={selectedCase}
        selectedSize={selectedSize}
        selectedBand={selectedBand}
      />
    </div>
  );
};

export default CustomizationPage;
