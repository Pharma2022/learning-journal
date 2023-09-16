import React from 'react'
import Subtitle from '../SubComponents/Subtitle'
import BlogCardContainer from './BlogCardContainer'
import BlogCard from './BlogCard'
import { blogsArr } from '../../data'
import { nanoid } from 'nanoid'
const RecentBlogPosts = () => {
  return (
    <>
        <Subtitle className={'recent-posts'}>Recent Posts</Subtitle>
      <BlogCardContainer>
        {blogsArr.slice(0,3).map(({date,text,title,img})=>{
            
            return <BlogCard
                      key={nanoid()}
                      date={date}
                      text={text}
                      title={title}
                      img={img}

                      />

        })}

      </BlogCardContainer>
    </>
  )
}

export default RecentBlogPosts