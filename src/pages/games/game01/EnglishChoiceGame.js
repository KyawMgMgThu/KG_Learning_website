import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../../navbar.js';
import '../games.css';
import Speech from '../../Speech/Speech.js';

const questions = [
  { question: "What color is the sky?", choices: ["Blue", "Green", "Red", "Yellow"], correctAnswer: "Blue" },
  { question: "What is 2 + 2?", choices: ["3", "4", "5", "6"], correctAnswer: "4" },
  { question: "What sound does a cat make?", choices: ["Moo", "Meow", "Bark", "Roar"], correctAnswer: "Meow" },
  { question: "Which is a fruit?", choices: ["Carrot", "Potato", "Apple", "Spinach"], correctAnswer: "Apple" },
  { question: "What is the first letter of the alphabet?", choices: ["A", "B", "C", "D"], correctAnswer: "A" },
  { question: "What is the opposite of hot?", choices: ["Warm", "Cool", "Cold", "Hot"], correctAnswer: "Cold" },
  { question: "How many legs does a spider have?", choices: ["6", "7", "8", "9"], correctAnswer: "8" },
  { question: "What shape is a ball?", choices: ["Square", "Triangle", "Circle", "Rectangle"], correctAnswer: "Circle" },
  { question: "What does a cow say?", choices: ["Quack", "Moo", "Oink", "Baa"], correctAnswer: "Moo" },
  { question: "Which of these is a bird?", choices: ["Dog", "Cat", "Fish", "Sparrow"], correctAnswer: "Sparrow" },
  { question: "What color are bananas?", choices: ["Red", "Blue", "Yellow", "Green"], correctAnswer: "Yellow" },
  { question: "What do you use to brush your teeth?", choices: ["Comb", "Toothbrush", "Spoon", "Knife"], correctAnswer: "Toothbrush" },
  { question: "Which season is the coldest?", choices: ["Spring", "Summer", "Autumn", "Winter"], correctAnswer: "Winter" },
  { question: "What do bees make?", choices: ["Milk", "Honey", "Bread", "Juice"], correctAnswer: "Honey" },
  { question: "How many days are there in a week?", choices: ["5", "6", "7", "8"], correctAnswer: "7" },
  { question: "What do you wear on your feet?", choices: ["Hat", "Gloves", "Shoes", "Scarf"], correctAnswer: "Shoes" },
  { question: "What color is grass?", choices: ["Red", "Green", "Blue", "Yellow"], correctAnswer: "Green" },
  { question: "What animal is known as man's best friend?", choices: ["Cat", "Dog", "Fish", "Bird"], correctAnswer: "Dog" },
  { question: "What do you use to write?", choices: ["Brush", "Pen", "Fork", "Shoe"], correctAnswer: "Pen" },
  { question: "Which planet do we live on?", choices: ["Mars", "Venus", "Earth", "Jupiter"], correctAnswer: "Earth" },
  { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris", "Rome"], correctAnswer: "Paris" },
  { question: "What is the largest animal?", choices: ["Elephant", "Blue Whale", "Giraffe", "Lion"], correctAnswer: "Blue Whale" },
  { question: "How many colors are in a rainbow?", choices: ["5", "6", "7", "8"], correctAnswer: "7" },
  { question: "What do you wear on your head?", choices: ["Hat", "Socks", "Gloves", "Shoes"], correctAnswer: "Hat" },
  { question: "What shape has three sides?", choices: ["Square", "Triangle", "Circle", "Rectangle"], correctAnswer: "Triangle" },
  { question: "What is 5 + 3?", choices: ["7", "8", "9", "10"], correctAnswer: "8" },
  { question: "What do you drink that is white?", choices: ["Water", "Juice", "Milk", "Soda"], correctAnswer: "Milk" },
  { question: "Which of these is a vegetable?", choices: ["Apple", "Banana", "Carrot", "Orange"], correctAnswer: "Carrot" },
  { question: "What color is an orange?", choices: ["Red", "Green", "Blue", "Orange"], correctAnswer: "Orange" },
  { question: "How many months are in a year?", choices: ["10", "11", "12", "13"], correctAnswer: "12" },
  { question: "What is the tallest animal?", choices: ["Elephant", "Lion", "Giraffe", "Horse"], correctAnswer: "Giraffe" }
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const getSelectedQuestions = () => shuffleArray([...questions]).slice(0, 6);
  
  function EnglishChoiceGame() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameOver, setGameOver] = useState(false);
    const [selectedQuestions, setSelectedQuestions] = useState(getSelectedQuestions());
  
    useEffect(() => {
      const storedScore = sessionStorage.getItem('englishChoiceGameScore');
      setScore(storedScore ? parseInt(storedScore) : 0);
    }, []);
  
    useEffect(() => {
      if (timeLeft > 0 && !gameOver) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setGameOver(true);
        // Store the final score
        sessionStorage.setItem('englishChoiceGameScore', score.toString());
      }
    }, [timeLeft, gameOver, score]);
  
    const handleChoiceClick = (choice) => {
      if (choice === selectedQuestions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
      }
      if (currentQuestionIndex < selectedQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver(true);
      }
    };
  
    const handleRestart = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setTimeLeft(60);
      setGameOver(false);
      setSelectedQuestions(getSelectedQuestions());
    };
  
    return (
      <div>
        <Navbar />
        <Row style={{ padding: '20px' }}>
          <Col className="md-col-6 p-4">
            <Card>
              <Card.Body>
                {gameOver ? (
                  <div>
                    <Card.Title>Game Over</Card.Title>
                    <Card.Text>Your score is: {score}</Card.Text>
                    <Link className='btn' onClick={handleRestart}>Restart Game</Link>
                    <Link className='btn' to="/games">Back</Link>
                  </div>
                ) : (
                  <div>
                    <Card.Title>English Choice Game</Card.Title>
                    <Card.Text>Time Left: {timeLeft}s</Card.Text>
                    <Speech text={selectedQuestions[currentQuestionIndex].question}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-volume-up" style={{ marginRight: '5px' }}></i>
                        <Card.Text>{selectedQuestions[currentQuestionIndex].question}</Card.Text>
                      </div>
                    </Speech>
                    {selectedQuestions[currentQuestionIndex].choices.map((choice, idx) => (
                      <Link
                        key={idx}
                        onClick={() => handleChoiceClick(choice)}
                        className="btn"
                      >
                        {choice}
                      </Link>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>        
        </Row>
      </div>
    );
  }
  
  export default EnglishChoiceGame;