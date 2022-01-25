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
export default class AirCargoSalesServices extends Component {
    render() {
        return (
            <>
<div id="services-pages">
  <div className="page-title-style01 page-title-negative-top pt-bkg01">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Services - Specialized Air Cargo</h1>
          <div className="breadcrumb-container">
            <ul className="breadcrumb clearfix">
              <li>You are here:</li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/`}  onClick={refreshPage}>Home</Link>
              </li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/specialized-air-cargo`}>Services</Link>
              </li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/specialized-air-cargo`}>Specialized Air Cargo</Link>
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
            <h2>Specialized Air Cargo</h2>
          </div>{/* .custom-heading end */}
          <p>
          We provide the service specialized air cargo for the shipment of your fragile packages. We make sure these packages are getting special handling. These services are generally provided for high value or fragile items and also have dismal aerials and dangerous goods. This is the fastest shipping method you will ever find having inaccurate arrival and departure time.
</p>
          <p> The best part about a specialized air cargo is that these are highly secure and there is absolutely no threat of theft and damage. Our specialized air cargo packages also ensure no limitations on size and weight which means you can send any package anytime you want.

          </p>
         
                          
        </div>
        {/* <div className="col-md-6 animated triggerAnimation" data-animate="zoomIn">
          <img src="https://dev.01s.in/above-and-beyond/assets/img/pics/warehouse.jpg" alt="" />
        </div> */}
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
