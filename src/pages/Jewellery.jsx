import React from 'react'
import Hero from '../components/Hero'

const Jewellery = () => {
  return (
    <div className='h-full w-full'>
      <Hero
        backgroundImage={"../src/images/jewellery.jpg"} 
        heroTitle={"Discover Elegance. Adorn Your Style."}
      />
    </div>
  )
}

export default Jewellery