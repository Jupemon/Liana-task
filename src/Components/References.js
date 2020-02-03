import React from 'react';
import lianaLogo from '../images/liana-technologies-logo.png';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const References = () => {
    return ( <div>
        <Container>
            <Row>
                <Col md="4">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={lianaLogo} />
  <Card.Body>
    <Card.Title>References</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                </Col>
                <Col md="4">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={lianaLogo} />
  <Card.Body>
    <Card.Title>References</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                </Col>
                <Col md="4">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={lianaLogo} />
  <Card.Body>
    <Card.Title>References</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                </Col>
                <Col md="4">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={lianaLogo} />
  <Card.Body>
    <Card.Title>References</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                </Col>
                
            </Row>
        </Container>
    </div> );
}
 
export default References;