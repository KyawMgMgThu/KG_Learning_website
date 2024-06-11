import React, { useState } from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

export default function Navbarkids() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`Navbar ${darkMode ? 'dark' : 'light'}`}>
      <Navbar expand="lg">
        <Navbar.Brand className="heading mx-2" href="/kg-learning/#/">KG learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto px-5">
            <Nav.Link href="/kg-learning/#/alphabets" className="nav-item">Alphabets</Nav.Link>
            <Nav.Link href="/kg-learning/#/numbers" className="nav-item">Numbers</Nav.Link>
            <Nav.Link href="/kg-learning/#/words" className="nav-item">Words</Nav.Link>
            <Nav.Link href="/kg-learning/#/tables" className="nav-item">Tables</Nav.Link>
            <Nav.Link href="/kids-learning/#/draws" className="nav-item">Draw</Nav.Link>
            <Nav.Link href="/kids-learning/#/games" className="nav-item">Games</Nav.Link>
          </Nav>
          <Button onClick={toggleDarkMode} variant="outline-secondary" className="mx-2">
            {darkMode ? (
              <span><FontAwesomeIcon icon={faSun} /> Light Mode</span>
            ) : (
              <span><FontAwesomeIcon icon={faMoon} /> Dark Mode</span>
            )}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
