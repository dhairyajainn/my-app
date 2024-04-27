import React from 'react'
import { useLocation } from 'react-router-dom'

const AddToCart = () => {
    const loc = useLocation();
    console.log(loc.state)
  return (
    <div>AddToCart</div>
  )
}

export default AddToCart