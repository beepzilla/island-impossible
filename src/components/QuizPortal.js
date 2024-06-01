import React, { useState, useEffect } from 'react';
import quizzes from '../data/quizzes.json';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

const QuizPortal = () => {
  const { user, hearts, updateHearts } = useAuth();
  const navigate = useNavigate();
  const { category, difficulty } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/'); // Redirect to home if not authenticated
    } else if (hearts <= 0) {
      setShowUpgradePopup(true);
    } else {
      if (quizzes[category] && quizzes[category][difficulty]) {
        setQuizData(quizzes[category][difficulty]);
      } else {
        console.error(`Quiz data not found for category: ${category}, difficulty: ${difficulty}`);
        navigate('/dashboard'); // Redirect to dashboard if quiz data is not found
      }
    }
  }, [user, hearts, navigate, category, difficulty]);

  const handleOptionClick = async (index) => {
    if (hearts <= 0) {
      setShowUpgradePopup(true);
      return;
    }
    setShowExplanation(true);
    if (index === quizData[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      const newHearts = hearts - 1;
      await updateHearts(newHearts); // Decrease hearts on quiz failure
      if (newHearts <= 0) {
        setShowUpgradePopup(true);
        return;
      }
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished
      alert(`Quiz finished! Your score: ${score}/${quizData.length}`);
      navigate('/dashboard');
    }
  };

  const handleUpgradeClick = () => {
    alert("Upgrade to the premium version for unlimited hearts!");
    setShowUpgradePopup(false);
    navigate('/dashboard'); // Redirect to dashboard after showing upgrade prompt
  };

  if (!user || quizData.length === 0) {
    return <div>Loading...</div>;
  }

  if (showUpgradePopup) {
    return (
      <div>
        <div className="popup">
          <p>You don't have enough hearts to play. Upgrade to the premium version for unlimited hearts!</p>
          <button onClick={handleUpgradeClick}>Upgrade</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>{category} Quiz - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</h1>
      <div>
        <p>{quizData[currentQuestion].question}</p>
        <div>
          {quizData[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(index)} disabled={showExplanation}>
              {option}
            </button>
          ))}
        </div>
        {showExplanation && (
          <div>
            <p>{quizData[currentQuestion].explanation}</p>
            <button onClick={handleNextQuestion}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPortal;
