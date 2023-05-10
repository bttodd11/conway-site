import React from "react";
import { Row, Container, Col, ListGroup, ListGroupItem, Table } from "react-bootstrap";
import tourPoster from "../../img/tourPoster.png";
import ticket from "../../img/ticket.png";
import "./tour.css";

let tour = () => {
  return (
    <div id="tourSection">
      <Container fluid="md">
        <Row>
          <h4 className="tourTitle">Won't He Do Tour</h4>
          <Col>
            <img src={tourPoster} className="tourPosterImage" alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup className="listGroup">
            <table>
  <tr>
    <th>Date</th>
    <th>City</th>
    <th>Venue</th>
    <th>Buy Now</th>
  </tr>
  <tr>
    <td>May-26-2023</td>
    <td>Chicago, IL</td>
    <td>Patio Theater</td>
    <td>   <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></td>

  </tr>
  <tr>
    <td>May-27-2023 </td>
    <td>Milwaukee, WI</td>
    <td>Turner Hall Ballroom</td>
    <td>   <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></td>

  </tr>
  <tr>
    <td>May-28-2023</td>
    <td>Minneapolis, MN</td>
    <td>Amsterdam Bar</td>
    <td>   <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></td>

  </tr>
  <tr>
    <td>May-31-2023</td>
    <td>Denver, CO</td>
    <td>Cervantes Masterpiece Ballroom</td>
    <td>   <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></td>

  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>May-26-2023</td>
    <td>Chicago, IL</td>
    <td>Patio Theater</td>
    <td>   <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></td>

  </tr>
</table>
                <ListGroup.Item>    
                May-31-2023 Denver, CO @Cervantes Masterpiece Ballroom{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-06-2023 San Francisco, CA @August Hall{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-07-2023 Los Angeles, CA @The Wiltern{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-08-2023 Phoenix, AZ @Crescent Ballroom{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-11-2023 Dallas, TX @Studio At The Factory{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-12-2023 Austin, TX @Come and Take it{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-14-2023 New Orleans, LA @House of Blues New Orleans{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-16-2023 Atlanta, GA @House of Blues New Orleans{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-17-2023 Charlotte, NC @The Underground{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-18-2023 Washington, DC @9:30 Club{" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                <ListGroup.Item>    
                June-21-2023 Philadelphia, PA @Theatre of Living Arts (TLA){" "}
                <span className="ticketProp">
                  <img src={ticket} alt="" />
                </span></ListGroup.Item>
                
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default tour;
