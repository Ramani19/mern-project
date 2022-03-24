// eslint-disable-next-line no-unused-vars

import React , {useState} from 'react'
import axios from 'axios'
import Welcome from '../../components/welcome/Welcome';


import './dashboard.css'
import { useNavigate } from 'react-router-dom';



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
   await axios.post("http://localhost:3001/signup/login" , {
    email:userReg.email,
    password:userReg.password,
   }).then(() => {
    
      navigat("../pages/marketIn/MarketIn")
    
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
    
  
   <div className='form ' >
     <div className='formInside'>
      <form method='post' onSubmit={(e)=>{authenticate(e)
  }} >
        <h2>Login to your account</h2>
        
         <input type="text" name='email' placeholder='Email Address' value={userReg.email} onChange={(e)=>handleInput(e)}  ></input><br/>
         <input type="password" name="password" placeholder='Password' value = {userReg.password} onChange={(e)=>handleInput(e)}></input><br/>
         {error && <div className = 'erColor'>{error}</div>}
        <div> not a user?<a href='../dashSignUp/DashSignUp'>Register</a></div>
         <input type="submit" name="Login" value="login" ></input>

         
  
         
      </form>
      </div>
      </div>
      
    </div>
    
    
  )
}

export default Dashboard
