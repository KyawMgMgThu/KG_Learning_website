import {React, useState} from 'react';
import {Container,Tab,Tabs,Row,Col,Card} from 'react-bootstrap';
import Navbar from '../../navbar.js';
import '../numbers/about.css';
import Speech from '../Speech/Speech.js';
import Color from '../../Data/Color.json';
import Flower from '../../Data/Flower.js';
import Months from '../../Data/Months.json';
import Days from '../../Data/Days.json';
import PlanetsList from '../../Data/Planets.js';


function ControlledTabs() {
    const [key, setKey] = useState('Flower');
      
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Flower" title="Flower" >
         <br/>
            <Flower/>
        </Tab>
        <Tab eventKey="planets" title="Planets" >
         <br/>            
            <PlanetsList/>         
        </Tab>
        <Tab eventKey="Months" title="Months" >
        <br/>
        <Row> 
            {
                Months.map((variant, idx) => (
                    <Col xs={6} md={4} key={idx} className="media-col" >
                     <Speech text={variant.val}>   
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem'}}>
                        <Card.Title>
                        {idx+1}. {variant.val}
                            </Card.Title>
                         
                       </Card.Body>
                    </Card> 
                    </Speech>
                    </Col>
                  ))
            }    
        </Row>
        </Tab>
        <Tab eventKey="Days" title="Days" >
        <br/>
        <Row> 
            {
                Days.map((variant, idx) => (
                    <Col xs={6} md={4} key={idx} className="media-col" >
                     <Speech text={variant.val}>   
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem'}}>
                        <Card.Title>
                            {idx+1}. {variant.val}
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
            <br/>
        <Row> 
            {
                Color.map((variant, idx) => (
                    <Col xs={6} md={4} key={idx} className="media-col" >
                        <Speech text={variant.val}>
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem', display:'flex',direction:'row'}}>                    
                        
                        <Card style={{width:'70px',borderRadius:'50px', backgroundColor: variant.val}}>
                               <Card.Body>
                                   
                                </Card.Body> 
                          </Card>
                          <Card.Title style={{paddingLeft:'2rem'}}>
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
        <Navbar/>
        
            <br/>        
        <Container>
            <br/>
            <ControlledTabs style={{Color:'red'}}/>           
        </Container>
    </div>
  );
}

export default Words;