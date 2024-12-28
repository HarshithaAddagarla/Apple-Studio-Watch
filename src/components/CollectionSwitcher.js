import React from 'react';

const CollectionSwitcher = ({ collections, selectedCollection, onSwitchCollection }) => {
  return (
    <select
      value={selectedCollection}
      onChange={(e) => onSwitchCollection(e.target.value)}
    >
      {collections.map((collection) => (
        <option key={collection.id} value={collection.id}>
          {collection.name}
        </option>
      ))}
    </select>
  );
};

export default CollectionSwitcher;
