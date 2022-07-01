import React from 'react'
import axios from "axios"
import ThreeButtons from '../../components/threeButtons/ThreeButtons'
import ViewBGremove from '../../components/viewBGremove/ViewBGremove'
const myapis = () => {
  axios.post('http://localhost:3001/findAPI', {}).then((e) => {
    console.log(e)
  })
  return (
    <div>
      <ThreeButtons/>
      <ViewBGremove/>
    </div>
  )
}

export default myapis
