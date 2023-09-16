import React from 'react'

const Footer = () => {
  
  const date=new Date().getFullYear()
  return (
    <section className='footer-wrapper flex-row align-center'>
      <footer className='container flex-col footer align-center'>
        <small className='footer-journal'>My Learning Journal</small>
        <small className='footer-copyright'>Copyright &copy; {date}</small>
      </footer>
    </section>
  )
}

export default Footer