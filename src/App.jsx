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

const App = () => {
  const user = true
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/productlist/:category" element={<Productlist />} />
      {/* <Route path="/login" element= { user ? <Redirect to="/"/> : <Login/> }/> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
