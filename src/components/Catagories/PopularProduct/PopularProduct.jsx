import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './PopularProduct.css';
import { addProduct } from '../../../Redux/cartRedux';
import { useDispatch } from 'react-redux';
import Modal from "../../modal/Modal";

const PopularProduct = (props) => {
  const popularData = props.popularProduct;
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()

 const handleClick =()=>{ 
    handleModalShow();
   }

   const handleModalShow = () => {
       setShowModal(true);
   }

   const showSizePopup = (type) => {
      return type;
   }

   const handleAdd = (e) => {
    const quantity = 1;
    const color = popularData.color;
    const size = e;  
    dispatch(
      addProduct({...popularData , quantity, color ,size })
    ) 
    setShowModal(false);
   }

   const handleCancel= () => {
      setShowModal(false);
      showSizePopup(false)
      return false;
   }
  
  return (
    <>
    <div className="popular_prod_con">
      <div className="price-tag">{popularData.price.toFixed(2)}</div>
      <img className="popular_image" 
      style={{ 
        backgroundImage: `url("${popularData.img}")` 
      }}
 />
      <div className="info_populae_product">
        <div className="icons" onClick={handleClick}>
          <ShoppingCartOutlined />
        </div>
        <div className="icons">
          <Link to={`/product/${popularData._id}`}>  
          
            <SearchOutlined />
          </Link>
        </div>
        <div className="icons">
          <FavoriteBorderOutlined />
        </div>
      </div>
   
    </div>
    {showModal && <Modal type="cart" product={popularData} handleAdd={handleAdd} handleCancel={handleCancel} />} 
    </>
  );
};

export default PopularProduct;
