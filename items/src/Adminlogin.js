

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adminlogin.css';



function Adminlogin() {
  const [uname, setUname] = useState('');
  const [psw, setPsw] = useState('');
  const navigate = useNavigate();

  const admin = (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (uname === 'Vimudha' && psw === 'Vimudha@2001') {
      navigate('/Admin'); // Redirect to /Admin route
    } else {
      alert('Enter Correct Details');
    }
  };

  return (
  
    <div className='hoe'>
    <div className='admin'>
      <div className='head'>
      <h2>Admin Login</h2>
      </div>
     
      <form onSubmit={admin}>
        
        <input type="text" placeholder="Enter Username" value={uname} onChange={(e) => setUname(e.target.value)} />
<br></br><br></br>
        
        <input type="password" placeholder="Enter Password" value={psw} onChange={(e) => setPsw(e.target.value)} />
        <br></br><br></br>
       <input className='sub' type="submit" value="Submit" />
      </form>
    </div>
    </div>
    
  );
}

export default Adminlogin;
