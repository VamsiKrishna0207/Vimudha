

import React from 'react'
import { useState,useEffect } from 'react'
import './Register.css';
import axios from 'axios'

function Register() {

    const [pdata,setpdata]=useState([]);
    const [name,setname]=useState('');
    const [surname,setsurname]=useState('');
    const [date,setdate]=useState('');
    const [gender,setgender]=useState('');
    const [nominee,setnominee]=useState('');
    const [occupation,setoccupation]=useState('');
    const [age,setage]=useState('');
    const [mobile,setmobile]=useState('');
    const [address,setaddress]=useState('');
    const [sqfeet,setsqfeet]=useState('');
    
    

    useEffect(()=>{
        alert("Enter Data carefully");
     },[0])


const player =e=>{
    alert("Your date is submitted");
    e.preventDefault();
    axios.post('http://localhost:8090/register',{Name:name,Surname:surname,Date:date,Gender:gender,Nominee:nominee,Occupation:occupation,Age:age,Mobile:mobile,Address:address,Sq_feet:sqfeet}).then(
      arr=>setpdata(arr.data)
    )
   
  }

return (
    <div>



<div className="reg-form">

      <form className="wrapper" onSubmit={player}>
      <h2>Register Form</h2>
        <div className="pass-field">
          <input
            type="text"
            name="Name"
            autoComplete="off"
            placeholder="Enter Your Name"
            value={name} onChange={(e)=>setname(e.target.value)}
          />
        </div>
        <div className="pass-field">
          <input
            type="text"
            name="Surname"
            autoComplete="off"
            placeholder="Surname"
            value={surname} onChange={(e)=>setsurname(e.target.value)}
          />
        
        </div>
        <div className="pass-field">
          <input
            type="date"
            name="date"
            autoComplete="off"
            placeholder="Date of registration"
            value={date} onChange={(e)=>setdate(e.target.value)}
          />
        </div>
        <div className="pass-field">
          <input
            type="text"
            name="Gender"
            autoComplete="off"
            placeholder="Gender"
            value={gender} onChange={(e)=>setgender(e.target.value)}
          />
        </div>
        <div className="pass-field">
          <input
            type="text"
            name="Nominee"
            autoComplete="off"
            placeholder="Nominee"
            value={nominee} onChange={(e)=>setnominee(e.target.value)}
            
          />
        </div>
        <div className="pass-field">
          <input
            type="text"
            name="Occupation"
            autoComplete="off"
            placeholder="Occupation"
            value={occupation} onChange={(e)=>setoccupation(e.target.value)}
          />
        </div>
        <div className="pass-field">
          <input
            type="Number"
            name="Age"
            autoComplete="off"
            placeholder="Age"
            value={age} onChange={(e)=>setage(e.target.value)}
          />
        </div>
        <div className="pass-field">
          <input
            type="Number"
            name="Mobile number"
            autoComplete="off"
            placeholder="Mobile number"
            value={mobile} onChange={(e)=>setmobile(e.target.value)}
          />
        </div>
        <div className="pass-field">
          <input
            type="text"
            name="Address"
            autoComplete="off"
            placeholder="Address"
            value={address} onChange={(e)=>setaddress(e.target.value)}
          />
        </div>
        <div className="pass-field">
          <input
            type="Number"
            name="Area"
            autoComplete="off"
            placeholder="Sq. feet required"
            value={sqfeet} onChange={(e)=>setsqfeet(e.target.value)}
          />
        </div>
        <input className='butt' type='submit' value="submit"/>
        
      </form>
    </div>

</div>
  )

}

export default Register