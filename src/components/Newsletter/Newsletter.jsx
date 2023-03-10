 import { Send } from '@material-ui/icons'
import React from 'react';
import "./Newsletter.css";
 
 const Newsletter = () => {
   return (
     <div>
        <div className='newsletter_container'>
          <div className='title'><h2 className='news_letter'>News Letter</h2> </div>
          <div className='desc'>Get timely updates from your favourite products.</div>
          <div className='input_container'>
            <input placeholder='Your Email' className='newsletter_input'/>
            <button className='nl_btn'>
             <Send/>
            </button>
          </div>
          
        </div>
     </div>
   )
 }
 
 export default Newsletter
 