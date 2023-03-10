import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import "./Slider.css"
import { sliderItems } from '../../sliderData/SliderData'
import Slide from '../Slide/Slide';
import { useState } from 'react';


function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
   
    const [slideData, setSlideData] = useState(sliderItems);
    // console.log(slideData)
    const  handleClick=(direction)=>{
       if (direction=== "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1: 2);
       }else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
       }

    }
    
  return (
    <div className='slider-container'>
        <div className='arrow' onClick={()=> handleClick("left")}>
           <ArrowLeftOutlined/>
        </div>
          <div className='arrow-wrapper'>
           {
             slideData.map(item =>{
                  return <Slide key={item.id} slide={item} slideIndex={slideIndex}/>
             })
            
           }
          </div>
         

        <div className='arrow right' onClick={()=>handleClick("right")}>
           <ArrowRightOutlined/>
        </div>
    </div>
  )
}

export default Slider
