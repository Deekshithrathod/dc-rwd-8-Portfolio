import React from "react";
import { ProfileCardProps } from "../ProfileCard/ProfileCard";
import "./ProjectCard.css";

const ProjectCard = (props: ProfileCardProps) => {
  return (
    <div className={`project-card-${props.orientation}`}>
      <div className="project-image">
        <img src="project.png" />
      </div>
      <div className="project-details">
        <div className="tech-stack">#HTML #CSS #responsive</div>
        <div className="project-title">Recipe Blog</div>
        <div className="project-desc">
          In this project, I work with HTML and CSS to create a responsive page
          . The design is from devchallenge.io. Donec aliquam est dui, vel
          vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.{" "}
        </div>
        <div className="project-buttons">
          {/* <a href="#"> */}
          <button>Demo</button>
          {/* </a>
          <a href="#"> */}
          <button>Code</button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
