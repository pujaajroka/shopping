import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import "./Footer.css"
import { Link, Navigate } from 'react-router-dom';  
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
              <li className='footer_listitem_li'><Link className="link" to="/about"> About </Link> </li>
              <li className='footer_listitem_li'><Link className="link" to="/cart"> Cart</Link></li>
              <li className='footer_listitem_li'><Link className="link" to="/men fashion"> Men Fashion</Link></li>
              <li className='footer_listitem_li'><Link className="link" to="/women fashion"> Women Fashion</Link></li>
              <li className='footer_listitem_li'><Link className="link" to="/assessories"> Assessories</Link></li>
              <li className='footer_listitem_li'><Link className="link" to="/myAccouny"> My Account</Link></li>
              <li className='footer_listitem_li'><Link className="link" to="/order tracking"> Order Tracking</Link></li>
              <li className='footer_listitem_li'><Link className="link" to="/wishlist"> Wishlist</Link></li>
              <li className='footer_listitem_li'><Link className="link" to="/terms"> Terms</Link></li>
             
              <li className='footer_listitem_li'><Link className="link" to="/privacy&policy"> Privacy & Policy</Link></li>
             
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
