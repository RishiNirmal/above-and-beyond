import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import GoToTop from '../GotoTop';


function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 0);
  // console.log('page to reload')
}
export default class QuikLinks extends Component {
    render() {
        return (
            <>
              <ul className="col-md-3 col-sm-6 footer-widget-container">
          {/* .widget-pages start */}
          <li className="widget widget_pages">
            <div className="title">
              <h3>quick links</h3>
            </div>
            <ul>
            <li><Link to={`${process.env.PUBLIC_URL}/`} onClick={refreshPage}>Home</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/about-us`}>About Us</Link></li>
            {/* <li><Link to={`${process.env.PUBLIC_URL}/specialized-air-cargo`}>Services</Link></li> */}
            <li><Link  to={`${process.env.PUBLIC_URL}/contact-us`}>Contact Us</Link></li>
            </ul>
          </li>{/* .widget-pages end */}
        </ul>{/* .col-md-3.footer-widget-container end */}  
        <GoToTop/> 
            </>
        )
    }
}
