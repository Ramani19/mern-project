import React from 'react'
import {useNavigate} from 'react-router-dom'
import './threeButtons.css'


const ThreeButtons = () => {
    const navg5 = useNavigate()
  return (
    
      <div className='allButtons'>
        <button className='buttonThree'>
          My APIs
        </button>
        <button className='buttonThree '>
          My Account
        </button>
        <button className='buttonThree button3' onClick={() => {
           navg5("../pages/addAPI/AddAPI")
         }}>
        +New API
      </button>
    </div>
  )
}

export default ThreeButtons
