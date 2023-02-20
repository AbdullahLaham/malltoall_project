import React from 'react'
import AddsSection from '../components/AddsSection'
import Markets from '../components/Markets'
import MostSellingProducts from '../components/MostSellingProducts'
import Stories from '../components/Stories'

const HomePage = () => {
  return (
    <div>
      <Stories />
      <AddsSection />
      <Markets />
      <MostSellingProducts />
    </div>
  )
}

export default HomePage