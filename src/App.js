import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Realm from './pages/Realm';
import SignIn from './components/Auth/SignIn';
import QuizPortal from './components/Quiz/QuizPortal';
import Navbar from './components/UI/Navbar';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/realm/:category/:difficulty" element={<Realm />} />
        <Route path="/quiz/:category/:difficulty" element={<QuizPortal />} />
        <Route path="/auth" element={<SignIn />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
