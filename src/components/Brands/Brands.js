import React from 'react';
import './brands.css';
import data from '../../db.json';
import { Link } from 'react-router-dom';

const Brand = (brands) => {
  const ASSETS = process.env.REACT_APP_ASSETS_URL;
  return (
    <>
    <div className="brands-container">
        {
            data.brands.map((t, i) => {
                return <div key={i}> <Link to={'/productlist/brands/'+t.name}><img src={ASSETS+t.img}/> </Link> </div>
            })
        }
       
       
    </div>
    </>
  )
}

export default Brand;

