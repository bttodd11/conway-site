import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import './nav.css';



let nav = props => {
  return (
    <Navbar>
    <Container fluid className="navContainer justify-content-center">
      <Nav className="justify-content-center">
        <Nav.Link href="#videos">Videos</Nav.Link>
        <Nav.Link href="#album">Album</Nav.Link>
        <Nav.Link href="#tour">Tour</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
};

export default nav;