import React from "react";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { Add, Remove } from "@material-ui/icons";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addProduct, updateQuantity } from '../../Redux/cartRedux';
import Checkout from "../Checkout/Checkout";
import { useDispatch } from 'react-redux';
const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleClickBtn = (product, event)=> {
    if(event === 'add') {
      const quantity = product.quantity + 1;
      dispatch(
        updateQuantity({...product, quantity})
      )
    } else {
      let quantity = product.quantity - 1;
      if(quantity === 0) quantity = 1;
      dispatch(
        updateQuantity({...product, quantity})
      )
    }
    
    
  }

  return (
    <div className="cart_container">
     <Announcement />
      <Navbar />
      
      <div className="cart_wrapper">
        <h1 className="cart_title">YOUR BAG</h1>
        <div className="top">
          <button className="top_btn">CONTINUE SHOPPING</button>
          <div className="top_txts">
            <span className="top_txt">Shopping Bag (2)</span>
            <span className="top_txt">Your Wishlist (0)</span>
          </div>
          <Link className="top_btn" to={"/checkout"}>CHECKOUT NOW</Link>
        </div>
        <div className="bottom">
          <div className="product_info">
            {
             cart.products.map(product => (
              <div className="cart_product_wrapper">
                <div className="product_detail">
                  <div className="pr_img"
                   style={{ 
                    backgroundImage: `url("${product.img}")` 
                  }}
                  />
                  <div className="img_dtl">
                    <div className="product_name">
                      <h3>Product: {product.desc}</h3>
                    </div>
                    <span className="product_id">
                      <h3>Product Id: {product._id}</h3>
                    </span>
                    
                    <div className="product_color">
                      <h3>
                      Colors:                      
                      </h3>
                      <span>{product.color}</span>
                    </div>
                    <span className="product_size">
                      <h3>Product Size: {product.size ? product.size.join(', ') : 'NA'}</h3>
                      
                    </span>
                  </div>
                </div>
                <div className="price_detail">
                  <div className="product_amount_container">
                    <Remove onClick={() => handleClickBtn(product, 'remove')} className="reduce" />
                    <div className="product-amount">{product.quantity}</div>
                    <Add  onClick={(e) => handleClickBtn(product, 'add')} className="add" />
                   
                  </div>
                  <div className="product_price">Rs.{product.price*product.quantity}/-</div>
                </div>
              </div>
            ))}

            <hr className="line"></hr>
          
          </div>
          <div className="product_summery">
            <h1 className="summery_title"> ORDER SUMMERY</h1>
            <div className="summery_item">
              <div className="summery_item_text">Subtotal</div>
              <div className="summery_item_total">Rs.{cart.total}</div>
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
              <h3 className="summery_item_total grand_total">Rs.{cart.total}</h3>
            </div>
            <Link className="ckout_btn" to={"/checkout"}>CHECKOUT NOW</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
