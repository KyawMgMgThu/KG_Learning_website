import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Navbar from '../navbar.js';
import Speech from './Speech/Speech';
import './home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <br />
        <Row>
          <Col>
            <h1>Welcome to Our Learning Platform!</h1>
            <Speech text="If a child cannot learn in the way we teach, we must teach in a way the child can learn">
              <h2 className="home mt-5 card-style">"If a child cannot learn in the way we teach, we must teach in a way the child can learn."</h2>
            </Speech>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            
          </Col>
        </Row>
        <Row>
          <Col>
          <img src="https://img.freepik.com/free-vector/thai-student-boy-cartoon-character_1308-81032.jpg?size=626&ext=jpg&ga=GA1.2.1052301272.1717926846&semt=ais_user" alt="" width={170} height={50} className="img-fluid" />

            <img src="https://img.freepik.com/free-vector/asian-girl-student-uniform-cartoon-character-sticker_1308-59350.jpg?size=626&ext=jpg" alt="" width={170} height={50} className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col>
          <a href="/kids-learning/#/alphabets" class="btn card-style">Go To Lessons</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
