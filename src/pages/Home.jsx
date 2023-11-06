import React from 'react'
import Hero from '../components/Hero'
import Store from '../components/Store'

const Home = () => {
  return (
    <div className='bg-red-100 screen-height'>
      <Hero
        backgroundImage={"../src/images/shoe-1.jpg"} 
        heroTitle={"Discover Style and Innovation Today."}
      />
      <div className='py-8 px-2 md:px-12'>
        <Store />
      </div>
    </div>
  )
}

export default Home