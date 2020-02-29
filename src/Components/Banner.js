import bannerImage from '../images/bannerImage.jpg';
import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return ( <div className="Monke">
    <div style={{position:"absolute", left:"50%", right:"50%", top:"120px", color:"white", width:"200px"}}>
    <div><h1 style={{fontSize:"55px"}}>Software fueling digital marketing</h1></div>
    <Button variant="success">Learn more</Button>
    </div>
        <img src={bannerImage} width="100%" alt="Liana Banner"/>
    </div> );
}
 
export default Banner;