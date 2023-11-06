import React from 'react'
import Hero from '../components/Hero'

const Men = () => {
  return (
    <div className='h-full w-full'>
      <Hero
        backgroundImage={"../src/images/men.jpg"} 
        heroTitle={"Revamp Your Wardrobe: Shop Stylish Men's Clothing."}
      />
    </div>
  )
}

export default Men