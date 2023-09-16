import React from 'react'

const Date = ({children,className}) => {
  return (
    <p className={`date-title ${className}`}>{children}</p>
  )
}

export default Date