import React from "react";
import "./Contact.css";

const avatar = "https://randomuser.me/api/portraits/men/94.jpg";
const name = "Wyatt Harris";
const online = true;

let status = null;

const Contact = (props) => {
  online ? (status = "Online") : (status = "Offline");

  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <h2 className="name">{props.name}</h2>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
