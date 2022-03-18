import React from 'react'
import {useNavigate} from 'react-router-dom'
import './threeButtons.css'


const ThreeButtons = () => {
    const navg5 = useNavigate()
  return (
    
      <div className='allButtons'>
        <button className='button'>
          My APIs
        </button>
        <button className='button '>
          My Account
        </button>
        <button className='button button3' onClick={() => {
           navg5("../pages/addAPI/AddAPI")
         }}>
        +New API
      </button>
    </div>
  )
}

export default ThreeButtons
