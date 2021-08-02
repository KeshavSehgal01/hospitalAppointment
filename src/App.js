import logo from "./logo.svg";
import "./App.css";

import SignUp from "./components/signUp";
import Login from "./components/login";
import Doctor from "./components/Doctor Demo";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import signUp from "./components/signUp";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import PatientDetails from "./components/PatientDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" exact strict component={Login} />
        <Route path="/signUp" exact strict component={signUp} />
        <Route path="/" exact strict component={Home} />
        <Route path="/ForgotPassword" exact strict component={ForgotPassword} />
        <Route path="/PatientDetails" exact strict component={PatientDetails} />
        {/* {<PatientDetails />} */}
        {/* <Route />
        <Route /> */}
        {/* <SignUp /> */}
        {/* <Doctor /> */}
        {/* <Login /> */}
        {/* <ForgotPassword /> */}

        <Route path="/ResetPassword" exact strict component={ResetPassword} />
      </div>
    </Router>
  );
}

export default App;
