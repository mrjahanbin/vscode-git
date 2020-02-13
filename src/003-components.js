import React from "react";
import ReactDOM from "react-dom";

let Welcome = props => {
  return <h1>Hello, {props.name}</h1>;
};

//const element = <Welcome name="jana" />;

let App = () => {
  return (
    <div>
      <Welcome name="Mohammad Javad" />
      <Welcome name="Jana" />
      <Welcome name="j" />
      <Welcome name="jo" />
      <Welcome name="jon" />
      <Welcome name="jona" />
      <Welcome name="jona g" />
      <Welcome name="jona go" />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
