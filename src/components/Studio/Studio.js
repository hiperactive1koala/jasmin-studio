import React from 'react'

import studio from '../../images/about studio.svg'
import './Studio.scss'
const Studio = () => {
  return (
    <div id='studio'>
        <img src={studio} alt="about studio" />
        <div className="about-studio">
            <div className="numbers">
                
                <div className="number"> 
                    <h2>99</h2>
                    <p>satisfied customers</p>
                </div>
                <div className="number">
                    <h2>467</h2>
                    <p>square meters</p>
                </div>
                <div className="number">
                    <h2 >154</h2>
                    <p>within the project</p>
                </div>
            </div>
            <p className='about-studio-text'>Studio Jasmin is a global firm of architects, designers, strategists, and specialists. We focus exclusively on environments through the lens of interior architecture-a radical idea in 1984, when Studio Jasmin was founded. We are highly connected agents of change, committed to creativity, innovation, growth, & our communities.</p>
        </div>
    </div>
  )
}

export default Studio