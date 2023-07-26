import ProfileCard from "../../components/ProfileCard/ProfileCard";
import HobbiesCard from "../../components/HobbiesCard/HobbiesCard";
import ExperiencesCard from "../../components/ExperiencesCard/ExperiencesCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Layoutv1.css";

const Layoutv1 = () => {
  return (
    <div className="v1">
      <ProfileCard orientation="horizontal" />
      <div className="middle">
        <div className="left-col">
          <HobbiesCard orientation="vertical" />
        </div>
        <div className="right-col">
          <BlogCard orientation="horizontal" />
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
