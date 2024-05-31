// src/components/QuizPortal.js

import React, { useState, useEffect } from 'react';

const QuizPortal = () => {
  const [quizData, setQuizData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Fetch quiz data (this is a placeholder, replace with actual data fetching logic)
    const fetchQuizData = async () => {
      const response = await fetch('/path-to-your-quiz-data.json');
      const data = await response.json();
      setQuizData(data);
    };
    
    fetchQuizData();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === quizData.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowExplanation(true);
  };

  if (!quizData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{quizData.question}</h1>
      {quizData.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          {option}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {showExplanation && (
        <div>
          {isCorrect ? <p>Correct!</p> : <p>Incorrect. {quizData.explanation}</p>}
        </div>
      )}
    </div>
  );
};

export default QuizPortal;
