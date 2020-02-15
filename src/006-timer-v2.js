import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

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
