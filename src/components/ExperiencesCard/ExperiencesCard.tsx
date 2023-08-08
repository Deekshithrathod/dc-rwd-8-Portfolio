import "./ExperiencesCard.css";
import { orientationProp } from "../../common/commonType";

type experience = { time: string; role: string; desc: string; logo: string };

const experiencesList: experience[] = [
  {
    time: "Jan 2022 - Oct 2022",
    role: "Member of Technical Staff",
    desc: "Created a streamlined license management RESTful API with OpenAPI, OpenAPI-maven-plugin, and Swagger, optimizing efficiency and reliability while developing a performance-enhanced stress testing tool using Java, Spring Boot, and Kotlin with multi-threading.",
    logo: "comp-2.png",
  },
  {
    time: "Sept 2021 - Jan 2022",
    role: "Member of Technical Staff (Intern)",
    desc: "Streamlined employee access to company resources by implementing OAuth2.0 and Passport.js for a seamless single sign-on solution, removing the requirement for separate login credentials.",
    logo: "comp-2.png",
  },
  {
    time: "Feb 2020 - Feb 2021",
    role: "Marketing Automation Engineer",
    desc: `Contributed to multi-channel digital marketing campaigns, employing Beautiful Soup for web data collection, competitor analysis, and growth insights, while utilizing Google dashboards to track and analyze campaign performance through data from Google Analytics.`,
    logo: "comp-1.png",
  },
];

const ExperiencesCard = (props: orientationProp) => {
  return (
    <div className={`exp-card-${props.orientation}`}>
      <h1>Experiences</h1>
      <div className="exp-cards">
        {experiencesList.map((exp) => {
          return <ExperienceCard {...exp} />;
        })}
      </div>
    </div>
  );
};

const ExperienceCard = (props: experience) => {
  return (
    <div className="exp-card">
      <div className="company-logo">
        <img src={`${props.logo}`} alt="" />
      </div>
      <div className="exp-details">
        <div className="time-spent">{props.time}</div>
        <div className="role">{props.role}</div>
        <div className="work-desc">{props.desc}</div>
      </div>
    </div>
  );
};

export default ExperiencesCard;
