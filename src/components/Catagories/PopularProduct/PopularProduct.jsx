import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import './PopularProduct.css';
import { addProduct } from '../../../Redux/cartRedux';
import { useDispatch } from 'react-redux';



const PopularProduct = (props) => {
  const popularData = props.popularProduct;
  const dispatch = useDispatch()

 const handleClick =()=>{
    const quantity = 1;
    const color = popularData.color;
    const size = popularData.size;
    dispatch(
      addProduct({...popularData , quantity, color ,size })
    )
   
   }
  
  return (
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
  );
};

export default PopularProduct;
