import React from 'react'

import './Contact.scss'
import logo from '../../images/logo.svg'

const Contact = () => {
  return (
    <div id='contact'>
      <img src={logo} alt="" />
      <div className="social-media">
        <a href="http://" target="_blank" rel="noopener noreferrer">instagram</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">facebook</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">youtube</a>
      </div>
      <div className="address">
        <p>San Francisco, CA, United States <br /> +xxx xxx xxxx <br /> studiojamin@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact