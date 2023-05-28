import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./nav.css";



let nav = () => {
  return (
    <div id="navContainer">
    <Navbar>
    <Container fluid className="justify-content-center">
      <Nav className="justify-content-center textLinks">
        <Nav.Link href="#videos">Videos</Nav.Link>
        <Nav.Link href="#album">Album</Nav.Link>
        <Nav.Link href="#tour">Tour</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  );
};

export default nav;