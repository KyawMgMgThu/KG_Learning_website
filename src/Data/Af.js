import React from 'react';
import { Row, Col,Image, Card } from 'react-bootstrap';
import Apple from './A-Z_Word/apple.jpeg';
import Ant from './A-Z_Word/ant.jpeg';
import Ball from './A-Z_Word/ball.jpeg';
import Boy  from './A-Z_Word/boy.jpeg';
import Cake from './A-Z_Word/cake.jpeg';
import Cup from './A-Z_Word/cup.jpeg';
import Dog from './A-Z_Word/dog.jpeg';
import Duster from './A-Z_Word/duster.jpeg';
import ear from './A-Z_Word/ear.jpeg';
import Eye from './A-Z_Word/eye.jpeg';
import Fan from './A-Z_Word/fan.jpeg';
import Fish from './A-Z_Word/fish.jpeg';
import Speech from '../pages/Speech/Speech';

function AF() {
    const items = [
        {
            photo: Apple,
            value: "Apple",
            lang: "(ပန်းသီး)"
        },
        {
            photo: Ant,
            value: "Ant",
            lang: "(ပုရွက်ဆိတ်)"
        },
        {
            photo: Ball,
            value: "Ball",
            lang: "(ဘောလုံး)"
        },
        {
            photo: Boy,
            value: "Boy",
            lang: "(ယောင်္ကျားလေး)"
        },
        {
            photo: Cake,
            value: "Cake",
            lang: "(ကိတ်မုန့်)"
        },
        {
            photo: Cup,
            value: "Cup",
            lang: "(ခွက်)"
        },
        {
            photo: Dog,
            value: "Dog",
            lang: "(ခွေး)"
        },
        {
            photo: Duster,
            value: "Duster",
            lang:"(ခဲဖျက်)"
        },
        {
            photo: ear,
            value: "Ear",
            lang: "(နားရွက်)"
        },
        {
            photo: Eye,
            value: "Eye",
            lang:"(မျက်လုံး)"
        },
        {
            photo: Fan,
            value: "Fan",
            lang:"(ပန်ကာ)"
        },
        {
            photo: Fish,
            value: "Fish",
            lang:"(ငါး)"
        }
    ];

    return (
        <div>
            <Row>
                {
                    items.map((item, idx) => (
                        <Col md="3" key={idx} className="media-col text-center">
                            <Card className="mb-3 card-style" style={{ width: '230px', height: '300px' }}>
                                <Card.Body style={{ padding: '1rem' }}>
                                    <Card.Title>
                                    <Image src={item.photo} alt={item.val} rounded style={{padding:'0.5rem',width:'200px'}} />
                                        <br />
                                        <Speech text={item.value}>
                                            {item.value}
                                        </Speech>
                                    <p>{item.lang}</p>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default AF;
