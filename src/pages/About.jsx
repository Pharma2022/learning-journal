import React from 'react'
import RecentBlogPosts from '../components/Blog/RecentBlogPosts'
import JournalEntry from '../Journal/JournalEntry'
import AboutHero from '../components/Hero/AboutHero'

const About = () => {
  return (
    <>
    <AboutHero/>
    <JournalEntry containerClass={'px-4rem'}/>
    <RecentBlogPosts/>
    </>
  )
}

export default About