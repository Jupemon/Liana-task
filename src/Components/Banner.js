import bannerImage from '../images/bannerImage.jpg';
import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return ( <div>
    <div style={{position:"absolute", right:"50%", top:"50%"}}>
    <div><h1>Software fueling digital marketing</h1></div>
    <Button variant="success">Learn more</Button>
    </div>
        <img src={bannerImage} width="100%" alt="Liana Banner"/>
    </div> );
}
 
export default Banner;