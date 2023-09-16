import React from 'react'

const Title = ({children,className}) => {
  return (
    <p className={`hero-title ${className}`}>{children}</p>
  )
}

export default Title