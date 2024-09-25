// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PublishedPage } from './pages/PublishedPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/published" element={<PublishedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
