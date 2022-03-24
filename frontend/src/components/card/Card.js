import React from "react";
import card1 from "../../images/card1.svg"

import card2 from "./card2.jpeg";
import card3 from "./card3.jpeg";
import card4 from "./card4.jpeg";
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = () => {

  

  return (
   
    <div className="cards">
       <a href='../../pages/BGremove/BGremove'>
      <Cards 
          
        img={card1}
        title={"Background Image"}
        para={" The discription of the APIs in quick brief and we will truncate it here."} />
        </a>
        <a href="www.youtube.com">
    <Cards
        img={card2}
        title={"API Name"}
        para={" The discription of the APIs in quick brief and we will truncate it here."} />
        
        </a>
        <a href="#">
        <Cards
        img={card3}
        title={"API Name"}
        para={" The discription of the APIs in quick brief and we will truncate it here."} />
        </a>
        <a href="#">
        <Cards
        img={card4}
        title={"API Name"}
        para={" The discription of the APIs in quick brief and we will truncate it here."} />
          </a>
    </div>
  );

 
};

import PropTypes from "prop-types";

import "./card.css";

const Cards = (props) => {
  return (
    <div>
      <div className="card" >
        
        <img src={props.img} />
        <h3>{props.title}</h3>
        <p> {props.para}</p>
        
      </div>
    </div>
  );
};
Cards.propTypes = {
  title: PropTypes.string,
  para: PropTypes.string,
  img: PropTypes.string,
  link:PropTypes.string
};

export default Card;
