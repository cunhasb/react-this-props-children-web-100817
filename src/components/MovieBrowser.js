import React from "react";
export default class MovieBrowser extends React.Component {
  render() {
    const currentPlayingTitle = "Mad Max: Fury Road";
    const childrenWithExtraProp = React.Children.map(
      this.props.children,
      child => {
        if (child.props.title === currentPlayingTitle) {
          return React.cloneElement(child, {
            className: "playing"
          });
        } else return React.cloneElement(child, { className: "notPlaying" });
      }
    );

    return <div className="movie-browser">{childrenWithExtraProp}</div>;
  }
}
