/** @format */

import React from "react";
import "./Resolutions.css";
import Opener from "../../../Opener/Opener";
function Resolutions() {
  return (
    <div className="Resolutions">
      <Opener />
      <h1 className="title">My Resolutions</h1>
      <div className="thoughts">
        <ul>
          <li>Write 20k lines of code</li>
          <li>GET A JOB</li>
          <li>wake up by 7:30 am regularly</li>
          <li>go to sleep by 1am regularly</li>
          <li>not get tempted by cookies and cake in dining hall</li>
          <li>weigh 175lb by EoY</li>
          <li>learn and get good at poker</li>
          <li>read physical books?</li>
        </ul>
      </div>
    </div>
  );
}

export default Resolutions;
