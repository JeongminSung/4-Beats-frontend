import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RedBorderButton.scss";

export default class RedBorderButton extends Component {
  render() {
    return (
      <Link to={this.props.link} className="RedBorderButton">
        {this.props.text}
      </Link>
    );
  }
}
