import { Badge, Menu } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import './Navbar.css';
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar';

const Navbar = () => {
  const ASSETS = process.env.REACT_APP_ASSETS_URL;
  const [user, setUser] = useState(null);
  const [menuToggle, setMenuToggle] = useState(false);
  const location = useLocation();

  let isLocalStorage = localStorage.getItem("persist:root");
  const quantity = useSelector(state => state.cart.quantity);
  const userLogedIn = useSelector(state => state.user);

  const handleLogout = () => {
     localStorage.removeItem("persist:root");
  }

  const handleMenuClick = () => {
    menuToggle ? setMenuToggle(false) : setMenuToggle(true);
  }

  const handleMenuClose= () => {
    setMenuToggle(false);
  }


  const handleBodyClick = () => {
     //setMenuToggle(false);
  }

  useEffect(() => {
    if (userLogedIn.currentUser) {
        setUser(userLogedIn.currentUser);
    }
  }, [isLocalStorage, location])

  return (
    <div className='container' onClick={handleBodyClick}>
      <div className='nav navLeft'>
        <Link to="/"> <img src={ASSETS + 'logo.png'} /></Link>
      </div>
      <div className='menu-icon'>
        <MenuIcon onClick={handleMenuClick} />
      </div>
      <div className='cart-mobile-view'>
       <Link to="/cart">
            <div className='menu-item'>

              <Badge badgeContent={quantity} overlap="rectangular" color="primary">
                <ShoppingCartOutlined />
              </Badge>

            </div>
          </Link>
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

          <Link to="/cart" className='cart-icon'>
            <div className='menu-item'>

              <Badge badgeContent={quantity} overlap="rectangular" color="primary">
                <ShoppingCartOutlined />
              </Badge>

            </div>
          </Link>
          {user && user.currentUser !== null ?
            <div className="profile">Hello, {user.username.toUpperCase()}</div> : ''
          }
        </div>
      </div>
      <div className={menuToggle ? 'nav-flyout open' : 'nav-flyout'}>
          <MenuBar handleMenuClose={handleMenuClose} user={user}/>
       </div>
    </div>
  )
}

export default Navbar
