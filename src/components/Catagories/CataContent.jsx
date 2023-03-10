import React from 'react'
import { Link } from 'react-router-dom';
import './Catagories.css';

const CataContent = (props) => {
  
   const itm = props.catagorie;
   
  return (
    <Link to={`/productlist/${itm.cata}`}> 
    <div className='cont_catagorie'>
      
        {/* <div className='img-catagorie'> */}
             <img className='cat_image' src={itm.img}/>
        {/* </div> */}
        <div className='title-wrapper'>
             <div className='tital'> <h1 className='tital'>{itm.tital}</h1></div> 
             <button className='btn'>SHOP NOW</button> 
        </div>            
       
    </div>
    </Link>    
  )
}

export default CataContent
