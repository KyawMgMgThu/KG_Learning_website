import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import Giraffe from './A-Z_Word/giraffe.jpeg';
import Girl from './A-Z_Word/girl.jpeg';
import Hat from './A-Z_Word/hat.jpeg';
import Horse from './A-Z_Word/horse.jpeg';
import IceCream from './A-Z_Word/icecream.jpeg';
import Igloo from './A-Z_Word/igloo.jpeg';
import Jam from './A-Z_Word/jam.jpeg';
import Jug from './A-Z_Word/jug.jpeg';
import Kite from './A-Z_Word/kite.jpeg';
import King from './A-Z_Word/king.jpeg';
import Lion from './A-Z_Word/lion.jpeg';
import Leaf from './A-Z_Word/leaf.jpeg';
import Speech from '../pages/Speech/Speech';

function GL() {
    const items = [
        {
            photo: Giraffe,
            value: "Giraffe",
            lang: "(သစ်ကုလားအုတ်)"
        },
        {
            photo: Girl,
            value: "Girl",
            lang: "(ကောင်မလေး)"
        },
        {
            photo: Hat,
            value: "Hat",
            lang: "(ဦးထုပ်)"
        },
        {
            photo: Horse,
            value: "Horse",
            lang: "(မြင်း)"
        },
        {
            photo: IceCream,
            value: "Ice Cream",
            lang: "(ရေခဲမုန့်)"
        },
        {
            photo: Igloo,
            value: "Igloo",
            lang: "(ရေခဲအိမ်)"
        },
        {
            photo: Jam,
            value: "Jam",
            lang: "(သစ်သီးယို)"
        },
        {
            photo: Jug,
            value: "Jug",
            lang: "(ရေထည့်အိုး)"
        },
        {
            photo: Kite,
            value: "Kite",
            lang: "(စွန်)"
        },
        {
            photo: King,
            value: "King",
            lang: "(ဘုရင်)"
        },
        {
            photo: Lion,
            value: "Lion",
            lang: "(ခြင်္သေ့)"
        },
        {
            photo: Leaf,
            value: "Leaf",
            lang: "(ရွက်)"
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

export default GL;
