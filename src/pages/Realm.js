// src/pages/Realm.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Realm = () => {
  const navigate = useNavigate();

  const handleTakeQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div>
      <h1>Welcome to the Realm</h1>
      <button onClick={handleTakeQuiz}>Take Quiz</button>
    </div>
  );
};

export default Realm;
