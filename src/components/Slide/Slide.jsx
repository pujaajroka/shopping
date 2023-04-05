import React from 'react'
import { useEffect } from 'react';
import { publicRequest } from '../../requestMethod';
import { Navigate, useNavigate } from "react-router-dom";

function Slide(props) {
  const ASSETS = process.env.REACT_APP_ASSETS_URL;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/productlist/'+props.slide.link);
  }


  return (    
      <div className={"slide slide-" + props.slide.id}> 
                <div className='img-wrapper'>
                    <img src={ASSETS+props.slide.img}/>
                </div>
                <div className='info-wrapper'>
                   <div className='info'><h2 className='info-sell'>{props.slide.info}</h2></div> 
                   <div className='description'><p className='description_img'>{props.slide.description_img}</p></div> 
                   <button className='btn-shopnow' onClick={handleClick}>SHOP NOW </button>
                </div>
       </div>
   
  )
}

export default Slide
