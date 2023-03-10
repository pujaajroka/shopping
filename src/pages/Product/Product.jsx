import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import "./Product.css"
const Product = () => {
 
  return (
    <div className='product'>
       <Navbar/>
       <Announcement/>
       <div className='wrapper_product'> 
        <div className='img_container'>
            <img className='img_jmsuit' src="/asset/jumpsuit.jpg"/>
        </div>
        <div className='info_con'>
            <h1 className='ttl'> Denim Jumpsuit</h1>
            <p className='des'> A jumpsuit is a one-piece dress which fits slim 
                and covers the arms and legs. 
                Its history goes back to 1919. 
                It was created as a functional garment for parachuters
                to jump from planes. The boiler suit and dungarees were
                also used for a similar purpose.
            </p>
            <span className='price'> Rs.1438/-</span>
            <div className='filter_cnt'>
               <div className='filter_col'> Color:</div>
                  <select className='slct'>
                    <option>Select</option>
                    <option>Deep blue</option>
                    <option>Sky blue</option>
                    <option>Black</option>
                 </select>
               
               <div className='filter_sz'> Size:
                <select className='slct'>
                    <option>Size</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
               </div>
            </div>
            <div className='add_container'>
               <div className='ammount_container'>
                  
                    <Remove/>
                    <span className='remove_container'>1</span>
                    <Add/>
                   
                </div> 
                <button className='crtt_btn'>Add To Cart</button>
             </div>
        </div>
       </div>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default Product
