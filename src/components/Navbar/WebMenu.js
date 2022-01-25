import React, { Component } from 'react'
import {  Link } from "react-router-dom";
import GoToTop from '../GotoTop';

function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 0);
  // console.log('page to reload')
}

export default class WebMenu extends Component {
 
    render() {
     
        return (
            <>
         
             <ul className="nav navbar-nav">
                  <li className="current-menu-item ">
                    <Link to={`${process.env.PUBLIC_URL}/`}   onClick={refreshPage}>Home</Link>
                  </li>
                  <li >
                  <Link to={`${process.env.PUBLIC_URL}/about-us`}>About Us</Link>
                  </li>
                  <li className="dropdown">
                    <a href data-toggle="dropdown" className="dropdown-toggle">Services</a>
                    <ul className="dropdown-menu">
                      <li><Link to={`${process.env.PUBLIC_URL}/specialized-air-cargo`}>Specialized Air Cargo</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/airline-cargo-sales-and-facilitation`}>Airline Cargo Sales and Facilitation</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/warehousing`}>Warehousing</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/perishables`}>Perishables</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/cargo-handling-and-charters`}>Cargo Handling and Charters</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/trucking-and-logistics`}>Trucking & Logistics</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/truck-provisioning-and-maintenance`}>Provisioning & Maintenance</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/fleet-parking-and-yard-management`}>Fleet Parking & Yard Management</Link></li>
                    </ul>{/* .dropdown-menu end */}
                  </li>{/* .dropdown end */}
                  <li >
                  {/* <Link to="/blog">Blog</Link> */}
                  </li>
              
                  <li>
                  <Link  to={`${process.env.PUBLIC_URL}/contact-us`}>Contact Us</Link>
                  </li>{/* .dropdown end */}
                  <li>&nbsp;&nbsp; &nbsp;&nbsp;</li>
                </ul>{/* .nav.navbar-nav end */}   
               <GoToTop/>
            </>
        )
    }
}
