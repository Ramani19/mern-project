/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useState, useEffect} from "react"
import axios from "axios"
import Cards from "./card"
import card4 from './card4.jpeg'

const UserCards = ({spinner}) => {
  const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    useEffect(async () => { 
      setLoading(true)
      await axios.post('https://mern-app-r.herokuapp.com/findAPI', {email : localStorage.getItem('email')}).then(async (e) => {
      //console.log(e.data[0])
      setLoading(false)
      await setData(e.data)
     
  
    }).catch(()=> {
      setLoading(false)
    })},[])
    console.log(data) 
    const dele = async (e) => {
        
        const name = e.target.name
        const chech = confirm(name+ ' API will be deleted')
        if(chech==true)
        {
            console.log(name)
            console.log('hi')
            setLoading(true)
        await axios.post('https://mern-app-r.herokuapp.com/delAPI', {name : name}).then((e) => {
        setLoading(false)  
        console.log(e)
    //   window.location.reload(false)
    }).catch(() => {
      setLoading(false)
    })
      }
    }
  
  // axios.post('http://localhost:3001/findAPI', {}).then(async (e) => {
  //   setData(e.data)
  //   console.log(data)
  //  })
  
    return (
      <>
      { loading ? <div className="myapis-spinner"> {spinner}</div> : <div className="grid" > {data.map(eachData => <Cards  key={eachData.name } img={card4} title={eachData.name} para={eachData.description} dele={dele} url={eachData.endpoint} />  )} </div>}
      </>
    )
  }

  export default UserCards