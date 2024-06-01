import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/common/Button';

const Realm = () => {
  const { category, difficulty } = useParams();
  const navigate = useNavigate();

  const handleQuizStart = () => {
    navigate(`/quiz/${category}/${difficulty}`);
  };

  return (
    <div>
      <h1>Welcome to {category.charAt(0).toUpperCase() + category.slice(1)} Land</h1>
      <p>Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</p>
      <Button onClick={handleQuizStart}>Start Quiz</Button>
    </div>
  );
};

export default Realm;
