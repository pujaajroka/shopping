import React, { useRef, useState } from "react";
import "./Login.css";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/apiCalls";
import { Link, Navigate, useNavigate } from "react-router-dom";



const Login = () => {
  const [touched, setTouched] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const dispatch = useDispatch();
  const {isFetching , error}= useSelector((state)=> state.user)
 
   const handleLogin =(e) => {
    e.preventDefault();
    setTouched(true);
    if(username === ''|| password === '') {
        return false;
     }
     setTouched(false);
    
     login(dispatch, {username, password});    
     navigate('/');
     
   }
  return (
    <div className="login_container">
      <div className="wrapper_login">
        <h1 className="register_title">SIGN IN</h1>
        <form>
          <input placeholder="Username"  onChange={(e)=>setUsername(e.target.value)}/>
          {touched && username === '' ? <div className="error">Username should not be empty!</div> : ""}
          <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          {touched && password === '' ? <div className="error">Username should not be empty!</div> : ""}
          <button className="reg_btn" onClick={handleLogin}>Login</button>
          {error && <span className="error_login"> Something went wrong...</span>}
          <a href="#" className="login_link">DO NOT YOU RENEMBER THE PASSWORD</a>          
          <a href="#" className="login_link">CREATE NEW ACCOUNT</a>
          <Link className="login_link" to={"/"}>Guest User</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
