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
        <Button name='Signup' path="../pages/DashSignup/DashSignup"/>
          </div>
          <div>
      <ViewBGremove/>
      </div>
      <h1 className='textAPI'>
        All APIs
      </h1>
      <div>
      <Cards/>
      </div>
       
    </div>
  )
}

export default MarketLogOut
