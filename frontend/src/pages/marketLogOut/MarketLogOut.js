import React from 'react'

import  Button from '../../components/Button/Button'
import "./marketLogOut.css"
import ViewBGremove from '../../components/viewBGremove/ViewBGremove'
import Cards from '../../components/card/Card'

const MarketLogOut = () => {
    
    
    
  return (
    <div className='marketOut'>

      <div className='allButtons'>
        <Button name='Login' path="../pages/dashboard/Dashboard"/>
        <Button name='Signup' path="../pages/dashSignup/DashSignup"/>
          </div>

      <ViewBGremove/>
      <h1 className='text'>
        All APIs
      </h1>
      <Cards/>
       
    </div>
  )
}

export default MarketLogOut
