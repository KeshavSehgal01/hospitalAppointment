import React, { Component } from "react";
import axios from "axios";
class Doctor extends Component {
  state = { table: [] };

  componentDidMount() {
    // http://hospitalappointment/getData.php
    const url = "http://hospitalappointment/getData.php";
    axios({
      method: "get",
      url: `${url}`,
      headers: { "content-type": "application/json" },
    })
      .then((result) => {
        console.log(result);
        if (result) {
          this.setState({ table: result.data });
        }
      })
      .catch((error) => this.setState({ error: error.message }));
  }
  render() {
    const { table } = this.state;
    return (
      <table>
        <tr>
          <th>Email</th>
        </tr>
        {table &&
          table.map((x) => (
            <div>
              {" "}
              <tr>
                <td>{x.Email}</td>
              </tr>
            </div>
          ))}
      </table>
    );
  }
}

export default Doctor;
