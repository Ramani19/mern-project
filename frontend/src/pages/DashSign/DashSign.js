/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import Welcome from "../../components/welcome/Welcome";
import Signup from "../dashSignup/DashSignup"
import Login from "../dashboard/Dashboard"
import './dashSign.css'

const DashSign = () => {
  const [style, setStyle] = useState('form')
  const [style1, setStyle1] = useState('form form-login')

  console.log(style1)
 
  const flip = ()=> {
     
     setStyle("form form-dynamic ");
     setStyle1("form form-login form-dynamic1 ");
     console.log(style1)

    
  }
  const flipTheFlip = () => {
    setStyle1("form form-dynamic ");
    setStyle("form form-login form-dynamic1");
  }
  return (
    <>
      <Welcome />

      <Login style1={style1} event={flipTheFlip} />

      <Signup style={style} event={flip} />



    </>
  )
}


export default DashSign
