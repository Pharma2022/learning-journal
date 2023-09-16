import React from 'react'
import hero from '../../assets/img/hero-bg-image.png'


const Hero = ({children}) => {
  return (
    <div className='container home-hero flex-row align-end' style={{backgroundImage:`url("${hero}")`}}>{children}</div>
  )
}

export default Hero