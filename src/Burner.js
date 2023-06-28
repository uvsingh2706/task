import React, { useEffect, useState } from 'react';

const Burner = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://649c0e200480757192376332.mockapi.io/APICARD');
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
          {card.card_type === 'burner' && (
            <div className="card">
              <h1>Burner Card</h1>
              <p>Expiry: {card.expiry}</p>
              {/* <p>Limit: {card.limit}</p> */}
              {/* Render additional details for burner cards */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Burner;
