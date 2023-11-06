import React from 'react'
import StoreItem from './StoreItem'

const Store = () => {
  return (
    <div className='store'>
        <StoreItem rating={4.5} />
        <StoreItem rating={3.5} />
        <StoreItem rating={2.5} />
        <StoreItem rating={2.5} />
        <StoreItem rating={2.5} />
        <StoreItem rating={2.5} />
        <StoreItem rating={2.5} />
    </div>
  )
}

export default Store