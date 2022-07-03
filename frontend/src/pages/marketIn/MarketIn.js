import React from 'react'
import ViewBGremove from '../../components/viewBGremove/ViewBGremove'
import ThreeButtons from '../../components/threeButtons/ThreeButtons'
import DefaultCard from '../../components/card/defaultCards'
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
      <DefaultCard/>
    </div>
  )
}

export default MarketIn
