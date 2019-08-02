import React, { Component } from "react";
import "../../styles/card.css";
import "../../styles/postHeader.css";

export default class postHeader extends Component {
  render() {
    console.log(this.props.post) 
    const {name, avatar, time} = this.props.post;

    return (
      <header className="card-header">
        <div className="container-img">
          <img src={avatar} alt="" className="post-photo" />
        </div>

        <div className="container-info">
          <h1 className="name">{name}</h1>
          <div className="info">{time}</div>
        </div>
      </header>
    );
  }
}
