import "./ProjectCard.css";
import { orientationProp } from "../../common/commonType";

export interface Project {
  title: string;
  desc: string;
  techStack: string;
  image: string;
  demoLink: string;
  codeLink: string;
}
type ProjectProps = orientationProp & Project;

const ProjectCard = ({
  orientation,
  title,
  desc,
  image,
  techStack,
  demoLink,
  codeLink,
}: ProjectProps) => {
  return (
    <div className={`project-card-${orientation}`}>
      <div className="project-image">
        <img src={image} />
      </div>
      <div className="project-details">
        <div className="tech-stack">{techStack}</div>
        <div className="project-title">{title}</div>
        <div className="project-desc">
          {orientation === "vertical" ? desc.slice(0, 108) : desc}
        </div>
        <div className="project-buttons">
          <a href={demoLink} target="_blank">
            <button>Demo</button>
          </a>
          <a href={codeLink} target="_blank">
            <button>Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
