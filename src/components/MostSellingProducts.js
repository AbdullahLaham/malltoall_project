import React, { useEffect, useRef, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import ProductComp from './ProductComp/ProductComp';
import {motion} from 'framer-motion'

const MostSellingProducts = () => {
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
    setWidth(result.matches ? (6.5 * element.current.clientWidth) : carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div dir='rtl' className='my-[1rem]'>
      {/* the title section */}
        <div className='w-[100%] flex justify-start '>
          <h3 className='text-2xl font-bold my-[1rem]'>المنتجات الاكثر مبيعا</h3>
        </div>
        {/* markets section */}

      {/* <div className='flex items-center justify-between '>
        
        
      </div> */}

      <motion.div className='carousel cursor-grab overflow-hidden ' ref={carousel} >
          <motion.div drag='x' dragConstraints={{left: 0, right: width}} className='flex bg-lightblue'>
            <motion.div  ref={element} >
              <ProductComp />
            </motion.div>
            <motion.div>
              <ProductComp />
            </motion.div>
            <motion.div>
              <ProductComp />
            </motion.div>
            <motion.div>
              <ProductComp />
            </motion.div>
            <motion.div>
              <ProductComp />
            </motion.div>
            <motion.div>
              <ProductComp />
            </motion.div>
            <motion.div>
              <ProductComp />
            </motion.div>
            <motion.div>
              <ProductComp />
            </motion.div>
          </motion.div>
      </motion.div>
    </div>
  )
}

export default MostSellingProducts

