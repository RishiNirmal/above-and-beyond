import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 0);
  // console.log('page to reload')
}
export default class ResponsiveMenu extends Component {
    render() {
        return (
            <>
             <div id="dl-menu" className="dl-menuwrapper">
                  <button className="dl-trigger">Open Menu</button>
                  <ul className="dl-menu">
                    <li>
                    <Link to={`${process.env.PUBLIC_URL}/`} className='active' onClick={refreshPage}>Home</Link>
                    </li>
                    <li>
                    <Link to={`${process.env.PUBLIC_URL}/about-us`}>About Us</Link>
                     </li>
                    <li>
                     <a href="/">Services</a>
                      <ul className="dl-submenu">
                      <li><Link to={`${process.env.PUBLIC_URL}/specialized-air-cargo`}>Specialized Air Cargo</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/airline-cargo-sales-and-facilitation`}>Airline Cargo Sales and Facilitation</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/warehousing`}>Warehousing</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/perishables`}>Perishables</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/cargo-handling-and-charters`}>Cargo Handling and Charters</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/trucking-and-logistics`}>Trucking & Logistics</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/truck-provisioning-and-maintenance`}>Provisioning & Maintenance</Link></li>
                      <li><Link to={`${process.env.PUBLIC_URL}/fleet-parking-and-yard-management`}>Fleet Parking & Yard Management</Link></li>
                      </ul>
                    </li>
                    {/* <li>
                    <Link to="/blog">Blog</Link>
                    </li> */}
                    
                    <li> <Link  to={`${process.env.PUBLIC_URL}/contact-us`}>Contact Us</Link></li>
                   
                  </ul>
                </div>
            </>
        )
    }
}
