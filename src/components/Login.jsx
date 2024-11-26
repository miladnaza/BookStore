import React from "react";
import "../styles/Login.css"; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-header">
          <img src="/logo.jpeg" alt="Book Store Logo" className="logo-image" />
          <h1>
            Welcome to <span>Book Store</span>
          </h1>
        </div>
        <form>
          <input
            type="text"
            placeholder="Username or e-mail"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-button">
            Log in
          </button>
        </form>
        <p>
          Don’t have an account?{" "}
          <a href="#" className="signup-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
