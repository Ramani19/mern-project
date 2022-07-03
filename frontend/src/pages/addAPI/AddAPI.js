/* eslint-disable react/prop-types */
import axios from 'axios'
import React,{useState, useEffect} from 'react'
import DefaultCard from '../../components/card/defaultCards'
import { useNavigate, useParams } from 'react-router-dom'


import './addAPI.css'


const AddAPI = () => {
      const {name} =useParams()
      let url
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
          axios.post('http://localhost:3001/findSpecificAPI',{name : name}).then((e)=> {
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
  try{
   if(name)
   { 
    await axios.post('http://mern-ramani.heroku.com/editAPI',{
      newName : API.name,
      name : name,
      endpoint : API.endpoint,
      description : API.description,
      email : localStorage.getItem('email')
    }).then((e)=>{
      console.log(e)
      navgtq('../myapis')
    })
   }
   else{
    await axios.post('http://mern-ramani.heroku.com/addAPI',{
      name : API.name,
      endpoint : API.endpoint,
      description : API.description,
      email : localStorage.getItem('email')
    }).then((e)=>{
      console.log(e)
      navgtq('../myapis')
    })
   }

 await axios.post(url,{
    name : API.name,
    newName : name,
    endpoint : API.endpoint,
    description : API.description,
    email : localStorage.getItem('email')
  }).then((e)=>{
    console.log(e)
    navgtq('../myapis')
  })

  }
  catch(err){
    const error = err.response.data.message
    setErr(error)
  }
  //navgtq('../myapis')

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
      
       <input type="text" onChange={(e)=>{changeHandler(e)}} name='name' value={API.name} placeholder='API name'></input><br/>
       <input type="text" onChange={(e)=>{changeHandler(e)}} name='endpoint' value={API.endpoint} placeholder='API end point'></input><br/>
       <input type="text" onChange={(e)=>{changeHandler(e)}} name='description' value={API.description} placeholder='Description of API'></input><br/>
       <p>{err}</p>
        <input type='submit' value={name ? edit : add} onClick={(e)=>{
          submitHandler(e)
          
        }}/>
     
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

