import React from "react";
import { Button, Row, Col, Container, FormGroup, FormLabel, FormControl, Form } from "react-bootstrap";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import youtube from "../../img/youtube.png";
import "./contact.css";

let contact = (props) => {
  return (
    <div id="contactSection">
      
      <Container fluid>
        <Row>
          <Col className="mailingListSection">
          <h4 className="contactTitle">Mailing List</h4>
          <Form.Group as={Col} md="4" controlId="validationCustom01" className="formSection" >
          <Form.Control
            required
            type="text"
            placeholder="First Name"
            className="formInput"
          />
               <Form.Control
            required
            type="text"
            placeholder="Last Name"
            className="formInput"
          />
               <Form.Control
            required
            type="text"
            placeholder="Email"
            className="formInput"
          />
          </Form.Group>
          </Col>
          <Col>
            {" "}
            <h4 className="contactTitle">Bookings</h4>
            <Button variant="warning" sz="lg">
              Click For Bookings
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <p className="socialMediaSection">
        <img src={facebook} className="icons" alt="" />
        <img src={twitter} className="icons" alt="" />
        <img src={instagram} className="icons" alt="" />
        <img src={youtube} className="icons" alt="" />
      </p>
    </div>
  );
};

export default contact;
