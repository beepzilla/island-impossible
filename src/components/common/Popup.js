import React from 'react';
import '../../assets/styles/Popup.css';

const Popup = ({ children }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        {children}
      </div>
    </div>
  );
};

export default Popup;
