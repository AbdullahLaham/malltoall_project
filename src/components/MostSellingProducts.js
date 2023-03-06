import React, { useEffect, useRef, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import ProductComp from './ProductComp/ProductComp';
import {motion} from 'framer-motion'
import {BsFillLightningChargeFill} from 'react-icons/bs'
const MostSellingProducts = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const element = useRef();

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
const [result, setResult] = useState(false);

const clothesCategories = [
  {title: 'ملابس رجالي'},
  {title: 'ملابس حريمي'},
  {title: 'ملابس أطفال'},
  {title: 'ملابس محير'},
 ]
 const ResturantCategories = [
  {title: 'مطعم التايلندي  '},
  {title: 'مطعم الطابون  '},
  {title: 'مطعم سنون'},
  {title: 'مطعم التايلندي  '},
  {title: 'مطعم الطابون  '},
  {title: 'مطعم سنون'},
  {title: 'مطعم التايلندي  '},
  {title: 'مطعم الطابون  '},
  {title: 'مطعم سنون'},
 ]
 const AccessoriesCategories = [
  {title: 'سماعات '},
  {title: 'اساور '},
  {title: "ساعات"},
  {title: 'خواتم '},
  {title: 'عطور '},
  {title: "هدايا"},
  {title: 'سماعات '},
  {title: 'اساور '},
  {title: "ساعات"},
 ]
 const FreezersCategories = [
  {title: 'اسماك '},
  {title: 'البان '},
  {title: "اجبان"},
  {title: 'لحوم مجمدة '},
  {title: 'لحوم طازجة '},
 ]
 const HomeToolsCategories = [
  {title: 'ملاعق '},
  {title: 'طناجر '},
  {title: "كاسات"},
  {title: 'فناجين'},
  {title: 'ترامس قهوة'},
 ]
 const snacksCategories = [
  {title: 'مكسرات '},
  {title: 'شوكلاتة  '},
  {title: "بسكويت"},
  {title: 'شيبس'},
 ]

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
        <div className='w-[100%] flex items-center justify-start '>
          <BsFillLightningChargeFill className='text-[1.4rem]' />
          <h3 className='text-2xl font-bold my-[1rem]'>ملابس</h3>
        </div>

        <div className='flex items-center justify-start '>
          {clothesCategories?.map((item) => {
            return (
              <p className='ml-[1rem] text-[#999999] font-semibold cursor-pointer'>{item?.title}</p>
            )
          })}
        </div>
      

      {/* markets section */}
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


      {/* resturants */}


      {/* the title section */}
      <div className='w-[100%] flex items-center justify-start '>
        <BsFillLightningChargeFill className='text-[1.4rem]' />
        <h3 className='text-2xl font-bold my-[1rem]'>مطاعم</h3>
      </div>

      <div className='flex items-center justify-start '>
        {ResturantCategories?.map((item) => {
          return (
            <p className='ml-[1rem] text-[#999999] font-semibold cursor-pointer'>{item?.title}</p>
          )
        })}
      </div>
      
      

      {/* markets section */}
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








      
      {/* the title section */}
      <div className='w-[100%] flex items-center justify-start '>
        <BsFillLightningChargeFill className='text-[1.4rem]' />
        <h3 className='text-2xl font-bold my-[1rem]'>اكسسوارات ومستحضرات التجميل</h3>
      </div>

      <div className='flex items-center justify-start '>
        {AccessoriesCategories?.map((item) => {
          return (
            <p className='ml-[1rem] text-[#999999] font-semibold cursor-pointer'>{item?.title}</p>
          )
        })}
      </div>
      
      

      {/* markets section */}
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



      
      {/* the title section */}
      <div className='w-[100%] flex items-center justify-start '>
        <BsFillLightningChargeFill className='text-[1.4rem]' />
        <h3 className='text-2xl font-bold my-[1rem]'>مجمدات وأجبان وألبان</h3>
      </div>

      <div className='flex items-center justify-start '>
        {FreezersCategories?.map((item) => {
          return (
            <p className='ml-[1rem] text-[#999999] font-semibold cursor-pointer'>{item?.title}</p>
          )
        })}
      </div>
      
      

      {/* markets section */}
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

  
      {/* the title section */}
      <div className='w-[100%] flex items-center justify-start '>
        <BsFillLightningChargeFill className='text-[1.4rem]' />
        <h3 className='text-2xl font-bold my-[1rem]'>الأدوات المنزلية وكهربائية</h3>
      </div>

      <div className='flex items-center justify-start '>
        {HomeToolsCategories?.map((item) => {
          return (
            <p className='ml-[1rem] text-[#999999] font-semibold cursor-pointer'>{item?.title}</p>
          )
        })}
      </div>
      
      

      {/* markets section */}
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

      


      {/* the title section */}
      <div className='w-[100%] flex items-center justify-start '>
        <BsFillLightningChargeFill className='text-[1.4rem]' />
        <h3 className='text-2xl font-bold my-[1rem]'>مسليات</h3>
      </div>

      <div className='flex items-center justify-start '>
        {snacksCategories?.map((item) => {
          return (
            <p className='ml-[1rem] text-[#999999] font-semibold cursor-pointer'>{item?.title}</p>
          )
        })}
      </div>
      
      

      {/* markets section */}
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

