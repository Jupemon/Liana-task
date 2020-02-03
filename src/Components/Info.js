import React, { Component } from 'react';
import workingImg from '../images/working.jpg';
import teamImg from '../images/team.jpg';
import productsImage from '../images/products.jpg'
import {Card, Container, Row, Col} from 'react-bootstrap';
import Number from './Number.js';
import './Info.css';

class Info extends Component {
    state = { }

    render() { 
        return ( <div style={{marginTop :"50px"}}>
        <Container>
        <Row>
<Col md="4">
<Card >
  <Card.Img variant="top" src={teamImg} height="150px" width="auto" style={{opacity:"0.7"}}/>
  <div className="headline">Company</div>
  <Card.Body>
  <i style={{color:"green"}} className="fas fa-briefcase fa-5x"></i>
  <h1><Number maxNumber={3000} countingSpeed={50}/></h1>
  <h2>Clients</h2>
  </Card.Body>
</Card>
</Col>
<Col md="4">
<Card >
  <Card.Img variant="top" src={productsImage} height="150px" style={{opacity:"0.7"}}/>
  <div className="headline"><a>Products</a></div>
  <Card.Body>
  <i style={{color:"green"}} className="fas fa-user fa-5x"></i>
  <h1><Number maxNumber={180} countingSpeed={5}/>
  </h1>
  <h2>Employees</h2>
  </Card.Body>
</Card>
</Col>
<Col md="4">
<Card >
  <Card.Img variant="top" src={workingImg} height="150px" style={{opacity:"0.7"}}/>
  <div className="headline"><a>Contact us</a></div>
  <Card.Body>
  <i style={{color:"green"}} className="fas fa-globe-europe fa-5x"></i>
  <h1><Number maxNumber={10000} countingSpeed={100}/></h1>
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