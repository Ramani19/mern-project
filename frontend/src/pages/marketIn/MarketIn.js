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
      <div className='movement'>
      <h1 >
        All APIs
      </h1>
      </div>
      <Card/>
    </div>
  )
}

export default MarketIn
