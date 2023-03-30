import React from 'react'
import Home from '../Components/Home/Home'
import Tours from '../Components/Tours/Tour'
import Cards from '../Components/Cards/Cards'
import Discount from '../Components/Discount/Discount'
import Review from '../Components/Review/Review'


function HomePage() {
  return (
    <>
      <div>
        <Home />
        <Cards />
        <Tours />
        
        <Review/>
        <Discount />
      </div>
    </>
  )
}

export default HomePage