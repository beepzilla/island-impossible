// src/components/UI/Navbar.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, signInWithGoogle } = useAuth();  // Include signInWithGoogle
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-content">
        {user ? (
          <>
            <span>Signed in as {user.email}</span>
            <button onClick={() => navigate('/dashboard')}>Home</button>
          </>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>  // Use signInWithGoogle
        )}
      </div>
      <div className="navbar-hamburger">
        <button onClick={() => document.getElementById('navbar-menu').classList.toggle('show')}>☰</button>
        <div id="navbar-menu" className="navbar-menu">
          <button onClick={() => navigate('/dashboard')}>Home Dashboard</button>
          <button onClick={() => navigate('/docs')}>Docs</button>
          <button onClick={() => navigate('/lessons')}>Lessons</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
