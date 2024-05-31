// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Quiz App</h1>
      <Link to="/auth">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default Home;
