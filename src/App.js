import React, { Component } from "react";
import PlayerControl from "./components/PlayerControl";
import { Player, ControlBar } from "video-react";
import Panel from "./components/Panel";
import MovieBrowser from "./components/MovieBrowser";
import Somecomponent from "./components/Somecomponent";
import "./App.css";

class App extends Component {
  state = {
    user: {
      id: "1",
      name: "Fabiano",
      email: "cunhasb@aol.com",
      password: "123"
    }
  };
  render() {
    return (
      <div>
        {
          //<PlayerControl />
        }
        <div>
          Starts Here
          <div>
            <Panel
              title="Browse for movies"
              handleClick={name => console.log(name)}
            >
              <div>Movie stuff 1...</div>
              <div>Movie stuff 2...</div>
              <div>Movie stuff 3...</div>
              <div>Movie stuff 4...</div>
            </Panel>
          </div>
          <br />
          MovieBrowser
          <br />
          <br />
          <div>
            <MovieBrowser>
              <div title="Mad Max: Fury Road">Mad Max: Fury Road</div>
              <div title="Harry Potter & The Goblet Of Fire">
                Harry Potter & The Goblet Of Fire
              </div>
            </MovieBrowser>
          </div>
        </div>
        <Somecomponent>
          <ul>
            <Somecomponent>
              <li>first....</li>
              <li>second...</li>
              <li>third...</li>
              <li>fourth...</li>
            </Somecomponent>
          </ul>
        </Somecomponent>
      </div>
    );
  }
}

export default App;
