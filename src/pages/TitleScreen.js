// src/pages/TitleScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TitleScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Start Screen</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default TitleScreen;
