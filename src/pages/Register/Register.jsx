import React, { useEffect, useState } from "react";
import "./Register.css";

const Register = () => {
  let userDetailsReg = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  };
  let userDetailRegError = [
    {
      name: "firstName",
      message: "First name should not be empty",
      visible: false,
    },
    {
      name: "lastName",
      message: "Last name should not be empty",
      visible: false,
    },
    {
      name: "phone",
      message: "Please insert your 10 digits contact number",
      visible: false,
    },
    {
      name: "email",
      message: "Please insert your valid e-mail id",
      visible: false,
    },
    {
      name: "password",
      message: "Please enter your password",
      visible: false,
    },
  ];

  const inputRegFirstName = React.useRef();
  const inputRegLastName = React.useRef();
  const inputRegContactNum = React.useRef();
  const inputRegEmail = React.useRef();
  const inputRegPassword = React.useRef();
  const inputRegConfirmPassword = React.useRef();

  // 
  // console.log(reg_form.firstName)
  const [regErrMsg, setRegErrMsg] = useState(userDetailRegError);
  const [userReisterFormDetail, setUserRegisterFormDetail] =
    useState(userDetailsReg);
  const [errRegMsg, SetErrRegMsg] = useState(userDetailRegError);

  useEffect(() => {}, [userReisterFormDetail]);

  const register_form = async (e) => {
    e.preventDefault();
  //   const reg_form ={
  //             firstName: inputRegFirstName.target.value,
  //             lastName: inputRegLastName.target.value,
  //             phone:inputRegContactNum.target.value,
  //             email: inputRegEmail.target.value,
  //             password: inputRegPassword.target.value
  //           }
  //  console.log(reg_form)
    //
    //     setUserRegisterFormDetail(reg_form)
  };

  return (
    <div className="register_container">
      <div className="reg_wrapper">
        <h1 className="register_title">CREATE AN ACCOUNT</h1>
        <form onSubmit={register_form}>
          <div className="reg_form">
            <input
              type="text"
              placeholder="First Name"
              id="first_name"
              
              ref={inputRegFirstName}
            />
            <div className="userDetailRegError"></div>
          </div>
          <div className="reg_form">
            <input
              type="text"
              placeholder="Last-Name"
              id="last_name"
             
              ref={inputRegLastName}
            />
            <div className="userDetailRegError"></div>
          </div>

          <div className="reg_form">
            <input
              type="number"
              placeholder="Contact-number"
              id="phone"
              
              ref={inputRegContactNum}
            />
            <div className="userDetailRegError"></div>
          </div>

          <div className="reg_form">
            <input
              type="email"
              placeholder="E-mail"
              id="mail"
             
              ref={inputRegEmail}
            />
            <div className="userDetailRegError"></div>
          </div>

          <div className="reg_form">
            <input
              type="password"
              placeholder="Password"
              id="password"
             
              ref={inputRegPassword}
            />
          </div>

          <div className="reg_form">
            <input
              placeholder="Confirm Password"
              ref={inputRegConfirmPassword}
            />
            <div className="userDetailRegError"></div>
          </div>
          <div className="err_box"></div>
          <span className="reg_aggrement">
            By creating an accoount, I consent to the processing of my personal
            data in accordance with the <h3>PRIVACY POLICY</h3>
          </span>
          <button className="reg_btn">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
