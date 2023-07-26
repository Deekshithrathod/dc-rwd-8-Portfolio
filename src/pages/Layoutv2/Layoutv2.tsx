import React from "react";
import "./Layoutv2.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ExperiencesCard from "../../components/ExperiencesCard/ExperiencesCard";
import HobbiesCard from "../../components/HobbiesCard/HobbiesCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import BlogCard from "../../components/BlogCard/BlogCard";

const Layoutv2 = () => {
  return (
    <div className="v2">
      <div className="left-col-v2">
        <ProfileCard orientation="vertical" />
        <ExperiencesCard orientation="vertical" />
        <HobbiesCard orientation="vertical" />
      </div>
      <div className="right-col-v2">
        <div className="projects-panel">
          <h1>Projects</h1>
          <div className="buttons-group">
            <button>React</button>
            <button>Vue</button>
            <button>Responsive</button>
          </div>
        </div>
        <ProjectCard orientation="horizontal" />
        <ProjectCard orientation="horizontal" />
        <ProjectCard orientation="horizontal" />
        <div className="projects-panel blogs-panel">
          <h1>Blogs</h1>
        </div>
        <BlogCard orientation="horizontal" />
      </div>
    </div>
  );
};

export default Layoutv2;
