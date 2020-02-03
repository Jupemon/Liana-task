import React from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';
import './BottomFooter.css'
import { SocialIcon } from 'react-social-icons';

const BottomFooter = () => {
    return (<div style={{backgroundColor:"black"}}>
<Jumbotron style={{backgroundColor:"black"}}>
<Container>
<Row>
<Col>
<div className="contact-info">
  <h1 style={{color:"white"}}>Liana Techologies</h1>
  <h2>Sales and inqueries</h2>
  <p>Email: sales@lianatech.com</p>
  <p>Phone: +358 10 387 7054</p>
  <Button variant="success">Contact us</Button>
</div>
</Col>
<Col>
<div className="bottom-linksbox" style={{paddingTop:"20px"}}>
<a style={{padding:"20px"}}>Company</a>
<a style={{padding:"20px"}}>Products</a>
<a style={{padding:"20px"}}>Contact</a>
<a style={{padding:"20px"}}>News</a>
<a style={{padding:"20px"}}>Intranet</a>
</div>
<div className="social-icons" style={{padding:"20px"}}>
<a style={{padding:"20px"}}><SocialIcon url="http://twitter.com/jaketrent" /></a>
<a style={{padding:"20px"}}><SocialIcon url="http://facebook.com/jaketrent" /></a>
<a style={{padding:"20px"}}><SocialIcon url="http://linkedin.com/jaketrent" /></a>

</div>
</Col>

  </Row>
  </Container>
</Jumbotron>
    </div>)
}
export default BottomFooter;