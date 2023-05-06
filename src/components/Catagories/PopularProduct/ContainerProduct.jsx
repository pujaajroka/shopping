import React from "react";
import "./PopularProduct.css";
import { useState } from "react";
import { popProduct } from "./ContainerProductData";

import PopularProduct from "./PopularProduct";
import { useEffect } from "react";
import { publicRequest } from "../../../requestMethod";

const ContainerProduct = ({pathName, path, colorSizeFilter, sort }) => {
  const [poplarProduct, setPopularProduct] = useState([]);
  const [product, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);


  const getFeatureProduct = async () => {
    try {
      const res = await publicRequest.get('/products?feature=true');
      setPopularProduct(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        if(path){
          if(path === 'brands') {
            let brandName = pathName[pathName.length-1];
            if(brandName.includes('_')){
              brandName = brandName.replaceAll('_', ' ');
            }
            const res = await publicRequest.get(`products?brand=${brandName}`);
            setProducts(res.data);
          } else {
            const res = await publicRequest.get(`products?category=${path}`);
            setProducts(res.data);
          }
            
        } else {
            const res = await publicRequest.get("products");
            setProducts(res.data);
        }
      } catch (err) {}
    };
    getFeatureProduct();
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
    <>
    <div className="popular_product_container">
      {path ? filterProduct.map((item, index) => {
        return <PopularProduct key={index} popularProduct={item} />;
      })
    : poplarProduct.map((item, index) => {
      return <PopularProduct key={index} popularProduct={item} />;
    })
    }
    </div>
    </>
  );
};



export default ContainerProduct;
