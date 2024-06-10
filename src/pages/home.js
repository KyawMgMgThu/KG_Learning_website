import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../navbar.js';
import Speech from './Speech/Speech';
import Img1 from './svg/img1.png';
import Img2 from './svg/img2.png';
import './home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <Container className="text-center mt-4">
        <Row>
          <Col>
            <h1>Welcome to Our Learning Platform!</h1>
            <Speech text="If a child cannot learn in the way we teach, we must teach in a way the child can learn">
              <h2 className="mt-5 card-style">
                "If a child cannot learn in the way we teach, we must teach in a way the child can learn."
              </h2>
            </Speech>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <img src={Img1} alt="Student Cartoon" width={170} height={170} className="img-fluid home-img" />
            <img src={Img2} alt="Student Cartoon" width={170} height={50} className="img-fluid home-img" />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/kids-learning/#/alphabets" className="btn card-style">Go To Lessons</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
