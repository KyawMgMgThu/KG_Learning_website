import React from 'react';
import { Container, Card, Row, Col, Accordion } from 'react-bootstrap';
import Navbar from '../../navbar';

function MultiplicationTable({ start, end }) {
  return (
    <Row>
      {[...Array(end - start + 1)].map((_, i) => (
        <Col md="3" key={i} className="media-col">
          <Card className="mb-3 card-style">
            <Card.Body style={{ padding: '1.5rem' }}>
              {[...Array(12)].map((_, j) => (
                <Card.Title key={j}>
                  {start + i} X {j + 1} = {(start + i) * (j + 1)}
                </Card.Title>
              ))}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function Tables() {
  return (
    <div>
      <Navbar />
      <br />
      <Container>
        <Accordion defaultActiveKey="0">
          {[
            { eventKey: "0", range: [1, 4] },
            { eventKey: "1", range: [5, 10] },
            { eventKey: "2", range: [11, 20] },
            { eventKey: "3", range: [21, 50] },
          ].map(({ eventKey, range }) => (
            <Card key={eventKey}>
              <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                {range[0]} to {range[1]}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                  <MultiplicationTable start={range[0]} end={range[1]} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}

export default Tables;
