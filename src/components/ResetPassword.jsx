import React, { Component } from "react";
import axios from "axios";
class ResetPassword extends Component {
  state = {
    Password: "",
    ConfirmPassword: "",
  };
  resetPassword(e) {
    e.preventDefault();
    const { Password, ConfirmPassword } = this.state;
    const code = (window.location.pathname + window.location.search).split("=");
    if (Password && ConfirmPassword) {
      const url = "http://hospitalappointment/ResetPassword.php";
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: {
          Password: this.state.Password,
          ConfirmPassword: this.state.ConfirmPassword,
          Code: code[1],
        },
      })
        .then((result) => {
          console.log(result);
          if (result.data) {
          } else if (result.data === false) {
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }
  }
  render() {
    return (
      <div>
        <div className="form-floating mb-3 container col-4">
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
          <label>New Password</label>
        </div>
        <div className="form-floating mb-3 container col-4">
          <input
            type="password"
            className="form-control"
            id="pass"
            placeholder=" Confirm Password"
            onChange={(event) =>
              this.setState({ ConfirmPassword: event.target.value })
            }
            required
          />
          <label>Confirm Password</label>
        </div>
        <button onClick={(e) => this.resetPassword(e)}>Submit</button>
      </div>
    );
  }
}

export default ResetPassword;
