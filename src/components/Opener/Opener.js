/** @format */

import React from "react";
import "./Opener.css";
import pdf from "../../documents/resume (5).pdf";
function Opener() {
  function resumeButtonClick() {
    window.open(pdf);
  }
  return (
    <div className="Opener">
      <div className="backgroundelement"></div>
      <h2 className="intro">Howdy, I'm </h2>
      <h1 className="name">AADIT JUNEJA</h1>
      <h1 className="resumebutton" onClick={resumeButtonClick}>
        Resume
      </h1>
    </div>
  );
}

export default Opener;
