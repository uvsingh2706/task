import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === 'Your' ? 'active' : ''}`}
        onClick={() => setActiveTab('Your')}
      >
        Your
      </button>
      <button
        className={`tab ${activeTab === 'All' ? 'active' : ''}`}
        onClick={() => setActiveTab('All')}
      >
        All
      </button>
      <button
        className={`tab ${activeTab === 'Blocked' ? 'active' : ''}`}
        onClick={() => setActiveTab('Blocked')}
      >
        Blocked
      </button>
    </div>
  );
};

export default Tabs;

  
