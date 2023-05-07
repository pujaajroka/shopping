import React from 'react';
import './upi.css';

const Upi = () => {
  return (
    <div className="card">
    <div className="upi-address"> 
        <input type="text" id="upi-input"/>
        <select class="upi-select">
            <option>@Okaxis</option>
            <option>@Okhdfc</option>
            <option>@Oksbi</option>
        </select>                        
    </div>
     <button class="btn d-flex mx-auto"><b>Proceed Payment</b></button>
 </div>
      
  )
}

export default Upi;
