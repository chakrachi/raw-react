import React, { Component } from "react";
import "./App.css";
import FetchPosts from "./components/FetchPosts";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        {<FetchPosts />}
      </div>
    );
  }
}

export default App;