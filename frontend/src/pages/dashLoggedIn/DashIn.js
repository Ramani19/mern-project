/* eslint-disable react/prop-types */
import React from 'react'
import Card from '../../components/card/Card'
//import { useNavigate } from 'react-router-dom';

 import './dashIn.css'
import ThreeButtons from '../../components/threeButtons/ThreeButtons';



const DashIn = () => {

  return (
   
    <div>
      
        <ThreeButtons/>
      <div className='body'>
        <h1>
          Your uploaded APIs
        </h1>
        <Card />
         
      </div>
     
       
      
    
    </div>
  )
}

export default DashIn
