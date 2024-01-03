/** @format */

import React from "react";
import "./Opener.css";
import pdf from "../../documents/resume (5).pdf";
import aadit from "../../documents/aadit - Copy.jpg";
function Opener() {
  function resumeButtonClick() {
    window.open(pdf);
  }
  return (
    <div className="Opener">
      <div className="backelement"></div>
      <div className="upperbar">
        <h3 className="barlink" onClick={resumeButtonClick}>
          Resume
        </h3>
        <h3 className="barlink">
          <a href="/experience">Experience</a>
        </h3>
        <img className="aaditpic" src={aadit}></img>
        <h3 className="barlink">
          <a href="/aboutme">About Me</a>
        </h3>
        <h3 className="barlink">
          <a href="/blog">Blog Posts</a>
        </h3>
      </div>
    </div>
  );
}

export default Opener;
