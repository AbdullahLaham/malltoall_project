import React, { useEffect, useRef, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import ProductComp from './ProductComp/ProductComp';
import {motion} from 'framer-motion'

const MostSellingProducts = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])
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
            <motion.div>
              <ProductComp />
            </motion.div>
          </motion.div>
      </motion.div>
    </div>
  )
}

export default MostSellingProducts

