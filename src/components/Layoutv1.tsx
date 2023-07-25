import React from "react";
import ProfileCard from "./ProfileCard";
import HobbiesCard from "./HobbiesCard";
import ExperiencesCard from "./ExperiencesCard";
import BlogCard from "./BlogCard";
import ProjectCard from "./ProjectCard";
import "./Layoutv1.css";

const Layoutv1 = () => {
  return (
    <div>
      <ProfileCard orientation="horizontal" />
      <div className="main">
        <div className="left-col">
          <HobbiesCard orientation="vertical" />
        </div>
        <div className="right-col">
          <BlogCard orientation="vertical" />
          <ExperiencesCard orientation="vertical" />
        </div>
      </div>
      <div className="projects-panel">
        <h1>Projects</h1>
        <div className="buttons-group">
          <button>React</button>
          <button>Vue</button>
          <button>Responsive</button>
        </div>
      </div>
      <div className="v1-projects">
        <ProjectCard orientation="vertical" />
        <ProjectCard orientation="vertical" />
        <ProjectCard orientation="vertical" />
      </div>
    </div>
  );
};

export default Layoutv1;
