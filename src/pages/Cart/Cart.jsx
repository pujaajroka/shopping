import React from "react";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { Add, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="cart_container">
     
      <Announcement />
      <div className="cart_wrapper">
        <h1 className="cart_title">YOUR BAG</h1>
        <div className="top">
          <button className="top_btn">CONTINUE SHOPPING</button>
          <div className="top_txts">
            <span className="top_txt">Shopping Bag (2)</span>
            <span className="top_txt">Your Wishlist (0)</span>
          </div>
          <button className="top_btn">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="product_info">
            <div className="cart_product_wrapper">
              <div className="product_detail">
                <img className="pr_img" src="asset/shoes3.jpg" />
                <div className="img_dtl">
                  <div className="product_name">
                    <h3>Product :</h3>
                    <h6 className="pro_name">JEESIE THUNDER SHOES</h6>
                  </div>
                  <span className="product_id">
                    <h3>Product Id :</h3>
                    <p>8956734527</p>
                  </span>
                  <div className="product_color">
                    
                  </div>
                  <span className="product_size">
                  <h3>Product Size :</h3>
                    <p> 32.5</p>
                  </span>
                </div>

                
              </div>
              <div className="price_detail">
                 <div className="product_amount_container">
                    <Add/>
                    <div className="product-amount">2</div>
                    <Remove/>
                 </div>
                  <div className="product_price">Rs. 1600/-</div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="cart_product_wrapper">
              <div className="product_detail">
                <img className="pr_img" src="asset/gucci.jpg" />
                <div className="img_dtl">
                  <div className="product_name">
                    <h3>Product:</h3>
                    <h6 className="pro_name">GUCCI T-SHIRT</h6>
                  </div>
                  <span className="product_id">
                    <h3>Product Id :</h3>
                    <p>8956734527</p>
                  </span>
                  <div className="product_color_tshirt">
                    
                  </div>
                  <span className="product_size">
                  <h3>Product Size :</h3>
                    <p> M</p>
                  </span>
                </div>

                
              </div>
              <div className="price_detail">
                 <div className="product_amount_container">
                    <Add/>
                    <div className="product-amount">2</div>
                    <Remove/>
                 </div>
                  <div className="product_price">Rs. 1600/-</div>
              </div>
            </div>
            <hr className="line"></hr>
            <div className="cart_product_wrapper">
              <div className="product_detail">
                <img className="pr_img" src="asset/jeens.jpg" />
                <div className="img_dtl">
                  <div className="product_name">
                    <h3>Product :</h3>
                    <h6 className="pro_name">LEVICE JEENS</h6>
                  </div>
                  <span className="product_id">
                    <h3>Product Id :</h3>
                    <p>8956734527</p>
                  </span>
                  <div className="product_color_jeens">
                    
                  </div>
                  <span className="product_size">
                  <h3>Product Size :</h3>
                    <p> 32</p>
                  </span>
                </div>

                
              </div>
              <div className="price_detail">
                 <div className="product_amount_container">
                    <Add/>
                    <div className="product-amount">2</div>
                    <Remove/>
                 </div>
                  <div className="product_price">Rs. 1600/-</div>
              </div>
            </div>
          </div>
           <div className="product_summery">
              <h1 className="summery_title"> ORDER SUMMERY</h1>
              <div className="summery_item">
                <div className="summery_item_text">Subtotal</div>
                <div className="summery_item_total">Rs. 1200/-</div>
              </div>
              <div className="summery_item">
                <span className="summery_item_text">Estimated Sipping</span>
                <div className="summery_item_total">Rs. 90/-</div>
              </div>
              <div className="summery_item">
                <span className="summery_item_text">Sipping Discount</span>
                <div className="summery_item_total">Rs. -90/-</div>
              </div>
              <div className="summery_item">
                <h3 className="summery_item_text">Total</h3>
                <h3 className="summery_item_total grand_total">Rs. 1200/-</h3>
              </div>
              <button className="ckout_btn">CHECKOUT NOW</button>
          </div>
        </div>
        
        
       
       
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
