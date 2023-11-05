import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='h-full w-full'>
      <Hero
        backgroundImage={"../src/images/shoe-1.jpg"} 
        heroTitle={"Discover Style and Innovation Today."}
      />
    </div>
  )
}

export default Home