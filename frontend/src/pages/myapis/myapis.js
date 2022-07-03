/* eslint-disable no-unused-vars */
import React from 'react'
import axios from "axios"
import Card from '../../components/card/defaultCards'
import ThreeButtons from '../../components/threeButtons/ThreeButtons'
import ViewBGremove from '../../components/viewBGremove/ViewBGremove'
import  UserCards  from '../../components/card/UserCards'
import './myapis.css'
const myapis = () => {
 
  return (
    <div>
      <ThreeButtons/>
      <ViewBGremove/>
      
      <UserCards/>
      
    </div>
  )
}

export default myapis
