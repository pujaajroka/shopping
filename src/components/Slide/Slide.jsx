import React from 'react'

function Slide(props) {
  return (    
      <div className={"slide slide-" + props.slide.id}> 
                <div className='img-wrapper'>
                    <img src={props.slide.img}/>
                </div>
                <div className='info-wrapper'>
                   <div className='info'><h2 className='info-sell'>{props.slide.info}</h2></div> 
                   <div className='description'><p className='description_img'>{props.slide.description_img}</p></div> 
                   <button className='btn-shopnow'>SHOP NOW </button>
                </div>
       </div>
   
  )
}

export default Slide
