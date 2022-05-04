import React from 'react'

import './About.scss'
import Jasmin from '../../images/Jasmin.svg'

const About = () => {
  return (
    <div id='about'>
      <div className='h1'>
        <img src={Jasmin} alt="" />
      </div>
      <div className='about'>
        <div className='about-col'>
          <h3>9 years in <br /> interior design</h3>
          <p>only modern<br />decisions increase <br />the value of houses</p>
        </div>
        <div className='about-col'>
          <h3 className='save-time'>Save time</h3>
          <p>you will know in<br />advance how long it<br />will take to repair<br />and furniture</p>
        </div>
        <div className='about-col'>
          <h3>Security <br /> solutions</h3>
          <p>we help you to avoid<br />harmful components<br />in the decor as much<br />as possible</p>
        </div>
      </div>
    </div>
  )
}

export default About