import ProfileCard from "../../components/ProfileCard/ProfileCard";
import HobbiesCard from "../../components/HobbiesCard/HobbiesCard";
import ExperiencesCard from "../../components/ExperiencesCard/ExperiencesCard";
import ProjectCard, { Project } from "../../components/ProjectCard/ProjectCard";
import "./Layoutv1.css";
import BlogCard, { Blog } from "../../components/BlogCard/BlogCard";
import Blogs from "../../common/Blogs.json";
import Projects from "../../common/Projects.json";

const BlogsList: Blog[] = Blogs.blogs;
const ProjectsList: Project[] = Projects.projects;

const Layoutv1 = () => {
  return (
    <div className="v1">
      <ProfileCard orientation="horizontal" />
      <div className="middle">
        <div className="left-col">
          <HobbiesCard orientation="vertical" />
        </div>
        <div className="right-col">
          {BlogsList.map((blog) => {
            return <BlogCard orientation="horizontal" {...blog} />;
          })}
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
        {ProjectsList.map((project) => {
          return <ProjectCard orientation="vertical" {...project} />;
        })}
      </div>
    </div>
  );
};

export default Layoutv1;
