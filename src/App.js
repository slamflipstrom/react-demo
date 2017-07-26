import React, { Component } from "react";
import logo from "./gh-icon.png";
import "./App.css";

import ProfileComponent from "./components/profileComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <h2>Github Profile Viewer</h2>
        </div>
        <ProfileComponent />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
