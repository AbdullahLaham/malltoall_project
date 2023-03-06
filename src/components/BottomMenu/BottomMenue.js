import React, { useEffect, useState } from 'react'
import {AiOutlineHeart, AiOutlineHome} from 'react-icons/ai';
import {GrNotification} from 'react-icons/gr';

import {IoIosNotificationsOutline} from 'react-icons/io';
import {CiTextAlignLeft} from 'react-icons/ci';
import {BsBag, BsPersonCircle} from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './BottomMenu.css'
const nav = [
    {
        name: 'Categories',
        icon: <CiTextAlignLeft  />
    },
    {
        name: 'Cart',
        icon: <BsBag  />
    },
    {
        name: 'Home',
        icon: <AiOutlineHome  />
    },
    {
        name: 'Notification',
        icon: <IoIosNotificationsOutline  />
    },
    {
        name: 'Account',
        icon: <BsPersonCircle />
    },
];
const BottomMenue = ({showAccountSidebar, setShowAccountSidebar}) => {
    const [selected, setSelected] = useState('Home');
    // const isMobile = useMediaQuery("(min-width: 800px)");
    const {authData} = useSelector((state) => state?.userReducer);
    const [isMobile, setIsMobile] = useState(false);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    const navigate = useNavigate();


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
        setIsMobile(window.matchMedia("(max-width: 600px)"));
    }, [windowSize]);
  return (
    isMobile?.matches && (
    
    // <div className='navigation'>
    //   <ul>
    //     <li className='list'>
    //       <a href='#'>
    //         <span className='icon'><AiOutlineHeart className='text-[2rem]'/></span>
    //         <span className='text'>Wishlist</span>
    //         <span className='circle'></span>
    //       </a>
    //     </li>
    //     <li className='list'>
    //       <a href='#'>
    //         <span className='icon'><BsBag sx={{fontSize: '1.5rem'}} /></span>
    //         <span className='text'>Cart</span>
    //         <span className='circle'></span>
    //       </a>
    //     </li>
    //     <li className='list'>
    //       <a href='#'>
    //         <span className='icon'><AiOutlineHome  /></span>
    //         <span className='text'>Home</span>
    //         <span className='circle'></span>
    //       </a>
    //     </li>
    //     <li className='list'>
    //       <a href='#'>
    //         <span className='icon'><IoIosNotificationsOutline  /></span>
    //         <span className='text'>Notices</span>
    //         <span className='circle'></span>
    //       </a>
    //     </li>
    //     <li className='list'>
    //       <a href='#'>
    //         <span className='icon'>{authData?.email ? <img className='w-[2.2rem] h-[2.2rem] rounded-full object-cover text-xl'  src={authData?.profile_photo_url} /> : <BsPersonCircle />}</span>
    //         <span className='text'>Account</span>
    //         <span className='circle'></span>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
    
    <div className='fixed z-10 bottom-0 left-0 right-0 bg-white w-[100%] mx-auto max-w-[95%] h-[4.5rem] max-h-[4.5rem] flex items-center justify-center rounded-[10px] lg:hidden bg-gradient-to-r  from-[#2196f3] to-[#e91e63]'> 
        {/* {
    .8   nav.map((item) => {
                return <div className={`flex flex-col items-center relative text-gray-600 ${item.name == selected ? 'mb-[1rem]' : ''}`}>
                    <p onClick={() => {setSelected(item?.name)}} className={`text-[1.5rem] ${item?.name == selected ? 'p-[.5rem] bg-orange-500 text-white rounded-[50%] ' : ''}`}>{item?.icon}</p>
                    <p className='text-[.9rem]'>{item?.name}</p>
                </div>
            })
        } */}


         <div className={`menu-item font-semibold text-center flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${selected == 'Wishlist' ? 'active' : ''}`}>
                <p onClick={() => {setSelected('Wishlist'); navigate('/dashboard/wishlist')}} className={`icon relative leading-12  text-[1.5rem] text-center text-white  ${'Wishlist' == selected ? 'p-[.6rem] text-white rounded-[50%] ' : ''}`}><AiOutlineHeart className='text-[2rem]'/></p>
                <p className='text text-[.75rem] font-semibold absolute text-white tracking-wider	 translate-y-[20px] '>Wishlist</p>
                {/* <p className='circle'></p> */}
        </div>

        <div className={`menu-item font-semibold text-center flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${selected == 'Cart' ? 'active' : ''}`}>
                <p onClick={() => {setSelected('Cart'); navigate('/dashboard/cart')}} className={`icon relative leading-12  text-[1.5rem] text-center text-white ${'Cart' == selected ? 'p-[.6rem] text-white rounded-[50%] ' : ''}`}><BsBag sx={{fontSize: '1.5rem'}} /></p>
                <p className='text text-[.75rem] font-semibold absolute text-white tracking-wider	 translate-y-[20px] '>Cart</p>
                {/* <p className='circle'></p> */}
        </div>

        <div className={`menu-item font-semibold text-center flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${selected == 'Home' ? 'active' : ''}`}>
                <p onClick={() => {setSelected('Home'); navigate('/')}} className={`icon relative leading-12  text-[1.5rem] text-center text-white ${'Home' == selected ? 'p-[.6rem] text-white rounded-[50%] ' : ''}`}><AiOutlineHome  /></p>
                <p className='text text-[.75rem] font-semibold absolute text-white tracking-wider	 translate-y-[20px] '>Home</p>
                {/* <p className='circle'></p> */}
        </div>
        <div className={`menu-item font-semibold text-center flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${selected == 'Notification' ? 'active' : ''}`}>
                <p onClick={() => {setSelected('Notification')}} className={`icon relative leading-12  text-[1.5rem] text-center text-white ${'Notification' == selected ? 'p-[.6rem] text-white rounded-[50%] ' : ''}`}><IoIosNotificationsOutline  /></p>
                <p className='text text-[.75rem] font-semibold absolute text-white tracking-wider	 translate-y-[20px] '>Notices</p>
                {/* <p className='circle'></p> */}
        </div>

        <div className={`menu-item font-semibold text-center flex flex-col items-center justify-center h-[100%] max-h-[100%] min-h-[100%] w-[20%]  relative text-gray-600 ${selected == 'Account' ? 'active' : ''}`}>
                <p onClick={() => {setShowAccountSidebar(true); navigate('/dashboard/profile')}} className={`icon relative leading-12  text-[1.5rem] text-center text-white ${'Account' == selected ? 'p-[.6rem] text-white rounded-[50%] ' : ''}`}> {authData?.email ? <img className='w-[2.2rem] h-[2.2rem] rounded-full object-cover text-xl'  src={authData?.profile_photo_url} /> : <BsPersonCircle />}</p>
                <p className='text text-[.75rem] font-semibold absolute text-white tracking-wider translate-y-[20px] '>Account</p>
                {/* <p className='circle'></p> */}
        </div>
        <div className='indicator absolute w-[75px] h-[75px] bg-gradient-to-r from-[#2196f3] to-[#e91e63] border-[6px] border-white rounded-[50%] -z-[10] -top-[50%] left-0'>

        </div>
    </div> 
    
    
    
    
    
    
    )
  )
}


export default BottomMenue;
