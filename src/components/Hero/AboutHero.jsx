import React from 'react'
import img from '../../assets/img/Shah.jpg'
const AboutHero = () => {
  return (
    <div className='about-hero container flex-col space-between align-center'>
      <img className='hero-img' src={img}/>
      <div className="container flex-col">
        <h1 className="hero-title">
          Hi there! My name is Shah and welcome to my learning journal.
        </h1>
        
      </div>

    </div>
  )
}

export default AboutHero