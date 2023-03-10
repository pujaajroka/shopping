import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import './PopularProduct.css'

const PopularProduct = (props) => {
  // console.log(props.popularProduct);
  const popularData = props.popularProduct;
  
  return (
    <div className="popular_prod_con">
      <img className="popular_image" src={popularData.img} />
      <div className="info_populae_product">
        <div className="icons">
          <ShoppingCartOutlined />
        </div>
        <div className="icons">
          <SearchOutlined />
        </div>
        <div className="icons">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
