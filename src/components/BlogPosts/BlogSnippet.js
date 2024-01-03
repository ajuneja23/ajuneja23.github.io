/** @format */

import React from "react";
import "./BlogSnippet.css";
import slugify from "slugify";
function BlogSnippet(props) {
  return (
    <div className="BlogSnippet">
      <div className="blogdata">
        <h3 className="date">{props.date}</h3>
        <div className="postinfo">
          <h3 className="title">
            <a href={"/blog/" + slugify(props.title)}>{props.title}</a>
          </h3>
          <h3 className="description">{props.description}</h3>
        </div>
      </div>
      <hr className="endbar"></hr>
    </div>
  );
}

export default BlogSnippet;
