import React from 'react'
import user from '../img/cover.jpg'
import location from '../images/location.png';
import chat from '../images/chat.png';

const MarketDetails = () => {
  return (
    <div dir='rtl'>
        {/* market general information */}
        <div className='flex items-center gap-[1rem] bg-red-300 p-[2rem] text-white'>
            {/* market image */}
            <img src={user} className='w-[5rem] h-[5rem] object-cover' />
            <div className='flex flex-col gap-[.5rem]'>
                <p className='text-start '>محلات اوسكار</p>
                <p className='text-start text-[.8rem]'>رقم المحل :05944335566</p>

                <div className='flex items-center justify-between px-[.4rem] py-[.5rem] gap-[2rem] bg-white text-gray-500'>
                    <p className='flex items-center gap-1'>غزة - شارع عمر المختار <img className='w-[1rem]' src={location} /></p>
                    <p className='flex items-center gap-1'>تواصل معنا <img className='w-[1rem]' src={chat} /></p>
                </div>
            </div>
        </div>

        {/* market products and services */}
        <div dir='rtl' className='flex items-center justify-center gap-[.8rem] h-[30rem] mx-auto '>
        <div className=' h-[100%] border border-gray-300 px-[1.5rem]'>
            
        </div>
        <div className=' h-[100%] border border-gray-300 px-[1.5rem]'>
            <h3 className='font-bold mt-[2.5rem] mb-[2rem] text-[1.5rem] '>تصنيفات المتجر</h3>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>ملابس رجالي</p>
            </div>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>ملابس حريمي</p>
            </div>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>ملابس أطفال</p>
            </div>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>جلبابات</p>
            </div>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className='font-semibold text-[1.1rem] '>عبايات</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default MarketDetails