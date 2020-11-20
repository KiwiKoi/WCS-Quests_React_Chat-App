import React from "react";
import "./Contact.css";

const avatar = "https://randomuser.me/api/portraits/men/94.jpg";
const name = "Wyatt Harris";
const online = true;

const Contact = () => {
  return (
    <div className="contact">
      <img className="contact avatar" src={avatar} alt="profile-pic" />
      <div>
        <h2 className="contact name">{name}</h2>
        <p className="status status-text">{online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
};

export default Contact;
