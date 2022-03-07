// eslint-disable-next-line no-unused-vars

import React , {useState, useEffect} from 'react'
import axios from 'axios'
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
  useEffect(() => {

    axios.get("http://localhost:5000/signin").then((response) => {
      response.data
  })
  }, [])
      


  const PostData =  (e) => {
    e.preventDefault();

    

    
     axios.post("http://localhost:5000/signup", {
        email:userReg.email,
        password:userReg.password
      
      }).then(() => {
        
          navigate("../pages/dashLoggedIn/DashIn")
    });

   
}
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
   <div className='form ' onSubmit={PostData}>
     <div className='formInside'>
      <form method='post'>
        <h2>Login to your account</h2>
        
         <input type="text" name='email' placeholder='Email Address' value={userReg.email} onChange={(e)=>handleInput(e)}  ></input><br/>
         <input type="password" name="password" placeholder='Password' value = {userReg.password} onChange={(e)=>handleInput(e)}></input><br/>
         <input type="submit" name="Login" value="login"></input>
  
         
      </form>
      </div>
      </div>
      
    </div>
    </div>
    
  )
}

export default Dashboard
