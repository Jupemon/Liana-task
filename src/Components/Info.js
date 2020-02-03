import React, { Component } from 'react';
import bannerImage from '../images/bannerImage.jpg';
import {Card, Container, Row, Col} from 'react-bootstrap';
import { CardBody } from 'react-bootstrap/Card';

class Info extends Component {
    state = {  }
    render() { 
        return ( <div style={{marginTop :"50px"}}>
        <Container>
        <Row>
<Col md="4">
<Card >
  <Card.Img variant="top" src={bannerImage} height="150px" style={{opacity:"0.7"}}/>
  <div style={{position:"absolute", right:"50%", top:"50px", color:"white", fontSize:"20px"}} className="headline">Company</div>
  <Card.Body>
  <i class="fas fa-satellite fa-5x"></i>
  <h1>10 000</h1>
  <h2>Daily users</h2>
  </Card.Body>
</Card>
</Col>
<Col md="4">
<Card >
  <Card.Img variant="top" src={bannerImage} height="150px" style={{opacity:"0.7"}}/>
  <div style={{position:"absolute", right:"50%", top:"50px", color:"white", fontSize:"20px"}} className="headline">Products</div>
  <Card.Body>
  <i class="fas fa-satellite fa-5x"></i>
  <h1>10 000</h1>
  <h2>Daily users</h2>
  </Card.Body>
</Card>
</Col>
<Col md="4">
<Card >
  <Card.Img variant="top" src={bannerImage} height="150px" style={{opacity:"0.7"}}/>
  <div style={{position:"absolute", right:"50%", top:"50px", color:"white", fontSize:"20px"}} className="headline">Contact us</div>
  <Card.Body>
  <i class="fas fa-satellite fa-5x"></i>
  <h1>10 000</h1>
  <h2>Daily users</h2>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
        </div> );
    }
}
 
export default Info;