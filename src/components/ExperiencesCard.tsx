import React from "react";
import { ProfileCardProps } from "./ProfileCard";
import "./ExperienceCard.css";

type experience = { time: string; role: string; desc: string; logo: string };

const experiencesList: experience[] = [
  {
    time: "Feb 2017 - Current",
    role: "Front-end developer",
    desc: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    logo: "comp-2.svg",
  },
  {
    time: "Aug 2016 - Feb 2018",
    role: "Full-stack developer",
    desc: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    logo: "comp-1.webp",
  },
  {
    time: "Jun 2015 - Aug 2016",
    role: "Junior front-end",
    desc: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    logo: "comp-1.webp",
  },
];

const ExperiencesCard = (props: ProfileCardProps) => {
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
