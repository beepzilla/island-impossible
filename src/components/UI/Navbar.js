import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';

const Navbar = () => {
  const { user, hearts, xp } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">QuizApp</Link>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/lessons">Lessons</Link>
      </div>
      <div className="navbar-user">
        {user ? (
          <div className="user-info">
            <span>{user.email}</span>
            <span>Hearts: {hearts}/5</span>
            <span>XP: {xp}</span>
          </div>
        ) : (
          <Link to="/auth">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
