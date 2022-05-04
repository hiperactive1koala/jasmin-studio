import React from 'react'

import './Navbar.scss'
import logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
      <ul>
        <li><a href="#about">about</a></li>
        <li><a href="#projects">porjects</a></li>
        <li><a href="#tariffs">tariffs</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar