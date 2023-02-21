import React, { useEffect, useRef, useState } from 'react'
import user from '../img/cover.jpg'
import {HiLocationMarker} from 'react-icons/hi';
import {motion} from 'framer-motion'

const Markets = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const element = useRef();
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
  useEffect(() => {
    setWidth(result.matches ? (5.8 * element.current.clientWidth) : carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div dir='rtl' className='my-[1rem]'>
      {/* the title section */}
        <div className='w-[100%] flex justify-start '>
          <h3 className='text-2xl font-bold my-[1rem]'>المتاجر</h3>
        </div>

        {/* markets section */}
      <motion.div className='carousel cursor-grab overflow-hidden ' ref={carousel} >
        <motion.div drag='x' dragConstraints={{left: 0, right: width}} className='flex bg-lightblue' >
          <motion.div className='flex flex-col justify-between  items-center shadow-md shadow-[#00000031] min-w-[15rem] m-[.5rem] p-[1.2rem] rounded-lg' ref={element}>
              {/* market image */}
            <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
              {/* market description */}
            <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
              {/* market location */}
            <div className='flex items-center justify-center my-[.4rem]'>
              <HiLocationMarker className='text-red-500 ' />
              <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
              
            </div>
          </motion.div>
          <motion.div className='flex flex-col justify-between  items-center shadow-md shadow-[#00000031] min-w-[15rem] m-[.5rem] p-[1.2rem] rounded-lg'>
              {/* market image */}
            <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
              {/* market description */}
            <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
              {/* market location */}
            <div className='flex items-center justify-center my-[.4rem]'>
              <HiLocationMarker className='text-red-500 ' />
              <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
              
            </div>
          </motion.div>
          <motion.div className='flex flex-col justify-between  items-center shadow-md shadow-[#00000031] min-w-[15rem] m-[.5rem] p-[1.2rem] rounded-lg'>
              {/* market image */}
            <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
              {/* market description */}
            <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
              {/* market location */}
            <div className='flex items-center justify-center my-[.4rem]'>
              <HiLocationMarker className='text-red-500 ' />
              <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
              
            </div>
          </motion.div>
          <motion.div className='flex flex-col justify-between  items-center shadow-md shadow-[#00000031] min-w-[15rem] m-[.5rem] p-[1.2rem] rounded-lg'>
              {/* market image */}
            <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
              {/* market description */}
            <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
              {/* market location */}
            <div className='flex items-center justify-center my-[.4rem]'>
              <HiLocationMarker className='text-red-500 ' />
              <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
              
            </div>
          </motion.div>
          <motion.div className='flex flex-col justify-between  items-center shadow-md shadow-[#00000031] min-w-[15rem] m-[.5rem] p-[1.2rem] rounded-lg'>
              {/* market image */}
            <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
              {/* market description */}
            <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
              {/* market location */}
            <div className='flex items-center justify-center my-[.4rem]'>
              <HiLocationMarker className='text-red-500 ' />
              <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
              
            </div>
          </motion.div>
          <motion.div className='flex flex-col justify-between  items-center shadow-md shadow-[#00000031] min-w-[15rem] m-[.5rem] p-[1.2rem] rounded-lg'>
              {/* market image */}
            <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
              {/* market description */}
            <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
              {/* market location */}
            <div className='flex items-center justify-center my-[.4rem]'>
              <HiLocationMarker className='text-red-500 ' />
              <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
              
            </div>
          </motion.div>
          <motion.div className='flex flex-col justify-between  items-center shadow-md shadow-[#00000031] min-w-[15rem] m-[.5rem] p-[1.2rem] rounded-lg'>
              {/* market image */}
            <img className='w-[7rem] h-[5rem] object-cover rounded-lg ' src={user} />
              {/* market description */}
            <p className='w-[80%] text-[.9rem] mt-[.6rem] '>محلات اوسكار لبيع جميع انواع الجلبابات والعبايات</p>
              {/* market location */}
            <div className='flex items-center justify-center my-[.4rem]'>
              <HiLocationMarker className='text-red-500 ' />
              <p className='text-[.8rem]'>غزة_ شارع عمر المختار</p>
              
            </div>
          </motion.div>
          
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Markets