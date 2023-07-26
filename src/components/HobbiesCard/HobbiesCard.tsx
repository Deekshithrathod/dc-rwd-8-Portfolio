import { ProfileCardProps } from "../ProfileCard/ProfileCard";
import "./HobbiesCard.css";

type Hobby = {
  name: string;
  image: string;
  desc: string;
};

const hobbiesList: Hobby[] = [
  {
    name: "Gaming",
    image: "hob-1.webp",
    desc: "Quisque feugiat malesuada molestie.",
  },
  {
    name: "Critiquing",
    image: "hob-1.webp",
    desc: "Quisque feugiat malesuada molestie.",
  },
  {
    name: "Nexflix",
    image: "hob-3.webp",
    desc: "Quisque feugiat malesuada molestie.",
  },
];

const HobbiesCard = (props: ProfileCardProps) => {
  return (
    <div className={`hobby-card-${props.orientation}`}>
      <h1>Hobbies</h1>
      <div className="hobby-cards">
        {hobbiesList.map((hob) => {
          return <HobbieCard {...hob} />;
        })}
      </div>
    </div>
  );
};

const HobbieCard = (props: Hobby) => {
  return (
    <div className="hobby">
      <div className="hobby-image">
        <img src={`${props.image}`} />
      </div>
      <div className="hobby-title">{props.name}</div>
      <div className="hobby-desc">{props.desc}</div>
    </div>
  );
};

export default HobbiesCard;
