
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';


import Home from './Home'
import Nav from './Nav'
import Register from './Register';
import Admin from './Admin';
import Adminlogin from './Adminlogin';

function App() {
return (
    <>
    <div className="App">
 <BrowserRouter>
<Nav />

<Routes>
  
<Route path='/' Component={Home}></Route>
  
  <Route path='/Register' Component={Register}></Route>
  <Route path='/Admin' Component={Admin}></Route>
  <Route path='/Adminlogin' Component={Adminlogin}></Route>
  
</Routes>
</BrowserRouter>

<div className='footer'>

<footer>
        <div>
            <h7>Location</h7><br></br><br></br>
            <p>Gurunanak Nagar Road </p>
            <p>behind cafe coffeeday </p>
            <p>Plot No-3</p>
            <p>Vijayawada-8 </p>
        </div>

        <div>
            <h8>Quick Links</h8>
            <ul>
                <li><a href="http://localhost:3000/Register">Register</a></li>
                
                
            </ul>
        </div>

        <div>
            <h8>Social Media</h8><br></br>
           
    <a href="https://www.instagram.com/vimudharao/"><FaInstagram /></a>{"\t"} {"\t"} {"\t"} {"\t"} 
    <a href="https://facebook.com/61553614865820"><FaFacebook /></a>{"\t"} {"\t"} {"\t"} {"\t"} 
    <a href="https://www.youtube.com/@vimudhainfraprojects"><FaYoutube /></a>
    

    
   
   
   

        </div>


    </footer>
<div className='copy'>Copyright © 2024 VamsiVishnu | All rights reserved</div>



</div>




   
    </div>  
    </>
  );
}

export default App;



