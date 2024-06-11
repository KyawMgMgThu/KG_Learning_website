import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alphabets from './pages/alphabets/alphabets.js';
import Numbers from './pages/numbers/numbers.js';
import Words from './pages/words/words.js';
import Home from './pages/home.js';
import Tables from './pages/tables/tables.js';
import Canvas from './pages/draw/draw.js';
import Games from './pages/games/games.js';
import EnglishChoiceGame from './pages/games/game01/EnglishChoiceGame.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alphabets" element={<Alphabets />} /> 
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/words" element={<Words />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/draws" element={<Canvas />} />
          <Route path="/games" element={<Games />} />
          <Route path="/game01" element={<EnglishChoiceGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
