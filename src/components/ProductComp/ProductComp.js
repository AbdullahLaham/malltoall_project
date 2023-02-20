import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineHeart} from 'react-icons/ai';
import {BsPlus, BsHeartFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import product from '../../images/product.webp';
import ReactStars from "react-rating-stars-component";
import './localStyle.css'

const ProductComp = () => {

    const [selected, setSelected] = useState(false);

    const addProductToCart = () => {

    }
    const addProductToWishist = (id) => {

    }
    // navigate
    const navigate = useNavigate();
    let index = 0;
  return (
    <div className='box w-[15.5rem] pointer-events-auto'>
        <div className='product mtop'>
        <div className='img'>
            <span className='discount'>In Stock</span>
            <img src={product} className='pointer-events-none' alt='' />
            <div className='product-like'>
                <label>{(selected) ?  1  : 0}</label> <br />
                {index != -1 || selected ? <BsHeartFill className='fill-red-500 mx-auto' /> : <AiOutlineHeart  sx={{fill: 'red'}} onClick={() => {addProductToWishist(0); setSelected(true);}} /> }
            </div>
        </div>
        <div className='product-details'>
            <p className="text-start mb-0 mt-[.5rem] pl-[.4rem]">{'hand bag'}</p>
            <div className='rate'>
            <ReactStars
                count={5}
                onChange={''}
                size={24}
                edit={false}
                value={4}
                activeColor="#ffd700"
            />
            </div>
            <div className='price'>
            <h4>{10}$ <sub className='line-through	'>{15}$</sub></h4>
            {/* step : 3  
                if hami le button ma click garryo bahne 
            */}
            
            </div>
            <div className='flex gap-2 items-center justify-end controls'>
                <button className='flex items-center justify-center' onClick={() => navigate(`/product/${'slug'}`)}><AiOutlineEye /></button>
                <button className='flex items-center justify-center' onClick={() => addProductToCart()}><BsPlus /></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductComp