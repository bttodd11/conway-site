import React    from "react";
import { Row, Container, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import tourPoster from "../../img/tourPoster.png";
import "./tour.css";

let tour = () => {

  return(
<div id="tourSection">
        <Container fluid="md">
          <Row>
            <h4 className="tourTitle">Tour</h4>
            <Col><img src={tourPoster} className="tourPosterImage" alt="" /></Col>
          </Row>
          <Row>
<Col>
          <ListGroup>
      <ListGroup.Item>Friday, May-26-2023  Chicago, IL @ Patio Theater </ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
      </Col>
          </Row>
        </Container>
        </div>

)}

export default tour;
