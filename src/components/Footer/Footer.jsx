import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer_container'>
       <div className='footer_left'>
        <div className='logo'><h1>PUJA</h1></div>
           <p className='desc'> 
            Lorem ipsum is a name for a common type of placeholder text.
            Also known as filler or dummy text, this is text copy that 
            serves to fill a space without saying anything meaningful.
            It's essentially nonsense text that still gives an idea of
            what real words will look like in the final product.
           </p>
       
            <div className='social_content'> 
               <div className='socialIcon'>
                 <Facebook className='facebook'/>
               </div>
               <div className='socialIcon'>
                 <Instagram className='insta'/>
               </div>
               <div className='socialIcon'>
                 <Twitter className='twitter'/>
               </div>
               <div className='socialIcon'>
                 <Pinterest className='pinterest'/>
               </div>
            </div>
       </div>
       <div className='footer_center'>
            <h3 className='footer_title'>
                Useful Links
            </h3>
            <ul className='footer_listitem_ul'>
              <li className='footer_listitem_li'> Home</li>
              <li className='footer_listitem_li'> Cart</li>
              <li className='footer_listitem_li'> Men Fashion</li>
              <li className='footer_listitem_li'> Women Fashion</li>
              <li className='footer_listitem_li'> Assessories</li>
              <li className='footer_listitem_li'> My Account</li>
              <li className='footer_listitem_li'> Order Tracking</li>
              <li className='footer_listitem_li'> Wishlist</li>
              <li className='footer_listitem_li'> Terms</li>
              <li className='footer_listitem_li'> Privacy & Policy</li>
             
            </ul>
           
         </div>
       <div className='footer_right'>
         <h3 className='contact_title'>Contact</h3>
         <div className='contact_item'><Room className='room'/> Darjeeing , West Bengal Pin:734203</div>
         <div className='contact_item'> <Phone className='room'/>9547688533</div>
         <div className='contact_item'><MailOutline className='room'/> pujaajroka@gmail.com </div>
         <img className='payment' src="asset/card.jpg"/>
         
       </div>
    </div>
  )
}

export default Footer
