/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import delet from './trash.png'
import edit from './edit.png'
import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
const Cards = ({img, title,para,dele}) => {
    const navgt = useNavigate()
    
  
    const url = './Page?name=hgkl'
    
    return (
      <>{dele ?
       <div className="cards user-cards">
            <a href={url}>
          
        <div className="card ">
            <img src={img} />
            <h3>{title}</h3>
            <p> {para}</p>
            <div className="edit-delete">
              <form>
              <button onClick={()=> {
                const url = '../addAPI/'+title
                navgt(url)
              }}>
         <img className="small-img" src={edit}/>
         </button>
         </form>
         <form>
         <button  onClick={
            dele
             }>
         <img className="small-img" name={title} src={delet}/> 
         </button>
         </form>
         </div>
            </div>
            </a>
           
            
          
         </div>
        
         :
         <div className="card"><img src={img} />
        <h3>{title}</h3>
        <p> {para}</p></div>
}
      </>
    );
  };
  
  
  export default Cards;