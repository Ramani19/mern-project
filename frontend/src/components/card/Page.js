/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Page = () => {
  const {id} =   useParams()
  const [page, setPage] = useState({})
  useEffect(async () => {
    const API = await axios.post('http://localhost:3001/findSpecificAPI',{name : id})
   const endpoint = API.data.endpoint
   try {
  const pageHere = await axios.get(endpoint)
  
  setPage(pageHere.data )
   }
   catch(e){
    setPage('Cannot find the required API')
   }
  //console.log(page)
  },[])
  console.log(page)
  console.log('k')
  
  return (
    
    <div>
     {
      JSON.stringify(page) 
     }
    
      
    </div>
  )
}

export default Page
