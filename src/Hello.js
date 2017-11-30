import React from "react";
import UserInput from "./UserInput.js"

class Hello extends React.Component {
  render() {
    return (
      <div>

        <UserInput />

      </div>
    );
  }
}

export default Hello;
//export default ({ name }) => <h1>Hello {name}!</h1>;


