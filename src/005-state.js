import React from "react";
import ReactDOM from "react-dom";

// let Clock = props => {
//   return (
//     <div>
//       <h1>My Timer</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// };

// let tick = () => {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// };

class Clock extends React.Component {
  state = { date: new Date() };
  render() {
    return (
      <div>
        <h1>My Timer</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;

ReactDOM.render(<Clock />, document.getElementById("root"));

//  setInterval(Clock, 1000);
