import React from "react";
import ProfileCard from "./ProfileCard";
import ProjectCard from "./ProjectCard";
import BlogCard from "./BlogCard";
import ExperiencesCard from "./ExperiencesCard";
import HobbiesCard from "./HobbiesCard";

const AllComponents = () => {
  return (
    <div>
      <h1>All Components</h1>
      <ProfileCard orientation="horizontal" />
      <ProjectCard orientation="horizontal" />
      <BlogCard orientation="horizontal" />
      <ProfileCard orientation="vertical" />
      <ProjectCard orientation="vertical" />
      <BlogCard orientation="vertical" />
      <ExperiencesCard orientation="horizontal" />
      <ExperiencesCard orientation="vertical" />
      <HobbiesCard orientation="horizontal" />
      <HobbiesCard orientation="vertical" />
    </div>
  );
};

export default AllComponents;
