/** @format */

import React from "react";
import "./Cool.css";
function Cool(props) {
  function openLink(url) {
    window.open(url);
  }
  return (
    <div
      className="cool"
      onClick={() => {
        openLink(props.clickurl);
      }}
    >
      <img
        src={props.displayimage}
        className={
          props.twittertoobig
            ? props.shamsspecial
              ? "shamsspecial"
              : "displaytwitter"
            : "dispimg"
        }
      ></img>
      <h6 className={props.centerbetter ? "title centerbetter" : "title"}>
        {props.title}
      </h6>
    </div>
  );
}

export default Cool;
