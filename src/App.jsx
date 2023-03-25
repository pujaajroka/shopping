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
import PacmanLoader from "react-spinners/PacmanLoader";
import "./App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';                                                                                                                                                                                                                                                                                         
import About from "./pages/about/About";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import Checkout from "./pages/Checkout/Checkout";

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/productlist/:category" element={<Productlist />} />
      <Route path="/login" element= { user ? <Navigate to="/"/> : <Login/> }/>
      <Route path="/register" element= { user ? <Navigate to="/"/> : <Register/> }/>
      <Route path="/about" element={<About />} />
      <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};

export default App;
