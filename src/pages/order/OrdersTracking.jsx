import Announcement from "../../components/announcement/Announcement";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";


const OrderTracking = () => {

  return (
    <>
      <Announcement />
      <Navbar />
      <div className='inner-container'>
        <h2>Track Your Order</h2>
        <p>No order has been found! </p>
      </div>
      <Newsletter/>
      <Footer/>

    </>
  )
};



export default OrderTracking;
