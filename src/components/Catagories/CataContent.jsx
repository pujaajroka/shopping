import React from 'react'
import { Link } from 'react-router-dom';
import './Catagories.css';

const CataContent = (props) => {
  
   const itm = props.catagorie;
   
  return (
     
    <div className='cont_catagorie'>
    <Link to={`/productlist/${itm.cata}`}> 
       
             <img className='cat_image' src={itm.img}/>
       
        <div className='title-wrapper'>
             <div className='tital'> <h1 className='tital'>{itm.tital}</h1></div> 
             <button className='btn'>SHOP NOW</button> 
        </div>            
        </Link> 
    </div>

  )
}

export default CataContent
