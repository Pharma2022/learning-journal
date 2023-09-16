import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero/Hero'
import HeroCard from '../components/Hero/HeroCard'
import BlogCardContainer from '../components/Blog/BlogCardContainer'
import { blogsArr } from '../data'
import BlogCard from '../components/Blog/BlogCard'
import { nanoid } from 'nanoid'
import Container from '../components/SubComponents/Container'

const Home = () => {

  const [blogsHtml,setBlogsHtml]=useState(null)
  const [blogViewMax,setBlogViewMax]=useState(false)
  const toggleBlogView=()=>setBlogViewMax(prev=>!prev)

  useEffect(()=>{
    const arr=blogViewMax? blogsArr: blogsArr.slice(0,6)

    setBlogsHtml( arr.map(({date,text,title,img})=>{
            
      return <BlogCard
                key={nanoid()}
                date={date}
                text={text}
                title={title}
                img={img}

                />

  }))
  },[blogViewMax])

  return (
    <>
      <Hero>
        <HeroCard isDark={true} className='hero-card-home max-40rem'/>
      </Hero>
      <BlogCardContainer>
          {blogsHtml}
      </BlogCardContainer>
          <Container className={'flex-col'}>
            <span className="btn view-more mx-auto" onClick={toggleBlogView}>{blogViewMax?'View Less' : 'View More'}</span> 

          </Container>

       

    </>
  )
}

export default Home