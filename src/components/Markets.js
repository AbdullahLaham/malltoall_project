import React from 'react'
import user from '../img/cover.jpg'
import {HiLocationMarker} from 'react-icons/hi';
const Markets = () => {
  return (
    <div dir='rtl' className='my-[1rem]'>
      {/* the title section */}
        <div className='w-[100%] flex justify-start '>
          <h3 className='text-2xl font-bold my-[1rem]'>المتاجر</h3>
        </div>
        {/* markets section */}
      <div className='flex items-center justify-between '>
        <div className='flex flex-col justify-between items-center shadow-md shadow-[#00000031] w-[15rem] p-[1.2rem] rounded-lg'>
          {/* market image */}
          <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
          {/* market description */}
          <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
          {/* market location */}
          <div className='flex items-center justify-center my-[.4rem]'>
            <HiLocationMarker className='text-red-500 ' />
            <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
            
          </div>
        </div>
        <div className='flex flex-col justify-between items-center shadow-md shadow-[#00000031] w-[15rem] p-[1.2rem] rounded-lg'>
          {/* market image */}
          <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
          {/* market description */}
          <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
          {/* market location */}
          <div className='flex items-center justify-center my-[.4rem]'>
            <HiLocationMarker className='text-red-500 ' />
            <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
            
          </div>
        </div>
        <div className='flex flex-col justify-between items-center shadow-md shadow-[#00000031] w-[15rem] p-[1.2rem] rounded-lg'>
          {/* market image */}
          <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
          {/* market description */}
          <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
          {/* market location */}
          <div className='flex items-center justify-center my-[.4rem]'>
            <HiLocationMarker className='text-red-500 ' />
            <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
            
          </div>
        </div>
        <div className='flex flex-col justify-between items-center shadow-md shadow-[#00000031] w-[15rem] p-[1.2rem] rounded-lg'>
          {/* market image */}
          <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
          {/* market description */}
          <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
          {/* market location */}
          <div className='flex items-center justify-center my-[.4rem]'>
            <HiLocationMarker className='text-red-500 ' />
            <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
            
          </div>
        </div>
        <div className='flex flex-col justify-between items-center shadow-md shadow-[#00000031] w-[15rem] p-[1.2rem] rounded-lg'>
          {/* market image */}
          <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
          {/* market description */}
          <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
          {/* market location */}
          <div className='flex items-center justify-center my-[.4rem]'>
            <HiLocationMarker className='text-red-500 ' />
            <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Markets