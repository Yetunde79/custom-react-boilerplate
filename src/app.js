import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";

class App extends Component {
  render() {
    var app = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of a computer",
      options: ["One", "Two"]
    };
    return (
      <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle ? app.subtitle : null}</p>
        <p>{app.options.length > 0 ? "Here are the options" : "No options"}</p>
        {app.options.map(option => (
          <ul>
            <li>{option}</li>
          </ul>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
