import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_container">
      <div className="wrapper_login">
        <h1 className="register_title">SIGN IN</h1>
        <form>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button className="reg_btn">Login</button>
          <a href="#" className="login_link">DO NOT YOU RENEMBER THE PASSWORD</a>
          
          <a href="#" className="login_link">CREATE NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
