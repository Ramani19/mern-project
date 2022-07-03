import React from 'react'
import {useNavigate} from 'react-router-dom'
import './threeButtons.css'


const ThreeButtons = () => {
    const navg5 = useNavigate()
    
    const logout = () => {
      localStorage.clear()
      navg5("../../")
    }
  return (
    
      <div className='allButtons'>
        <button className='buttonThree' onClick={() => {
          navg5("/myapis")
        }}>
          My APIs
        </button>
        
        <button className='buttonThree button3' onClick={() => {
           navg5("../../addAPI")
         }}>
        +New API
      </button>
      <button onClick={logout} className='buttonThree '>
          Log Out
        </button>
    </div>
  )
}

export default ThreeButtons
