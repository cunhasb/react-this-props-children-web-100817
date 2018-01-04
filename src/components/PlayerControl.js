import React, { Component } from "react";
import { PrismCode } from "react-prism";
import { Player, ControlBar } from "video-react";
import { Button, Form, FormGroup, Label, Input, Col } from "semantic-ui-react";

const sources = {
  sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm"
};

export default class PlayerControl extends Component {
  render() {
    return (
      <Player autoPlay src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
        <ControlBar autoHide={false} />
      </Player>
    );
  }
}
