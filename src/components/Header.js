import React, { useEffect, useState } from 'react'
import moon from '../images/moon.png';
import sun from '../images/constellation.png'
import flag from '../images/flag.png'
import bell from '../images/bell.png'
import logo from '../images/logo.jpg'
import { useDispatch, useSelector } from 'react-redux';
import MenuComp from './headerAccountMenue/Menu';
import { Link } from 'react-router-dom';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {BsBell} from 'react-icons/bs'

import { FiSearch } from 'react-icons/fi'
import {FaListUl} from 'react-icons/fa';
import {GoSettings} from 'react-icons/go';
import {DARK_THEME, LIGHT_THEME} from '../constants';

const Header = () => {
    // authData
    const {authData} = useSelector((state) => state.userReducer);
    const {theme} = useSelector((state) => state?.generalReducer);
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);
     
     const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    const [result, setResult] = useState(false);
    
    const changeTheme = () => {
        if (theme == 'light') {
            dispatch({type: DARK_THEME});
            document.documentElement.classList.add('dark')
        } else {
            dispatch({type: LIGHT_THEME});
            document.documentElement.classList.remove('dark')

        }
        console.log('theme', theme)
    }
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
        setResult(window.matchMedia("(max-width: 600px)"));
    }, [windowSize]);
     
  return (

    <>
        {!result.matches ? <div>
        <div className='flex items-center justify-between pb-[.5rem] px-[1.6rem] '>
            <div className='flex items-center gap-2'>
                <div className='flex items-center bg-black rounded-[20px] cursor-pointer' onClick={() => changeTheme()} >
                    <img className={`w-[1.3rem] m-[.2rem]  cursor-pointer p-[.1rem] rounded-[20px] ${theme == 'dark' ? 'bg-[] bg-gradient-to-r from-[#00C2FF]  to-[#205464] ' : ''}`} src={moon}/>
                    <img className={`w-[1.3rem] m-[.2rem]  cursor-pointer p-[.1rem] rounded-[20px] ${theme == 'light' ? 'bg-[] bg-gradient-to-r from-[#00C2FF]  to-[#205464] ' : ''}`} src={sun} />
                </div>
                <div>
                    <img src={flag} className='rounded-[.2rem] w-[2.3rem] ' />
                </div>
                <div className='relative '>
                    <BsBell className='text-[1.2rem] dark:text-white' />
                    <p className='absolute -top-[.7rem]  -right-[.2rem] text-red-500 bg-white dark:bg-[#5F6590] dark:text-white rounded-full w-[1rem] h-[1rem] flex items-center justify-center p-[.55rem]  shadow-sm shadow-black	'>5</p>
                </div>
            </div>
            
            

            {authData?.email ? (<div className=''>
                <div onClick={() => setShowMenu(!showMenu)} className='flex flex-row-reverse gap-2 cursor-pointer items-center' ><img src={authData?.profile_photo_url}  className='w-[2.2rem] h-[2.2rem] rounded-full object-cover text-xl block'  /> <p className='select-none block'>{authData?.name}</p></div>   
                {showMenu && <MenuComp showMenu={showMenu} setShowMenu={setShowMenu} />}
            </div>) : (
                <div className='flex text-[#B4AEAD]' >
                <p  className='border-r border-[#B4AEAD] text-[#B4AEAD] pr-[.5rem]'>
                    059...
                </p>
                <Link to='/login' className='border-r border-[#B4AEAD] text-[#B4AEAD]'>
                    <p className='border-r border[#B4AEAD] px-[.5rem] h-[100%]' >
                        Login
                    </p>
                </Link>
                <Link to='/register' className='border-r border-[#B4AEAD] text-[#B4AEAD]'>
                    <p className='border-r border[#B4AEAD] px-[.5rem] h-[100%]' >
                        Register
                    </p>
                </Link>
            </div>
            )}
        </div>
        <hr  />
        <div dir='rtl' className='flex items-center justify-between px-[1.6rem] py-[.3rem] '>
            <div className='flex items-center ml-[3rem] w-[15%]'>
                <p className='flex items-center mx-[2rem] flex-row-reverse'>
                    <AiOutlineHeart className='text-gray-400 text-[1.7rem] ' />
                    <div className='flex flex-col items-start text-[#504f4f] '>
                    <Link to='/dashboard/wishlist'>
                        <div className='w-[100%] flex justify-end '>
                        <p className=' text-red-500 bg-white rounded-full w-[1rem] h-[1rem] flex items-center justify-center p-[.6rem]  shadow-sm shadow-black	'>5</p>
                        </div>
                        <p>
                            المفضلة
                        </p>
                    </Link> 
                </div>
                </p>
                <p className='flex items-center mx-[2rem] flex-row-reverse'>
                    <AiOutlineShoppingCart className='text-gray-400 text-[1.7rem] ' />
                    <div className='flex flex-col items-start text-[#504f4f] '>
                    <Link to='/dashboard/wishlist'>
                        <div className='w-[100%] flex justify-end '>
                        <p className=' text-red-500 bg-white rounded-full w-[1rem] h-[1rem] flex items-center justify-center p-[.6rem]  shadow-sm shadow-black	'>5</p>
                        </div>
                        <p>
                            السلة
                        </p>
                    </Link> 
                </div>
                </p>
            </div>

            <div className='w-[50%] relativeborder border border-gray-300 relative rounded-lg'>
                <input  type={'text'} className='border-none outline-none rounded-lg w-[100%] p-[.6rem] ' placeholder='ابحث عن المنتج أو المتجر'  />
                <FiSearch  className='absolute top-[33%] left-2  '/>
            </div>
            <img src={logo} className='w-[8rem] ' />
        </div>
        <hr />
        <div className='flex justify-start items-center  gap-3 pr-[2rem] flex-row-reverse py-[1rem]'>
            <p className='font-bold cursor-pointer '>الرئيسية</p>
            <p className='font-bold cursor-pointer '>كيف أشتري</p>
            <p className='font-bold cursor-pointer '>مركز المساعدة</p>
            <p className='font-bold cursor-pointer '>أخر العروض</p>
            <p className='font-bold cursor-pointer '>المدونة</p>
        </div>
        <hr />
    </div> :
    <div dir='rtl'>
        <div className='flex items-center justify-between px-[1.6rem] '>
            <FaListUl />
            <div className='relative '>
                <img src={bell} className=' w-[1.3rem] ' />
                <p className='absolute -top-[.7rem]  -right-[.2rem] text-red-500 bg-white rounded-full w-[1rem] h-[1rem] flex items-center justify-center p-[.5rem]  shadow-sm shadow-black	'>5</p>
            </div>
        </div>
        <div className='flex items-center justify-between px-[1.2rem]'>
            <div className='text-white bg-red-600 text-2xl  p-[.8rem] rounded-md cursor-pointer'>
                <GoSettings className='text-white   ' />
            </div>
            <div className='w-[80%] relativeborder border border-gray-300 relative rounded-lg m-[.8rem]'>
                <input  type={'text'} className='border-none outline-none rounded-[.9rem] w-[100%] p-[.6rem] ' placeholder='ابحث عن المنتج أو المتجر'  />
                <FiSearch  className='absolute top-[34%] left-2  '/>
            </div>
        </div>
    </div>
     }
    </>
  )
}

export default Header;
