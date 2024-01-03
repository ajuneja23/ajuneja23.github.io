/** @format */

import React, { useEffect } from "react";
import "./Home.css";
import Opener from "../Opener/Opener.js";
import upennlogo from "../../documents/upennlogo.png";
import haylonlogo from "../../documents/haylon_w_trans.png";
import northwestern from "../../documents/northwestern-thumbnail.png";
import github from "../../documents/github-mark.png";
import linkedin from "../../documents/linkedinlogo.jp-removebg-preview.png";
import email from "../../documents/email-removebg-preview.png";
import { Fade } from "react-awesome-reveal";
function Home() {
  function linkOnClick(url) {
    window.open(url);
  }
  return (
    <div className="Home">
      <div className="backelement"></div>
      <Opener />
      <h1 className="named">AADIT JUNEJA</h1>
      <div className="socials">
        <img
          src={github}
          className="linker"
          onClick={() => {
            linkOnClick("https://github.com/ajuneja23");
          }}
        ></img>
        <img
          src={linkedin}
          className="linker"
          onClick={() => {
            linkOnClick("https://www.linkedin.com/in/aadit-juneja/");
          }}
        ></img>
        <img
          src={email}
          onClick={() => {
            linkOnClick("mailto:aaditj@wharton.upenn.edu");
          }}
          className="linker"
        ></img>
      </div>
    </div>
  );
}

export default Home;
