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

export default class TruckingAndLogistics extends Component {
    render() {
        return (
            <>
<div id="services-pages">
  <div className="page-title-style01 page-title-negative-top pt-bkg06">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Services - Trucking & Logistics</h1>
          <div className="breadcrumb-container">
            <ul className="breadcrumb clearfix">
              <li>You are here:</li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/`} onClick={refreshPage}>Home</Link>
              </li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/trucking-and-logistics`}>Services</Link>
              </li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/trucking-and-logistics`}>Trucking & Logistics</Link>
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
            <h2>INTELLIGENT  Trucking & Logistics</h2>
          </div>{/* .custom-heading end */}
          <p className='truking-p'>
          Dorji Lham has worked with leading trucking and logistics provider for many years, having this inside knowledge of what works and what doesn’t work gives our the custome the benefit of only the most realiable and cost effective service in this area.

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
