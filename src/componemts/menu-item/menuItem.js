import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.styles.scss";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

// by using withRouter we get access to 3 props history, lcation, match passed by Route Component anywhere with the Parent component

export default withRouter(MenuItem);
