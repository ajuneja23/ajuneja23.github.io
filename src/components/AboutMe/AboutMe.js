/** @format */
import React from "react";
import "./AboutMe.css";
import aadit from "../../documents/aadit - Copy.jpg";
import pdf from "../../documents/resume (5).pdf";
import netflix from "../../documents/download-removebg-preview.png";
import spotify from "../../documents/Spotify_App_Logo.svg-removebg-preview.png";
import twitter from "../../documents/images-removebg-preview.png";
import Opener from "../Opener/Opener";
import Cool from "./Cool";
function resumeButtonClick() {
  window.open(pdf);
}
function AboutMe() {
  return (
    <div className="AboutMe">
      <Opener />
      <h1 className="about">About Me</h1>
      <h1 className="name">
        I am a student at the the Jerome Fisher Program in Management and
        Technology at the University of Pennsylvania. I'm currently pursuing a
        degree in finance from the Wharton School and computer science from Penn
        Engineering. I've from the suburbs of Chicago, and have been interested
        in computer science since 9th grade. To be honest, frontend development
        is one of my least favorite parts of software engineering, so I decided
        to keep this website simple😅. Besides the fields I study in school, I'm
        academically interested in mathematics and psychology, and
        non-academically interested in basketball and horror movies. I believe
        that you can understand someone well based on the content that they
        consume, so here's some shows, podcasts, and Twitter(X?) accounts I
        interact with.
      </h1>
      <h1 className="content">Stuff I Think Is Cool</h1>
      <div className="coolthings">
        <Cool
          displayimage={spotify}
          title="Lex Fridman Podcast"
          className="cool"
          shamsspecial={false}
          centerbetter={false}
          twittertoobig={false}
          clickurl="https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL"
        />
        <Cool
          displayimage={netflix}
          title="The Last Dance"
          className="cool"
          shamsspecial={false}
          centerbetter={false}
          twittertoobig={false}
          clickurl="https://www.netflix.com/title/80203144"
        />
        <Cool
          displayimage={twitter}
          title="Shams Charania"
          className="cool"
          shamsspecial={true}
          centerbetter={false}
          twittertoobig={true}
          clickurl="https://twitter.com/ShamsCharania"
        />
        <Cool
          displayimage={twitter}
          title="Jason Wei"
          className="cool"
          shamsspecial={false}
          centerbetter={true}
          twittertoobig={true}
          clickurl="https://twitter.com/_jasonwei"
        />
        <Cool
          displayimage={spotify}
          title="Andrew Huberman Podcast"
          className="cool"
          centerbetter={false}
          shamsspecial={false}
          twittertoobig={false}
          clickurl="https://open.spotify.com/show/79CkJF3UJTHFV8Dse3Oy0P"
        />
        <Cool
          displayimage={twitter}
          title="Joe Gebbia"
          className="cool"
          centerbetter={true}
          shamsspecial={false}
          twittertoobig={true}
          clickurl="https://twitter.com/jgebbia"
        />
      </div>
      {/* lex fridman, The Last Dance, shams charania, jason wei, andrew huberman, Joe Gebbia*/}
    </div>
  );
}

export default AboutMe;
