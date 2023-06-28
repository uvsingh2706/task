import React, { useEffect, useState } from 'react';

const Subscription = () => {
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
          {card.card_type === 'subscription' && (
            <>
              <h1>{card.card_type}</h1>
              <p>Limit: {card.limit}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Subscription;
