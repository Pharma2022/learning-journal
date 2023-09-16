import React from 'react'
import Date from '../SubComponents/Date'
import Subtitle from '../SubComponents/Subtitle'
import Paragraph from '../SubComponents/Paragraph'
const BlogCard = ({title,date,img,text}) => {
  return (
    <div className='blog-card flex-col'>
        <img className='blog-card-img' src={img}/>
        <Date className={'blog-card-date'} >{date}</Date>
        <Subtitle>{title}</Subtitle>
        <Paragraph className={'blog-card-paragraph'}>{text}</Paragraph>

   
    </div>
  )
}

export default BlogCard