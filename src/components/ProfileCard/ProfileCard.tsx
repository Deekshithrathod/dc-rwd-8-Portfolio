import { orientationProp } from "../../common/commonType";
import "./ProfileCard.css";

type ProfileCardProps = orientationProp;

const profileSummary = {
  summary: [
    `I'm a skilled MERN stack developer adept at integrating MongoDB, Express.js, React, and Node.js to create dynamic web applications. `,
    `Proficient in RESTful API development with Express, I ensure efficient server-side operation`,
    `My expertise extends to MongoDB for seamless data management. I excel in crafting responsive user interfaces with React, prioritizing user experience.`,
  ],
};
const ProfileImage = ({ path }: { path: string }) => {
  return (
    <div className="profile-image">
      <img src={path} alt="profile photo" />
    </div>
  );
};
const ProfileSummary = ({ orientation }: orientationProp) => {
  const outputHorizontal = (
    <>
      {profileSummary.summary[0]}
      <br />
      <br />
      {profileSummary.summary[1]}
    </>
  );
  const outputVertical = <>{profileSummary.summary[0]}</>;
  return (
    <div className="summary">
      {orientation === "horizontal" ? outputHorizontal : outputVertical}
    </div>
  );
};
const Details = () => {
  return (
    <div className="person-details">
      <div className="name">Deekshith Rathod</div>
      <div className="occupation">Full-Stack Developer (MERN)</div>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <div className="contact-row">
        <span className="material-symbols-outlined">mail</span>
        <div>deekshithrathod@gmail.com</div>
      </div>
      <div className="contact-row">
        <span className="material-symbols-outlined">call</span>
        <div>+91 837-302-8111</div>
      </div>
    </div>
  );
};

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className={`profile-card-${props.orientation}`}>
      <ProfileImage path="profile.png" />
      <div className="info-container">
        <div className="details">
          <Details />
          <ContactDetails />
        </div>
        <ProfileSummary orientation={props.orientation} />
      </div>
    </div>
  );
};

export default ProfileCard;
