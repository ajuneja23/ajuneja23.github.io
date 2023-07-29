/** @format */

import React, { useEffect } from "react";
import "./Home.css";
import Opener from "../Opener/Opener";
import upennlogo from "../../documents/upennlogo.png";
import haylonlogo from "../../documents/haylon_w_trans.png";
import northwestern from "../../documents/northwestern-thumbnail.png";
import { Fade } from "react-awesome-reveal";
function Home() {
  return (
    <div className="Home">
      <Opener />
      <h3 className="exptitle">
        <span> My Journey </span>
      </h3>
      <h4 className="shortdescribe">
        I'm a Chicago based innovator interested in{" "}
        <a className="highlight1">how the world works</a> and{" "}
        <a className="highlight2">what we can do</a> as members of society to
        improve it for the better.{" "}
      </h4>
      <div className="experiences">
        <Fade direction="left" duration={2000}>
          <div className="college">
            <img src={upennlogo} alt="Logo" className="pennlogo" />
            <div className="collegetext">
              <h3>
                {" "}
                University of <a className="highlight1">Pennsylvania</a>
              </h3>
              <h5>
                <a className="highlight2">August 2023-May 2027</a>
              </h5>
              <p className="upenntext">
                In the fall, I'll be studying computer science and finance as
                part of the Jerome Fisher Program in Management and Technology
                at the University of Pennsylvania. Though I haven't spent any
                time there yet, I'm excited to learn more about{" "}
                <a className="italic">how</a> to leverage both the technical and
                business realms in order to maximize impact. I've also gotten to
                meet some cool people, and am excited to meet more. Email me at{" "}
                <a className="email" href="mailto:aaditj@wharton.upenn.edu">
                  aaditj@wharton.upenn.edu
                </a>{" "}
                if you want to talk about anything.
              </p>
            </div>
          </div>
        </Fade>
        <Fade direction="right" duration={2000}>
          <div className="experienceHaylon">
            <div className="haylontext">
              <h3>
                <a className="highlight1">Haylon</a> Technologies
              </h3>
              <h5>
                <a className="highlight2">May 2023-Present</a>
              </h5>
              <p className="haylonparagraph">
                Over this summer, I'll be a software engineering intern at{" "}
                <a className="email" href="https://www.haylontech.com/">
                  Haylon Technologies
                </a>
                . Haylon is a{" "}
                <a className="email" href="https://www.techstars.com/">
                  Techstars
                </a>{" "}
                backed startup that aims to create smart battery packs with
                usage-optimizing machine learning algorithms. I get to work with
                some <a className="italic">really</a> smart people as part of my
                job, and I'm learning new things everyday from them. I can't go
                into too much detail, but I'll update this section occasionally
                with what I've been up to, so stay tuned.
              </p>
            </div>
            <img src={haylonlogo} alt="bruh" className="haylonlogo" />
          </div>
        </Fade>
        <Fade direction="left" duration={2000}>
          <div className="experienceNU">
            <img src={northwestern} alt="bruh" className="northwesternlogo" />
            <div className="northwesterntext">
              <h3>
                <a className="highlight1">Northwestern</a> University
              </h3>
              <h5>
                <a className="highlight2">June 2022-August 2022</a>
              </h5>
              <p className="NUparagraph">
                Last summer, I was a research intern at Northwestern
                University's McCormick School of Engineering in Evanston,
                Illinois. I researched the optimization of object detection
                algorithms such as{" "}
                <a className="email" href="https://arxiv.org/abs/1506.01497">
                  Faster R-CNN
                </a>{" "}
                in the context of self-driving cars under Professor Wing Kam Liu
                and some of his PhD students. I gained a lot of insight about
                what's happening at the <a className="italic">forefront</a> of a
                field, rather than things that have been long established.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="footer">
        <div className="socials">
          <h2 href="https://github.com/ajuneja23">
            <a href="https://github.com/ajuneja23" className="social">
              GitHub{" "}
            </a>
          </h2>
          <h2>
            <a className="social" href="https://linkedin.com/in/aadit-juneja">
              LinkedIn
            </a>
          </h2>
          <h2>
            <a href="https://youtube.com/@AaditJuneja" className="social">
              YouTube{" "}
            </a>
          </h2>
        </div>
        <div className="signoff">
          <p>
            Powered by <a className="rotateleft">🍟</a>
            <a className="rotateright">🥞</a>
            <a className="rotateleft">🍿</a>
            <a className="rotateright">🍪</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
