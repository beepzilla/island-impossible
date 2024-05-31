// src/router.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Realm from './pages/Realm';
import QuizPortal from './components/QuizPortal';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/realm" element={<Realm />} />
      <Route path="/quiz" element={<QuizPortal />} />
    </Routes>
  </Router>
);

export default AppRouter;
