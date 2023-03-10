import React from 'react'
import './PopularProduct.css';
import { useState } from 'react';
import { popProduct } from './ContainerProductData';

import PopularProduct from './PopularProduct';
import { useEffect } from 'react';
import axios from 'axios';


const ContainerProduct = ({path,colorSizeFilter,sort}) => {
    console.log(path,colorSizeFilter,sort)
    const [poplarProduct, setPopularProduct] =useState(popProduct)
    const [filterPoplarProduct, setFilterPoplarProduct] =  useState([])
    useEffect(()=>{
      const getProduct = async()=>{
        try{
       const res = await axios.get("http://localhost:8080/product_list");
       console.log(res)
        }catch(err){

        }
      }
       
        getProduct()
    },[path])
    return (
    <div className='popular_product_container'>
        {poplarProduct.map(item=>{
        return <PopularProduct key={item.id} popularProduct={item}/>
            
       })} 
       
    </div>
  )
}



// fetch("http://localhost:3000/Users", {
//     method: "post",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   }).then((response) => {
//     if (response.status === 201) {
//       window.location.href = "viewUserDetails.html";
//     }
//   });

export default ContainerProduct
