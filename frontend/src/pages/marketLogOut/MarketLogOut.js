import React from 'react'

import  Button from '../../components/Button/Button'
import "./marketLogOut.css"
import ViewBGremove from '../../components/viewBGremove/ViewBGremove'
import DefaultCard from '../../components/card/defaultCards'

const MarketLogOut = () => {
    
    
    
  return (
    <div className='marketOut'>

      <div className='allButtons'>
        <Button name='Login' path="dashboard"/>
        <Button name='Signup' path="dashSignup"/>
          </div>
          <div>
      <ViewBGremove/>
      </div>
      <h1 className='textAPI'>
        All APIs
      </h1>
      <div>
      <DefaultCard/>
      </div>
       
    </div>
  )
}

export default MarketLogOut
