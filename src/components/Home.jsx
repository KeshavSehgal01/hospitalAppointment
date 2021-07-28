import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/login")}>
          Sign In/Sign Up
        </button>
      </div>
    );
  }
}

export default Home;
