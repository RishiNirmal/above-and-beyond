import React, { Component } from 'react'
import OtherServicesBox from '../OtherServicesBox'
import ProvidingFirstService from '../ProvidingFirstService'
import {  Link } from "react-router-dom";

function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 0);
  // console.log('page to reload')
}

export default class Perishables extends Component {
    render() {
        return (
            <>
<div id="services-pages">
  <div className="page-title-style01 page-title-negative-top pt-bkg04">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Services - Perishables</h1>
          <div className="breadcrumb-container">
            <ul className="breadcrumb clearfix">
              <li>You are here:</li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/`}  onClick={refreshPage}>Home</Link>
              </li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/perishables`}>Services</Link>
                
              </li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/perishables`}>Perishables</Link>
              </li>
            </ul>{/* .breadcrumb end */}
          </div>{/* .breadcrumb-container end */}
        </div>{/* .col-md-12 end */}
      </div>{/* .row end */}
    </div>{/* .container end */}
  </div>{/* .page-title-style01.page-title-negative-top end */}
  <div className="page-content">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="custom-heading">
            <h2>INTELLIGENT Perishables SOLUTIONS</h2>
          </div>{/* .custom-heading end */}
          <p>
          Shipping perishable can be a challenging task, if you are not partnered up with the right air cargo service provider. Perishable require fast and safe delivery for maintaining freshness and quality. This time sensitive can lose its value upto its full value by arriving late or damaged. 

          </p>
          <p>We provide thorough details of booking, special handling, and any sort of conditions that are needed to the shipper beforehand. We make sure everything is arranged, before your product hits the warehouse to ensure smooth journey for this time sensitive cargo both on departure and arrival.
</p>
          <p>A&B only works with fully qualified Perishable handlers who receive formal training and have access to best procedural practices.
</p>
         
                                
        </div>
     
      </div>{/* .row end */}
    </div>{/* .container end */}
  </div>{/* .page-content end */}  
 <ProvidingFirstService/>
 
 <OtherServicesBox/>
</div>

            </>
        )
    }
}
