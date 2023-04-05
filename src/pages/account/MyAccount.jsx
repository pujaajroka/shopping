
import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";


const MyAccount = () => {
 
  return (
    <>
      <Announcement/>
      <Navbar/>
      <div className='inner-container'>
          <h1>Profile</h1>
      </div>
       
    </>
  )
};



export default MyAccount;
