import React, { useState } from 'react';
import { Container, Tab, Tabs, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../../navbar.js';
import '../numbers/about.css';
import Speech from '../Speech/Speech.js';
import Color from '../../Data/Color.json';
import Months from '../../Data/Months.json';
import Days from '../../Data/Days.json';
import AF from '../../Data/Af.js';
import GL from '../../Data/Gl.js';

function ControlledTabs() {
    const [key, setKey] = useState('Af');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="Af" title="A-F">
                <br />
                <AF />
            </Tab>
            <Tab eventKey="Gl" title="G-L">
                <br />
                <GL />
            </Tab>
            <Tab eventKey="Months" title="Months">
                <br />
                <Row>
                    {
                        Months.map((variant, idx) => (
                            <Col xs={6} md={4} key={idx} className="media-col">
                                <Speech text={variant.val}>
                                    <Card className="mb-3 card-style">
                                        <Card.Body style={{ padding: '1rem' }}>
                                            <Card.Title>
                                                {idx + 1}. {variant.val}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Speech>
                            </Col>
                        ))
                    }
                </Row>
            </Tab>
            <Tab eventKey="Days" title="Days">
                <br />
                <Row>
                    {
                        Days.map((variant, idx) => (
                            <Col xs={6} md={4} key={idx} className="media-col">
                                <Speech text={variant.val}>
                                    <Card className="mb-3 card-style">
                                        <Card.Body style={{ padding: '1rem' }}>
                                            <Card.Title>
                                                {idx + 1}. {variant.val}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Speech>
                            </Col>
                        ))
                    }
                </Row>
            </Tab>
            <Tab eventKey="Colors" title="Colors">
                <br />
                <Row>
                    {
                        Color.map((variant, idx) => (
                            <Col xs={6} md={4} key={idx} className="media-col">
                                <Speech text={variant.val}>
                                    <Card className="mb-3 card-style">
                                        <Card.Body style={{ padding: '1rem', display: 'flex', flexDirection: 'row' }}>
                                            <Card style={{ width: '70px', borderRadius: '50px', backgroundColor: variant.val }}>
                                                <Card.Body>
                                                </Card.Body>
                                            </Card>
                                            <Card.Title style={{ paddingLeft: '2rem' }}>
                                                {variant.val}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Speech>
                            </Col>
                        ))
                    }
                </Row>
            </Tab>
        </Tabs>
    );
}

function Words() {
    return (
        <div>
            <Navbar />
            <br />
            <Container>
                <br />
                <ControlledTabs />
            </Container>
        </div>
    );
}

export default Words;
