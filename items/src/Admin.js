import React from 'react'
import { useState,useEffect } from 'react'
//import { Link } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

function Admin() {

    const [pdata,setpdata]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8090/clientdata').then(
         arr=>setpdata(arr.data)
        )
     },[])


  return (
    <div>
<div>
      <h2>Client Data</h2>
     

</div>

<div style={{color:"#fff"}} class="row border border-primary bg-danger mt-5 pl-5">
  <div class="col-sm-1 h3">Name</div>
  <div class="col-sm-1 h3">Surname</div>
  <div class="col-sm-1 h3">Date</div>
  <div class="col-sm-1 h3">Gender</div>
  <div class="col-sm-1 h3 pr-5">Nominee</div>
  <div class="col-sm-2 h3 pr-3">Occupation</div>
  <div class="col-sm-1 h3  pl-5">Age</div>
  <div class="col-sm-1 h3 pr-3 pl-4">Mobile</div>
  <div class="col-sm-1 h3 pr-3 pl-4">Address</div>
  <div class="col-sm-1 h3 pr-3 pl-4">Sq_feet</div>
</div> 


  {
    pdata.map(data=>
    <div key={data._id}>

<br></br>
<div className='data'>
<div class="row border border-success mt-3 pl-5 mr-4 ">
  <div class="col-sm-1 ">{data.Name}</div> &nbsp;
  <div class="col-sm-1">{data.Surname}</div> &nbsp;
  <div class="col-sm-1">{data.Date}</div> &nbsp;
  <div class="col-sm-1">{data.Gender}</div> &nbsp;
  <div class="col-sm-1">{data.Nominee}</div> &nbsp; 
  <div class="col-sm-2 pr-3 pl-4">{data.Occupation}</div> &nbsp;
  <div class="col-sm-1 pr-3 pl-5">{data.Age}</div> &nbsp;
  <div class="col-sm-1 pr-3 pl-4">{data.Mobile}</div> &nbsp;
  <div class="col-sm-1 pr-3 pl-4">{data.Address}</div> &nbsp;
  <div class="col-sm-1 pr-3 pl-4">{data.Sq_feet}</div>

</div>
</div>

  </div>
)
}
  
  </div>
  )
}

export default Admin