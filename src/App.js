import { React, Component } from "react";
import "./App.css";
import Users from "./Users";
import data from "./Users";

function App () {
  
    return (
      <div className="App">
        <header className="App-header">Welcome to the Verisis System</header>
        <Users />
        <p>{JSON.stringify(data, null, 4)}</p>
      </div>
    );
  }
export default App;
