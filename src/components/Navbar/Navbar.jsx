import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined} from '@material-ui/icons';
import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  
  
  
  
  
  
  return (
    <div className='container'>
       <div className='nav navLeft'>
         <div className='search-container'>
          <input type="text" className='search-input' placeholder='Search'/>
           <Search/>
         </div>
        
        </div>
       <div className='nav navCenter'>
         <h1>Let's Shop</h1>
        </div>
       <div className='nav navRight'>
         <div className='menu-bar'>
           <div className='menu-item'><Link to="/register">REGISTER</Link></div>
           <div className='menu-item'><Link to="/login">LOG-IN</Link></div>
           <div className='menu-item'>
           <Link to="cart">  <Badge badgeContent={4} overlap="rectangular" color="primary">
            <ShoppingCartOutlined />
           </Badge>
           </Link> 
            </div> 
         </div>
        </div>
    </div>
  )
}

export default Navbar
