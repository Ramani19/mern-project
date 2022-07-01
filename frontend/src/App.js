import React from 'react';
import MarketOut from './pages/marketLogOut/MarketLogOut'
import MarketIn from './pages/marketIn/MarketIn';
import DashSignup from './pages/dashSignup/DashSignup';
import DashSign from './pages/DashSign/DashSign';
import Dashboard from './pages/dashboard/Dashboard';
import DashIn from './pages/dashLoggedIn/DashIn';
import AddAPI from './pages/addAPI/AddAPI';
import Button from './components/Button/Button';
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
        <Route path='pages/dashSignup/DashSignup' element={<DashSignup/>}/>
        <Route path="pages/dashboard/Dashboard/" element={<Dashboard/>}/>
        <Route path="pages/marketIn/MarketIN/" element={<MarketIn/>}/>
           
        <Route path="pages/dashLoggedIn/DashIn" element={<DashIn/>}/>
        
            <Route path="components/Button/Button" element={<Button/>}/>

            <Route path="pages/addAPI/AddAPI" element={<AddAPI/>}/>
            <Route path="pages/BGremove/BGremove" element={<BGremove/>}/>
           <Route path='pages/DashSign/DashSign' element={<DashSign/>}/>
           <Route path='myapis' element={<Myapis/>}/>
       </Routes>
       
      </Router>
      </div>
  );
  
}

export default App;
