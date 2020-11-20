import React from "react";
import "./Contact.css";

const avatar = "https://randomuser.me/api/portraits/men/94.jpg";
const name = "Wyatt Harris";
const online = true;

let status = null;

const Contact = () => {
  online ? (status = "Online") : (status = "Offline");

  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="profile-pic" />
      <div>
        <h2 className="name">{name}</h2>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <p className="status-text">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
