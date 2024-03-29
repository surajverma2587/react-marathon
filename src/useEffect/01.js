import React, { Component } from "react";

class UseEffect1 extends Component {
  constructor(props) {
    super(props);

    console.log("constructor executed");

    this.state = {
      message: "---",
    };
  }

  shouldComponentUpdate;

  componentDidMount() {
    console.log("componentDidMount() executed");
    this.setState({ message: "Hello" });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() executed");
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

export default UseEffect1;
