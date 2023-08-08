import "./HobbiesCard.css";
import { orientationProp } from "../../common/commonType";

type Hobby = {
  name: string;
  image: string;
  desc: string;
};

const hobbiesList: Hobby[] = [
  {
    name: "Journaling",
    image: "hob-1.png",
    desc: "Capturing thoughts, emotions, and experiences on paper to foster self-reflection, creativity, and personal growth.",
  },
  {
    name: "Photography",
    image: "hob-2.png",
    desc: "Freezing moments in time through the lens to tell stories, evoke emotions, and celebrate the beauty of the world.",
  },
  {
    name: "Nexflix",
    image: "hob-3.png",
    desc: "Immersing myself in captivating narratives, diverse worlds, and a spectrum of emotions.",
  },
];

const HobbiesCard = (props: orientationProp) => {
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
