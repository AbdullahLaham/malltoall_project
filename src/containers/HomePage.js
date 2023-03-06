import React from 'react'
import AddsSection from '../components/AddsSection'
import Markets from '../components/Markets'
import MostSellingProducts from '../components/MostSellingProducts'
import Stories from '../components/Stories'
import {motion} from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div>
      <Header />
      <AddsSection />
      <Stories />
      <Markets />
      <MostSellingProducts />
      <Footer />
      {/* <motion.h1 animate={{x: 250}}>Hello</motion.h1> */}
      
    </div>
  )
}

export default HomePage