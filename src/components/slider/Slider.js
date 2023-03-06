import React, { useState } from 'react'
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import prod1 from '../../images/prod1.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./slider.css";


const Slider = () => {
  
  return (
    <div>
        <Swiper className=""
            // install Swiper modules
            modules={[Pagination, A11y, Autoplay]}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide >
                
                <div className="W-[100%] flex justify-center h-[15rem] ">
                    <p className='bg-black text-white rounded-md absolute p-[.4rem]  left-1 top-1 '>مميزة</p>
                    <img className="object-cover   w-[100%] h-[100%] left-1 top-1 " src={prod1} />
                </div>
                
            </SwiperSlide>
            <SwiperSlide >
                
                <div className="W-[100%] flex justify-center h-[15rem] ">
                    <p className='bg-black text-white rounded-md absolute p-[.4rem]  left-1 top-1  '>مميزة</p>
                    <img className=" object-cover  w-[100%] h-[100%]  left-1 top-1  " src={prod1} />
                </div>
                
            </SwiperSlide>
            <SwiperSlide >
                
                <div className="W-[100%] flex justify-center h-[15rem] ">
                    <p className='bg-black text-white rounded-md absolute p-[.4rem] left-1 top-1 '>مميزة</p>
                    <img className=" object-cover  w-[100%] h-[100%]  " src={prod1} />
                </div>
                
            </SwiperSlide>
            
            {/* {categoryProducts?.map((product, i) => {
                return (                    
                      (<SwiperSlide >
                        <p className='bg-orange-400 text-black rounded-md absolute p-[.4rem]  '>SALE -50%</p>
                        <div className="W-[100%] flex justify-center mt-[1.5rem] ">
                          <img className="block mt-[.5rem] w-[60%] max-w-[25rem] overflow-hidden max-h-[27rem]  object-cover" src={product?.image} />
                        </div>
                        <div className="flex items-center w-[100%] justify-between p-[.5rem]">
                          <p className="font-bold text-3xl z-10">{product.name}</p>
                          <p className="text-[#278f34]">{product.price}</p>
                        </div>
                        <div className="flex items-center w-[100%] justify-between p-[.5rem]">
                          <p className="text-gray-400 ">Brand Name</p>
                          <p className="line-through text-green decoration-[#ec4848] text-gray-600">139.000</p>
                        </div>
                    </SwiperSlide>)
                )
              })} */}
        </Swiper>


    </div>
  )
}

export default Slider ;