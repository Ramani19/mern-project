// eslint-disable-next-line no-unused-vars

import React , {useState} from 'react'

import ellipse from './Ellipse.svg'

import './dashboard.css'
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  let navigate = useNavigate();
  const [userReg, setUserReg] = useState({
      email : "",
      password : ""
  });

  
  const handleInput = (e) => {
       const name = e.target.name;
       const value = e.target.value;
       console.log(name, value);
       setUserReg({ ...userReg, [name]: value});
  }
//fghjkl;lgyjhuikop
  
  // const PostData = async (e) => {
  //   e.preventDefault();

    
  //   const { email, password } = user;

  //  const res = await fetch("/signup", {
  //    method: "POST",
  //    headers: {
  //     "Content-Type": "application/json"

  //    },
  //    body : JSON.stringify({
  //     email, password
  //    })

  //  })
  //  const res = await res.json();

  // }

  
  return (
    <div className='dashboard'>
     
     
    <div className='firstflex'>
    
      
    <div className='textStroke'>
     <div className='box'>
  
    
      <img src={ellipse} className='stroke-logo'></img>
      
      
      <h1>
        Welcome to your Dashboard
      </h1>
      
      <p className='para'>
      
      Your uploaded APIs will be displayed here once you login to here
      </p>  
      </div>
   </div>
   <div className='form ' >
     <div className='formInside'>
      <form method='post'>
        <h2>Login to your account</h2>
        
         <input type="text" name='email' placeholder='Email Address' value={userReg.email} onChange={handleInput}  ></input><br/>
         <input type="password" name="password" placeholder='Password' value = {userReg.password} onChange={handleInput}></input><br/>
         <input type="submit" name="Login" value="login" onChange={handleInput} onClick={() => {
           navigate("../pages/dashLoggedIn/DashIn")
         }}></input>
  
         
      </form>
      </div>
      </div>
      
    </div>
    </div>
    
  )
}

export default Dashboard
