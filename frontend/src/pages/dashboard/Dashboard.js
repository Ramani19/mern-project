/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import React , {useState} from 'react'
import axios from 'axios'
import Welcome from '../../components/welcome/Welcome';


import './dashboard.css'
import { useNavigate ,Link} from 'react-router-dom';



// eslint-disable-next-line no-unused-vars
const Dashboard = () => {
 let navigat = useNavigate();
 
  const [userReg, setUserReg] = useState({
    email : "",
    password : ""
  });
  const [error, setError] = useState("")
 // console.log(error)
  

  
  function handleInput(e) {

    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserReg({ ...userReg, [name]: value });
  }
const  authenticate = async (e) =>{
  try{
  e.preventDefault();
   await axios.post("http://mern-ramani.heroku.com/signup/login" , {
    email:userReg.email,
    password:userReg.password,
   }).then(() => {
    localStorage.setItem('email' , userReg.email)
    localStorage.setItem('password' , userReg.password)
      navigat("../marketIn")
    
   }
  
  )}
  catch(err) {
     if(err.response && err.response.status >= 400 && err.response.status <= 500)
       {
         setError(err.response.data.message)
         console.log(err)
       }
    }
    console.log(error) 
  }
  
      


  // const PostData =  (e) => {
  //   e.preventDefault();

    

    
  //    axios.post("http://localhost:5000/signup", {
  //       email:userReg.email,
  //       password:userReg.password
      
  //     }).then(() => {
        
  //         navigate("../pages/marketIn/MarketIn")
  //   });

   
//}
  return (
    <div className='dashboard'>
     
     <Welcome/>
    
  
   <div className='form-here ' >
     <div className='formInside'>
      <form method='post' onSubmit={(e)=>{authenticate(e)
  }} >
        <h2>Login to your account</h2>
        
         <input type="text" name='email' placeholder='Email Address' value={userReg.email} onChange={(e)=>handleInput(e)} required ></input><br/>
         <input type="password" name="password" placeholder='Password' value = {userReg.password} onChange={(e)=>handleInput(e)} required></input><br/>
         {error && <div className = 'erColor'>{error}</div>}
        <div> not a user?<Link className='dash-register' to='../marketIn'>Register</Link></div>
         <input type="submit" name="Login" value="login" ></input>

         
  
         
      </form>
      </div>
      </div>
      
    </div>
    
    
  )
}

export default Dashboard
