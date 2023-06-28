import React from 'react';

const Card = ({ card }) => {
  const renderCardTypeIcon = () => {
    if (card.card_type === 'burner') {
      return <span className="card-type-icon">&#128293;</span>;
    } else if (card.card_type === 'subscription') {
      return <span className="card-type-icon">&#128179;</span>;
    }
    return null;
  };

  const renderCardDetails = () => {
    if (card.card_type === 'burner') {
      return (
        <div>
          <p>Expiry: {card.expiry}</p>
          {/* Render additional details for burner cards */}
        </div>
      );
    } else if (card.card_type === 'subscription') {
      return (
        <div>
          <p>Limit: {card.limit}</p>
          {/* Render additional details for subscription cards */}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card">
      {renderCardTypeIcon()}
      <h3>{card.name}</h3>
      <p>Type: {card.card_type}</p>
      {renderCardDetails()}
    </div>
  );
};

export default Card;



