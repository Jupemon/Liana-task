import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button, Dropdown} from 'react-bootstrap';
import lianaLogo from '../images/liana-technologies-logo.png';

class TopNav extends Component {
    state = {  }
    render() { 
        return ( <div>
        <div style={{marginTop:"60px", position:"absolute"}}/>
        <div className="top-banner" style={{width : "100%", backgroundColor : "green", height :"70px", display : "flex", flexDirection :"row-reverse"}}>
        <div style={{padding: "20px"}}>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    English
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Suomeksi</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Svenska</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Norsk</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>   
</div>  
        <a style={{padding : "15px", color:"white"}}>Intranet</a>
        <a style={{padding : "15px", color:"white"}}>News</a>

        </div>
            <Navbar fixed="top" bg="light" expand="lg">
  <Navbar.Brand href="#home">
      <img 
          src={lianaLogo}
          width="90"
          height="auto"
          alt="Liana logo"
      />

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Company</Nav.Link>
      <Nav.Link href="#link">Products</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div> );
    }
}
 
export default TopNav;