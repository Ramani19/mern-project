/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import card1 from "../../images/card1.svg"
import axios from "axios";
import card2 from "./card2.jpeg";
import card3 from "./card3.jpeg";
import card4 from "./card4.jpeg";
import Cards from "./card";
import {useNavigate } from 'react-router-dom'

//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import "./card.css";

const DefaultCards = () => {
  
  
 
  return (
   
    <div className="cards default-cards">
      <a href="../../pages/BGremove/BGremove" >
      <Cards

        img={card1}
        title={"Background Remover"}
        para={"Remove the background of your image"} />
    </a>
    <a href="https://www.fontspace.com">
    <Cards
        img={card2}
        title={"Font Space"}
        para={"Find the font of your choice."} />
        </a>
        <a href="https://chrome.google.com/webstore/detail/https-everywhere/gcbommkclmclpchllfjekcdonpmejbdp">
        <Cards
        img={card3}
        title={"HTTPS"}
        para={"Chrome extension for the HTTPS service "} />
        </a>
        <a href="https://chrome.google.com/webstore/detail/stayfocusd/laankejkbhbdhmipfmgcngdelahlfoji?hl=en">
        <Cards
        img={card4}
        title={"Stay Focused"}
        para={"Stay calm stay focused"} />
         </a> 
           {/* eslint-disable-next-line react/jsx-key */}
         
    </div>
  );

 
};
export default DefaultCards




