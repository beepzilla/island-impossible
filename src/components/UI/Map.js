// src/components/UI/Map.js

import React from 'react';
import { useHistory } from 'react-router-dom';

const Map = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/realm');
  };

  return (
    <div>
      <img src="/map.jpg" alt="Map" onClick={handleClick} />
    </div>
  );
};

export default Map;
