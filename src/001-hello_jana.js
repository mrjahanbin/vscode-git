import React from "react";
import ReactDOM from "react-dom";

// let formatName = user => {
//   return `${user.firstname} ${user.lastname}`;
// };

let greeting = (user)=>{
  if (user) {
  return <h1>Hello, {user.firstname}</h1>
  } else {
    return <h1>Hello, Jiji</h1>
  }
}

let user = {
  firstname: "Jana",
  lastname: "Jahanbin"
};

let element = <h1>{greeting(user)}</h1>;

ReactDOM.render(element, document.getElementById("root"));
