import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Announcement from '../../components/announcement/Announcement'
import ContainerProduct from '../../components/Catagories/PopularProduct/ContainerProduct'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import "./Productlist.css"

const Productlist = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [colorSizeFilter, setColorSizeFilter] = useState({});
 const [sort, setSort] = useState("newest");
 const colSizHandle=(e)=>{
   const value = e.target.value;
   setColorSizeFilter({
    ...colorSizeFilter,
    [e.target.name]: value
   })
 }



  return (
    <div className='productlist_container'>
      <Navbar/>
      <Announcement/>
      <h1 className='title_dress'>{path}</h1>
        <div className='filter_container'>
            <div className='filter'>
                <span className="filter_product">Filter Products:</span>
                <select className='select_colr' name="color" onChange={colSizHandle}>
                    <option className='disable_select'>Color</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>Red</option>
                    <option>Pink</option>
                </select>
                <select className='select_colr' name="size" onChange={colSizHandle}>
                 <option className='size_slect'>Size</option>
                 <option>XS</option>
                 <option>S</option>
                 <option>M</option>
                 <option>L</option>
                 <option>XL</option>
                 <option>XXL</option>
                </select>
            </div>
            <div className='filter'>
                <span className="filter_product">Sort Products:</span>
                <select className='select_colr' onChange={(e)=>setSort(e.target.value)}>
                 <option value="newest">Newest</option>
                 <option value="asc">Price (asc)</option>
                 <option value="dasc">Price (decs)</option>
                </select>
            </div>
        </div>
        <ContainerProduct path = {path} colorSizeFilter={colorSizeFilter} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Productlist
