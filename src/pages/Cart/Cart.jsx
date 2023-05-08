import React, { useEffect, useState } from "react";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { Add, Remove } from "@material-ui/icons";
import { Link, Navigate, useNavigate  } from "react-router-dom";
import { useSelector } from "react-redux";
import { addProduct, removeProduct, updateQuantity } from '../../Redux/cartRedux';
import Checkout from "../Checkout/Checkout";
import { useDispatch } from 'react-redux';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import data from '../../db.json';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  let navigate = useNavigate();


  const setUpdateProduct = (products) => {
    let obj = {quantity: 0, total: 0 };
     if(products && products.length) {
        products.forEach(item => {
           obj.total += item.price * item.quantity;
           obj.quantity += item.quantity;

        })
     }
     return obj;
  }

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

  const handleRemoveBtn = (product) => {
    const products = cart.products.filter(t => t._id !== product._id);
    const obj = setUpdateProduct(products);
    dispatch(
      removeProduct({...product, total: obj.total, quantity: obj.quantity, size: product.size })
    )
  }

  const setProductSize = (size) => {
      const isArry = Array.isArray(size);
      if(isArry) {
        const tempArray = [];
        size.forEach(t=> {
            const isPreset = tempArray.some(n => n === t)
            if(!isPreset) {
              tempArray.push(t);
            }
        });      
        return tempArray.join(', ');
      } else {
          return size;
      }     
  }

  const setColor = (color) => {
    let hexColor = '#fff'
    const col = data.colors.find(t => t.color.toLowerCase() === color[0].toLowerCase());
    if(col){
       hexColor = col.code;
    }
    return hexColor;
  }

  return (
    <div className="cart_container">
     <Announcement />
      <Navbar />
      
      <div className="cart_wrapper">
        <h1 className="cart_title">YOUR BAG</h1>
        <div className="top">
          <button className="top_btn" onClick={() => navigate(-1)}>CONTINUE SHOPPING</button>
          <div className="top_txts">
            <span className="top_txt">Shopping Bag ({cart.products ? cart.products.length : 0})</span>
            <span className="top_txt">Your Wishlist (0)</span>
          </div>
          <Link className="top_btn" to={"/checkout"}>CHECKOUT NOW</Link>
        </div>
        <div className="bottom">
          <div className="product_info">
            {
             cart.products.map((product , i)=> (
              <div className="cart_product_wrapper" key={i}>
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
                    
                    <div className="product_color">
                      <h3>
                      Colors:                      
                      </h3>                     
                      <span style={{'background': setColor(product.color)}}></span>
                    </div>
                    <span className="product_size">
                      <h3>Product Size: {product.size ? setProductSize(product.size) : 'NA'}</h3>
                      
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
                <div className="removeIcon" onClick={(e)=>handleRemoveBtn(product)}><DeleteOutlineRoundedIcon/></div>
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
