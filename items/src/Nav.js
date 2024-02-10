// import React from 'react'
 

// import llo from './vis.png';
// import './Nav.css';
// function Nav() {
//   return (
//     <>


// <div className="navbar">
//       <div className="navContainer">
//         <span className="logo">
//           <img src={llo} alt="" />
//         </span>
//         <h1>Vimudha Infra Projects<br></br>  <h4 className='dream'>My Dream Is To Help you Build Yours...</h4></h1>
        
//         <div className="navItems">
//         <button className="navButton"><a class="nav-link" aria-current="page" href="/">Home</a></button>
//           <button className="navButton"> <a class="nav-link" href="/Register">Register</a></button>
//           <button className="navButton"><a class="nav-link" href="/Adminlogin">Adminlogin</a></button>
//         </div>
//       </div>
//     </div>














//     </>
//   )
// }

// export default Nav




// import React from 'react';
// import './Nav.css'; // Assuming you have a separate CSS file for styling
// import llo from './vis.png';
// function Nav() {
//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <span className="logo">
//           {/* Replace with your actual logo image */}
//           <img src={llo} alt="Company Logo" />
//         </span>
//         <div className="navItems">
//           <button className="navButton">
//             <a className="nav-link" href="/">
//               Home
//             </a>
//           </button>
//           <button className="navButton">
//             <a className="nav-link" href="/Register">
//               Register
//             </a>
//           </button>
//           <button className="navButton">
//             <a className="nav-link" href="/Adminlogin">
//               Admin Login
//             </a>
//           </button>
//         </div>
//         <h1>
//           Vimudha Infra Projects
//           <br />
//           <small className="dream">My Dream Is To Help You Build Yours...</small>
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Nav;






// import React from 'react';
// import './Nav.css'; // Assuming you have a separate CSS file for styling
// import llo from './vis.png';
// function Nav() {
//   return (
//     <div className="navbar">
//       <div className="navContainer">
//         <span className="logo">
//           {/* Replace with your actual logo image */}
//           <img src={llo} alt="Company Logo" />
//         </span>
//         <h1>
//           Vimudha Infra Projects
//           <br />
//           <small className="dream">My Dream Is To Help You Build Yours...</small>
//         </h1>
//         <div className="navItems">
//           <button className="navButton">
//             <a className="nav-link" href="/">
//               Home
//             </a>
//           </button>
//           <button className="navButton">
//             <a className="nav-link" href="/Register">
//               Register
//             </a>
//           </button>
//           <button className="navButton">
//             <a className="nav-link" href="/Adminlogin">
//               Admin Login
//             </a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Nav;




import React from 'react';
import './Nav.css'; // Assuming you have a separate CSS file for styling
import llo from './vis.png';
function Nav() {
  return (
    <div className="navbar">
      <div className="navContainer">
      <div className="logo">
          {/* Replace with your actual logo image */}
          <img src={llo} alt="Company Logo" />
        </div>
        <div className='head-cont'>
        <h1>
          Vimudha Infra Projects</h1>

          <p className="dream">My Dream Is To Help You Build Yours...</p>
        
          </div>
        <div className="navItems">
          <button className="navButton">
            <a className="nav-link" href="/">
              Home
            </a>
          </button>
          <button className="navButton">
            <a className="nav-link" href="/Register">
              Register
            </a>
          </button>
          <button className="navButton">
            <a className="nav-link" href="/Adminlogin">
              Admin Login
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
