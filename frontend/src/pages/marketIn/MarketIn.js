import React from 'react'
import ViewBGremove from '../../components/viewBGremove/ViewBGremove'
import ThreeButtons from '../../components/threeButtons/ThreeButtons'
import Card from '../../components/card/Card'
import './marketIn.css'

const MarketIn = () => {
  return (
    <div>
      <ThreeButtons/>
      <ViewBGremove/>
      <h1 className='movement'>
        All APIs
      </h1>
    
      <Card/>
    </div>
  )
}

export default MarketIn
