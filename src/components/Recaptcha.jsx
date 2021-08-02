import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from "react";
import axios from "axios";
// import styles from "./Captcha.css";
import { siteKey } from "../apiKeys";
const { origin, protocol } = window.location;

function Recaptcha(props) {
  const reCaptcha = useRef();

  function onChange(value) {
    try {
      console.log(value);
      const url =
        "https://www.google.com/recaptcha/api/siteverify?sitekey=${siteKey}&response=${value}";
      axios({
        method: "post",
        url: `${url}`,
        headers: { "content-type": "application/json" },
        data: this.state,
      })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => this.setState({ error: error.message }));

      const payload = value !== null ? true : false;

      if (value === null) {
        reCaptcha.current.reset();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
        ref={reCaptcha}
        type="image"
      />
    </div>
  );
}

export default Recaptcha;
