import { React, Component } from "react";
import "./App.css";
import Data from "./components/Data";
import Form from "./Form";

class App extends Component {
  state = {
    fields: {},
  };

  onChange = (updatedValue) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to the Verisis System
          <Form onChange={(fields) => this.onChange(fields)} />
        </header>
      </div>
    );
  }
}
export default App;
