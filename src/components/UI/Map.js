// src/components/UI/Map.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="map-container">
      <img src="/map.jpg" alt="Map" className="map-image" />
      <div className="map-overlay">
        <button className="map-circle" style={{ top: '50%', left: '50%' }} onClick={(e) => handleClick(e, '/realm/javascriptland')}></button>
      </div>
    </div>
  );
};

export default Map;
