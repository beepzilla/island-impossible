import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Auth from './pages/Auth';
import TitleScreen from './pages/TitleScreen';
import Dashboard from './pages/Dashboard';
import Navbar from './components/UI/Navbar';
import QuizPortal from './components/QuizPortal';
import Realm from './pages/Realm';
import StatusBar from './components/UI/StatusBar';
import './assets/styles/global.css';

const AppContent = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <StatusBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        {user && <Route path="/title" element={<TitleScreen />} />}
        {user && <Route path="/dashboard" element={<Dashboard />} />}
        {user && <Route path="/realm/:category" element={<Realm />} />}
        {user && <Route path="/quiz/:category/:difficulty" element={<QuizPortal />} />}
        {!user && <Route path="*" element={<Home />} />}
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
};

export default App;
