import React from 'react';

const CardSearch = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="card-search">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search cards..."
      />
    </div>
  );
};

export default CardSearch;

