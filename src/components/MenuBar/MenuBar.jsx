import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React from 'react';
import './MenuBar.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const MenuBar = (props) => {
    const [user, setUser] = useState(props.user);
    const ASSETS = process.env.REACT_APP_ASSETS_URL;
    useEffect(() => {
        setUser(props.user)
    }, [])
    return(
        <>
        <div className='flyout-content'>
            <div className='close'>
                <HighlightOffIcon onClick={props.handleMenuClose}/>
            </div>
            <div className='profile'>
                <div className='image'>
                  <img src='/asset/no-img.jpg'/>
                </div>
                <div className='details'>
                    <p><strong>Username:</strong> {user ? user.username : 'Guest'}</p>
                    <p><strong>Email:</strong> {user ? user.email : 'Guest@guest.com'}</p>
                    <p><strong>user since:</strong> 1234</p>
                </div>
            </div>
            <div className='menu-items'>
                <ul onClick={props.handleMenuClose}>
                    <li>
                        <Link to={'/account'}> My Account </Link>
                    </li>
                    <li>
                        <Link to={'/productList'}> Products </Link>
                    </li>
                    <li>
                        <Link to={'/offers'}> Offers </Link>
                    </li>
                    <li>
                        <Link to={'/contact'}> Contact </Link>
                    </li>
                    <li>
                        <Link to={'/login'}> {props.user ? 'Logout' : 'Login'} </Link>
                    </li>
                </ul>
            </div>
        </div>
      </>
    );

}
export default MenuBar;