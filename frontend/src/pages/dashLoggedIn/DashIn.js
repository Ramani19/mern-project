import React from 'react'
import Card from '../../components/card/Card'
import { useNavigate } from 'react-router-dom';

 import './dashIn.module.scss'


const DashIn = () => {

   let navg = useNavigate();



  return (
    <div>

      <div className='allButtons'>
        <button className='button'>
          My APIs
        </button>
        <button className='button '>
          My Account
        </button>
        <button className='button button3' onClick={() => {
           navg("../pages/addAPI/AddAPI")
         }}>
        +New API
      </button>
    </div><div className='body'>
        <h1>
          Your uploaded APIs
        </h1>
        <Card />

      </div>
     
       
      
    
    </div>
  )
}

export default DashIn
