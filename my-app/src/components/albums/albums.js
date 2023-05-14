import React    from "react";
import { Container, Carousel, Button} from "react-bootstrap";
import GreetingEarthlings from "../../img/greetingEarthlings.png";
import BlakkTape from "../../img/blakkTape.png";
import DevilsReject2 from "../../img/devilsReject2.png";
import DontGetScared from "../../img/dontGetScared.png"
import EIF from "../../img/eif.png";
import GOAT from "../../img/goat.png";
import IfItBleeds from "../../img/ifItBleedsItCanBeKilled.png";
import LookWhatIBecame from "../../img/lookWhatIBecame.png";
import MoreSteroids from "../../img/moreSteroids.png";
import RejectOnSteroids from "../../img/rejectOnSteroids.png";
import "./albums.css";

let albums = () => {
  return (
  <div id="albumSection">  
  <Container>
    <h4 className="albumTitle">Albums</h4>
    <Carousel>
      <Carousel.Item>
        <img
          className="albumCover"
          src={GreetingEarthlings}
          alt="GreetingEarthlings"
        />
        <Carousel.Caption>
          <h3>Greeting Earthlings</h3>
          <h6>2022</h6>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="albumCover"
          src={DevilsReject2}
          alt="DevilsReject2"
        />
        <Carousel.Caption>
          <h3>Reject 2</h3>
          <p>2015</p>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="albumCover"
          src={BlakkTape}
          alt="Blakk Tape"
        />

        <Carousel.Caption>
          <h3>Blakk Tape</h3>
          <p>2018
          </p>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="albumCover"
          src={DontGetScared}
          alt="DontGetScared"
        />

        <Carousel.Caption>
          <h3>Don't Get Scared</h3>
          <p>2016
          </p>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="albumCover"
          src={EIF}
          alt="EIF"
        />

        <Carousel.Caption>
          <h3>Everybody is F.O.O.D</h3>
          <p>2018
          </p>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>


          <Carousel.Item>
        <img
          className="albumCover"
          src={GOAT}
          alt="GOAT"
        />
        <Carousel.Caption>
          <h3>G.O.A.T</h3>
          <p>2017
          </p>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="albumCover"
          src={IfItBleeds}
          alt="IfItBleeds"
        />
        <Carousel.Caption>
          <h3>If It Bleeds It Can Be Killed</h3>
          <p>2021
          </p>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="albumCover"
          src={LookWhatIBecame}
          alt="LookWhatIBecame"
        />
        <Carousel.Caption>
          <h3>Look What I Became</h3>
          <p>2019
          </p>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="albumCover"
          src={MoreSteroids}
          alt="MoreSteroids"
        />
        <Carousel.Caption>
          <h3>More Steroids</h3>
          <p>2017
          </p>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="albumCover"
          src={RejectOnSteroids}
          alt="RejectOnSteroids"
        />
        <Carousel.Caption>
          <h3>Reject On Steroids</h3>
          <p>2017
          </p>
          <Button variant="light">Listen</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );


  </Container>

  </div>
  )
}

export default albums;
