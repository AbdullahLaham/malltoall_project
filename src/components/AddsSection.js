import React, { useEffect, useState } from 'react'
import cart from '../images/cart.jpeg';
import chat from '../images/chat.jpeg';
import about from '../images/about.svg'
const AddsSection = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    const [result, setResult] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });
      
    useEffect(() => {
        console.log(windowSize);
        setResult(window.matchMedia("(max-width: 800px)"));
    }, [windowSize]);
  return (
    <div>
        {!result?.matches ? (<div className='flex items-center justify-center gap-[.8rem] h-[30rem] mx-auto pt-[.2rem]'>
        <div className=' h-[100%] w-[21%] bg-[#F8F5F5] dark:bg-gradient-to-r from-[#bdbdbd] via-[#d4d4d4] to-[#FFFFFF]'>
            <h3 className='font-bold mt-[2.5rem] mb-[2rem] text-[2rem] '>التصنيفات</h3>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className=' text-red-500 bg-white rounded-full w-[1rem] font-semibold  h-[1rem] flex items-center justify-center p-[.6rem]  shadow-sm shadow-black	'>5</p>
                <p className='font-semibold text-[1.1rem] '>ملابس رجالي</p>
            </div>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className=' text-red-500 bg-white rounded-full w-[1rem] font-semibold  h-[1rem] flex items-center justify-center p-[.6rem]  shadow-sm shadow-black	'>5</p>
                <p className='font-semibold text-[1.1rem] '>ملابس حريمي</p>
            </div>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className=' text-red-500 bg-white rounded-full w-[1rem] font-semibold  h-[1rem] flex items-center justify-center p-[.6rem]  shadow-sm shadow-black	'>5</p>
                <p className='font-semibold text-[1.1rem] '>ملابس أطفال</p>
            </div>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className=' text-red-500 bg-white rounded-full w-[1rem] font-semibold  h-[1rem] flex items-center justify-center p-[.6rem]  shadow-sm shadow-black	'>5</p>
                <p className='font-semibold text-[1.1rem] '>جلبابات</p>
            </div>
            <div className='flex items-center justify-between mx-[1.5rem] mt-[1.2rem]'>
                <p className=' text-red-500 bg-white rounded-full w-[1rem] font-semibold  h-[1rem] flex items-center justify-center p-[.6rem]  shadow-sm shadow-black	'>5</p>
                <p className='font-semibold text-[1.1rem] '>عبايات</p>
            </div>
            
            
            
            
            
        </div>

        <div className='w-[50%] bg-[#F89090] rounded-lg h-[100%] dark:bg-gradient-to-r from-[#686868] via-[#949494] to-[#949494]'>
            <div className='w-[100%] flex justify-end'>
                <div  className='w-[60%] text-center text-white m-[1rem] mt-[2rem] '>
                    <p className='text-[.9rem]'>
                    .توجد الكثير من متاحر التسوق لكن غالبا لو احتجت لشراء العديد من المنتجات فانت بحاجة لأكثر من متجر فقمنا بعمل هذا المتجر حيث انه يضم عدة متاجر. حيث يعمل على تسهيل وصول العميل للمنتج المراد شرائه والعروض المتاحة له 
                    </p>
                    <p className='text-[.9rem]'>حيث يقوم هذا المتجر بالعديد من الخدمات منها الدعم لأصحاب المتاجر وتوحيد بيانات المستخدم في متجر واحد ويمكنك أيضا مشاهدة العروض أولا أول ويمكن للمستخدم تحديد أقرب المتاجر في منطقت</p>
                </div>
                
            </div>
            <img className='w-[18rem] m-[1rem] -mt-[3rem] ' src={about} />
        </div>


        <div className='flex flex-col items-center w-[21%] bg-[#F8F5F5] h-[100%] dark:bg-gradient-to-r from-[#bdbdbd] via-[#d4d4d4] to-[#FFFFFF]'>
            <img className='w-[50%] mt-[20%] ' src={chat} />
            <p className='font-semibold text-[1.2rem] mt-[.1rem]'>... شو بتستنى</p>
            <p className='font-semibold text-[1.2rem] mt-[.1rem]'>انضم لسلسلة متاجرنا </p>
            <p className='font-semibold text-[1.2rem] mt-[.1rem]'>و تمتع بعروضنا المتاحة</p>
            <button className='bg-[#F89090] text-white py-[.4rem] px-[3.5rem] rounded-lg mt-[1rem]' >تسجيل </button>
            <button className='border border-[#F89090] text-[#070707] font-semibold mt-[.5rem] py-[.4rem] px-[2.2rem] rounded-lg '>تسجيل الدخول</button>
        </div>
        </div>) : (
            <div dir='rtl' className='m-auto w-[90%] rounded-lg  h-[15rem] addsbg flex flex-col items-start justify-end '>
                <p className='text-white font-bold w-[50%] m-[2rem] flex justify-start'>متجر Mall To All المتجر الاول في فلسطين</p>
            </div>
        )}
    </div>
  )
}

export default AddsSection;