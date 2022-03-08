import React from 'react'
import { useNavigate } from 'react-router-dom'
import './dashSignup.css'

const DashSignup = () => {
    const navg2 = useNavigate();
  return (
    <div>
      <button onClick={() => {
          navg2('../pages/dashboard/Dashboard')
      }}>Signup</button>
    </div>
  )
}

export default DashSignup
