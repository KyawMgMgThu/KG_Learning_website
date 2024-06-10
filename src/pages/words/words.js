import React, { useState } from 'react';
import { Container, Tab, Tabs, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../../navbar.js';
import Speech from '../Speech/Speech.js';
import Color from '../../Data/Color.json';
import Months from '../../Data/Months.json';
import Days from '../../Data/Days.json';
import AF from '../../Data/Af.js';
import GL from '../../Data/Gl.js';
import MR from '../../Data/Mr.js';
import Sz from '../../Data/Sz.js';

const tabData = [
    { key: 'Af', title: 'A-F', content: <AF /> },
    { key: 'Gl', title: 'G-L', content: <GL /> },
    { key: 'Mr', title: 'M-R', content: <MR /> },
    { key: 'Sz', title: 'S-Z', content: <Sz /> },
    { key: 'Months', title: 'Months', content: Months },
    { key: 'Days', title: 'Days', content: Days },
    { key: 'Colors', title: 'Colors', content: Color }
];

function Words() {
    const [activeTab, setActiveTab] = useState('Af');

    return (
        <div>
            <Navbar />
            <br />
            <Container>
                <br />
                <Tabs
                    id="controlled-tab-example"
                    activeKey={activeTab}
                    onSelect={(key) => setActiveTab(key)}
                >
                    {tabData.map((tab, index) => (
                        <Tab key={index} eventKey={tab.key} title={tab.title}>
                            <br />
                            {tab.key === 'Months' || tab.key === 'Days' || tab.key === 'Colors' ?
                                <Row>
                                    {tab.content.map((item, idx) => (
                                        <Col xs={6} md={4} key={idx} className="media-col">
                                            <Speech text={item.val}>
                                                <Card className="mb-3 card-style">
                                                    <Card.Body style={{ padding: '1rem', display: 'flex', flexDirection: 'row' }}>
                                                        {tab.key === 'Colors' &&
                                                            <Card style={{ width: '70px', borderRadius: '50px', backgroundColor: item.val }}>
                                                                <Card.Body></Card.Body>
                                                            </Card>
                                                        }
                                                        <Card.Title style={{ paddingLeft: tab.key === 'Colors' ? '2rem' : '0' }}>
                                                            {tab.key === 'Colors' ? item.val : `${idx + 1}. ${item.val}`}
                                                        </Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </Speech>
                                        </Col>
                                    ))}
                                </Row>
                                :
                                tab.content
                            }
                        </Tab>
                    ))}
                </Tabs>
            </Container>
        </div>
    );
}

export default Words;
