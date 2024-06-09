import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import Sun from './A-Z_Word/sun.jpeg';
import Star from './A-Z_Word/star.jpeg';
import Tree from './A-Z_Word/tree.jpeg';
import Tiger from './A-Z_Word/tiger.jpeg';
import Umbrella from './A-Z_Word/umbrella.jpeg';
import Unicorn from './A-Z_Word/unicorn.jpeg';
import Vase from './A-Z_Word/vase.jpeg';
import Violin from './A-Z_Word/violin.jpeg';
import Watermelon from './A-Z_Word/watermelon.jpeg';
import Watch from './A-Z_Word/watch.jpeg';
import Xylophone from './A-Z_Word/xylophone.jpeg';
import Xray from './A-Z_Word/xray.jpeg';
import Yarn from './A-Z_Word/yarn.jpeg';
import Yacht from './A-Z_Word/yacht.jpeg';
import Zebra from './A-Z_Word/zebra.jpeg';
import Zip from './A-Z_Word/zip.jpeg';
import Speech from '../pages/Speech/Speech';

function SZ() {
    const items = [
        {
            photo: Sun,
            value: "Sun",
            lang: "(နေ)"
        },
        {
            photo: Star,
            value: "Star",
            lang: "(ကြယ်)"
        },
        {
            photo: Tree,
            value: "Tree",
            lang: "(သစ်ပင်)"
        },
        {
            photo: Tiger,
            value: "Tiger",
            lang: "(ကျား)"
        },
        {
            photo: Umbrella,
            value: "Umbrella",
            lang: "(ထီး)"
        },
        {
            photo: Unicorn,
            value: "Uniform",
            lang: "(ယူနီဖောင်း)"
        },
        {
            photo: Vase,
            value: "Vase",
            lang: "(ပန်းအိုး)"
        },
        {
            photo: Violin,
            value: "Violin",
            lang: "(တယော)"
        },
        {
            photo: Watermelon,
            value: "Watermelon",
            lang: "(ဖရဲသီး)"
        },
        {
            photo: Watch,
            value: "Watch",
            lang: "(နာရီ)"
        },
        {
            photo: Xylophone,
            value: "Xylophone",
            lang: "(ဆိုလိုဖုန်း)"
        },
        {
            photo: Xray,
            value: "X-ray",
            lang: "(ဓါတ်မှန်ရိုက်ခြင်း)"
        },
        {
            photo: Yarn,
            value: "Yarn",
            lang: "(သိုးမွှေး)"
        },
        {
            photo: Yacht,
            value: "Yacht",
            lang: "(ရွက်လှေ)"
        },
        {
            photo: Zebra,
            value: "Zebra",
            lang: "(ကျားမြင်း)"
        },
        {
            photo: Zip,
            value: "Zip",
            lang: "(ဇစ်ပါး)"
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

export default SZ;
