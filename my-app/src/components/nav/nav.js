import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { HashLink as HashLink } from 'react-router-hash-link';
import "./nav.css";



let nav = () => {
  return (
    <div id="navContainer">
      <Navbar>
        <Nav>
     <a className="navLink"><HashLink smooth to="#videoSection">Videos</HashLink></a>
      <a className="navLink"><HashLink smooth to="#albumSection">Album</HashLink></a>
      <a className="navLink"><HashLink smooth to="#tourSection">Tour</HashLink></a>
      <a className="navLink"><HashLink smooth to="#contactSection">Contact</HashLink></a>
      <a className="navLink" href="https://whoisconwaythemachine.myshopify.com/">Shop</a>
      </Nav>
      </Navbar>
  </div>
  );
};

export default nav;
