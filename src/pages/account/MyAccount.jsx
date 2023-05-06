
import React, { useState, useEffect } from "react";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import './account.css';


const MyAccount = () => {
  const userLogedIn = useSelector(state => state.user);
  const [user, setUser] = useState(userLogedIn);
  const location = useLocation();
  useEffect((user) => {
    if (userLogedIn.currentUser) {
      setUser(userLogedIn.currentUser);
    }
  }, [location])
  return (
    <>
      <Announcement />
      <Navbar />
      <div className='inner-container'>
        <h1>Profile</h1>
        {!user &&
          <p>Seems like you are not logged in, <Link to={'/login'}>Please login</Link> to see your account  details</p>
        }

        {user &&
          <div className="form-panel">
            <div className="form-group">
              <label>Username: </label>
              <input type="text" disabled placeholder={user.username}/>
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input type="email" placeholder={user.email}/>
            </div>
            <div className="form-group">
              <label>Phone: </label>
              <input type="number" placeholder={user.phone ? user.phone : 'Not Provided'}/>
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input type="password" placeholder="***********"/>
            </div>
            <div className="form-group">
              <label>Confirm Password: </label>
              <input type="password" placeholder="***********"/>
            </div>
            <div className="form-group">
            <label></label>
              <button>Edit</button>
              <button disabled>Submit</button>
            </div>
          </div>
        }
      </div>
      <Newsletter />
      <Footer />
    </>
  )
};



export default MyAccount;
