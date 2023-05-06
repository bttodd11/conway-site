import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./videos.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/0xfxEjOPqHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>,
  <div className="item" data-value="2">
<iframe width="400" height="300" src="https://www.youtube.com/embed/JST6q_ZdjdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>,
  <div className="item" data-value="3">
<iframe width="400" height="300" src="https://www.youtube.com/embed/dHbQUzkhFAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>,
  <div className="item" data-value="4">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/9I7IJtgk2xM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>,
  <div className="item" data-value="5">
    <iframe width="400" height="300" src="https://www.youtube.com/embed/68mxxmYPSfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>,
];




const videos = () => (
  <div id="videoSection">
    <h2 className="videoTitle">Videos</h2>
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  </div>
);

export default videos;
