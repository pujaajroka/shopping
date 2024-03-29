import {
  BrowserRouter ,
  Routes,
  Route,
  } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Productlist from "./pages/Productlists/Productlist";
import Register from "./pages/Register/Register";
import Home from "./pages/Home";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';                                                                                                                                                                                                                                                                                         
import About from "./pages/about/About";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import Checkout from "./pages/Checkout/Checkout";
import MyAccount from "./pages/account/MyAccount";
import Terms from "./pages/terms/Terms";
import { useLocation } from 'react-router-dom';
import OrderTracking from "./pages/order/OrdersTracking";


const App = () => {
  const [user, setUser] = useState(null);
  let isLocalStorage = localStorage.getItem("persist:root"); 
  const location = useLocation();
  useEffect(() =>{
    isLocalStorage = localStorage.getItem("persist:root"); 
    if(isLocalStorage) {
        setUser(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser);
     }
  },[isLocalStorage, location]);

  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/productlist/" element={<Productlist />} />
      <Route path="/productlist/:category" element={<Productlist />} />
      <Route path="/productlist/brands/:brand" element={<Productlist />} />
      <Route path="/login" element= { user ? <Navigate to="/"/> : <Login/> }/>
      <Route path="/register" element= { user ? <Navigate to="/"/> : <Register/> }/>
      <Route path="/about" element={<About />} />
      <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/account" element={ <MyAccount/>} />
      <Route path="/terms" element={ <Terms/>} />
      <Route path="/order" element={ <OrderTracking/>} />
    </Routes>
  );
};

export default App;
