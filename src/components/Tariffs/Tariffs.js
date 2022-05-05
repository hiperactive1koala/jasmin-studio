import React from 'react'

import tariffs from '../../images/Tariffs.svg'
import okay from '../../images/okay.svg'
import './Tariffs.scss'

const Tariffs = () => {
  return (
    <div id='tariffs'>
      <img className='tariffs' src={tariffs} alt="" />
      <div className="tariffs-cards">
      <div className="tariffs-card">
          <div className='header'>
            <h1>SMART</h1>
          </div>
          <div className='card-info'>
            <div>
              <img src={okay} alt="" />
              <p>DESIGN PROJECT OF OPEN <br />SPACE UP TO 20 SQM.</p>
            </div>
            <div>
              <img src={okay} alt="" />
              <p>VISIT TO THE OBJECT</p>
            </div>
            <div>
              <img src={okay} alt="" />
              <p>SELECTION OF ALL MATERIALS</p>
            </div>
          </div>
          <div className='price'>
            <p>99$</p>
            <button>to order</button>
          </div>
        </div>
        <div className="tariffs-card">
          <div className='header'>
            <h1>STUDIO</h1>
          </div>
          <div className='card-info'>
            <div>
              <img src={okay} alt="" />
              <p>DESIGN PROJECT OF OPEN <br />SPACE UP TO 50 SQM.</p>
            </div>
            <div>
              <img src={okay} alt="" />
              <p>VISIT TO THE OBJECT</p>
            </div>
            <div>
              <img src={okay} alt="" />
              <p>SELECTION OF ALL MATERIALS</p>            </div>
          </div>
          <div className='price'>
            <p>209$</p>
            <button>to order</button>
          </div>
        </div>
        <div className="tariffs-card">
          <div className='header'>
            <h1>SMART</h1>
          </div>
          <div className='card-info'>
            <div> 
              <img src={okay} alt="" />
              <p>DESIGN PROJECT OF OPEN <br />SPACE UP TO 99 SQM.</p>
            </div>
            <div>
              <img src={okay} alt="" />
              <p>VISIT TO THE OBJECT</p>
            </div>
            <div>
              <img src={okay} alt="" />
              <p>SELECTION OF ALL MATERIALS</p>   
            </div>
            <div>
              <img src={okay} alt="" />
              <p>MASTERING CHALLENGES</p>   
            </div>
            <div>
              <img src={okay} alt="" />
              <p>HIGH OUTPUT RESULT</p>   
            </div>
          </div>
          <div className='price'>
            <p>899$</p>
            <button>to order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tariffs