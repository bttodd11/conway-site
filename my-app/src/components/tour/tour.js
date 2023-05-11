import React from "react";
import {
  Row,
  Container,
  Col,
  ListGroup,
  ListGroupItem,
  Table,
} from "react-bootstrap";
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
                <tr className="tableHeader">
                  <th>Date</th>
                  <th>City</th>
                  <th>Venue</th>
                  <th>Buy Now</th>
                </tr>
                <tr>
                  <td>May-26-2023</td>
                  <td>Chicago, IL</td>
                  <td>Patio Theater</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>May-27-2023 </td>
                  <td>Milwaukee, WI</td>
                  <td>Turner Hall Ballroom</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>May-28-2023</td>
                  <td>Minneapolis, MN</td>
                  <td>Amsterdam Bar</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>May-31-2023</td>
                  <td>Denver, CO</td>
                  <td>Cervantes Masterpiece Ballroom</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                <td>June-06-2023</td>
                  <td>San Francisco, CA</td>
                  <td>August Hall </td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                  </tr>
                  <tr>
                  <td>June-07-2023</td>
                  <td>Los Angeles, CA</td>
                  <td>The Wiltern</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                  </tr>
                  <tr>
                  <td>June-08-2023</td>
                  <td>Phoenix, AZ</td>
                  <td>Crescent Ballroom</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                  </tr>
                <tr>
                  <td>June-11-2023</td>
                  <td>Dallas, TX</td>
                  <td>Studio At The Factory</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-12-2023</td>
                  <td>Austin, TX</td>
                  <td>Come and Take It</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-14-2023</td>
                  <td>New Orleans, LA</td>
                  <td>House of Blues New Orleans </td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-16-2023</td>
                  <td>Atlanta, GA</td>
                  <td>The Masquerade - Heaven Stage</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-17-2023</td>
                  <td>Charlotte, NC</td>
                  <td>The Underground</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-18-2023</td>
                  <td>Washington, DC</td>
                  <td>9:30 Club</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-21-2023</td>
                  <td>Philadelphia, PA</td>
                  <td>Theatre of Living Arts</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-23-2023</td>
                  <td>Boston, MA</td>
                  <td>Paradise Rock Club</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-24-2023</td>
                  <td>Brooklyn, NY</td>
                  <td>Brooklyn Steel</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-27-2023</td>
                  <td>Cleveland, OH</td>
                  <td>Grog Shop</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>June-28-2023</td>
                  <td>Detroit, MI</td>
                  <td>El Club</td>
                  <td>
                    {" "}
                    <span className="ticketProp">
                      <img src={ticket} alt="" />
                    </span>
                  </td>
                </tr>
              </table>
              </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default tour;
