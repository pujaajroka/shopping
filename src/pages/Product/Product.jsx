import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import "./Product.css";
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethod';

import { addProduct } from '../../Redux/cartRedux';
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCards/ProductCards';

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
   const [productItm, setProductItm]= useState({});
   const [quantity, setQuantity]= useState(1);
   const [size, setSize] = useState("");
   const [color, setColor] = useState("");
   const dispatch = useDispatch()


   
   useEffect(()=>{
    const getPro = async ()=>{
      try{
        const res = await publicRequest.get("/products/find/"+id);
        setProductItm(res.data);
        window.scrollTo({top: 0, behavior: 'smooth'});
       
      } catch{

      }
    }
    
    getPro();
   },[])
 
   const handleQuantity =(type)=>{
    if(type === "dec"){
      quantity > 1 &&  setQuantity(quantity - 1)
    }else{
      setQuantity(quantity + 1)
    }
   }

   const handleClick =()=>{
    dispatch(
      addProduct({...productItm , quantity, color ,size })
    )
   
   }

   const percentage = (A, B) =>{
    let percDiff;
    const diff = A -B;
    return percDiff =  (100 * diff / A).toFixed() + "%";
    } 

  return (
    <div className='product'>
       <Navbar/>
       <Announcement/>
       <div className='wrapper_product'> 
        <div className='img_container'>
            <img className='img_jmsuit' src={productItm.img}/>
        </div>
        <div className='info_con'>
            <h1 className='ttl'> {productItm.title}</h1>
            <p className='des'> {productItm.desc}
            </p>
            <span className='price'>₹ <strong> {productItm.price} /- </strong> <small> <del>{productItm.mrp} /-</del></small></span>
            <div className='discount'>{percentage(productItm.mrp, productItm.price)} OFF</div>
            <div className='filter_cnt'>
               <div className='filter_col'> Color: &nbsp;             
                  <select className='slct' onChange={(e)=>setColor(e.target.value)}>
                  {productItm.color?.map((c)=>(
                     <option key={c}>{c}</option>
                  ))}
                    
                 </select>
                 </div> 
               <div className='filter_sz'> Size: &nbsp;
                <select className='slct' onChange={(e)=>setSize(e.target.value)}>
                  {productItm.size?.map((s)=>(
                     <option key={s}>{s}</option>
                  ))}
                    
                </select>
               </div>
            </div>
            <div className='add_container'>
               <div className='ammount_container'>
                  
                    <Remove onClick={()=>handleQuantity("dec")}/>
                    <span className='remove_container'>{quantity}</span>
                    <Add onClick={()=>handleQuantity("inc")}/>
                   
                </div> 
                <button className='crtt_btn' onClick={handleClick}>Add To Cart</button>
             </div>
        </div>
       </div>
       <div className="related-products">
              <ProductCard category={productItm.categories} title="Related Products"/>
       </div>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default Product
