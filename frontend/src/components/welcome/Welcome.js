import React from 'react'
import ellipse from '../../images/Ellipse.svg'
import './welcome.css'

const Welcome = () => {
  return (  
    <div className='textStroke'>
     <div className='box'>
     <img src={ellipse} className='stroke-logo'></img>
    <h1>
        Welcome to your Dashboard
      </h1>
     <p className='para'>
      
      Your uploaded APIs will be displayed here once you login to here
      </p>  
      </div>
    </div>
    
  )
}
export default Welcome;
