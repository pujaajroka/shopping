import React from "react";
import "./PopularProduct.css";
import { useState } from "react";
import { popProduct } from "./ContainerProductData";

import PopularProduct from "./PopularProduct";
import { useEffect } from "react";
import axios from "axios";

const ContainerProduct = ({ path, colorSizeFilter, sort }) => {
  // console.log(path,colorSizeFilter,sort)
  const [poplarProduct, setPopularProduct] = useState(popProduct);
  const [product, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          path
            ? `https://sellitwell.herokuapp.com/api/products?catagory=${path}`
            : "https://sellitwell.herokuapp.com/api/products"
        );
        // console.log(res.data);
        setProducts(res.data);
      } catch (err) {}
    };

    getProduct();
  }, [path]);
  useEffect(()=>{
    path && setFilterProduct(
       product.filter(item => Object.entries(colorSizeFilter).every(([key,value])=>
       item[key].includes(value)
       ))
    )
  },[path,colorSizeFilter,product])

  useEffect(()=>{
   if(sort === "Newest"){
    setFilterProduct((prev)=>
     [...prev].sort((a,b)=>
      a.createdAt - b.createdAt
     )
    )
   } else if(sort === "asc"){
  setFilterProduct((prev)=>
    [...prev].sort((a,b)=>
     a.price - b.price
    )
  )
   }else{
    setFilterProduct((prev)=>
    [...prev].sort((a,b)=>
     b.price - a.price
    )
  )
   }

  },[sort])



  return (
    <div className="popular_product_container">
      {path ? filterProduct.map((item) => {
        return <PopularProduct key={item.id} popularProduct={item} />;
      })
    : poplarProduct.map((item) => {
      return <PopularProduct key={item.id} popularProduct={item} />;
    })
    }
    </div>
  );
};



export default ContainerProduct;
