
import React from 'react';
import homee from './home.jpeg'
import './Home.css';

function Home() {
  return (
    <div className='main'>
       <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <a href="https://api.whatsapp.com/send?phone= +919381658776 &text=Welcome to Vimudha Infra Projects ..!" className="float" target="_blank">
          <i className="fa fa-whatsapp my-float" />
        </a>
      </div>


<div className="container-1">
        <h6 className="scroll">
        
            Register fastly have a chance to win a gift of &nbsp;
            <span>1Lakh</span>
        
        </h6>
        <div className="cont-1">
          <div className="left">
          <p className="cont-p">
            <span className="con" >Vision	: </span>	Our Vision Is to Create Better Tomorrow<br />

<span className="con" >Mission	: </span>	Uncompromising Commitment to Create a <br />
              		Out Standing Lives Environment<br/>

<span className="con" >Our Projects:</span> 	Farm Lands, Open Plots, Residential Plots,<br />  	 	
		Apartments, Independent Houses, Villas</p>
    </div>
        <div className="right">
        <h2 className='right-cont' style={{color: "red"}}>Vimudha Infra Projects <br/> <span style={{fontSize:50}} >2</span>nd Anniversary Amazing Offers</h2></div>
       </div>
        <div className="sub-con">
        <div className="left-container">
            <div className="content">
                <h4>Membership benfits</h4>
                <ul>
                    <li>1.&nbsp; Ugadi lucky draw coupons.</li>
                    <li>2.&nbsp; A Discount gift  coupon worth Rs.25,000/-</li>
                    <li>3.&nbsp; Benefit of purchasing a plot with &nbsp; <span  style={{color: "red"}} >EMI Facility with <br/>0% Interest</span></li>
                    <li>4.&nbsp; Having a chance to win many more Exiting <br/>  <span style={{color: "red"}}>3 prize's, 126 Gifts  and Coupons</span> </li>
                </ul>
            </div>
        </div>
        <div className="right-container">
          <h4 className="rig-p"><span style={{color:"#fff"}}>Just Register With</span></h4>
          <img className="right-img" src={homee} alt="" />
        </div>
      </div>
      </div>


      
    
    </div>
  );
}

export default Home;
