import "./Layoutv2.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ExperiencesCard from "../../components/ExperiencesCard/ExperiencesCard";
import HobbiesCard from "../../components/HobbiesCard/HobbiesCard";
import ProjectCard, { Project } from "../../components/ProjectCard/ProjectCard";
import BlogCard, { Blog } from "../../components/BlogCard/BlogCard";
import Blogs from "../../common/Blogs.json";
import Projects from "../../common/Projects.json";

const BlogsList: Blog[] = Blogs.blogs;
const ProjectsList: Project[] = Projects.projects;

const Layoutv2 = () => {
  return (
    <>
      <div className="v2">
        <div className="left-col-v2">
          <ProfileCard orientation="vertical" />
          <ExperiencesCard orientation="vertical" />
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
          {ProjectsList.map((project) => {
            return <ProjectCard orientation="horizontal" {...project} />;
          })}
          <div className="projects-panel blogs-panel">
            <h1>Blogs</h1>
          </div>
          {BlogsList.slice(0, 1).map((blog) => {
            return <BlogCard orientation="horizontal" {...blog} />;
          })}

          {/* <BlogCard orientation="horizontal" /> */}
        </div>
      </div>
      <div className="hobbies-container">
        <HobbiesCard orientation="horizontal" />
      </div>
    </>
  );
};

export default Layoutv2;
