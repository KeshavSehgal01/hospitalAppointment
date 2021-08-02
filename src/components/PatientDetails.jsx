import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PatientDetails.css";
class PatientDetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <form>
          <div className="form-floating mb-3 container col-3">
            <input
              type="e-mail"
              className="form-control loginForm"
              id="email"
              placeholder="E-mail"
              onChange={(event) => this.setState({ Email: event.target.value })}
              required
            />
            <label>E-mail</label>
          </div>
          <div className="form-floating mb-3 container col-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Password"
              onChange={(event) =>
                this.setState({ Password: event.target.value })
              }
              required
            />
            <label>Full Name</label>
          </div>
          <div className="form-floating mb-3 container col-3">
            <input
              type="number"
              className="form-control loginForm"
              id="phone"
              placeholder="Phone Number"
              onChange={(event) => this.setState({ Email: event.target.value })}
              required
            />
            <label>Phone Number</label>
          </div>
          <div className="form-floating add">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            ></textarea>
            <label for="floatingTextarea2">Address</label>
          </div>
        </form>
      </div>
    );
  }
}

export default PatientDetails;
