import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar';
import './games.css';

function Games() {
  const [score, setScore] = useState(() => {
    const storedScore = sessionStorage.getItem('englishChoiceGameScore');
    return storedScore ? parseInt(storedScore) : 0;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedScore = sessionStorage.getItem('englishChoiceGameScore');
      setScore(storedScore ? parseInt(storedScore) : 0);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Row style={{ padding: '20px' }}>
        <Col className="md-col-6 p-4">
          <Card>
            <Card.Body>
              <Card.Title>English Test</Card.Title>
              <Card.Text>
                English Choice test with timer and score.
              </Card.Text>
              <p>Final Score: {score}</p>
              <Link to="/game01" className="btn">Let's Play</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Games;
