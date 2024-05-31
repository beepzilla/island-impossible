// src/pages/Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/realm');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Home;
