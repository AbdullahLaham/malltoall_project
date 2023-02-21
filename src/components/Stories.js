import React, { useEffect, useRef, useState } from 'react'
import story from '../img/img2.png';
import {motion} from 'framer-motion'

const Stories = () => {
    

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

    setWidth(result.matches ? (17 * element.current.clientWidth) : carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div dir='rtl' className='carousel cursor-grab overflow-hidden m-[.5rem]' ref={carousel} >
        <motion.div drag='x' dragConstraints={{left: 0, right: width}} className='flex bg-lightblue'>
            <motion.div className='mx-[.6rem]' ref={element} >
                <div className='bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
            <motion.div>
                <div className='mx-[.6rem] bg-gradient-to-r from-[#FF6F33] relative to-[#FF1D00] w-[5rem] h-[5rem] rounded-full p-[.5rem]'>
                    <img className='pointer-events-none absolute w-[90%] h-[90%]  top-[.25rem] right-[.2rem] rounded-full ' src={story} />
                </div>
                <p>shoes</p>
            </motion.div>
        </motion.div>
        
    </motion.div>
  )
}

export default Stories;
