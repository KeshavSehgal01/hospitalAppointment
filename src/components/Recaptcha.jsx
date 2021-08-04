import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from "react";
import axios from "axios";
// import styles from "./Captcha.css";
import { secretKey, siteKey } from "../apiKeys";
const { origin, protocol } = window.location;

function Recaptcha(props) {
  const reCaptcha = useRef();

  function onChange(value) {
    try {
      console.log(value);

      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${value}`;
      axios({
        url: `${url}`,
        method: "post",
        // headers: {
        //   Accept: "application/json",
        //   "Content-Type": "application/json",
        //   Origin: "*",
        //   "Access-Control-Allow-Headers": "*",
        //   "Access-Control-Allow-Origin": "*",
        // },
      })
        .then((result) => {
          props.isVerified(result);
        })
        .catch((error) => {});

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
