// src/App.js

import React from 'react';
import AppRouter from './router';
import Navbar from './components/UI/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
