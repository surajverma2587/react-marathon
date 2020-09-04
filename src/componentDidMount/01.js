import React, { Component } from "react";

class ComponentDidMount1 extends Component {
  constructor(props) {
    super(props);

    console.log("constructor executed");

    this.state = {
      message: "---",
    };
  }

  componentDidMount() {
    console.log("componentDidMount() executed");
    this.setState({ message: "Hello" });
  }

  render() {
    console.log("render() executed");

    return (
      <div className="container w-25">
        <h3 className="text-white">Message: {this.state.message}</h3>
      </div>
    );
  }
}

export default ComponentDidMount1;
