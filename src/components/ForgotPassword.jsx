import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class ForgotPassword extends Component {
  state = {
    Email: "",
    submit: false,
  };
  forgotPassword(e) {
    e.preventDefault();
    const { Email } = this.state;
    if (Email) {
      const url = "http://hospitalappointment/ForgotPassword.php";
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
          } else if (result.data === false) {
            this.setState({ userIncorrect: true });
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }
  render() {
    return (
      <div>
        <form>
          <h4>Enter your registered email </h4>
          <div className="form-floating mb-3 container col-3 inputBox">
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
          <button onClick={(e) => this.forgotPassword(e)}>Submit</button>
        </form>
        <h6>
          <Link onClick={() => this.props.history.push("/")}>
            Back to home page
          </Link>
        </h6>
      </div>
    );
  }
}

export default ForgotPassword;
