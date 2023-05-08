import React, { useEffect, useState } from 'react';
import './product-card.css';
import data from '../../db.json';
import { Link, useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethod';
import PopularProduct from '../Catagories/PopularProduct/PopularProduct';


const ProductCard = (props) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [relProducts, setRelProducts] = useState([]);
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const ASSETS = process.env.REACT_APP_ASSETS_URL;

    useEffect(() => {
        setCategories(props.category)
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("/products");
                setProducts(res.data);
                const product = products.find(t => t._id === productId);
                setCategories(product.categories)
                relatedProducts(res.data, product.categories)
            } catch {

            }
        }
        getProducts()
    }, [location]);

    const relatedProducts = (data, categories) => {
        const relatedProducts = [];        
        data.forEach(item => {
            if(item.categories && item.categories.length) {
                 item.categories.forEach(t => {
                     const isRelated = categories.some(n => n === t);
                     if(isRelated){
                        const isDuplicate = relatedProducts.find(k => k._id === item._id);
                        if(!isDuplicate){
                            relatedProducts.push(item);
                        }
                        
                     }
                 })
            }          
        });
        setRelProducts(relatedProducts);
       
    }

    return (
        <>
            <h2 className='header-title'>{props.title ? props.title : "Related Products"}</h2>
            <div className="product-card-container">                 {
                    relProducts.map((item, i )=> {
                        return <PopularProduct key={i} popularProduct={item} />;                   
                    })
                 }
            </div>
        </>
    )
}

export default ProductCard;

