import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar.js';
import Alphabets from './pages/alphabets/alphabets.js';
import Numbers from './pages/numbers/numbers.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/alphabets" element={<Alphabets />} /> 
          <Route path="/numbers" element={<Numbers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
