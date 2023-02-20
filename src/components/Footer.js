// import { Button, InputBase, TextField } from '@mui/material'
import React from 'react'
import logo from '../images/logo.jpg'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'
import Apple from '../images/Available_on_the_App_Store_logo.png';
import Google from '../images/Google_Play_Store_badge_EN.svg.png';
import {HiOutlineMail} from 'react-icons/hi'
// import logo from '../images/logo.png'
// import google from '../images/Google_Play_Store_badge_EN.svg.png';
// import apple from '../images/Available_on_the_App_Store_logo.png'
const Footer = () => {
  return (
    <div className='bg-[#8C8B8B] text-white m-0'>
      <div className='flex justify-center py-[1rem] border-t-2 border border-t-gray-300 border-b-gray-400  relative '>
      <div className='flex flex-col lg:flex-row justify-between w-[85%] h-[100%] max-h-[100%]'>
        <div className='justify-between flex flex-col lg:flex-row text-[.9rem] h-[100%] max-h-[100%]'>
        <div className='w-[100%] lg:w-auto flex flex-col lg:flex-row md:flex-row m-auto text-start h-[100%] max-h-[100%]'>
            <div dir='rtl' className='flex flex-col  lg:w-[13rem] w-[100%] gap-[.4rem] h-[100%] max-h-[100%]'>
              <p className='font-bold '>أصحاب المتاجر</p>
              <p className='text-gray'>هل ترغب في البيع على متجر مول تو أول؟</p>
              <p>            <button className='bg-[#F89090] text-white py-[.4rem] px-[.5rem] rounded-lg mt-[1rem]' >اشترك معنا الان!</button> </p>

            </div>


            <div dir='rtl' className='flex  flex-col gap-[.3rem] lg:w-[13rem] w-[100%]  justify-between h-[100%] max-h-[100%]'>
              <p className='font-bold '>خدمة الزبائن</p>
              <p className='text-[.7rem]'>الابلاغ عن اساءة الاستخدام</p>
              <p className='text-[.7rem]'>سياسة الاستبدال</p>
              <p className='text-[.7rem]'>الاحكام والشروط</p>
              <p className='text-[.7rem]'>طرق التسليم</p>
              <p className='text-[.7rem]'>كيفية الشراء من المتجر</p>
              <p className='text-[.7rem]'>الابلاغ عن ارجاع او استبدال الطرود</p>
            </div>


            <div dir='rtl' className='flex  flex-col gap-[.3rem] lg:w-[13rem] w-[100%]  justify-between h-[100%] max-h-[100%]'>
              <p className='font-bold '>المعلومات</p>
              <p className='text-[.7rem]'>عن مول تو أول</p>
              <p className='text-[.7rem]'>تواصل معنا</p>
              <p className='text-[.7rem]'>تصنيفات المتجر</p>
              <p className='text-[.7rem]'>طرق التسليم</p>
              <p className='text-[.7rem]'>الدعم الفني</p>
            </div>


          </div>
          

        </div>
        <div dir='rtl' className='flex flex-col gap-[.8rem] h-[100%] w-[25%]'>
            <p className='text-start'>متجر مول تو أول</p>
            <img src={logo} className='w-[8rem] ' />
            <p className='text-[.4rem] text-start'>تابعنا على وسائل التواصل الاجتماعي لتعرف كل جديد ومميز</p>
            <div className='flex items-center justify-between gap-2 flex-row-reverse w-[65%] '>
              <img src={youtube} />
              <img src={twitter} />
              <img src={instagram} />
              <img src={facebook} />
            </div>
          </div>
      </div>
      
      
    </div>
    
      <div className='flex items-center justify-between p-[.6rem] w-[86%] mx-auto'>

        <div dir='rtl' className='flex flex-col gap-2'>
          <p className='text-[.8rem] text-start'>حمل تطبيقنا لتسهيل وصول المنتجات اليك...</p>
          <div className='flex items-center justify-around'>
            <img className='w-[8rem]' src={Apple} />
            <img className='w-[8rem]' src={Google} />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[.8rem] text-start'>جميع الحقوق محفوظة - متجر مول تو أول</p>
          <div className='flex items-center gap-1'><HiOutlineMail /> <p className='text-[.8rem] text-start'>malltoall@gmail.com</p></div>
        </div>
      </div>

    </div>
  )
}

export default Footer;