import React, { useState } from "react";
import "../style/login.css";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const signUp = useNavigate();
  // localStorage.setItem("username", "dummy")
  // console.log(localStorage.getItem("username"))

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmail = (e) => {
    setEmail(e.target.value);
  };
  const isPassword = (e) => {
    setPassword(e.target.value);
  };
  const onPressLogin = () => {
    console.log("Clicked");
    // console.log(email);
    // console.log(password);
    const dataPush = {
      email: email,
      password: password,
    };
    console.log(dataPush);

    localStorage.getItem("email");
    localStorage.getItem("password");

    if(localStorage.getItem('email') === email && localStorage.getItem('password')  === password) {
      window.location = '/'
    } else {
      alert("Plese enter correct details")
    }
    // if (email !== "" && password !== "") {
    //   window.location = "/register";
    // } else {
    //   alert("Please enter correct email and password");
    // }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <NavBar />
      <div className="main">
        <div className="container">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={isEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={isPassword}
          />
          <button type="button" onClick={onPressLogin}>
            Continue
          </button>
          <p>
            Create an account?{" "}
            <span onClick={() => signUp("/signup")}>Click Here</span>{" "}
          </p>
          <div className="checkbox">
            <input type="checkbox" id="scales" name="scales" required />
            <label id="label-text" for="scales">
              By Continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
