/* eslint-disable react/prop-types */
import axios from 'axios'
import React,{useState} from 'react'
import DashIn from '../dashLoggedIn/DashIn'
import { useNavigate } from 'react-router-dom'


import './addAPI.css'


const AddAPI = () => {
       
      const [API,setAPI] = useState({
        name : "",
        endpoint : "",
        description : "",
      })
      const navgtq = useNavigate();
   
   const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setAPI({ ...API, [name]: value });
   }

const submitHandler = async (e) => {
  e.preventDefault()
  
  await axios.post("http://localhost:3001/addAPI",{
    name : API.name,
    endpoint : API.endpoint,
    description : API.description,
  })
   navgtq('../pages/dashLoggedIn/DashIn')
}
console.log(API)
return (
 
  
  <div className='newClass'>
    
    <div className='backPic'>
    <DashIn/>
    </div>
    <div className='formOut'>
    <div className='formIn'>
     <h3>add new API</h3>
      <form>
       <input type="text" onChange={(e)=>{changeHandler(e)}} name='name' value={API.name} placeholder='API name'></input><br/>
       <input type="text" onChange={(e)=>{changeHandler(e)}} name='endpoint' value={API.endpoint} placeholder='API end point'></input><br/>
       <input type="text" onChange={(e)=>{changeHandler(e)}} name='description' value={API.description} placeholder='Description of API'></input><br/>
        <input type="submit" value="Add API" onClick={(e)=>{
          submitHandler(e)
          
        }}></input>
      </form>
    </div>
    </div>
    
  </div>
  )
}
const DashAPI = ({
 name,description
}) => {
  console.log({name})
  return (
    <div>
      <h2>{
      name}</h2>
      <p>{description}</p>
    </div>
  )
}


export default AddAPI
export  {DashAPI}

