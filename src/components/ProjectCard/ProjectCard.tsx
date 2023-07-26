import React from "react";
import { ProfileCardProps } from "../ProfileCard/ProfileCard";
import "./ProjectCard.css";

const projectDetails = {
  image: `project.png`,
  techStack: `#HTML #CSS #responsive`,
  title: `Landing Page`,
  desc: `In this project, I work with HTML and CSS to create a responsive page
  . The design is from devchallenge.io. Donec aliquam est dui, vel
  vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.`,
  demoLink: `https://devchallenges-rwd-7.onrender.com`,
  codeLink: `https://github.com/Deekshithrathod/dc-rwd-7-landing-page`,
};

const ProjectCard = (props: ProfileCardProps) => {
  return (
    <div className={`project-card-${props.orientation}`}>
      <div className="project-image">
        <img src={projectDetails.image} />
      </div>
      <div className="project-details">
        <div className="tech-stack">{projectDetails.techStack}</div>
        <div className="project-title">{projectDetails.title}</div>
        <div className="project-desc">
          {props.orientation === "vertical"
            ? projectDetails.desc.slice(0, 108)
            : projectDetails.desc}
        </div>
        <div className="project-buttons">
          <a href={projectDetails.demoLink} target="_blank">
            <button>Demo</button>
          </a>
          <a href={projectDetails.codeLink} target="_blank">
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
