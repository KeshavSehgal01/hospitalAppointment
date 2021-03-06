import React, { Component } from "react";
import axios from "axios";
import Doctor from "./Doctor Demo";
import signUp from "./signUp";
import "./login.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import Recaptcha from "./Recaptcha";
class Login extends Component {
  state = {
    Email: "",
    Password: "",
    loggedIn: false,
    userIncorrect: false,
    isVerified: false,
  };

  // componentDidMount() {
  //   console.log(new Date().getTime());
  //   setInterval(() => {
  //     const expiresAt = JSON.parse(localStorage.getItem("ExpiresAt"));
  //     if (expiresAt !== null) {
  //       const expired =
  //         new Date().getTime() >= parseInt(expiresAt) ? false : true;
  //       if (expired) {
  //         this.props.history.push("/");
  //         localStorage.setItem("ExpiresAt", null);
  //       }
  //     }
  //   }, 4000);
  // }

  login(e) {
    e.preventDefault();
    const { Email, Password } = this.state;
    if (Email && Password) {
      const url = "http://hospitalappointment/auth.php";
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
          if (result.data) {
            this.setState({ loggedIn: true });
            localStorage.setItem("ExpiresAt", result.data[0].ExpiresAt);
          } else if (result.data === false) {
            this.setState({ userIncorrect: true });
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }
  render() {
    const { loggedIn, userIncorrect, isVerified } = this.state;
    console.log(this.props);
    return (
      <div style={{ height: "inherit" }}>
        {" "}
        {loggedIn ? (
          <Doctor />
        ) : (
          <div className="main">
            {userIncorrect ? (
              <div class="alert alert-danger" role="alert">
                Wrong Email or Password
              </div>
            ) : (
              ""
            )}

            <div className="box">
              <button onClick={() => this.props.history.push("/")}>
                Home Page
              </button>
              <h4>Login</h4>
              <form>
                {/* <div className="form-floating mb-3 container col-4 inputBox"> */}
                <div className="form-floating mb-3 inputBox">
                  <input
                    type="e-mail"
                    className="form-control loginForm"
                    id="email"
                    placeholder="E-mail"
                    onChange={(event) =>
                      this.setState({ Email: event.target.value })
                    }
                    required
                  />
                  <label>E-mail</label>
                </div>
                {/* <div className="form-floating container col-4 inputBox"> */}
                <div className="form-floating mb-3 inputBox">
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
                </div>{" "}
                <Recaptcha
                  isVerified={(e) =>
                    this.setState({ isVerified: e.data.success })
                  }
                />
                <button
                  type="submit"
                  id="submitForm"
                  disabled={!isVerified}
                  name="submit"
                  className="btn btn-primary"
                  onClick={(e) => this.login(e)}
                >
                  Sign In
                </button>
              </form>
              <h6>
                Don't have an account?{" "}
                <Link onClick={() => this.props.history.push("/signUp")}>
                  Sign Up
                </Link>
              </h6>
              <h6>
                <Link
                  onClick={() => this.props.history.push("/ForgotPassword")}
                >
                  Forgot Password?
                </Link>
              </h6>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
