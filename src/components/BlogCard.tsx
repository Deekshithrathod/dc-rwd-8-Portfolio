import React from "react";
import { ProfileCardProps } from "./ProfileCard";
import "./BlogCard.css";

const BlogCard = (props: ProfileCardProps) => {
  return (
    <div className={`blog-card-${props.orientation}`}>
      <div className="blog-details">
        <div className="blog-tag">Blog</div>
        <div className="blog-title">How to organize your CSS</div>
        <div className="blog-desc">
          In this article I tell the story about Proin eu justo sit amet lacus
          bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
          <br />
          <br />
          Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
          feugiat malesuada molestie.
        </div>
        <div className="blog-link">
          <a href="#">dev.to</a>
        </div>
      </div>
      <div className="blog-image">
        <img src="blog.png" />
      </div>
    </div>
  );
};

export default BlogCard;
