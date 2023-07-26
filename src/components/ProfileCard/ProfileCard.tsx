import "./ProfileCard.css";

export type ProfileCardProps = {
  orientation: "vertical" | "horizontal";
};

const profileDetails = {
  summary: `Self-motivated developer, who is willing to learn and create
  outstanding UI applications.
  
  
  Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
  feugiat malesuada molestie.`,
};

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className={`profile-card-${props.orientation}`}>
      <div className="profile-image">
        <img src="profile.jpg" alt="profile photo" />
      </div>
      <div className="info-container">
        <div className="details">
          <div className="person-details">
            <div className="name">Deekshith Rathod</div>
            <div className="occupation">Full-Stack Developer (MERN)</div>
          </div>
          <div className="contact-details">
            <span className="material-symbols-outlined">mail</span>
            <div>deekshithrathod@gmail.com</div>
            <span className="material-symbols-outlined">call</span>
            <div>+91 837-302-8111</div>
          </div>
        </div>
        <div className="summary">
          {props.orientation !== "vertical"
            ? profileDetails.summary
            : profileDetails.summary.slice(0, 91)}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
