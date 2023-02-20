import React from 'react'
import ReactStars from "react-rating-stars-component";
import ProductComp from './ProductComp/ProductComp';

const MostSellingProducts = () => {
  return (
    <div dir='rtl' className='my-[1rem]'>
      {/* the title section */}
        <div className='w-[100%] flex justify-start '>
          <h3 className='text-2xl font-bold my-[1rem]'>المنتجات الاكثر مبيعا</h3>
        </div>
        {/* markets section */}
      <div className='flex items-center justify-between '>
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
        <ProductComp />
      </div>
    </div>
  )
}

export default MostSellingProducts

