import React from 'react'
import { Link } from 'react-router-dom'
const NavLink = ({children,className,...rest}) => {
  return (
    <Link className={`nav-link ${className}`} {...rest}> {children}</Link>
  )
}

export default NavLink