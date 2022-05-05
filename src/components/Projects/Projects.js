import React from 'react'

import './Projects.scss'
import studio35 from '../../images/studio35.svg'
import studio27 from '../../images/studio27.svg'
import studio36 from '../../images/studio36.svg'
import studio89 from '../../images/studio89.svg'
const Projects = () => {
  return (
    <div id='projects'>
      <h1>Our projects</h1>
      <div className="projects">
        <div>
          <img src={studio35} alt="" />
          <img src={studio27} alt="" />
        </div>
        <div>

          <img src={studio36} alt="" />
          <img src={studio89} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Projects