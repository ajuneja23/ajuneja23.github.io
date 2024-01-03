/** @format */

import React from "react";
import "./Experience.css";
import Opener from "../Opener/Opener";
import Single from "./Single";
import grasp from "../../documents/social-share-grasp-removebg-preview.png";
import haylon from "../../documents/pkrnai4q4rldqqiyjr6p-removebg-preview.png";
import northwestern from "../../documents/Northwestern_University_seal.svg-removebg-preview.png";
import portra from "../../documents/1624896912828-removebg-preview.png";
function Experience() {
  return (
    <div className="Experience">
      <Opener />
      <div className="experiences">
        <Single
          name="GRASP Lab"
          dispimg={grasp}
          backColor="black"
          secondColor="white"
          description="I'm a research assistant at the General Robotics, Automation, Sensing and Perception (GRASP) Lab at the University of Pennsylvania. I work under Ankit Prabhu and Penn Engineering Dean Vijay Kumar on the recreation of 3D semantic mappings from LIDAR data. Our stack makes use of various recent papers in 3D deep learning, such as RangeNet++ and PointNet."
        />
        <Single
          name="Haylon Technologies"
          dispimg={haylon}
          backColor="white"
          secondColor="black"
          description="This past summer, I was a software engineering intern at Haylon Technologies, where I was developing machine learning models to predict optimal switching times between types of batteries in hybrid battery packs, particularly in the use case of drones. I also worked closely with AWS tools such as SageMaker, S3, and DynamoDB for our data pipelining."
        />
        <Single
          name="Northwestern University"
          dispimg={northwestern}
          backColor="white"
          secondColor="black"
          description="Previously, I was a research intern at the McCormick School of Engineering at Northwestern University in Evanston, Illinois. At Northwestern, I worked under Professor Wing Kam Liu and researched the optimization of object detection algorithms in the context of self-driving cars. In particular, I analyzed patterns in the average testing time of a Faster R-CNN model."
        />
        <Single
          name="Portra"
          dispimg={portra}
          backColor="black"
          secondColor="white"
          description="I was previously a full-stack developer for Portra, a startup that aimed to forge meaningful bonds by connecting similar people and recommending them local small businesses to visit. During my time at Portra, I worked primarily with tools like React, Redux, SQL, Express to build out various parts of our app. I also got to work deeply with geolocation libraries for our map features, which was fun."
        />
      </div>
    </div>
  );
}

export default Experience;
