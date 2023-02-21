import React, { useEffect, useState } from 'react'
import prod1 from '../images/mainprod.jpg'
import prod2 from '../images/prod2.jpg'
import prod3 from '../images/prod3.jpg'
import prod4 from '../images/prod4.jpg'
import prod5 from '../images/prod5.jpg'
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
    const [currentImage, setCurrentImage] = useState('');

    const addProductToCart = () => {

    }
    useEffect(() => {
        setCurrentImage(prod1);
        // setCounter(quantity)
    }, ['product']);
  return (
    <div className=''>
        {/* product details section */}
            <div dir='rtl' className='flex flex-col lg:flex-row lg:items-start items-center justify-center gap-[4rem] w-[100%] min-h-[100vh]'>
                <div className='w-[100%] lg:w-[35%]'>
                    <div className='h-[27rem] border shadow-lg shadow-gray-400  p-[.2rem] rounded-[7px] '>
                        <img src={currentImage} className='w-[100%] h-[100%] object-cover mx-auto  ' />
                    </div>
                    <div className='flex items-center justify-between m-[.2rem] '>
                        <img src={prod1} className='w-[4.5rem] h-[4.5rem] block border border-gray-400 p-[.2rem] cursor-pointer object-cover ' onClick={() => setCurrentImage(prod1)} />
                        <img src={prod2} className='w-[4.5rem] h-[4.5rem] block border border-gray-400 p-[.2rem] cursor-pointer object-cover ' onClick={() => setCurrentImage(prod2)} />
                        <img src={prod3} className='w-[4.5rem] h-[4.5rem] block border border-gray-400 p-[.2rem] cursor-pointer object-cover ' onClick={() => setCurrentImage(prod3)} />
                        <img src={prod4} className='w-[4.5rem] h-[4.5rem] block border border-gray-400 p-[.2rem] cursor-pointer object-cover ' onClick={() => setCurrentImage(prod4)} />
                        <img src={prod5} className='w-[4.5rem] h-[4.5rem] block border border-gray-400 p-[.2rem] cursor-pointer object-cover ' onClick={() => setCurrentImage(prod5)} />
                    </div>
                </div>

                {/* product information */}
                
                <div dir='rtl' className='w-[100%] lg:w-[44%] p-[.9rem] ' >
                    <div className='flex items-center justify-between'>
                        <p className='text-2xl font-bold  mb-[1rem]'>{'جلباب شتوي'}</p>
                        <p className='flex items-center text-gray-400 '><ReactStars count={5} onChange={5} size={24} activeColor="#ffd700" value={5} classNames='pointer-events-none'/> (3.5)</p>
                    </div>
                    <p className='text-gray-400 text-start mb-[1rem]'>{'جلباب شتوي مبطن بخامة جيدة صناعة تركية يوجد منه العديد من المقاسات والالوان احذروا التقليد..'}</p>
                    {/* <p className='flex mb-[1rem] text-gray-500 '>Availability in stock: {true ? <p className='text-green-600 pl-[.5rem]'>Available</p> : <p className='text-green-600'>Not Available</p>}</p> */}

                    <p className='flex mb-[.5rem] text-gray-500 '>المقاسات</p>
                    <div className='flex items-center justify-between px-[1.5rem] w-[70%] text-gray-500 '>
                        {new Array(5).fill(0).map((item) => {
                            return (
                                <div className='w-[3rem] h-[3rem] flex items-center justify-center bg-gray-200 rounded-lg'>
                                    84
                                </div>
                            )
                        })}
                    </div>
                    
                    <p className='flex mb-[.5rem] text-gray-500 '>الألوان</p>
                    <div className='flex items-center justify-between px-[1.5rem] w-[70%] text-gray-500 '>
                        {new Array(5).fill(0).map((item) => {
                            return (
                                <div className='w-[3rem] h-[3rem] flex items-center justify-center bg-[#E45A9C] rounded-lg '>
                                    
                                </div>
                            )
                        })}
                    </div>
                        

                    <div className='flex items-center '>
                    <p className='flex mb-[.5rem] text-gray-500 font-bold ml-[.5rem]'>السعر: </p>
                        <h4>{10}$ <sub className='line-through	'>{15}$</sub></h4>
                    </div>
                    <hr />
                    <p className='my-[1.5rem]'>
                        
                    </p>
                    <hr />
                    
                    <button className='mb-[2rem] w-[100%] h-[2rem] pb-[.8rem] text-center bg-orange-500 text-white' onClick={addProductToCart}>Add To Cart</button>
                </div>
            </div>
        {/* video section */}
        <div dir='rtl' className='flex items-center justify-between bg-[#F5F5F5] min-h-[100vh] '>
            <div>

            </div>
        </div>
         {/* review section */}
         <div dir='rtl' className='flex items-center justify-between bg-[#F5F5F5] min-h-[100vh] '>
            <div>

            </div>
        </div>
    </div>
  )
}

export default ProductDetails