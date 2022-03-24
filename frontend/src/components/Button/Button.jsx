import React from 'react'
import PropTypes from "prop-types";
//import ReactDom from 'react-dom'
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Button.css"

const ButtonHere = (props) => {
  const navg9 = useNavigate()
  return (
   
    <div>
      <button className="buttons" onClick={()=>{navg9(props.path)}}
      >{props.name}</button> 
    </div>
  )
}
  ButtonHere.propTypes = {
    name: PropTypes.string,
    path: PropTypes.string
   
  };
// const rootElement = document.getElementById("root");
// ReactDom.render(<Button/>,rootElement)

export  default ButtonHere
