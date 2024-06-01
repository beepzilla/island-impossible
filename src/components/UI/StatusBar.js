import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './StatusBar.css';

const StatusBar = () => {
  const { hearts, xp, user } = useAuth();

  return (
    <div className="status-bar">
      {user && (
        <>
          <div className="hearts">
            Hearts: {hearts}/5
          </div>
          <div className="xp">
            XP: {xp}
          </div>
          <button className="inventory-button">Inventory</button>
        </>
      )}
    </div>
  );
};

export default StatusBar;
