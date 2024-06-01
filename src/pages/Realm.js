import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Realm = () => {
  const { hearts } = useAuth();
  const navigate = useNavigate();
  const { category } = useParams();
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);

  useEffect(() => {
    if (hearts <= 0) {
      setShowUpgradePopup(true);
    }
  }, [hearts, navigate]);

  if (!category) {
    return <div>Invalid category</div>;
  }

  const handleEncounterClick = (difficulty) => {
    if (hearts > 0) {
      navigate(`/quiz/${category}/${difficulty}`);
    } else {
      setShowUpgradePopup(true);
    }
  };

  const handleUpgradeClick = () => {
    alert("Upgrade to the premium version for unlimited hearts!");
    setShowUpgradePopup(false);
    navigate('/dashboard'); // Redirect to dashboard after showing upgrade prompt
  };

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Realm</h1>
      {showUpgradePopup ? (
        <div className="popup">
          <p>You don't have enough hearts to play. Upgrade to the premium version for unlimited hearts!</p>
          <button onClick={handleUpgradeClick}>Upgrade</button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleEncounterClick('easy')}>Easy Quiz</button>
          <button onClick={() => handleEncounterClick('medium')}>Medium Quiz</button>
          <button onClick={() => handleEncounterClick('hard')}>Hard Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Realm;
