import React, { useState } from 'react';
import './App.css';
import CaseSelection from './components/CaseSelection';
import SizeToggle from './components/SizeToggle';
import BandCarousel from './components/BandCarousel';
import CollectionSwitcher from './components/CollectionSwitcher';
import PriceDisplay from './components/PriceDisplay';
import WatchPreview from './components/WatchPreview';

function App() {
  // State management for customization options
  const [selectedCase, setSelectedCase] = useState({ id: null, image: '' });
  const [selectedSize, setSelectedSize] = useState('42mm');
  const [selectedBand, setSelectedBand] = useState({ id: null, image: '' });
  const [selectedCollection, setSelectedCollection] = useState('default');
  const [price, setPrice] = useState(399);

  // Sample data for cases, bands, and collections
  const cases = [
    { id: 'aluminum', name: 'Aluminum', image: '/assets/images/aluminum-case.png' },
    { id: 'titanium', name: 'Titanium', image: '/assets/images/titanium-case.png' },
  ];

  const bands = [
    { id: 'sport', name: 'Sport Band', image: '/assets/images/sport-band.png' },
    { id: 'braided', name: 'Braided Loop', image: '/assets/images/braided-loop.png' },
  ];

  const collections = [
    { id: 'series10', name: 'Series 10' },
    { id: 'hermes', name: 'Hermès' },
    { id: 'se', name: 'SE' },
  ];

  // Function to calculate the price based on user selections
  const calculatePrice = () => {
    let basePrice = 399;
    if (selectedCase.id === 'titanium') basePrice += 200;
    if (selectedBand.id === 'braided') basePrice += 50;
    return basePrice;
  };

  // Update price whenever selections change
  React.useEffect(() => {
    setPrice(calculatePrice());
  }, [selectedCase, selectedBand]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Apple Watch Studio</h1>
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default App;
