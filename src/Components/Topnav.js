import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav, Form, FormControl, Button, Dropdown} from 'react-bootstrap';
import lianaLogo from '../images/liana-technologies-logo.png';

class TopNav extends Component {
    state = {  }
    render() { 
        return ( <div>
        <div className="top-banner" style={{width : "100%", backgroundColor : "green", height :"70px", display : "flex", flexDirection :"row-reverse"}}>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    in English
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Suomeksi</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>     
        <a style={{padding : "0px 5px 0px 5px"}}>Intranet</a>
        <a style={{padding : "0px 5px 0px 5px"}}>News</a>

        </div>
            <Navbar bg="light" expand="lg">
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