/* eslint-disable no-unused-vars */
import React from 'react'
import axios from "axios"
import Card from '../../components/card/defaultCards'
import ThreeButtons from '../../components/threeButtons/ThreeButtons'
import ViewBGremove from '../../components/viewBGremove/ViewBGremove'
import  UserCards  from '../../components/card/UserCards'
import './myapis.css'
const myapis = ({spinner}) => {
 
  return (
    <div>
      <ThreeButtons/>
      <ViewBGremove/>
      
      <UserCards spinner={spinner} />
      
    </div>
  )
}

export default myapis
