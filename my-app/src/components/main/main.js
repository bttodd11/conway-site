import React from "react";
import { Row, Container } from 'react-bootstrap';
import header from "../../img/conwayName.png";
import "./main.css";

let main = (props) => {
  return (
    <div id="mainSection">
      <Container fluid>
        <Row className="justify-content-center">
          <img src={header} className="conwayLogo" alt="" />
        </Row>
        <Row className="justify-content-center">
          <iframe
            width="500"
            height="400"
            className="videoSize"
            src="https://www.youtube.com/embed/lAOCdJujZDA?autoplay=1&mute=1"
          ></iframe>
        </Row>
      </Container>
    </div>
  );
};

export default main;
