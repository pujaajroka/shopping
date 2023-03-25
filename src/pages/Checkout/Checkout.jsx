import { HelpOutline } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import Footer from "../../components/Footer/Footer";
const Checkout = () => {
  



  return (
    <div className="checkout_container">
      <div className="chkout_banner">
        <h1>Logo</h1> <h1>Checkout</h1>
        <div className="chkout_acc">
          <h4 className="ck_p">Have an account?</h4>
          <button className="checkout_btn">Log-in</button>
        </div>
      </div>
      <div className="sipp">
        <h2 className="sipp_h2">SIPPING</h2>
      </div>
      <h3 className="sip_add">
        Delivery Address <HelpOutline id="help" />
      </h3>

      <div className="shipping_detail">
        <form id="sippin">
          <div className="row">
            <div className="input_group">
              <input type="text" id="name" required></input>
              <label for="name">First Name</label>
            </div>
            <div className="input_group">
              <input type="text" id="last_name" required></input>
              <label for="last_name">Last Name</label>
            </div>
          </div>

          <div className="input_group">
            <textarea id="address" rows="3" required></textarea>
            <label for="address">Address</label>
          </div>
          <div className="input_group">
            <input type="email" id="email" required></input>
            <label for="email">Email</label>
          </div>
         
          <div className="input_group">
            <input type="number" id="code" required></input>
            <label for="code">Pin Code</label>
          </div>
          <div className="input_group">
            <input type="number" id="number" required></input>
            <label for="number">Phone Number</label>
          </div>
          <div className="row">
            <div className="input_group">
                <input type="text" id="city" required></input>
                <label for="city">City</label>
          
            </div>
            <div className="input_group">
                <select class="slect_state">
                <option value="">Select State</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
                </select>
                
            </div>
          </div>
          
          <button id="btn_sub">SUBMIT</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
