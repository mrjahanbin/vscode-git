import React from "react";
import ReactDOM from "react-dom";

// let App = () => {
//   return (

//       <button onclick="activateLaser()">Activate Laser</button>
//       <button onclick={activateLaser}>Activate Laser</button>

//   );
// };

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>

        <a onClick={this.handleClick} > {this.state.isToggleOn ? "ON" : "OFF"} </a>
      </div>
    );
  }
}

export default Toggle;

ReactDOM.render(<Toggle />, document.getElementById("root"));
