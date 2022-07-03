
import React from 'react';
import MarketOut from './pages/marketLogOut/MarketLogOut'
import MarketIn from './pages/marketIn/MarketIn';
import DashSignup from './pages/dashSignup/DashSignup';
// eslint-disable-next-line no-unused-vars

import Dashboard from './pages/dashboard/Dashboard';

import AddAPI from './pages/addAPI/AddAPI';

import Myapis from "./pages/myapis/myapis"
import BGremove from './pages/BGremove/BGremove'
import Page from './components/card/Page';



import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
 import logo from './logo.svg';
import './App.css'

function App (){

  

  return (
    
     

      <div>
      
      <Router>
      <div className="App">
      <span>  
<nav className='Cuvette-logo'>

< img src={logo} className="App-logo" alt="logo" />



</nav>
</span>

</div>
      
        <Routes>
       
      
        
        
        <Route path="/" element={<MarketOut/>}/>
        <Route path='Page/:id' element={<Page/>}/>
        <Route path='dashSignup' element={<DashSignup/>}/>
        <Route path="dashboard/" element={<Dashboard/>}/>
        <Route path="marketIn" element={<MarketIn/>}/>
           
        
        
            {/* <Route path="components/Button/Button" element={<Button/>}/> */}

            <Route path="AddAPI" element={<AddAPI/>}/>
            <Route path="AddAPI/:name" element={<AddAPI/>}/>
            <Route path="BGremove" element={<BGremove/>}/>
           {/* <Route path='pages/DashSign/DashSign' element={<DashSign/>}/> */}
           <Route path='myapis' element={<Myapis/>}/>
       </Routes>
       
      </Router>
      </div>
  );
  
}

export default App;
