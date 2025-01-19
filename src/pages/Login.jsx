import React, { useState } from "react";
import api from "../context/api";
import GoogleButton from "react-google-button";
import "./login.css";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add your logic here
  };

  const handleGoogleLogin = () => {
    window.location.href = `${api.baseUrl}/auth/google`; // Modify as per your actual API setup
  };


  return (
    <form className="login-form">
      <div className="login-container">
        <p className="login-title">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p className="login-subtitle">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment
        </p>
        {state === "Sign Up" && (
          <div className="input-group">
            <p>Name</p>
            <input
              className="input-field"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}
        <div className="input-group">
          <p>Email</p>
          <input
            className="input-field"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="input-group">
          <p>Password</p>
          <input
            className="input-field"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="submit-button">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="alternative-login">
          <p>OR</p>
          <GoogleButton className="google-btn" onClick={handleGoogleLogin} />
        </div>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setState("Login")} className="link">
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span onClick={() => setState("Sign Up")} className="link">
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
