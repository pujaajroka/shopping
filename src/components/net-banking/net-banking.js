import React from 'react';
import './net-banking.css';

const NetBanking = () => {
  return (
    <div className="card">
    <h3>Choose Your Bank</h3>
    <div className="bank-select"> 
        <select class="upi-select">
            <option>Axis Bank</option>
            <option>Bank of Baroda</option>
            <option>Bank of India</option>          
            <option>Canara Bank</option>
            <option>DCB Bank</option>
            <option>HDFC Bank</option>
            <option>ICICI Bank</option>
            <option>State Bank of India</option>
        </select>                        
    </div>
     <button class="btn d-flex mx-auto"><b>Proceed Payment</b></button>
 </div>
      
  )
}

export default NetBanking;
