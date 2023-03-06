import React from 'react'
import user from '../img/cover.jpg'
import location from '../images/location.png';
import chat from '../images/chat.png';
import ProductComp from '../components/ProductComp/ProductComp';
import {BsArrowLeft} from 'react-icons/bs';
const MarketDetails = () => {
  return (
    <div dir='rtl'>
        {/* market general information */}
        <div className='lg:flex hidden items-center gap-[1rem] bg-red-500 p-[2rem] text-white'>
            {/* market image */}
            <img src={user} className='w-[5rem] h-[5rem] object-cover' />
            <div className=' flex-col gap-[.5rem]'>
                <p className='text-start '>محلات اوسكار</p>
                <p className='text-start text-[.8rem]'>رقم المحل :05944335566</p>

                <div className='flex items-center justify-between px-[.4rem] py-[.5rem] gap-[2rem] bg-white text-gray-500'>
                    <p className='flex items-center gap-1'>غزة - شارع عمر المختار <img className='w-[1rem]' src={location} /></p>
                    <p className='flex items-center gap-1'>تواصل معنا <img className='w-[1rem]' src={chat} /></p>
                </div>
            </div>
        </div>

        <div className='lg:hidden items-center gap-[1rem] bg-red-500 p-[2rem] text-white'>
            {/* market image */}
            <div className='w-[60%] text-[1.2rem] justify-between flex items-center mb-[.5rem] mr-[30%]'>
                <p>تفاصيل المتجر</p>
                <BsArrowLeft className='text-white ' />
            </div>
            <div className='flex items-center justify-start gap-[1rem] mb-[1rem] '>
                <img src={user} className='w-[5rem] h-[5rem] object-cover' />
                <div>
                    <p className='text-start '>محلات اوسكار</p>
                    <p className='text-start text-[.8rem]'>رقم المحل :05944335566</p>
                </div>
            </div>
            <div className='flex items-center justify-between px-[.4rem] py-[.5rem] gap-[2rem] bg-white text-gray-500'>
                <p className='flex items-center gap-1'>غزة - شارع عمر المختار <img className='w-[1rem]' src={location} /></p>
                <p className='flex items-center gap-1'>تواصل معنا <img className='w-[1rem]' src={chat} /></p>
            </div>
        </div>
        {/* market products and services */}
        <div dir='rtl' className='flex items-start justify-center gap-[.8rem] mx-auto my-[1rem]'>
        <div className=' min-h-[30rem] h-[100%] border border-gray-300 px-[1.5rem] w-[80%] '>
            <div className='flex items-end justify-between border-b pb-[.2rem] border-b-gray-400 relative'>
                <p className='font-bold text-xl pb-1 '>أخر المنتجات</p>
                <p className='absolute h-[.2rem] w-[7rem] bg-red-300 right-0 bottom-0'></p>
                <button className='bg-[#F89090] text-white py-[.4rem] px-[2rem] rounded-lg mt-[1rem]' >الكل</button>
            </div>
            <div className='flex flex-wrap items-center justify-between'>
            <ProductComp />
            <ProductComp />
            <ProductComp />
            <ProductComp />
            <ProductComp />
            </div>
        </div>
        <div dir='rtl' className=' border border-gray-300 px-[1.5rem] min-h-[30rem] h-[100%]'>
            <h3 className='font-bold mt-[2.5rem] mb-[2rem] text-[1.5rem] '>تصنيفات المتجر</h3>
            <div className='flex items-center justify-start cursor-pointer mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>ملابس رجالي</p>
            </div>
            <div className='flex items-center justify-start cursor-pointer mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>ملابس حريمي</p>
            </div>
            <div className='flex items-center justify-start cursor-pointer mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>ملابس أطفال</p>
            </div>
            <div className='flex items-center justify-start cursor-pointer mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>جلبابات</p>
            </div>
            <div className='flex items-center justify-start cursor-pointer mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>عبايات</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MarketDetails;