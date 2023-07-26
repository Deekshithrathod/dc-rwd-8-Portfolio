import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import BlogCard from "../components/BlogCard/BlogCard";
import ExperiencesCard from "../components/ExperiencesCard/ExperiencesCard";
import HobbiesCard from "../components/HobbiesCard/HobbiesCard";

const AllComponents = () => {
  return (
    <div>
      {/* <h1>All Components</h1> */}
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
