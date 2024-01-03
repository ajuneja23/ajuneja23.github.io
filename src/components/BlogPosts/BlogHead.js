/** @format */
import React from "react";
import "./BlogHead.css";
import BlogSnippet from "./BlogSnippet";
import Opener from "../Opener/Opener";
function BlogHead() {
  return (
    <div className="BlogHead">
      <Opener />
      <hr className="separator"></hr>
      <div className="blogposts">
        <BlogSnippet
          title="thinking about kl divergence"
          date="December 30, 2023"
          description="an interesting way to compare probability distributions"
        />
        <BlogSnippet
          title="resolutions for 2024"
          date="December 30, 2023"
          description="wahoo"
        />
      </div>
    </div>
  );
}

export default BlogHead;
