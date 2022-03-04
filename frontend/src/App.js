import React from 'react';
import Dashboard from './pages/dashboard/Dashboard';
import DashIn from './pages/dashLoggedIn/DashIn';
import AddAPI from './pages/addAPI/AddAPI';
import MarketOut from './pages/marketLogOut/MarketLogOut'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
 import logo from './logo.svg';
import './app.css'

function App() {
  return (
    
        

      
      
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
        <Route path="pages/dashboard/Dashboard/" element={<Dashboard/>}/>
            <Route path="pages/dashLoggedIn/DashIn" element={<DashIn/>}/>
            <Route path="pages/addAPI/AddAPI" element={<AddAPI/>}/>
           
       </Routes>
       
      </Router>
     
  );
  
}

export default App;
