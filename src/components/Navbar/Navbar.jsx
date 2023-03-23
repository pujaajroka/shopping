import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import './Navbar.css';
import { Link, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';



const Navbar = () => {
  const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
  const quantity = useSelector(state => state.cart.quantity);
  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    <Navigate to="/login"/> 
  }

  return (
    <div className='container'>
      <div className='nav navLeft'>
        <div className='search-container'>
          <input type="text" className='search-input' placeholder='Search' />
          <Search />
        </div>

      </div>
      <div className='nav navCenter'>
        <h1>Let's Shop</h1>
      </div>
      <div className='nav navRight'>
        <div className='menu-bar'>
          <div className='menu-item'><Link to="/register">REGISTER</Link></div>
          {user && user.currentUser ? 
            <div className='menu-item'><Link onClick={handleLogout}>LOG-OUT</Link></div>
            :
            <div className='menu-item'><Link to="/login">LOG-IN</Link></div>
          }
          
          <Link to="/cart">
            <div className='menu-item'>

              <Badge badgeContent={quantity} overlap="rectangular" color="primary">
                <ShoppingCartOutlined />
              </Badge>

            </div>
          </Link>
          { user && user.currentUser !== null ? 
           <div className="profile">Hello, {user.username.toUpperCase()}</div>:'' 
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
