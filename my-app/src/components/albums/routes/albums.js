import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import GreetingEarthlings from "../../../img/greetingEarthlings.png";
import BlakkTape from "../../../img/blakkTape.png";
import DevilsReject2 from "../../../img/devilsReject2.png";
import DontGetScared from "../../../img/dontGetScared.png";
import EIF from "../../../img/eif.png";
import GOAT from "../../../img/goat.png";
import IfItBleeds from "../../../img/ifItBleedsItCanBeKilled.png";
import LookWhatIBecame from "../../../img/lookWhatIBecame.png";
import MoreSteroids from "../../../img/moreSteroids.png";
import RejectOnSteroids from "../../../img/rejectOnSteroids.png";
import EIF2 from "../../../img/eif2.png";
import FAKTAG from "../../../img/FAKTAG.png";
import GodDontMakeMistakes from "../../../img/GodDontMakeMistakes.png";
import LaMaquina from "../../../img/LaMaquina.png";
import LULU from "../../../img/LULU.png";
import NoOneMournsTheWicked from "../../../img/NoOneMournsTheWicked.png";
import WontHeDoIt from "../../../img/wontHeDoIt.png";
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
              src={WontHeDoIt}
              alt="WontHeDoIt"
            />
            <Carousel.Caption>
              <h3>Won't He Do It</h3>
              <p>2023</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/2neNj1lj4R6QgEyqwIrXLc">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="albumCover"
              src={GreetingEarthlings}
              alt="GreetingEarthlings"
            />
            <Carousel.Caption>
              <h3>Greeting Earthlings</h3>
              <p>2022</p>
              <Button variant="outline-light" className="linkButton" href="https://soundcloud.com/josh-calhoun-596103696/sets/conway-the-machine-greetings">Listen</Button>{" "}
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
              <Button variant="outline-light" className="linkButton" href="https://whoisconwaythemachine.myshopify.com/collections/frontpage/products/reject-2-digital-album">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="albumCover" src={BlakkTape} alt="Blakk Tape"/>
            <Carousel.Caption>
              <h3>Blakk Tape</h3>
              <p>2018</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/0bwlrhBRjtqdy4eTlfg2UD" >Listen</Button>{" "}
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
              <p>2016</p>
              <Button variant="outline-light" className="linkButton" href="https://whoisconwaythemachine.myshopify.com/collections/frontpage/products/dont-get-scared-now-digital-album">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="albumCover" src={EIF} alt="EIF" />

            <Carousel.Caption>
              <h3>Everybody is F.O.O.D</h3>
              <p>2018</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/7q1a8vHksyqqt1c7Qub440">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="albumCover" src={GOAT} alt="GOAT" />
            <Carousel.Caption>
              <h3>G.O.A.T</h3>
              <p>2017</p>
              <Button variant="outline-light" className="linkButton" href="https://whoisconwaythemachine.myshopify.com/collections/frontpage/products/g-o-a-t-digital-album">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="albumCover" src={IfItBleeds} alt="IfItBleeds" />
            <Carousel.Caption>
              <h3>If It Bleeds It Can Be Killed</h3>
              <p>2021</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/75qYZFfUhFSQSH2aOWM68s">Listen</Button>{" "}
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
              <p>2019</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/1IDrmwLTsfrjU7MWd6FVD5">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="albumCover" src={MoreSteroids} alt="MoreSteroids" />
            <Carousel.Caption>
              <h3>More Steroids</h3>
              <p>2017</p>
              <Button variant="outline-light" className="linkButton" href="https://whoisconwaythemachine.myshopify.com/collections/frontpage/products/more-steroids-digital-album">Listen</Button>{" "}
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
              <p>2017</p>
              <Button variant="outline-light" className="linkButton" href="https://whoisconwaythemachine.myshopify.com/collections/frontpage/products/reject-on-steroids-digital-album">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="albumCover" src={EIF2} alt="EIF2" />
            <Carousel.Caption>
              <h3>E.I.F 2</h3>
              <p>2018</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/7wJp0AouFaSYzxlnt3phLv">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="albumCover" src={FAKTAG} alt="FAKTAG" />
            <Carousel.Caption>
              <h3>From A King To A GOD </h3>
              <p>2020</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/6DGCEJKSnaK626YgoElkjk">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="albumCover"
              src={GodDontMakeMistakes}
              alt="GodDontMakeMistakes"
            />
            <Carousel.Caption>
              <h3>God Don't Make Mistakes</h3>
              <p>2022</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/4w1BBgCcUVv54r3zJenKpG">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="albumCover" src={LaMaquina} alt="La Maquina" />
            <Carousel.Caption>
              <h3>La Maquina</h3>
              <p>2021</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/35C2QYq4OgkEXETksStyzz">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="albumCover" src={LULU} alt="LULU" />
            <Carousel.Caption>
              <h3>LULU</h3>
              <p>2020</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/4cj3HwgA7wk89PJW8sMpDZ">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="albumCover"
              src={NoOneMournsTheWicked}
              alt="NoOneMournsTheWicked"
            />
            <Carousel.Caption>
              <h3>No One Mourns Mourns the Wicked</h3>
              <p>2020</p>
              <Button variant="outline-light" className="linkButton" href="https://open.spotify.com/album/6YyfyEVykypmkhHFO5Yy86">Listen</Button>{" "}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default albums;
