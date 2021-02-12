import { React, Component } from "react";
import "./App.css";
import Users from "./Users";
import data from "./Users";

class App extends Component {
  state = {
    users: {},
  };

  onChange = (updatedValue) => {
    this.setState({
      users: {
        ...this.state.users,
        ...updatedValue,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to the Verisis System</header>
        <Users />
        <p>{JSON.stringify(data, null, 4)}</p>
      </div>
    );
  }
}
export default App;
