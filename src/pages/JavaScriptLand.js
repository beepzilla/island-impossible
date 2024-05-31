// src/pages/JavaScriptLand.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const quizData = {
  title: 'JavaScript Land Quiz 1',
  questions: [
    {
      question: 'What is JavaScript?',
      options: ['A programming language', 'A type of coffee', 'A brand', 'A database'],
      answer: 0,
      explanation: 'JavaScript is a programming language used for web development.'
    },
    // Add more questions here
  ]
};

const JavaScriptLand = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate('/'); // Redirect to home if not authenticated
    }
  }, [user, navigate]);

  const handleOptionClick = (index) => {
    setShowExplanation(true);
    if (index === quizData.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished
      alert(`Quiz finished! Your score: ${score}/${quizData.questions.length}`);
    }
  };

  if (!user) {
    return <div>Redirecting...</div>;
  }

  return (
    <div>
      <h1>{quizData.title}</h1>
      <div>
        <p>{quizData.questions[currentQuestion].question}</p>
        <div>
          {quizData.questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(index)} disabled={showExplanation}>
              {option}
            </button>
          ))}
        </div>
        {showExplanation && (
          <div>
            <p>{quizData.questions[currentQuestion].explanation}</p>
            <button onClick={handleNextQuestion}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JavaScriptLand;
