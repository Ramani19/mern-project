import React from 'react'
import DashIn from '../dashLoggedIn/DashIn'

import './addAPI.css'

const AddAPI = () => {
  return (
    
   




  <div className='newClass'>
    <DashIn/>
    <div className='formOut'>
    <div className='formIn'>
     <h3>add new API</h3>
      <form>
       <input type="text" placeholder='API name'></input><br/>
       <input type="text" placeholder='API end point'></input><br/>
       <input type="text" placeholder='Description of API'></input><br/>
        <input type="submit" value="Add API"></input>
      </form>
    </div>
    </div>
  </div>










  )
}


export default AddAPI
