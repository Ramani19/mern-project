import React,{useState, useEffect} from "react"
import axios from "axios"
import Cards from "./card"
import card4 from './card4.jpeg'

const UserCards = () => {
    const [data, setData] = useState([])
    useEffect(async () => { await axios.post('http://mern-ramani.heroku.com/findAPI', {email : localStorage.getItem('email')}).then(async (e) => {
      //console.log(e.data[0])
      await setData(e.data)
     
  
    })},[])
    console.log(data) 
    const dele = async (e) => {
        
        const name = e.target.name
        const chech = confirm(name+ 'API will be deleted')
        if(chech==true)
        {
            console.log(name)
            console.log('hi')
        await axios.post('http://mern-ramani.heroku.com/delAPI', {name : name}).then((e) => {console.log(e)
    //   window.location.reload(false)
    })
      }
    }
  
  // axios.post('http://localhost:3001/findAPI', {}).then(async (e) => {
  //   setData(e.data)
  //   console.log(data)
  //  })
  
    return (
      <div className="grid">
         {data.map(eachData => <Cards  key={eachData.name } img={card4} title={eachData.name} para={eachData.description} dele={dele} url={eachData.endpoint} /> ) }
      </div>
    )
  }

  export default UserCards