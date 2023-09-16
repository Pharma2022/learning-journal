import React from 'react'
import NavLink from './NavLink'
import JournalIcon from '../../assets/img/journal-icon.png'
const Navigation = () => {
  return (
    <nav >
      <div className='container flex-row space-between align-center'>
        <NavLink className={'nav-journal-link  flex-row space-between align-center'} to={'/journal'}>
          <img src={JournalIcon}/>
          <span>My Learning Journal</span>
        </NavLink>

        <div className="nav-links-subcontainer flex-row space-between align-center">
          <NavLink to={'/'}>HOME</NavLink>
          <NavLink to={'/about'}>ABOUT ME</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation