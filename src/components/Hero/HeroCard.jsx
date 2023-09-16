import React from 'react'
import Container from '../SubComponents/Container'
import Date from '../SubComponents/Date'
import Title from '../SubComponents/Title'

const HeroCard = ({isDark=false,className}) => {
  return (
    <Container className={`flex-col hero-card ${className}`}>
      <Date className={`${isDark&&'white-text'} `}>JULY 23, 2022</Date>
      <Title className={isDark&&'white-text'}>My Journey as a Developer</Title>
      <p className={`home-hero-paragraph ${isDark&&'white-text'}`}>After several months of learning in the Frontend Developer Career Path,
         I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.
         </p>
    </Container>
  )
}

export default HeroCard