import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CataContent from './CataContent';
import './Catagories.css';
import { CatagoriesData } from './CatagoriesData';
 
const Catagories = () => {

    const [catagories, setCatagories]= useState(CatagoriesData);
  return (
    <div className='container_catagories'>
      
     {
      catagories.map(item=>{
        return  <CataContent key={item.id} catagorie={item}/>
       
      }
     
      )  
     }
      
    </div>
  )
}

export default Catagories
