import React from 'react';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';
import './navbar.css';

export default function Navbarkids() {
  return (
    <div className="Navbar">
      <Navbar expand="lg">
        <Navbar.Brand className="heading" href="/kg-learning/#/">KG learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto pl-5 ">
        <Nav.Link href="/kg-learning/#/alphabets" className="nav-item"><img src="https://img.icons8.com/color/26/000000/alpha.png" alt="Alphabets_icon"/>Alphabets  </Nav.Link>
        <Nav.Link href="/kg-learning/#/numbers" className="nav-item" ><img src="https://img.icons8.com/color/26/000000/1-circle--v3.png" alt="number_icon"/> Numbers </Nav.Link>
        <Nav.Link href="/kg-learning/#/words" className="nav-item"><img src="https://img.icons8.com/color/26/000000/document--v1.png" alt="words_icon"/> Words </Nav.Link>
        <Nav.Link href="/kg-learning/#/table" className="nav-item"><img src="https://img.icons8.com/color/26/000000/sigma.png" alt="table_icon"/> Table's </Nav.Link>
        <Nav.Link href="/kg-learning/#/about" className="nav-item"><img src="https://img.icons8.com/color/26/000000/about.png" alt="About_icon"/> About Us</Nav.Link>
      </Nav>
          <Form inline>
            <Button href="/kids-learning/#/practice" variant="outline-success">
              Practice <img src="https://img.icons8.com/color/26/000000/edit--v1.png" alt="Practice_icon" />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
