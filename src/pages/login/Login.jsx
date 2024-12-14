import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="loginWapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">
              Connect with Friends and the World around you on Lamasocial
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="password" className="loginInput" />
              <button className="loginBotton">Log In</button>
              <span className="loginForgot">forget Password?</span>
              <button className="loginRegristerButton">
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
