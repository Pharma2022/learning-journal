import React from 'react'

const Subtitle = ({children,className}) => {
  return (
    <p className={`subtitle ${className}`}>{children}</p>
  )
}

export default Subtitle