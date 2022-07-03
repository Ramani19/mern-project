import React from 'react'
import "./viewBGremove.css"
import card1 from '../../images/card1.svg'
import { useNavigate } from 'react-router-dom'
// import Back from './backRemove.png'
// import RectBlue from "./Rectangle blue.svg"
// import RectVoilet from "./Rectangle Voilet.svg"

const BackRemove = () => {
 const nav = useNavigate();
  return (
    
         
           
           <div className='blue'>
           <img src={card1}/>
            <div className='violet'></div>
              
              <div className='text'><h1>BACKGROUND IMAGE REMOVE</h1><p>100% automatic and free</p>
</div>           <button className='view' onClick={() => {
  nav("../../BGremove")
}}>View App</button> 
           </div>
    
  )
}

export default BackRemove
