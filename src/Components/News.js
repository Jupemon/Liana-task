import React from 'react';
import { Jumbotron, Container, Col, Row, Button } from 'react-bootstrap';

const News = () => {
    return ( <div>
<Jumbotron fluid>
<h1>Latest News</h1>
<Container>
    <Row>
    <Col style={{backgroundColor:"white", margin:"20px"}}>
        <div className="time" style={{fontWeight:"lighter"}}>27.07.2016</div>
        <p>Koodiviidakko changes it name to Liana techologies, Jupemon is confused at why this was done, and points to itella/posti as an example on what could go wrong</p>
        </Col>
        <Col style={{backgroundColor:"white", margin:"20px"}}>
        <div className="time" style={{fontWeight:"lighter"}}>27.07.2016</div>
        <p>Breaking news! Jupemon is currently looking for employment in liana tech</p>
        </Col>
        <Col style={{backgroundColor:"white", margin:"20px"}}>
        <div className="time" style={{fontWeight:"lighter"}}>27.07.2016</div>
        <p>Liana techologies and encode solutions merge to create unique mobile solutions</p>
        </Col>
    </Row>
</Container>
</Jumbotron>
    </div> );
}
 
export default News;