/* eslint-disable react/prop-types */
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import DefaultCard from '../../components/card/defaultCards'
import { useNavigate, useParams } from 'react-router-dom'


import './addAPI.css'


const AddAPI = ({spinner}) => {
      const {name} =useParams()
      const [loading, setLoading] =useState(false)
      const[err, setErr] = useState() 
      const [API,setAPI] = useState({
        name : "",
        endpoint : "",
        description : "",
        email : localStorage.getItem('email')
      })
      // eslint-disable-next-line no-unused-vars
      const navgtq = useNavigate();
   console.log(name)
   if(name)
   {
         useEffect(()=> {
          axios.post('https://mern-app-r.herokuapp.com/findSpecificAPI',{name : name}).then((e)=> {
             console.log(e)
             const name =e.data.name
             const endpoint=e.data.endpoint
             const description = e.data.description
             setAPI({name:name, endpoint:endpoint, description:description, email:localStorage.getItem('email')})
          }).catch((e) => {
            console.log(e)
          })
         },[])
   }
console.log(API)

   const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setAPI({ ...API, [name]: value });
   }

const submitHandler = async (e) => {
  e.preventDefault()
  setLoading(true)
  if(!API.name || !API.description || !API.endpoint)
  {
         setErr('please fill all the details')
         setLoading(false)
  
  }
  else{
  console.log(name)
  try{
   if(name)
   { 
    await axios.post('https://mern-app-r.herokuapp.com/editAPI',{
      newName : API.name,
      name : name,
      endpoint : API.endpoint,
      description : API.description,
      email : localStorage.getItem('email')
    }).then((e)=>{
      setLoading(false)
      console.log(e)
      
      navgtq('../myapis')
    }).catch(()=>{
      setLoading(false)
      
    })
   }
   else{
    await axios.post('https://mern-app-r.herokuapp.com/addAPI',{
      name : API.name,
      endpoint : API.endpoint,
      description : API.description,
      email : localStorage.getItem('email')
    }).then((e)=>{
      console.log(e)
      setLoading(false)
      
      navgtq('../myapis')
    })
   

 

  }

}
  catch(err){
    setLoading(false)
    console.log(err.response)
    const error = err.response.data.message
    
    setErr(error)
    
  }
  //navgtq('../myapis')

  }
}
//console.log(API)
const add = 'Add API'
const edit ='Edit API' 
return (
 
  
  <div className='newClass'>
    
    <div className='backPic'>
    <DefaultCard/>
    </div>
    <div className='formOut'>
    <div className='formIn'>
     { name ? <h3>edit the API </h3> : <h3>add new API</h3> }
      
       <input type="text" required onChange={(e)=>{changeHandler(e)}} name='name' value={API.name} placeholder='API name'></input><br/>
       <input type="text" required onChange={(e)=>{changeHandler(e)}} name='endpoint' value={API.endpoint} placeholder='API end point'></input><br/>
       <input type="text" required onChange={(e)=>{changeHandler(e)}} name='description' value={API.description} placeholder='Description of API'></input><br/>
       <p>{err}</p>
       {loading ? <div>{spinner}</div> : <input type='submit' value={name ? edit : add} onClick={(e)=>{
          submitHandler(e)
          
        }}/> }
     
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

