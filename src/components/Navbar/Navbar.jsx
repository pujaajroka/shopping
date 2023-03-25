import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import './Navbar.css';
import { Link, Navigate, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';




const Navbar = () => {
  const [user, setUser] = useState(null);
  const isLocalStorage = localStorage.getItem("persist:root"); 
  const quantity = useSelector(state => state.cart.quantity);

  const handleLogout = () => {
     localStorage.removeItem("persist:root");          
  }

  useEffect(() =>{
    if(isLocalStorage) {
      setUser(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser);
     }
  },[isLocalStorage])

  return (
    <div className='container'>
      <div className='nav navLeft'>

        <Link to="/"> <img src="/asset/logo.png"/></Link>
         

      </div>
      <div className='nav navCenter'>
      <div className='search-container'>
          <input type="text" className='search-input' placeholder='Search' />
          <Search />
        </div>
        
      </div>
      <div className='nav navRight'>
        <div className='menu-bar'>
         
          {user && user.currentUser !== '' ?        
            
            <div className='menu-item'><Link to="/login" onClick={handleLogout}>LOG-OUT</Link></div>        
            :
            <>
            <div className='menu-item'><Link to="/register">REGISTER</Link></div>
            <div className='menu-item'><Link to="/login">LOG-IN</Link></div>
            </>
           
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
