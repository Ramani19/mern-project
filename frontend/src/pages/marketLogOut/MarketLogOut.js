import React from 'react'

import  Button from '../../components/Button/Button'
import "./marketLogOut.css"
import ViewBGremove from '../../components/viewBGremove/ViewBGremove'

const MarketLogOut = () => {
    
    
    
  return (
    <div>

      <div className='allButtons'>
        <Button name='Login' path="../pages/dashboard/Dashboard" className="butt"/>
        <Button name='Signup' path="../pages/dashboard/Dashboard"/>
          </div>

      <ViewBGremove/>
       
    </div>
  )
}

export default MarketLogOut
