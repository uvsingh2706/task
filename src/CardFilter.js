import React from 'react';

const CardFilter = ({ selectedFilter, handleFilterChange }) => {
  return (
    <div className="card-filter">
      <button
        className={`filter-button ${selectedFilter === 'All' ? 'active' : ''}`}
        onClick={() => handleFilterChange('All')}
      >
        All
      </button>
      <button
        className={`filter-button ${selectedFilter === 'burner' ? 'active' : ''}`}
        onClick={() => handleFilterChange('burner')}
      >
        Burner
      </button>
      <button
        className={`filter-button ${selectedFilter === 'subscription' ? 'active' : ''}`}
        onClick={() => handleFilterChange('subscription')}
      >
        Subscription
      </button>
    </div>
  );
};

export default CardFilter;




