import React, { useEffect, useState } from "react";
import "./Register.css";
import { Navigate, useNavigate } from "react-router-dom";
import { publicRequest } from "../../requestMethod";

const Register = () => {
  const [confirmPass, setConfirmPass] = useState(false);
  const inputRegUsername = React.useRef();
  const inputRegEmail = React.useRef();
  const inputRegPassword = React.useRef();
  const inputRegConfirmPassword = React.useRef();
  const navigate = useNavigate();

  let userDetailRegError = [
    {
      name: "username",
      message: "username name should not be empty",
      visible: false,
      value: ''
    },
    {
      name: "email",
      message: "Please enter a valid e-mail id",
      visible: false,
      value: ''
    },
    {
      name: "password",
      message: "Please enter your password",
      visible: false,
      value: ''
    },
    {
      name: "confirmPassword",
      message: "Please re-enter your password",
      visible: false,
      value: ''
    }
  ];
  const [regErrMsg, setRegErrMsg] = useState(userDetailRegError);
 

  useEffect(() => {}, [userDetailRegError]);

  const handleChange = (e) => {
      const value = e.target.value;
      const fields = [...regErrMsg];
      const field = fields.find(n => n.name === e.target.id)
      if(field) field.visible = false;
      setRegErrMsg(fields)
      
  }

  const register_form = async (e) => {
     e.preventDefault();
     const form = [...e.target];
     form.forEach(item => {
      if(item.id) {
        const ele = regErrMsg.find(n => n.name === item.id);
        if(ele) ele.value = item.value;
      }         
     });
     
     if(!validateRegisterForm()) {
        return false;
     }
   
  };
  const validateRegisterForm = () => {
      const fields = [...regErrMsg];
      const passwords = [];
      fields.forEach(item => {
          if(item.value === "") {
             item.visible = true;
          } else {
            item.visible = false;
          }
          if(item.name === 'password' || item.name === 'confirmPassword') {
              passwords.push(item.value)
          }
      });
      setRegErrMsg(fields);
      const isError = regErrMsg.some(t => t.visible === true);
      if(!isError) {
        if(passwords[0] !== passwords[1]) {
           setConfirmPass(true);
           return false;
        } else {
          setConfirmPass(false);
          submitRegister();
           // service calls
        }
       

      } else {
         return false;
      }
  }

  const submitRegister = async () => {
    try{
      const user = {
         username: regErrMsg[0].value,
         email: regErrMsg[1].value,
         password: regErrMsg[2].value
      }
      const res = await publicRequest.post("/auth/register", user);
      if(res) {
         resetFields();
         navigate('/');
         console.log('user created successfully!');
         
      }      
     
    }catch (error){
      resetFields();
      console.log(error, 'new user creation failed')
    } 
  }

  const resetFields = () => {
    inputRegUsername.current.value = '';
    inputRegEmail.current.value = '';
    inputRegPassword.current.value = '';
    inputRegConfirmPassword.current.value = ''
  }



  return (
    <div className="register_container">
      <div className="reg_wrapper">
        <h1 className="register_title">CREATE AN ACCOUNT</h1>
        <form onSubmit={register_form}>

          <div className="reg_form">
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={(e)=> handleChange(e)}              
              ref={inputRegUsername}
            />
            {
              regErrMsg.map(item => {
                if(item.name === 'username' && item.visible) {
                  return  <div className="error">{item.message}</div>
                }                   
              })
            }
            
          </div>
          {/* <div className="reg_form">
            <input
              type="text"
              placeholder="Last-Name"
              id="lastName"
              onChange={(e)=> handleChange(e)}      
              ref={inputRegLastName}
            />
          
          {
              regErrMsg.map(item => {
                if(item.name === 'lastName' && item.visible) {
                  return  <div className="error">{item.message}</div>
                }                   
              })
            }
          </div> */}

          {/* <div className="reg_form">
            <input
              type="number"
              placeholder="Contact-number"
              id="phone"
              onChange={(e)=> handleChange(e)}      
              ref={inputRegContactNum}
            />
             {
              regErrMsg.map(item => {
                if(item.name === 'phone' && item.visible) {
                  return  <div className="error">{item.message}</div>
                }                   
              })
            }
          </div> */}

          <div className="reg_form">
            <input
              type="email"
              placeholder="E-mail"
              id="email"
              onChange={(e)=> handleChange(e)}      
              ref={inputRegEmail}
            />
            {
              regErrMsg.map(item => {
                if(item.name === 'email' && item.visible) {
                  return  <div className="error">{item.message}</div>
                }                   
              })
            }
          </div>

          <div className="reg_form">
            <input
              type="password"
              placeholder="Password"
              id="password"  
              onChange={(e)=> handleChange(e)}                
              ref={inputRegPassword}
            />
             {
              regErrMsg.map(item => {
                if(item.name === 'password' && item.visible) {
                  return  <div className="error">{item.message}</div>
                }                   
              })
            }
          </div>

          <div className="reg_form">
            <input
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e)=> handleChange(e)}      
              ref={inputRegConfirmPassword}
            />
             {
              regErrMsg.map(item => {
                if(item.name === 'confirmPassword' && item.visible) {
                  return  <div className="error">{item.message}</div>
                }                   
              })
            }
            {
              confirmPass ?  <div className="error">Password and confirm password not matched!</div> : ''
            }
           
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
