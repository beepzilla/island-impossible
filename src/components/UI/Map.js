import React from 'react';
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();

  const handleRealmClick = (category, difficulty) => {
    navigate(`/realm/${category}/${difficulty}`);
  };

  return (
    <div>
      <h1>Map</h1>
      <button onClick={() => handleRealmClick('javascript', 'easy')}>JavaScript Land</button>
      {/* Add more buttons for different realms */}
    </div>
  );
};

export default Map;
