import React from "react";
import "./ProfileCard.css";

export type ProfileCardProps = {
  orientation: "vertical" | "horizontal";
};

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className={`profile-card-${props.orientation}`}>
      <div className="profile-image">
        {/* <img src="Profile.jpg" alt="profile photo" /> */}
        <img src="Profile-1.JPG" alt="profile photo" />
      </div>
      <div className="info-container">
        <div className="details">
          <div>
            <div className="name">Deekshith Rathod</div>
            <div className="occupation">Full-Stack Developer (MERN)</div>
          </div>
          <div className="contact-details">
            <div className="email">
              <span className="material-symbols-outlined">mail</span>
              <div>deekshithrathod@gmail.com</div>
            </div>
            <div className="phone-number">
              <span className="material-symbols-outlined">call</span>
              <div>+91 837 302 8111</div>
            </div>
          </div>
        </div>
        <div className="summary">
          Self-motivated developer, who is willing to learn and create
          outstanding UI applications.
          <br />
          <br />
          Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
          feugiat malesuada molestie.{" "}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
