import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import BMICalculator from './components/BMICalculator';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
      </Routes>
    </Router>
  );
}
