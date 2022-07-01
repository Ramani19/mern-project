/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import card1 from "../../images/card1.svg"
import axios from "axios";
import card2 from "./card2.jpeg";
import card3 from "./card3.jpeg";
import card4 from "./card4.jpeg";
import Page from "./Page";
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = () => {
  const [data, setData] = useState([])
  useEffect(async () => { await axios.post('http://localhost:3001/findAPI', {}).then(async (e) => {
    //console.log(e.data[0])
    await setData(e.data)
   

  })},[])
  console.log(data) 

// axios.post('http://localhost:3001/findAPI', {}).then(async (e) => {
//   setData(e.data)
//   console.log(data)
//  })
const dele = async (e) => {
  const name = e.target.name
  await axios.post('http://localhost:3001/delAPI', {name : name}).then((e) => {console.log(e)
window.location.reload(false)})
}
  
 
  return (
   
    <div className="cards">
      
      <Cards 
          
        img={card1}
        title={"Background Image"}
        para={" The discription of the APIs in quick brief and we will truncate it here."} />
        
    <Cards
        img={card2}
        title={"API Name"}
        para={" The discription of the APIs in quick brief and we will truncate it here."} />
        
        
        <Cards
        img={card3}
        title={"API Name"}
        para={" The discription of the APIs in quick brief and we will truncate it here."} />
        
       
        <Cards
        img={card4}
        title={"API Name"}
        para={" The discription of the APIs in quick brief and we will truncate it here."} />
          
           {/* eslint-disable-next-line react/jsx-key */}
          {data.map(eachData => <Cards img={card4} title={eachData.name} para={eachData.description} dele={dele} url={eachData.endpoint} />) }
    </div>
  );

 
};

import PropTypes from "prop-types";

import "./card.css";

const Cards = (props) => {
  
  console.log(props.title)

  const url = './Page/'+ props.title
  console.log(url)
  return (
    <div>
      <a href={url}>
      <div className="card" >
       
        <img src={props.img} />
        <h3>{props.title}</h3>
        <p> {props.para}</p>
        <button onClick={props.dele} name={props.title}>del</button>
        
      </div>
      </a>
    </div>
  );
};
Cards.propTypes = {
  title: PropTypes.string,
  para: PropTypes.string,
  img: PropTypes.string,
  link:PropTypes.string,
  dele : PropTypes.func,
  url:PropTypes.string
};

export default Card;
