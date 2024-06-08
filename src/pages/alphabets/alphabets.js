import { Container, Card, Row, Col, Accordion, Tab } from 'react-bootstrap';
import Navbar from '../../navbar.js';
import Speech from "../Speech/Speech.js";
import EngData from '../../Data/EngData.json';
import './alphabets.css';
import TabsDisplay from "../../component/Tabs/TabsDisplay.js";

function Numbers() {
  return (
    <div>
      <Navbar />
      <br />
      <Container className="alphabets">
        <TabsDisplay DefaultTab="English_Tab">
          <Tab eventKey="English_Tab" title="English Alphabets">
            <br />
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  English Alphabets
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Row>
                      {EngData.map((variant, idx) => (
                        <Col key={idx} xs={6} md={4} className="media-col">
                          <Speech text={variant.val}>
                            <Card className="mb-3 card-style">
                              <Card.Body style={{ padding: '0.4rem' }}>
                                <Card.Title>{variant.val}</Card.Title>
                              </Card.Body>
                            </Card>
                          </Speech>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Tab>
        </TabsDisplay>
      </Container>
    </div>
  );
}

export default Numbers;
