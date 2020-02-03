import React from 'react';
import bodyshopLogo from '../images/bodyshop-logo.jpg';
import ikeaLogo from '../images/ikea-logo.jpg';
import boschLogo from '../images/bosch-logo.png';
import laplandhotelsLogo from '../images/laplandhotels-logo.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const References = () => {
    return ( <div>
    <h1>References</h1>
        <Container>
            <Row>
                <Col md="4">
                <Card>
  <Card.Img variant="top" src={boschLogo} height="200px"/>
  <Card.Body>
    <Card.Title>Robert Bosch</Card.Title>
    <Card.Text>
      Bosch is a multinational engineering and electronics company.
    </Card.Text>
  </Card.Body>
</Card>
                </Col>
                <Col md="4">
                <Card>
  <Card.Img variant="top" src={bodyshopLogo} height="200px"/>
  <Card.Body>
    <Card.Title>The Body Shop</Card.Title>
    <Card.Text>
    The Body Shop is a global beaty brand and it has more than 3,000 stores in more than 60 countries.
    </Card.Text>
  </Card.Body>
</Card>
                </Col>
                <Col md="4">
                <Card>
  <Card.Img variant="top" src={laplandhotelsLogo} height="200px"/>
  <Card.Body>
    <Card.Title>Lapland Hotels</Card.Title>
    <Card.Text>
    Lapland Hotels is the largest and most diverse hotel chain in Lapland.
    </Card.Text>
  </Card.Body>
</Card>
                </Col>
                <Col md="4">
                <Card>
  <Card.Img variant="top" src={ikeaLogo} height="200px"/>
  <Card.Body>
    <Card.Title>Ikea</Card.Title>
    <Card.Text>
    IKEA is a multinational furniture store
    </Card.Text>
  </Card.Body>
</Card>
                </Col>
                
            </Row>
        </Container>
    </div> );
}
 
export default References;