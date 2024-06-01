import React from 'react';
import { useNavigate } from 'react-router-dom';

const Map = () => {
  const navigate = useNavigate();

  const handleClick = (e, category) => {
    e.preventDefault();
    navigate(`/realm/${category}`);
  };

  return (
    <div className="map-container">
      <img src="/path/to/map-image.jpg" alt="Map" className="map-image" />
      <div className="map-overlay">
        <button className="map-circle" style={{ top: '50%', left: '50%' }} onClick={(e) => handleClick(e, 'javascript')}></button>
      </div>
    </div>
  );
};

export default Map;
