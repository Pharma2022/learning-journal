import React from 'react'
import HeroCard from '../components/Hero/HeroCard'
import Hero from '../components/Hero/Hero'
import JournalEntry from '../Journal/JournalEntry'
import RecentBlogPosts from '../components/Blog/RecentBlogPosts'

const Journal = () => {
  return (
    <div>


      <HeroCard />
      <Hero/>
      <JournalEntry/>
      <RecentBlogPosts/>
    



    </div>
  )
}

export default Journal