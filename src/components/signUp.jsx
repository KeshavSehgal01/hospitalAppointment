import React, { Component } from "react";
import "./Signup.css";
import axios from "axios";
import { Link } from "react-router-dom";
class signUp extends Component {
  state = {
    Email: "",
    Password: "",
    type: "",
    fullName: "",
    AccountCreated: true,
  };

  signUp(e) {
    e.preventDefault();
    const { Email, Password, type } = this.state;
    if (Email && Password && type) {
      const url = "http://hospitalappointment/signUp.php";
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          if (result) {
            this.setState({
              getFullName: result.data.First,
              AccountCreated: true,
            });
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }
  render() {
    const { AccountCreated } = this.state;
    return (
      //
      <div className="main">
        {AccountCreated ? (
          <div class="alert alert-success" role="alert">
            <strong>Account Created Successfully!!</strong>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={(e) => {
                this.setState({ AccountCreated: false });
              }}
            ></button>
          </div>
        ) : (
          ""
        )}
        <div className="box">
          <h5>Sign Up</h5>
          <form>
            <div className="form-floating mb-3 inputBox">
              <input
                type="text"
                className="form-control"
                id="fname"
                placeholder="Full Name"
                required
                onChange={(event) =>
                  this.setState({ fullName: event.target.value })
                }
              />
              <label>Full Name</label>
            </div>
            <div className="form-floating mb-3 inputBox">
              <input
                type="e-mail"
                className="form-control"
                id="email"
                placeholder="E-mail"
                onChange={(event) =>
                  this.setState({ Email: event.target.value })
                }
                required
              />
              <label>E-mail</label>
            </div>
            <div className="form-floating inputBox">
              <input
                type="password"
                className="form-control"
                id="pass"
                placeholder="Password"
                onChange={(event) =>
                  this.setState({ Password: event.target.value })
                }
                required
              />
              <label>Password</label>
            </div>
            <h4>User Type</h4>
            <div className="form-check form-check-inline container col-4 radio">
              <label className="txtColor">Doctor</label>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="1"
                onChange={(event) =>
                  this.setState({ type: parseInt(event.target.value) })
                }
              />
            </div>
            <div className="form-check form-check-inline container col-4 radio">
              <label className="txtColor">Patient</label>
              <input
                className="form-check-input "
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="2"
                onChange={(event) =>
                  this.setState({ type: parseInt(event.target.value) })
                }
              />
            </div>
            <button
              type="submit"
              //id="submitForm"
              name="submit"
              className="btn btn-secondary"
              onClick={(e) => this.signUp(e)}
            >
              Sign Up
            </button>
          </form>
          <br />
          <h6 className="txtColor">
            Already have an account?
            <Link onClick={() => this.props.history.push("/login")}>
              Sign In
            </Link>{" "}
          </h6>
        </div>
      </div>
    );
  }
}

export default signUp;
