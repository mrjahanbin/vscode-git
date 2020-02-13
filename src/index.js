import React from "react";
import ReactDOM from "react-dom";

let formatName = user => {
  return `${user.firstname} ${user.lastname}`;
};
let user = {
  firstname: "Jana",
  lastname: "Jahanbin"
};

let element = <h1>Hello , {formatName(user)}</h1>;

ReactDOM.render(element, document.getElementById("root"));
