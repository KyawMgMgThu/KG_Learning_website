import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import Monkey from './A-Z_Word/monkey.jpeg';
import Moon from './A-Z_Word/moon.jpeg';
import Nose from './A-Z_Word/nose.jpeg';
import Nest from './A-Z_Word/nest.jpeg';
import Orange from './A-Z_Word/orange.jpeg';
import Owl from './A-Z_Word/owl.jpeg';
import Pen from './A-Z_Word/pen.jpeg';
import Pencil from './A-Z_Word/pencil.jpeg';
import Queen from './A-Z_Word/queen.jpeg';
import Quill from './A-Z_Word/quill.jpeg';
import Rabbit from './A-Z_Word/rabbit.jpeg';
import Rainbow from './A-Z_Word/rainbow.jpeg';
import Speech from '../pages/Speech/Speech';

function MR() {
    const items = [
        {
            photo: Monkey,
            value: "Monkey",
            lang: "(မျောက်)"
        },
        {
            photo: Moon,
            value: "Moon",
            lang: "(လ)"
        },
        {
            photo: Nose,
            value: "Nose",
            lang: "(နှာခေါင်း)"
        },
        {
            photo: Nest,
            value: "Nest",
            lang: "(ငှက်သိုက်)"
        },
        {
            photo: Orange,
            value: "Orange",
            lang: "(လိမ္မော်ရောင်)"
        },
        {
            photo: Owl,
            value: "Owl",
            lang: "(ဇီးကွက်)"
        },
        {
            photo: Pen,
            value: "Pen",
            lang: "(မင်တံ)"
        },
        {
            photo: Pencil,
            value: "Pencil",
            lang: "(ခဲတံ)"
        },
        {
            photo: Queen,
            value: "Queen",
            lang: "(မိဖုရား)"
        },
        {
            photo: Quill,
            value: "Quill",
            lang: "(တံဖြူ)"
        },
        {
            photo: Rabbit,
            value: "Rabbit",
            lang: "(ယုန်)"
        },
        {
            photo: Rainbow,
            value: "Rainbow",
            lang: "(သက်တန့်)"
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
                                        <Image src={item.photo} alt={item.val} rounded style={{ padding: '0.5rem', width: '200px' }} />
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

export default MR;
