import React, { Component } from "react";
import {hot} from "react-hot-loader";
//import ReactDOM from "react-dom";
//import App from "./App.js";
import "./App.css";
//ReactDOM.render(<App />, document.getElementById("root"));
//
class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
