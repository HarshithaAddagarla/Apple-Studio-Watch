import React from 'react';
import './CaseSelection.css';

const CaseSelection = ({ cases, selectedCase, onSelectCase }) => {
  return (
    <div className="case-selection">
      {cases.map((item) => (
        <div
          key={item.id}
          className={`case-item ${selectedCase === item.id ? 'selected' : ''}`}
          onClick={() => onSelectCase(item.id)}
        >
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseSelection;
