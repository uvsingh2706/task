import React, { useState } from 'react';
import Tabs from './Tabs';
import CardFilter from './CardFilter';
import Burner from './Burner';
import Subscription from './Subscription';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Your');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (filterType) => {
    setSelectedFilter(filterType);
  };

  return (
    <div className="container">
      <h1 className="title">Card Listing</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <CardFilter selectedFilter={selectedFilter} handleFilterChange={handleFilterChange} />
      {selectedFilter === 'All' && (
        <>
          <h2>All Cards</h2>
          {/* Render all cards here */}
        </>
      )}
      {selectedFilter === 'burner' && (
        <>
          <h2>Burner Cards</h2>
          <Burner />
        </>
      )}
      {selectedFilter === 'subscription' && (
        <>
          <h2>Subscription Cards</h2>
          <Subscription />
        </>
      )}
    </div>
  );
};

export default App;
