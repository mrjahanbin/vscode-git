import React from "react";
import ReactDOM from "react-dom";

let Avatar = () => {
  return (
    <img className="Avatar" src={props.user.avatarurl} alt={props.user.name} />
  );
};

let UserInfo = () => {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
};

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{formData(props.date)}</div>
    </div>
  );
}
