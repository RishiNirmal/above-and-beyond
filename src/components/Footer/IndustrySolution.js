import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export default class IndustrySolution extends Component {
    render() {
        return (
            <>
               <ul className="col-md-3 col-sm-6 footer-widget-container">
          {/* .widget-pages start */}
          <li className="widget widget_pages">
            <div className="title">
              <h3>Service Offerings </h3>
            </div>
            <ul>
            <li><Link to={`${process.env.PUBLIC_URL}/specialized-air-cargo`}>Specialized Air Cargo</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/airline-cargo-sales-and-facilitation`}>Airline Cargo Sales and Facilitation</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/warehousing`}>Warehousing </Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/perishables`}>Perishables</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/cargo-handling-and-charters`}>Cargo Handling and Charters</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/trucking-and-logistics`}>Trucking & Logistics</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/truck-provisioning-and-maintenance`}>Truck Provisioning & Maintenance</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/fleet-parking-and-yard-management`}>Fleet Parking & Yard Management</Link></li>
            </ul>
          </li>{/* .widget-pages end */}
        </ul>{/* .col-md-3.footer-widget-container end */}  
            </>
        )
    }
}
