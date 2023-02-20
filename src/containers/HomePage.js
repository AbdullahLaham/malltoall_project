import React from 'react'
import AddsSection from '../components/AddsSection'
import Markets from '../components/Markets'
import MostSellingProducts from '../components/MostSellingProducts'
import Stories from '../components/Stories'
import {motion} from 'framer-motion'
const HomePage = () => {
  return (
    <div>
      <Stories />
      <AddsSection />
      <Markets />
      <MostSellingProducts />
      {/* <motion.h1 animate={{x: 250}}>Hello</motion.h1> */}
      
    </div>
  )
}

export default HomePage