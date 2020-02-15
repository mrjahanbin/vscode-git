import React from "react";
import ReactDOM from "react-dom";

// let UserGreeting = props => {
//   return <h1>Welcome Back!</h1>;
// };

// let GuestGreeting = props => {
//   return <h1>Please Login</h1>;
// };
// let Greeting = props => {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   } else {
//     return <GuestGreeting />;
//   }
// };

let LoginButton = props => {
  return <button onClick={props.onClick}>Login</button>;
};
let LogoutButton = props => {
  return <button onClick={props.onClick}>Logout</button>;
};

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handelLoginClick = this.handelLoginClick.bind(this);
    this.handelLogoutClick = this.handelLogoutClick.bind(this);
  }

  handelLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handelLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handelLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handelLoginClick} />;
    }

    return <div> {button} </div>;
  }
}

export default LoginControl;

ReactDOM.render(
  <LoginControl/>,
  document.getElementById("root")
);
