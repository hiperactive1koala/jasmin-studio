import React from 'react'

import './Home.scss'
import project1 from '../../images/project-1.png'
import project2 from '../../images/project-2.png'
const Home = () => {
  return (
    <div id='home'>
      <div className="container">
        <div className="header">
            <h1>Design project<br/> or smart apartments</h1>
        </div>

        <div className="order">

            <div className='legend'>
              <p>live easily and comfortably<br/> in your new apartment</p>
              <button>to order</button>
            </div>
          
          <div className="photo-cards">
            <img src={project1} alt="project1" />
            <img src={project2} alt="project2" />
          </div>
        </div>

      </div>
      <div className="social">
            <a href="http://youtube.com" target="_blank" rel='noreferrer'>youtube</a>
            <a href="http://facebook.com" target="_blank" rel='noreferrer'>facebook</a>
            <a href="http://instagram.com" target="_blank" rel='noreferrer'>instagram</a>
          </div>
    </div>
      
  
  )
}

export default Home