import React, { useEffect, useState } from 'react'
import prod1 from '../images/mainprod.jpg'
import prod2 from '../images/prod2.jpg'
import prod3 from '../images/prod3.jpg'
import prod4 from '../images/prod4.jpg'
import prod5 from '../images/prod5.jpg'
import ReactStars from "react-rating-stars-component";
import { Player } from 'video-react';
import pers from '../images/pers.jpg';
import {FiSend} from 'react-icons/fi';
import {IoIosArrowBack} from 'react-icons/io';
import {BiHome} from 'react-icons/bi';
import share from '../images/shareIcon.png'

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
    {/* pathname */}
        <div dir='rtl' className='flex items-center justify-between'>
            <div className='flex items-center justify-between m-[.5rem] text-gray-400 gap-[.3rem] '>
                <BiHome />
                <p>الرئيسية</p>
                <IoIosArrowBack />
                <p>محلات أوسكار</p>
                <IoIosArrowBack />
                <p>جلباب شتوي</p>

            </div>
            <div className='flex items-center justify-between m-[.5rem] font-bold cursor-pointer hover:text-gray-500 gap-[.3rem] px-[1rem]'>
                <p>مشاركة</p>
                <img className='w-[1.3rem] ' src={share} />

            </div>
        </div>
        {/* product details section */}
            <div dir='rtl' className='flex flex-col lg:flex-row lg:items-start items-center justify-center gap-[4rem] w-[100%]  p-[.7rem] shadow-md px-0 shadow-gray-400'>
                <div className='w-[100%] lg:w-[35%]'>
                    <div className='h-[20rem] border shadow-lg shadow-gray-400  p-[.2rem] rounded-[7px] '>
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
                
                <div dir='rtl' className='w-[100%] lg:w-[44%] p-[.9rem] flex flex-col justify-between ' >
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
                    <div className='w-[100%] flex justify-end'>
                        <button className='mb-[2rem] rounded-md flex justify-center  w-[15%] h-[2rem] pb-[.8rem] text-center bg-black  text-white' onClick={addProductToCart}>اطلب الان</button>
                    </div>
                    </div>
            </div>

        {/* video section */}
        <div dir='rtl' className='flex  justify-between bg-[#F5F5F5] m-[1rem] h-[20vh] mx-[2rem]'>
            <div>
              <p className='font-bold text-2xl p-[.5rem]'>الفيديو</p>         
                {/* <Player playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />  */}
            </div>
        </div>
         {/* review section */}
         <div dir='rtl' className='flex flex-col gap-[.5rem] bg-[#F5F5F5] m-[1rem] mx-[2rem]'>
            <p className='font-bold text-start text-2xl p-[.5rem]'>التقييمات</p>   

            <div className=' flex items-start gap-[1rem] mr-[2rem]'>
                <img className='w-[3rem] h-[3rem] rounded-full object-cover ' src={pers} />
                <div className='text-start review-info'>
                    <p>محمد أحمد</p>
                    <p className='flex items-center text-gray-400 '><ReactStars count={5} onChange={5} size={24} activeColor="#ffd700" value={5} classNames='pointer-events-none'/></p>
                    <p>محلات اوسكار عنوان الاناقة والمصداقية</p>

                </div>
            </div>
            <div className=' flex items-start gap-[1rem] mr-[2rem]'>
                <img className='w-[3rem] h-[3rem] rounded-full object-cover ' src={pers} />
                <div className='text-start review-info'>
                    <p>محمد أحمد</p>
                    <p className='flex items-center text-gray-400 '><ReactStars count={5} onChange={5} size={24} activeColor="#ffd700" value={5} classNames='pointer-events-none'/></p>
                    <p>محلات اوسكار عنوان الاناقة والمصداقية</p>

                </div>
            </div>
            <div className=' flex items-start gap-[1rem] mr-[2rem]'>
                <img className='w-[3rem] h-[3rem] rounded-full object-cover ' src={pers} />
                <div className='text-start review-info'>
                    <p>محمد أحمد</p>
                    <p className='flex items-center text-gray-400 '><ReactStars count={5} onChange={5} size={24} activeColor="#ffd700" value={5} classNames='pointer-events-none'/></p>
                    <p>محلات اوسكار عنوان الاناقة والمصداقية</p>

                </div>
            </div>
            <div className=' flex items-start gap-[1rem] mr-[2rem]'>
                <img className='w-[3rem] h-[3rem] rounded-full object-cover ' src={pers} />
                <div className='text-start review-info'>
                    <p>محمد أحمد</p>
                    <p className='flex items-center text-gray-400 '><ReactStars count={5} onChange={5} size={24} activeColor="#ffd700" value={5} classNames='pointer-events-none'/></p>
                    <p>محلات اوسكار عنوان الاناقة والمصداقية</p>

                </div>
            </div>
            <div className='w-[100%] '>
                <div className='flex items-center gap-[1rem]'>
                    <p className='font-bold m-[.5rem]'>اضافة تقييم للمنتج</p>
                    <p className='flex items-center text-gray-400 '><ReactStars count={5} onChange={5} size={24} activeColor="#ffd700" /></p>
                </div>
                <div className='relative w-[50%] border border-gray-400 rounded-md m-[.5rem]' >
                    <input type='text' className='w-[100%] p-[.5rem] ' placeholder='اضافة رأي......'  />
                    <FiSend className='absolute top-[30%] cursor-pointer left-1 ' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductDetails