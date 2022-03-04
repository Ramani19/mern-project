import React from 'react'
import BackRemove from "../../components/backRemove/BackRemove"
import { useNavigate } from 'react-router-dom'
import "./marketLogOut.css"

const MarketLogOut = () => {
    const nav = useNavigate();
  return (
    <div>
        <button onClick={() => {
            nav("../pages/dashboard/Dashboard")
        }} className='button'>Login/Signup</button>
      <BackRemove/>
    </div>
  )
}

export default MarketLogOut
