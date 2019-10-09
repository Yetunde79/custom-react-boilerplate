import React, { Component } from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/style.scss";

class App extends Component {
  render() {
    return (
      <div>
        <p>This is a boilerplate</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
