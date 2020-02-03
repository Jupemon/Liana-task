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
        <p>Liana techologies and encode solutions merge to create unique mobile solutions</p>
        <Button>Read more</Button>
        </Col>
        <Col style={{backgroundColor:"white", margin:"20px"}}>
        <div className="time" style={{fontWeight:"lighter"}}>27.07.2016</div>
        <p>Liana techologies and encode solutions merge to create unique mobile solutions</p>
        <Button>Read more</Button>
        </Col>
        <Col style={{backgroundColor:"white", margin:"20px"}}>
        <div className="time" style={{fontWeight:"lighter"}}>27.07.2016</div>
        <p>Liana techologies and encode solutions merge to create unique mobile solutions</p>
        <Button>Read more</Button>
        </Col>
    </Row>
</Container>
</Jumbotron>
    </div> );
}
 
export default News;