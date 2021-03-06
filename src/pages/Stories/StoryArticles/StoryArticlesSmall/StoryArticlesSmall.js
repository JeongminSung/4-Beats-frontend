import React, { Component } from "react";
import "./StoryArticlesSmall.scss";
export default class StoryArticlesSmall extends Component {
  constructor() {
    super();
    this.state = {
      color: "#949494",
    };
  }

  mouseEnterHandler = () => {
    this.setState({ color: "#e01e3c" });
  };

  mouseLeaveHandler = () => {
    this.setState({ color: "#949494" });
  };

  render() {
    return (
      <a
        href="https://www.beatsbydre.com/stories/2020/05/quarantined-a-world-without-sports"
        className="StoryArticlesSmall"
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        <img className="Largeimage" src={this.props.src} alt="" />
        <div className="textBox">
          <h2>
            {this.props.text}
            <span style={{ color: this.state.color }}>READ</span>
          </h2>
        </div>
      </a>
    );
  }
}
